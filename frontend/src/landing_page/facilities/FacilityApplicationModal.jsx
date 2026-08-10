import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

function FacilityApplicationModal({
  isOpen,
  onClose,
  facilityTitle = 'Sunday Special Program',
  programType = 'Sunday Drawing School',
}) {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    studentClass: 'Nursery',
    contactNumber: '',
    remarks: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      studentName: '',
      guardianName: '',
      studentClass: 'Nursery',
      contactNumber: '',
      remarks: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60 p-4 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-6 shadow-[0_8px_0_0_#191A23] sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#191A23] bg-[#F6FAEF] text-[#191A23] transition-transform hover:scale-110 hover:bg-[#ECF39E]"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#B9FF66] border-2 border-[#191A23] text-[#1E3F20]">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="font-fredoka text-2xl font-bold text-[#000000]">
              Application Submitted!
            </h3>
            <p className="mt-2 font-poppins text-sm text-[#1E3F20]/90">
              Thank you for expressing interest in <strong className="font-semibold text-[#000000]">{programType}</strong> at Ever Green Model School. Our team will contact you shortly on <span className="font-medium">{formData.contactNumber || 'your phone'}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-6 py-3 font-poppins text-sm font-semibold text-white shadow-[0_4px_0_0_#191A23] transition-all hover:bg-[#344E41]"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-[#1E3F20]" />
              <h3 className="font-fredoka text-2xl font-bold text-[#000000]">
                Apply for {facilityTitle}
              </h3>
            </div>
            <p className="mb-4 font-poppins text-xs text-[#1E3F20]/80">
              Please fill out the form below to register interest for {programType}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-poppins">
              <div>
                <label className="block text-xs font-semibold text-[#000000]">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="mt-1 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 py-2 text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#000000]">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="e.g. Anish Sharma"
                    className="mt-1 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 py-2 text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#000000]">
                    Student's Class *
                  </label>
                  <select
                    value={formData.studentClass}
                    onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                    className="mt-1 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 py-2 text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none"
                  >
                    <option value="Nursery">Nursery</option>
                    <option value="L.K.G">L.K.G</option>
                    <option value="U.K.G">U.K.G</option>
                    <option value="STD I">STD I</option>
                    <option value="STD II">STD II</option>
                    <option value="STD III">STD III</option>
                    <option value="STD IV">STD IV</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#000000]">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="mt-1 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 py-2 text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#000000]">
                  Additional Notes / Preferences
                </label>
                <textarea
                  rows="2"
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  placeholder="Any specific requests or requirements..."
                  className="mt-1 w-full rounded-xl border-2 border-[#191A23] bg-[#F6FAEF] px-3.5 py-2 text-sm text-[#000000] focus:border-[#1E3F20] focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl border-2 border-[#191A23] bg-[#B9FF66] py-3 font-fredoka text-base font-semibold text-[#000000] shadow-[0_4px_0_0_#191A23] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacilityApplicationModal;
