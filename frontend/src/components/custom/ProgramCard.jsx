import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from './ImageWithSkeleton';

function ProgramCard({
  title,
  age,
  description,
  image,
  icon: IconComponent,
  bgColor = 'bg-[#9CC5A1]',
  linkTo = null,
}) {
  // If description exists, it's an About Feature Card (Image on Left)
  if (description) {
    return (
      <div
        className={`relative flex min-h-[260px] sm:min-h-[331px] w-full max-w-[387px] flex-col justify-between rounded-[24px] sm:rounded-[45px] border-2 border-[#191A23] p-5 sm:px-[35px] sm:py-[40px] shadow-[0_4px_0_0_#191A23] sm:shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${bgColor}`}
      >
        <div>
          {/* Top Row: Image on Left, Title on Right & Top-Right Icon Badge */}
          <div className="relative flex items-center gap-3 sm:gap-4">
            {image && (
              <ImageWithSkeleton
                src={image}
                alt={title}
                wrapperClassName="h-[64px] w-[64px] sm:h-[97.82px] sm:w-[97.82px] shrink-0"
                className="h-[64px] w-[64px] sm:h-[97.82px] sm:w-[97.82px] object-contain"
              />
            )}

            <h3 className="mt-1 sm:mt-2 pr-6 sm:pr-8 font-fredoka text-lg sm:text-xl font-semibold leading-snug text-[#000000]">
              {title}
            </h3>

            {/* Top Right Black Icon Badge */}
            {IconComponent && (
              <div className="absolute top-0 right-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#000000] text-white z-10">
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            )}
          </div>

          {/* Horizontal Line Divider */}
          <div className="my-3.5 sm:my-5 border-t border-[#191A23]" />

          {/* Description Text */}
          <p className="font-poppins text-xs sm:text-[15px] leading-relaxed text-[#000000]">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Program Card Layout (Nursery, LKG, UKG, STD-I to STD-IV - Image on Right)
  const programCardClasses = `relative flex h-[240px] sm:h-[331px] w-full max-w-[387px] flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] border-2 border-[#191A23] p-5 sm:p-8 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${bgColor}`;

  const ProgramContent = (
    <>
      <div className="z-10 flex flex-col items-start">
        <h3 className="mt-1 sm:mt-2 font-fredoka text-2xl sm:text-[32px] font-semibold tracking-tight text-[#000000]">
          {title}
        </h3>
        {age && (
          <p className="mt-0.5 sm:mt-1 font-poppins text-lg sm:text-xl font-normal text-[#000000]/80">
            {age}
          </p>
        )}
      </div>

      {/* Right Side Illustration Image */}
      {image && (
        <div className="pointer-events-none absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-0 max-h-[140px] max-w-[150px] xs:max-h-[160px] xs:max-w-[180px] sm:max-h-[175px] sm:max-w-[210px] flex items-end justify-end">
          <ImageWithSkeleton
            src={image}
            alt={`${title} Illustration`}
            wrapperClassName="max-h-full max-w-full"
            className="h-auto max-h-[140px] max-w-[150px] xs:max-h-[160px] xs:max-w-[180px] sm:max-h-[175px] sm:max-w-[210px] object-contain"
          />
        </div>
      )}
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={`${programCardClasses} cursor-pointer`}>
        {ProgramContent}
      </Link>
    );
  }

  return <div className={programCardClasses}>{ProgramContent}</div>;
}

export default ProgramCard;
