import React from 'react';

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex w-full max-w-[560px] shrink-0 flex-col items-start px-2 sm:px-4">
      {/* Speech Bubble Card */}
      <div className="relative min-h-[190px] w-full rounded-[30px] border-2 border-[#B9FF66] bg-[#191A23] p-6 sm:p-8 md:p-9 shadow-md flex items-center">
        <p className="font-poppins text-sm leading-relaxed text-white sm:text-base md:text-[16px]">
          "{quote}"
        </p>

        {/* Speech Bubble Tail */}
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[17px] left-12 z-10"
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
      <div className="mt-7 ml-12 flex flex-col items-start space-y-0.5">
        <h4 className="font-fredoka text-lg font-semibold tracking-wide text-[#B9FF66] md:text-xl">
          {name}
        </h4>
        <p className="font-poppins text-xs font-normal text-white sm:text-sm md:text-[14px]">
          {role}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
