import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

function FacilityHero({
  title,
  subTagline,
  aboutTitle,
  aboutParagraphs = [],
  image,
  prevLink = null,
  nextLink = null,
  badgeText = 'Facility Overview',
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title]);

  return (
    <section className="w-full border-t border-[#191A23]/25 bg-[#F6FAEF] px-6 pb-12 pt-8 md:px-12 md:pb-14 md:pt-10 lg:px-16 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Navigation & Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col justify-center">
            <span className="mb-2 inline-block w-fit rounded-full bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20] border border-[#191A23]/20">
              {badgeText}
            </span>
            <h1 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl md:text-[38px]">
              {title}
            </h1>
            <p className="mt-1 font-poppins text-sm text-[#1E3F20]/90 sm:text-base lg:max-w-none lg:whitespace-nowrap">
              {subTagline}
            </p>
          </div>

          {/* Prev/Next Navigation */}
          <div className="flex items-center gap-3 self-end sm:self-start">
            {prevLink ? (
              <Link
                to={prevLink}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1E3F20] bg-white px-5 py-2.5 font-poppins text-sm font-semibold text-[#1E3F20] shadow-sm transition-all hover:bg-[#1E3F20] hover:text-white"
              >
                ← Prev
              </Link>
            ) : (
              <div className="hidden w-[80px] sm:block" />
            )}
            {nextLink ? (
              <Link
                to={nextLink}
                className="inline-flex items-center justify-center rounded-xl bg-[#1E3F20] px-5 py-2.5 font-poppins text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#344E41]"
              >
                Next →
              </Link>
            ) : (
              <div className="hidden w-[80px] sm:block" />
            )}
          </div>
        </div>

        {/* Hero Body Grid */}
        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:col-span-5">
            {image && (
              <div className="relative overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-6 shadow-[0_6px_0_0_#191A23]">
                <ImageWithSkeleton
                  src={image}
                  alt={title}
                  wrapperClassName="w-full max-w-md h-[240px] sm:h-[300px] lg:h-[340px] flex items-center justify-center"
                  className="h-full max-h-full w-full object-contain pointer-events-none"
                />
              </div>
            )}
          </div>

          {/* Right Column: About Content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl lg:text-[32px]">
              {aboutTitle}
            </h2>

            <div className="mt-4 space-y-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/90 sm:text-base">
              {aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilityHero;
