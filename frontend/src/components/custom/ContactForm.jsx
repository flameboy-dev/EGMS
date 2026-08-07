import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    mobileNumber: '',
    email: '',
    interestedClass: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        mobileNumber: '',
        email: '',
        interestedClass: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-5">
      {submitted && (
        <div className="flex items-center space-x-2 rounded-2xl bg-[#B9FF66] p-4 text-[#191A23] font-poppins text-sm md:text-base font-medium shadow-sm">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
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
          placeholder="Name"
          value={formData.parentName}
          onChange={handleChange}
          className="h-[52px] w-full rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="mobileNumber" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Mobile Number*
        </label>
        <input
          id="mobileNumber"
          type="tel"
          name="mobileNumber"
          required
          placeholder="Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="h-[52px] w-full rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="email" className="font-poppins text-sm md:text-[15px] font-medium text-[#000000]">
          Email*
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="h-[52px] w-full rounded-[14px] border border-[#191A23] bg-white px-4 py-3 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
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
            <option value="" disabled hidden>
              Select an option
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
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[140px] w-full resize-none rounded-[18px] border border-[#191A23] bg-white p-4 font-poppins text-sm text-[#000000] outline-none transition-all placeholder:text-gray-400 focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] md:text-base"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-2 flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#1E3F20] px-6 font-fredoka text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#152e17] active:scale-[0.99] md:text-[20px] cursor-pointer"
      >
        Request Admission Information
      </button>
    </form>
  );
}

export default ContactForm;
