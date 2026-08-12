import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function TestimonialCard({ quote, name, role, width }) {
  const { t } = useLanguage();

  return (
    <div
      className="flex shrink-0 flex-col items-start px-1 sm:px-2"
      style={{ width: width ? `${width}px` : undefined }}
    >
      {/* Speech Bubble Card */}
      <div className="relative min-h-[130px] sm:min-h-[170px] w-full rounded-[20px] sm:rounded-[30px] border-2 border-[#B9FF66] bg-[#191A23] p-4 sm:p-7 md:p-8 shadow-md flex items-center">
        <p className="font-poppins text-xs leading-relaxed text-white sm:text-sm md:text-base">
          "{t(quote)}"
        </p>

        {/* Speech Bubble Tail */}
        <svg
          width="22"
          height="15"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[14px] left-6 sm:left-10 z-10"
        >
          <path
            d="M1 0L13 16L25 0"
            fill="#191A23"
            stroke="#B9FF66"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Mask line to connect seamlessly with card interior */}
          <line x1="2" y1="0" x2="24" y2="0" stroke="#191A23" strokeWidth="4" />
        </svg>
      </div>

      {/* Author Name and Role */}
      <div className="mt-4 sm:mt-6 ml-6 sm:ml-10 flex flex-col items-start space-y-0.5">
        <h4 className="font-fredoka text-sm font-semibold tracking-wide text-[#B9FF66] sm:text-base md:text-xl">
          {t(name)}
        </h4>
        <p className="font-poppins text-[11px] font-normal text-white/90 sm:text-xs md:text-sm">
          {t(role)}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
