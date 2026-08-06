import React from 'react';
import { Link } from 'react-router-dom';

function ProgramCard({ title, age, image, bgColor = 'bg-[#9CC5A1]', linkTo = '/programs' }) {
  return (
    <Link
      to={linkTo}
      className={`relative flex h-[331px] w-full max-w-[387px] flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#1E3F20] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${bgColor}`}
    >
      {/* Title & Age Info */}
      <div className="z-10 flex flex-col items-start">
        <h3 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] md:text-[32px]">
          {title}
        </h3>
        <p className="mt-1 font-poppins text-xl font-normal text-[#000000]/80">
          {age}
        </p>
      </div>

      {/* Program Illustration */}
      {image && (
        <img
          src={image}
          alt={`${title} Illustration`}
          className="pointer-events-none absolute bottom-3 right-3 z-0 h-auto max-h-[175px] max-w-[210px] object-contain"
        />
      )}
    </Link>
  );
}

export default ProgramCard;
