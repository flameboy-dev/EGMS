import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, AlertCircle, Loader2, Send, GraduationCap } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

function FacilityApplicationModal({
  isOpen,
  onClose,
  facilityTitle = 'Sunday Special Program',
  programType = 'Sunday Drawing School',
}) {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    studentClass: '',
    email: '',
    contactNumber: '',
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'studentName' || name === 'guardianName') {
      processedValue = value.replace(/[^a-zA-Z\s.-]/g, '');
    }

    if (name === 'contactNumber') {
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

    if (!/^[a-zA-Z\s.-]{2,}$/.test(formData.studentName.trim())) {
      setFormError("Student's Full Name must contain at least 2 letters (no numbers or special characters).");
      return;
    }

    if (!/^[a-zA-Z\s.-]{2,}$/.test(formData.guardianName.trim())) {
      setFormError("Parent/Guardian's Name must contain at least 2 letters (no numbers or special characters).");
      return;
    }

    if (!formData.studentClass) {
      setFormError("Please select the student's class.");
      return;
    }

    if (!otpState.verified || !otpState.verificationToken) {
      setFormError('Please verify your email address with the 6-digit OTP code before submitting.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.contactNumber.trim())) {
      setFormError('Phone Number must be a valid 10-digit number starting with 6-9.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/facility-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          verificationToken: otpState.verificationToken,
          facilityTitle,
          programType,
        }),
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Failed to submit application.');
      }

      setIsSubmitted(true);
      setSubmitting(false);
    } catch (err) {
      setSubmitting(false);
      setFormError(err.message || 'An error occurred while submitting the application.');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormError('');
    setFormData({
      studentName: '',
      guardianName: '',
      studentClass: '',
      email: '',
      contactNumber: '',
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60 p-3 sm:p-4 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-lg rounded-[24px] sm:rounded-[32px] border-2 border-[#191A23] bg-white p-5 sm:p-7 shadow-[0_8px_0_0_#191A23]">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-[#191A23] bg-[#F6FAEF] text-[#191A23] transition-all hover:scale-105 hover:bg-[#FFD6D6] cursor-pointer shrink-0 z-10"
          title="Close modal"
        >
          <X className="h-4 w-4 stroke-[2.5]" />
        </button>

        {isSubmitted ? (
          <div className="py-6 sm:py-8 text-center font-poppins">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#B9FF66] border-2 border-[#191A23] text-[#1E3F20] shadow-[0_4px_0_0_#191A23]">
              <CheckCircle className="h-7 w-7" />
            </div>
            <h3 className="font-fredoka text-2xl font-bold text-[#000000]">
              Application Received!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#1E3F20]/90 leading-relaxed max-w-sm mx-auto">
              Thank you for enrolling <strong className="font-bold text-[#000000]">{formData.studentName}</strong> in <span className="rounded-md bg-[#ECF39E] px-2 py-0.5 font-bold text-[#1E3F20]">{programType}</span>.
            </p>
            <div className="mt-3.5 rounded-xl border border-[#191A23]/20 bg-[#F6FAEF] p-3 text-left text-xs text-[#1E3F20] space-y-1 max-w-xs mx-auto">
              <p>• Guardian: {formData.guardianName}</p>
              <p>• Verified Email: {formData.email}</p>
              <p>• Contact Phone: {formData.contactNumber}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-5 rounded-xl border-2 border-[#191A23] bg-[#1E3F20] px-6 py-2.5 font-fredoka text-sm font-medium text-white shadow-[0_4px_0_0_#191A23] transition-all hover:bg-[#344E41] cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header Title & Badge */}
            <div className="mb-3.5 pr-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/15 bg-[#ECF39E] px-3 py-0.5 font-poppins text-[11px] font-semibold text-[#1E3F20] mb-1.5">
                <Sparkles className="h-3.5 w-3.5" /> {facilityTitle}
              </span>
              <h3 className="font-fredoka text-xl sm:text-2xl font-bold text-[#000000] leading-tight">
                Apply for {programType}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 font-poppins pt-1">
              {/* Student Name */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="studentName" className="text-xs font-semibold text-[#000000]">
                  Student's Full Name *
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="e.g. Master Aarav Sharma"
                  className="h-10 sm:h-11 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 text-xs sm:text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Guardian Name */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="guardianName" className="text-xs font-semibold text-[#000000]">
                  Parent/Guardian Name *
                </label>
                <input
                  id="guardianName"
                  name="guardianName"
                  type="text"
                  required
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Sharma"
                  className="h-10 sm:h-11 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 text-xs sm:text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Student Class */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="studentClass" className="text-xs font-semibold text-[#000000]">
                  Student's Class *
                </label>
                <select
                  id="studentClass"
                  name="studentClass"
                  required
                  value={formData.studentClass}
                  onChange={handleChange}
                  className="h-10 sm:h-11 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 text-xs sm:text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none cursor-pointer transition-all"
                >
                  <option value="" disabled>-- Select Class --</option>
                  <option value="Nursery">Nursery (Age: 3+)</option>
                  <option value="L.K.G">L.K.G. (Age: 4+)</option>
                  <option value="U.K.G">U.K.G. (Age: 5+)</option>
                  <option value="STD I">STD - I (Age: 6+)</option>
                  <option value="STD II">STD - II (Age: 7+)</option>
                  <option value="STD III">STD - III (Age: 8+)</option>
                  <option value="STD IV">STD - IV (Age: 9+)</option>
                </select>
              </div>

              {/* Email Address with OTP Verification */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-xs font-semibold text-[#000000] flex items-center justify-between">
                  <span>Email Address *</span>
                  {otpState.verified && (
                    <span className="text-xs font-bold text-[#1E3F20] flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 text-[#1E3F20]" /> Verified
                    </span>
                  )}
                </label>
                <div className="flex gap-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={otpState.verified}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@gmail.com"
                    className={`h-10 sm:h-11 flex-1 rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 text-xs sm:text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 ${
                      otpState.verified ? 'bg-[#EBF1E5] font-semibold text-[#1E3F20]' : ''
                    }`}
                  />
                  {!otpState.verified ? (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpState.sending || !formData.email}
                      className="h-10 sm:h-11 shrink-0 rounded-xl border-2 border-[#191A23] bg-[#1E3F20] px-3.5 font-fredoka text-xs font-medium text-white shadow-[0_2px_0_0_#191A23] transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
                    >
                      {otpState.sending ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-3 w-3" /> {otpState.sent ? 'Resend' : 'Verify Email'}
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOtpState((prev) => ({ ...prev, verified: false, sent: false }))}
                      className="h-10 sm:h-11 px-3 rounded-xl border-2 border-[#191A23] bg-[#ECF39E] text-xs font-semibold text-[#191A23] hover:bg-[#FFD6D6]"
                    >
                      Change
                    </button>
                  )}
                </div>

                {/* OTP Code Box (Appears under Email when sent) */}
                {otpState.sent && !otpState.verified && (
                  <div className="mt-1.5 rounded-xl border-2 border-[#191A23] bg-[#ECF39E] p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1E3F20]">Enter 6-digit Code:</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          maxLength={6}
                          placeholder="123456"
                          value={otpState.code}
                          onChange={(e) => setOtpState((prev) => ({ ...prev, code: e.target.value.replace(/\D/g, '') }))}
                          className="h-8 w-24 text-center rounded-lg border-2 border-[#191A23] bg-white font-mono text-xs font-bold text-[#000000] tracking-wider outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          disabled={otpState.verifying || otpState.code.length !== 6}
                          className="h-8 rounded-lg border-2 border-[#191A23] bg-[#1E3F20] px-2.5 font-fredoka text-xs font-medium text-white transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer"
                        >
                          {otpState.verifying ? <Loader2 className="h-3 w-3 animate-spin" /> : 'Confirm'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {otpState.error && <p className="text-[11px] font-medium text-[#C70039]">{otpState.error}</p>}
                {otpState.successMsg && <p className="text-[11px] font-medium text-[#1E3F20]">{otpState.successMsg}</p>}
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="contactNumber" className="text-xs font-semibold text-[#000000]">
                  Mobile Number (10 Digits WhatsApp) *
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="e.g. 9732644550"
                  className="h-10 sm:h-11 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 text-xs sm:text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 tracking-wide"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl sm:rounded-2xl border-2 border-[#191A23] bg-[#B9FF66] py-3 font-fredoka text-sm sm:text-base font-semibold text-[#000000] shadow-[0_4px_0_0_#191A23] transition-all hover:bg-[#a6f54c] active:translate-y-0.5 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-[#191A23]" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

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
    </div>
  );
}

export default FacilityApplicationModal;
