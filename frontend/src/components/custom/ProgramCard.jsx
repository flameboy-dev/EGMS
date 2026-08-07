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
  // If description exists, it's an About Feature Card with exact design specs
  if (description) {
    return (
      <div
        className={`relative flex min-h-[331px] w-full max-w-[387px] flex-col justify-between rounded-[45px] border-2 border-[#191A23] px-[35px] py-[40px] shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${bgColor}`}
      >
        <div>
          {/* Top Row: Title on Left, Image on Right & Top-Right Icon Badge */}
          <div className="relative flex items-center justify-between gap-4">
            <h3 className="mt-2 pr-6 font-fredoka text-lg font-semibold leading-snug text-[#000000] sm:text-xl">
              {title}
            </h3>

            {image && (
              <ImageWithSkeleton
                src={image}
                alt={title}
                wrapperClassName="h-[97.82px] w-[97.82px] shrink-0"
                className="h-[97.82px] w-[97.82px] object-contain"
              />
            )}

            {/* Top Right Black Icon Badge */}
            {IconComponent && (
              <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#000000] text-white z-10">
                <IconComponent className="h-4 w-4" />
              </div>
            )}
          </div>

          {/* Horizontal Line Divider */}
          <div className="my-5 border-t border-[#191A23]" />

          {/* Description Text */}
          <p className="font-poppins text-sm leading-relaxed text-[#000000] md:text-[15px]">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Program Card Layout (Nursery, LKG, UKG, STD-I to STD-IV)
  const programCardClasses = `relative flex h-[331px] w-full max-w-[387px] flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23] p-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${bgColor}`;

  const ProgramContent = (
    <>
      <div className="z-10 flex flex-col items-start">
        <h3 className="mt-2 font-fredoka text-3xl font-semibold tracking-tight text-[#000000] md:text-[32px]">
          {title}
        </h3>
        {age && (
          <p className="mt-1 font-poppins text-xl font-normal text-[#000000]/80">
            {age}
          </p>
        )}
      </div>

      {/* Right Side Illustration Image */}
      {image && (
        <div className="pointer-events-none absolute bottom-3 right-3 z-0 max-h-[175px] max-w-[210px] flex items-end justify-end">
          <ImageWithSkeleton
            src={image}
            alt={`${title} Illustration`}
            wrapperClassName="max-h-[175px] max-w-[210px]"
            className="h-auto max-h-[175px] max-w-[210px] object-contain"
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
