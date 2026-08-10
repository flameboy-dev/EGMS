import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import heroImg from '@/assets/images/HeroImage.png';
import {
  User,
  Calendar,
  GraduationCap,
  CreditCard,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Upload,
  Camera,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  FileCheck,
  Send,
  Loader2,
  X,
} from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

function EnrollPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    studentClass: '',
    studentAadhaar: '',
    guardianName: '',
    guardianOccupation: '',
    mobileNumber: '',
    email: '',
    address: '',
  });

  const [files, setFiles] = useState({
    studentPhoto: null,
    birthCertificate: null,
    aadhaarCard: null,
  });

  // OTP Email Verification State
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
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Handle Form Text Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    // Strict Name Filtering: Only allow letters, spaces, dots, and hyphens (no numbers or special characters)
    if (name === 'studentName' || name === 'guardianName') {
      processedValue = value.replace(/[^a-zA-Z\s.-]/g, '');
    }

    // Reset email verification if user changes email after verifying
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

  // Handle File Selection with Type & Size Validation
  const handleFileChange = (e, fieldName) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validate size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFormError(`The file "${selectedFile.name}" exceeds the maximum 5MB size limit.`);
      return;
    }

    // Validate mime type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setFormError(`The file "${selectedFile.name}" must be a PDF, JPG, JPEG, PNG, or WEBP image.`);
      return;
    }

    setFormError('');
    setFiles((prev) => ({ ...prev, [fieldName]: selectedFile }));
  };

  const removeFile = (fieldName) => {
    setFiles((prev) => ({ ...prev, [fieldName]: null }));
  };

  // 1. Send OTP Email Code
  const handleSendOtp = async () => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setOtpState((prev) => ({ ...prev, error: 'Please enter a valid email address first.' }));
      return;
    }

    setOtpState((prev) => ({ ...prev, sending: true, error: '', successMsg: '' }));

    try {
      const response = await fetch(`${API_BASE_URL}/otp/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Failed to send OTP code.');
      }

      setOtpState((prev) => ({
        ...prev,
        sending: false,
        sent: true,
        successMsg: `A 6-digit code has been sent to ${formData.email}. Please check your inbox.`,
      }));
    } catch (err) {
      setOtpState((prev) => ({
        ...prev,
        sending: false,
        error: err.message || 'Server error sending verification email.',
      }));
    }
  };

  // 2. Verify OTP Code
  const handleVerifyOtp = async () => {
    if (!otpState.code || otpState.code.trim().length !== 6) {
      setOtpState((prev) => ({ ...prev, error: 'Please enter the 6-digit code sent to your email.' }));
      return;
    }

    setOtpState((prev) => ({ ...prev, verifying: true, error: '', successMsg: '' }));

    try {
      const response = await fetch(`${API_BASE_URL}/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: otpState.code.trim() }),
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

  // 3. Submit Full Form to Backend (/api/enroll)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Field Validations
    if (!/^[a-zA-Z\s.-]{2,}$/.test(formData.studentName.trim())) {
      setFormError("Student's Full Name must contain at least 2 letters (numbers and special characters are not allowed).");
      return;
    }

    if (!/^[a-zA-Z\s.-]{2,}$/.test(formData.guardianName.trim())) {
      setFormError("Parent/Guardian's Full Name must contain at least 2 letters (numbers and special characters are not allowed).");
      return;
    }

    if (!formData.studentClass) {
      setFormError('Please select the Grade / Class your child is applying for.');
      return;
    }

    if (!/^\d{12}$/.test(formData.studentAadhaar.trim())) {
      setFormError("Student's Aadhaar Number must be exactly 12 numeric digits.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      setFormError('Mobile Number must be a valid 10-digit phone number starting with 6-9.');
      return;
    }

    if (!otpState.verified || !otpState.verificationToken) {
      setFormError('Please verify your email address with the 6-digit OTP before submitting.');
      return;
    }

    if (!files.studentPhoto) {
      setFormError("Please upload the child's Passport Size Photo.");
      return;
    }

    if (!files.birthCertificate) {
      setFormError("Please upload the child's Birth Certificate document.");
      return;
    }

    if (!files.aadhaarCard) {
      setFormError("Please upload the child's Aadhaar Card document.");
      return;
    }

    setSubmitting(true);

    try {
      const bodyFormData = new FormData();
      bodyFormData.append('studentName', formData.studentName.trim());
      bodyFormData.append('dob', formData.dob);
      bodyFormData.append('studentClass', formData.studentClass);
      bodyFormData.append('studentAadhaar', formData.studentAadhaar.trim());
      bodyFormData.append('guardianName', formData.guardianName.trim());
      bodyFormData.append('guardianOccupation', formData.guardianOccupation.trim());
      bodyFormData.append('mobileNumber', formData.mobileNumber.trim());
      bodyFormData.append('email', formData.email.trim());
      bodyFormData.append('verificationToken', otpState.verificationToken);
      bodyFormData.append('address', formData.address.trim());

      bodyFormData.append('studentPhoto', files.studentPhoto);
      bodyFormData.append('birthCertificate', files.birthCertificate);
      bodyFormData.append('aadhaarCard', files.aadhaarCard);

      const response = await fetch(`${API_BASE_URL}/enroll`, {
        method: 'POST',
        body: bodyFormData,
      });

      const resData = await response.json();

      if (!response.ok || resData.status === 'error') {
        throw new Error(resData.message || 'Enrollment submission failed.');
      }

      setSubmittedSuccess(true);
      setSubmitting(false);
    } catch (err) {
      console.error('Enrollment error:', err);
      setFormError(err.message || 'An error occurred submitting the application.');
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <Navbar defaultBg="bg-[#F6FAEF]" />

      {/* Header Banner */}
      <section className="w-full border-t border-[#191A23]/10 bg-[#EBF1E5] px-6 py-7 sm:py-10 md:px-12 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start space-y-2 sm:space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/10 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <GraduationCap className="h-4 w-4" /> Academic Session Admission
            </span>
            <h1 className="font-fredoka text-2xl font-semibold text-[#000000] sm:text-4xl md:text-5xl">
              Online Student Enrollment Application
            </h1>
            <p className="font-poppins text-xs sm:text-base text-[#1E3F20]/90 md:text-lg">
              Join Ever Green Model School. Complete the verified online form below to reserve your child's seat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-14">
        {submittedSuccess ? (
          <div className="flex flex-col items-center rounded-[32px] border-2 border-[#191A23] bg-white p-8 sm:p-12 shadow-[0_8px_0_0_#191A23] text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#B9FF66] border-2 border-[#191A23] text-[#1E3F20]">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>

            <h2 className="mt-6 font-fredoka text-3xl font-bold text-[#000000] sm:text-4xl">
              Enrollment Application Received!
            </h2>

            <p className="mt-4 max-w-xl font-poppins text-base text-[#1E3F20] leading-relaxed sm:text-lg">
              Thank you for enrolling <strong className="font-bold text-[#000000]">{formData.studentName}</strong> for <span className="rounded-md bg-[#ECF39E] px-2 py-0.5 font-bold">{formData.studentClass}</span>.
            </p>

            <div className="mt-6 rounded-2xl border border-[#191A23]/20 bg-[#F6FAEF] p-5 text-left font-poppins text-sm text-[#1E3F20] space-y-2 max-w-lg w-full">
              <div className="flex items-center gap-2 font-semibold text-[#000000]">
                <FileCheck className="h-4 w-4 text-[#1E3F20]" />
                <span>Application Summary & Reference:</span>
              </div>
              <p>• Guardian: {formData.guardianName} ({formData.guardianOccupation})</p>
              <p>• Verified Email: {formData.email}</p>
              <p>• Phone: {formData.mobileNumber}</p>
              <p>• Documents: Passport Photo, Birth Certificate & Aadhaar Card Attached ✅</p>
            </div>

            <p className="mt-6 font-poppins text-sm text-[#1E3F20]/80">
              Our admissions desk will review the uploaded documents and contact you on <strong className="text-[#000000]">{formData.mobileNumber}</strong> within 24-48 hours.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-3.5 font-fredoka text-base font-medium text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
            >
              Return to Homepage
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
            {/* SECTION 1: STUDENT INFORMATION */}
            <div className="rounded-[20px] sm:rounded-[36px] border-2 border-[#191A23] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23]">
              <div className="mb-5 flex items-center gap-3 border-b border-[#191A23]/15 pb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ECF39E] border border-[#191A23] text-[#1E3F20] shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="font-fredoka text-lg sm:text-2xl font-semibold text-[#000000]">
                    1. Student Information
                  </h2>
                  <p className="font-poppins text-xs text-[#1E3F20]/75">
                    Child's personal details as per official documents.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {/* Student Full Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="studentName" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Student's Full Name *
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    required
                    placeholder="e.g. Master Aarav Sharma"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white"
                  />
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="dob" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Date of Birth (DOB) *
                  </label>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all focus:border-[#1E3F20] focus:bg-white cursor-pointer"
                  />
                </div>

                {/* Class / Grade Applying For */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="studentClass" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Grade / Class Applying For *
                  </label>
                  <select
                    id="studentClass"
                    name="studentClass"
                    required
                    value={formData.studentClass}
                    onChange={handleInputChange}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all focus:border-[#1E3F20] focus:bg-white cursor-pointer"
                  >
                    <option value="" disabled>-- Select Grade / Class Applying For --</option>
                    <option value="Nursery">Nursery (Age: 3+)</option>
                    <option value="L.K.G">L.K.G. (Age: 4+)</option>
                    <option value="U.K.G">U.K.G. (Age: 5+)</option>
                    <option value="STD I">STD - I (Age: 6+)</option>
                    <option value="STD II">STD - II (Age: 7+)</option>
                    <option value="STD III">STD - III (Age: 8+)</option>
                    <option value="STD IV">STD - IV (Age: 9+)</option>
                  </select>
                </div>

                {/* Child's Aadhaar Number */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="studentAadhaar" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Child's Aadhaar Number (12 Digits) *
                  </label>
                  <input
                    id="studentAadhaar"
                    type="text"
                    name="studentAadhaar"
                    required
                    maxLength={12}
                    placeholder="12-digit UID number"
                    value={formData.studentAadhaar}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData((prev) => ({ ...prev, studentAadhaar: val }));
                    }}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white tracking-wider font-mono"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: PARENT / GUARDIAN DETAILS */}
            <div className="rounded-[20px] sm:rounded-[36px] border-2 border-[#191A23] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23]">
              <div className="mb-5 flex items-center gap-3 border-b border-[#191A23]/15 pb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#94ECBE] border border-[#191A23] text-[#1E3F20] shrink-0">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="font-fredoka text-lg sm:text-2xl font-semibold text-[#000000]">
                    2. Parent / Guardian Details
                  </h2>
                  <p className="font-poppins text-xs text-[#1E3F20]/75">
                    Parent information for primary communication.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {/* Guardian Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="guardianName" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    id="guardianName"
                    type="text"
                    name="guardianName"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white"
                  />
                </div>

                {/* Guardian Occupation */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="guardianOccupation" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Parent's Profession / Occupation *
                  </label>
                  <input
                    id="guardianOccupation"
                    type="text"
                    name="guardianOccupation"
                    required
                    placeholder="e.g. Government Service / Business"
                    value={formData.guardianOccupation}
                    onChange={handleInputChange}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 3: CONTACT & EMAIL OTP VERIFICATION */}
            <div className="rounded-[20px] sm:rounded-[36px] border-2 border-[#191A23] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23]">
              <div className="mb-5 flex items-center gap-3 border-b border-[#191A23]/15 pb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#B9FF66] border border-[#191A23] text-[#191A23] shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="font-fredoka text-lg sm:text-2xl font-semibold text-[#000000]">
                    3. Contact & Verified Email
                  </h2>
                  <p className="font-poppins text-xs text-[#1E3F20]/75">
                    Email OTP verification ensures official school updates reach you.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {/* Mobile Number */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="mobileNumber" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    10-Digit Mobile Number (WhatsApp) *
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    name="mobileNumber"
                    required
                    maxLength={10}
                    placeholder="e.g. 9732644550"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData((prev) => ({ ...prev, mobileNumber: val }));
                    }}
                    className="h-11 sm:h-12 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white tracking-wide"
                  />
                </div>

                {/* Email with OTP Action Button */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm flex items-center justify-between">
                    <span>Email Address *</span>
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
                      onChange={handleInputChange}
                      className={`h-11 sm:h-12 flex-1 rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 sm:px-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all focus:border-[#1E3F20] focus:bg-white ${
                        otpState.verified ? 'bg-[#EBF1E5] font-semibold text-[#1E3F20]' : ''
                      }`}
                    />

                    {!otpState.verified ? (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpState.sending || !formData.email}
                        className="h-11 sm:h-12 shrink-0 rounded-xl border-2 border-[#191A23] bg-[#1E3F20] px-3 sm:px-4 font-fredoka text-xs sm:text-sm font-medium text-white shadow-[0_3px_0_0_#191A23] transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
                      >
                        {otpState.sending ? (
                          <>
                            <Loader2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {otpState.sent ? 'Resend' : 'Verify Email'}
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOtpState((prev) => ({ ...prev, verified: false, sent: false }))}
                        className="h-11 sm:h-12 px-3 rounded-xl border-2 border-[#191A23] bg-[#ECF39E] text-xs font-poppins font-semibold text-[#191A23] hover:bg-[#FFD6D6]"
                        title="Change Email"
                      >
                        Change
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* OTP Verification Input Card (Appears after Code is Sent) */}
              {otpState.sent && !otpState.verified && (
                <div className="mt-4 sm:mt-5 rounded-2xl border-2 border-[#191A23] bg-[#ECF39E] p-3.5 sm:p-4 font-poppins">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#1E3F20]">
                        Enter 6-digit Code sent to {formData.email}:
                      </p>
                      <p className="text-[11px] text-[#1E3F20]/80">
                        Check your spam/junk folder if not found.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="123456"
                        value={otpState.code}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setOtpState((prev) => ({ ...prev, code: val }));
                        }}
                        className="h-10 w-28 sm:w-32 text-center rounded-xl border-2 border-[#191A23] bg-white font-mono text-sm sm:text-base font-bold text-[#000000] tracking-widest outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpState.verifying || otpState.code.length !== 6}
                        className="h-10 rounded-xl border-2 border-[#191A23] bg-[#1E3F20] px-3.5 sm:px-4 font-fredoka text-xs font-medium text-white shadow-[0_2px_0_0_#191A23] transition-all hover:bg-[#344E41] disabled:opacity-50 cursor-pointer flex items-center gap-1"
                      >
                        {otpState.verifying ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : 'Confirm'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* OTP Error / Success Messages */}
              {otpState.error && (
                <p className="mt-2 text-xs font-medium text-[#C70039]">{otpState.error}</p>
              )}
              {otpState.successMsg && (
                <p className="mt-2 text-xs font-medium text-[#1E3F20]">{otpState.successMsg}</p>
              )}

              {/* Full Address */}
              <div className="mt-4 sm:mt-5 flex flex-col space-y-1">
                <label htmlFor="address" className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                  Full Residential Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  placeholder="House / Village, Post Office, Police Station, District, Pin Code..."
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full resize-none rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] p-3.5 sm:p-4 font-poppins text-xs sm:text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:bg-white"
                />
              </div>
            </div>

            {/* SECTION 4: REQUIRED DOCUMENT UPLOADS */}
            <div className="rounded-[20px] sm:rounded-[36px] border-2 border-[#191A23] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23]">
              <div className="mb-5 flex items-center gap-3 border-b border-[#191A23]/15 pb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ECF39E] border border-[#191A23] text-[#1E3F20] shrink-0">
                  <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="font-fredoka text-lg sm:text-2xl font-semibold text-[#000000]">
                    4. Required Document Uploads
                  </h2>
                  <p className="font-poppins text-xs text-[#1E3F20]/75">
                    Accepted formats: PDF, JPG, PNG, WEBP (Max 5MB each).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Document 1: Passport Size Photo */}
                <div className="flex flex-col space-y-1.5">
                  <span className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Child's Passport Size Photo *
                  </span>

                  {!files.studentPhoto ? (
                    <label className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] rounded-2xl border-2 border-dashed border-[#191A23] bg-[#F6FAEF] p-4 sm:p-5 text-center cursor-pointer transition-colors hover:bg-[#ECF39E]/50">
                      <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E3F20]/60 mb-1.5" />
                      <span className="font-poppins text-xs font-semibold text-[#1E3F20]">
                        Upload Profile Photo
                      </span>
                      <span className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/70 mt-0.5">
                        JPG, PNG, WEBP (Max 5MB)
                      </span>
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp"
                        onChange={(e) => handleFileChange(e, 'studentPhoto')}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between rounded-2xl border-2 border-[#191A23] bg-[#ECF39E] p-3.5 sm:p-4 shadow-sm">
                      <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-hidden">
                        <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#1E3F20] shrink-0" />
                        <div className="truncate">
                          <p className="font-poppins text-xs font-bold text-[#000000] truncate">
                            {files.studentPhoto.name}
                          </p>
                          <p className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/80">
                            {(files.studentPhoto.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('studentPhoto')}
                        className="p-1 text-[#191A23] hover:text-red-600 rounded-full hover:bg-white/50"
                        title="Remove File"
                      >
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Document 2: Birth Certificate */}
                <div className="flex flex-col space-y-1.5">
                  <span className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Child's Birth Certificate *
                  </span>

                  {!files.birthCertificate ? (
                    <label className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] rounded-2xl border-2 border-dashed border-[#191A23] bg-[#F6FAEF] p-4 sm:p-5 text-center cursor-pointer transition-colors hover:bg-[#94ECBE]/40">
                      <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E3F20]/60 mb-1.5" />
                      <span className="font-poppins text-xs font-semibold text-[#1E3F20]">
                        Upload Birth Certificate
                      </span>
                      <span className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/70 mt-0.5">
                        PDF or clear scan (Max 5MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg,.webp"
                        onChange={(e) => handleFileChange(e, 'birthCertificate')}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between rounded-2xl border-2 border-[#191A23] bg-[#94ECBE] p-3.5 sm:p-4 shadow-sm">
                      <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-hidden">
                        <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#1E3F20] shrink-0" />
                        <div className="truncate">
                          <p className="font-poppins text-xs font-bold text-[#000000] truncate">
                            {files.birthCertificate.name}
                          </p>
                          <p className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/80">
                            {(files.birthCertificate.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('birthCertificate')}
                        className="p-1 text-[#191A23] hover:text-red-600 rounded-full hover:bg-white/50"
                        title="Remove File"
                      >
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Document 3: Aadhaar Card */}
                <div className="flex flex-col space-y-1.5">
                  <span className="font-poppins text-xs font-semibold text-[#000000] sm:text-sm">
                    Child's Aadhaar Card *
                  </span>

                  {!files.aadhaarCard ? (
                    <label className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] rounded-2xl border-2 border-dashed border-[#191A23] bg-[#F6FAEF] p-4 sm:p-5 text-center cursor-pointer transition-colors hover:bg-[#ECF39E]/50">
                      <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E3F20]/60 mb-1.5" />
                      <span className="font-poppins text-xs font-semibold text-[#1E3F20]">
                        Upload Aadhaar Card
                      </span>
                      <span className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/70 mt-0.5">
                        PDF or clear scan (Max 5MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg,.webp"
                        onChange={(e) => handleFileChange(e, 'aadhaarCard')}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between rounded-2xl border-2 border-[#191A23] bg-[#ECF39E] p-3.5 sm:p-4 shadow-sm">
                      <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-hidden">
                        <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#1E3F20] shrink-0" />
                        <div className="truncate">
                          <p className="font-poppins text-xs font-bold text-[#000000] truncate">
                            {files.aadhaarCard.name}
                          </p>
                          <p className="font-poppins text-[10px] sm:text-[11px] text-[#1E3F20]/80">
                            {(files.aadhaarCard.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('aadhaarCard')}
                        className="p-1 text-[#191A23] hover:text-red-600 rounded-full hover:bg-white/50"
                        title="Remove File"
                      >
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SUBMIT APPLICATION BUTTON */}
            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] py-3.5 sm:py-5 font-fredoka text-base sm:text-xl font-medium text-white shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23] transition-all hover:bg-[#344E41] active:translate-y-1 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                    <span>Submitting Application & Documents...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#B9FF66]" />
                    <span>Submit Verified Enrollment Application</span>
                  </>
                )}
              </button>

              <p className="mt-2.5 text-center font-poppins text-[11px] sm:text-xs text-[#1E3F20]/75">
                🔒 All submitted data is encrypted and sent directly to Ever Green Model School's official inbox.
              </p>
            </div>
          </form>
        )}
      </main>

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

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default EnrollPage;
