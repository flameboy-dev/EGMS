import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, AlertCircle, Loader2, Send, X } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    mobileNumber: '',
    email: '',
    interestedClass: '',
    message: '',
  });

  // OTP Verification State
  const [otpState, setOtpState] = useState({
    sent: false,
    code: '',
    sending: false,
    verifying: false,
    verified: false,
    verificationToken: '',
    error: '',
    successMsg: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'parentName') {
      processedValue = value.replace(/[^a-zA-Z\s.-]/g, '');
    }

    if (name === 'mobileNumber') {
      processedValue = value.replace(/\D/g, '');
    }

    if (name === 'email' && otpState.verified) {
      setOtpState({
        sent: false,
        code: '',
        sending: false,
        verifying: false,
        verified: false,
        verificationToken: '',
        error: '',
        successMsg: '',
      });
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setFormError('');
  };

  // Send OTP
  const handleSendOtp = async () => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setOtpState((prev) => ({ ...prev, error: 'Please enter a valid email address first.' }));
      return;
    }

    setOtpState((prev) => ({ ...prev, sending: true, error: '', successMsg: '' }));

    try {
      const response = await fetch(`${API_BASE_URL}/otp/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim() }),
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Failed to send OTP code.');
      }

      setOtpState((prev) => ({
        ...prev,
        sending: false,
        sent: true,
        successMsg: `A 6-digit code has been sent to ${formData.email}.`,
      }));
    } catch (err) {
      setOtpState((prev) => ({
        ...prev,
        sending: false,
        error: err.message || 'Server error sending verification code.',
      }));
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (!otpState.code || otpState.code.trim().length !== 6) {
      setOtpState((prev) => ({ ...prev, error: 'Please enter the 6-digit code.' }));
      return;
    }

    setOtpState((prev) => ({ ...prev, verifying: true, error: '', successMsg: '' }));

    try {
      const response = await fetch(`${API_BASE_URL}/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim(), otp: otpState.code.trim() }),
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Invalid verification code.');
      }

      setOtpState((prev) => ({
        ...prev,
        verifying: false,
        verified: true,
        verificationToken: resData.verificationToken,
        successMsg: 'Email verified successfully! ✅',
      }));
    } catch (err) {
      setOtpState((prev) => ({
        ...prev,
        verifying: false,
        error: err.message || 'Verification failed.',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!/^[a-zA-Z\s.-]{2,}$/.test(formData.parentName.trim())) {
      setFormError("Parent's Name must contain at least 2 letters (no numbers or special characters).");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      setFormError('Mobile Number must be a valid 10-digit number starting with 6-9.');
      return;
    }

    if (!otpState.verified || !otpState.verificationToken) {
      setFormError('Please verify your email address with the 6-digit OTP code before submitting.');
      return;
    }

    if (!formData.interestedClass) {
      setFormError('Please select an interested class.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 3) {
      setFormError('Please enter a message (at least 3 characters).');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          verificationToken: otpState.verificationToken,
        }),
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Failed to send inquiry.');
      }

      setSubmitted(true);
      setSubmitting(false);
      setFormData({
        parentName: '',
        mobileNumber: '',
        email: '',
        interestedClass: '',
        message: '',
      });
      setOtpState({
        sent: false,
        code: '',
        sending: false,
        verifying: false,
        verified: false,
        verificationToken: '',
        error: '',
        successMsg: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitting(false);
      setFormError(err.message || 'An error occurred while sending your inquiry.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full flex-col space-y-5">
      {submitted && (
        <div className="flex items-center space-x-2 rounded-2xl bg-[#B9FF66] p-4 text-[#191A23] font-poppins text-sm md:text-base font-medium shadow-sm border border-[#191A23]">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E3F20]" />
          <span>Thank you! Your admission inquiry has been received. We will contact you soon.</span>
        </div>
      )}

      {/* Parent's Name */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="parentName" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Parent's Name*
        </label>
        <input
          id="parentName"
          type="text"
          name="parentName"
          required
          placeholder="e.g. Rajesh Sharma"
          value={formData.parentName}
          onChange={handleChange}
          className="h-[52px] w-full rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="mobileNumber" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Mobile Number (10 Digits)*
        </label>
        <input
          id="mobileNumber"
          type="tel"
          name="mobileNumber"
          required
          maxLength={10}
          placeholder="e.g. 9732644550"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="h-[52px] w-full rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base tracking-wide"
        />
      </div>

      {/* Email with OTP Verification */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="email" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000] flex items-center justify-between">
          <span>Email Address*</span>
          {otpState.verified && (
            <span className="text-xs font-bold text-[#1E3F20] flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1E3F20]" /> Verified
            </span>
          )}
        </label>
        <div className="flex gap-2">
          <input
            id="email"
            type="email"
            name="email"
            required
            disabled={otpState.verified}
            placeholder="e.g. parent@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className={`h-[52px] flex-1 rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all focus:border-[#1E3F20] md:text-base ${
              otpState.verified ? 'bg-[#EBF1E5] font-semibold text-[#1E3F20]' : ''
            }`}
          />
          {!otpState.verified ? (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={otpState.sending || !formData.email}
              className="h-[52px] shrink-0 rounded-[14px] border border-[#191A23] bg-[#1E3F20] px-4 font-fredoka text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
            >
              {otpState.sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" /> {otpState.sent ? 'Resend' : 'Verify Email'}
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setOtpState((prev) => ({ ...prev, verified: false, sent: false }))}
              className="h-[52px] px-3 rounded-[14px] border border-[#191A23] bg-[#ECF39E] text-xs font-poppins font-semibold text-[#191A23] hover:bg-[#FFD6D6]"
              title="Change Email"
            >
              Change
            </button>
          )}
        </div>

        {/* OTP Input Box */}
        {otpState.sent && !otpState.verified && (
          <div className="mt-2 rounded-xl border border-[#191A23] bg-[#ECF39E] p-3 font-poppins">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-[#1E3F20]">Enter 6-digit OTP Code:</p>
                <p className="text-[11px] text-[#1E3F20]/80">Sent to {formData.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="123456"
                  value={otpState.code}
                  onChange={(e) => setOtpState((prev) => ({ ...prev, code: e.target.value.replace(/\D/g, '') }))}
                  className="h-9 w-28 text-center rounded-lg border border-[#191A23] bg-white font-mono text-sm font-bold text-[#000000] tracking-widest outline-none"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={otpState.verifying || otpState.code.length !== 6}
                  className="h-9 rounded-lg border border-[#191A23] bg-[#1E3F20] px-3 font-fredoka text-xs font-medium text-white transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer flex items-center gap-1"
                >
                  {otpState.verifying ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : 'Confirm'}
                </button>
              </div>
            </div>
          </div>
        )}

        {otpState.error && <p className="text-xs font-medium text-[#C70039] mt-1">{otpState.error}</p>}
        {otpState.successMsg && <p className="text-xs font-medium text-[#1E3F20] mt-1">{otpState.successMsg}</p>}
      </div>

      {/* Interested Class */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="interestedClass" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Interested Class*
        </label>
        <div className="relative w-full">
          <select
            id="interestedClass"
            name="interestedClass"
            required
            value={formData.interestedClass}
            onChange={handleChange}
            className="h-[52px] w-full appearance-none rounded-[14px] border border-[#191A23] bg-white px-4 py-3 pr-10 font-poppins text-sm text-[#000000] outline-none transition-all focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base cursor-pointer"
          >
            <option value="" disabled>
              -- Select Grade / Class --
            </option>
            <option value="Nursery">Nursery</option>
            <option value="L.K.G">L.K.G.</option>
            <option value="U.K.G">U.K.G.</option>
            <option value="STD-I">STD - I</option>
            <option value="STD-II">STD - II</option>
            <option value="STD-III">STD - III</option>
            <option value="STD-IV">STD - IV</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="message" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="How can we help you..."
          value={formData.message}
          onChange={handleChange}
          className="min-h-[140px] w-full resize-none rounded-[18px] border border-[#191A23] bg-white p-4 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#1E3F20] px-6 font-fredoka text-lg font-medium text-white shadow-md transition-all duration-200 hover:bg-[#152e17] active:scale-[0.99] md:text-[20px] cursor-pointer disabled:opacity-50"
      >
        {submitting ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending Inquiry...</span>
          </div>
        ) : (
          'Request Admission Information'
        )}
      </button>

      {/* Floating Bottom-Right Toast Alert Popup */}
      {formError && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-start gap-3 w-[calc(100vw-2rem)] max-w-md rounded-2xl border-2 border-[#191A23] bg-[#FFD6D6] p-4 text-[#900C3F] font-poppins text-xs sm:text-sm font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.25)] animate-in fade-in slide-in-from-bottom-5 duration-300">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-[#900C3F]" />
          <div className="flex-1 pr-1">
            <p className="font-bold text-[#900C3F] text-xs uppercase tracking-wide">Validation Error</p>
            <p className="font-medium text-[#900C3F]/90 mt-0.5 leading-snug">{formError}</p>
          </div>
          <button
            type="button"
            onClick={() => setFormError('')}
            className="p-1 text-[#900C3F] hover:text-black rounded-lg hover:bg-black/10 transition-colors shrink-0 cursor-pointer"
            title="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
