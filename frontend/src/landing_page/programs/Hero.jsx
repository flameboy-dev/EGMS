import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

// Preload all program images into browser memory to eliminate image loading lag
import nurseryImg from '@/assets/images/Nursery.png';
import lkgImg from '@/assets/images/L.K.G.png';
import ukgImg from '@/assets/images/U.K.G.png';
import std1Img from '@/assets/images/STD-I.png';
import std2Img from '@/assets/images/STD-II.png';
import std3Img from '@/assets/images/STD-III.png';
import std4Img from '@/assets/images/STD-IV.png';

const programImagesList = [nurseryImg, lkgImg, ukgImg, std1Img, std2Img, std3Img, std4Img];
if (typeof window !== 'undefined') {
  programImagesList.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function Hero({
  title = "Nursery Program",
  subTagline = "Age: 3+ | Foundation learning through play, creativity, and exploration.",
  aboutTitle = "About Nursery",
  aboutParagraphs = [],
  image,
  prevLink = null,
  nextLink = null,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [title]);

  return (
    <section className="w-full bg-[#F6FAEF] px-6 pt-8 pb-12 md:px-12 md:pt-10 md:pb-14 lg:px-16 lg:pt-12 lg:pb-16 border-t border-[#191A23]/25">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Row with Title and Prev/Next Navigation */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col min-h-[72px] justify-center">
            <h1 className="font-fredoka text-2xl font-semibold text-[#000000] sm:text-4xl md:text-[38px]">
              {title}
            </h1>
            <p className="mt-1 font-poppins text-xs text-[#1E3F20]/90 sm:text-base lg:max-w-none lg:whitespace-nowrap">
              {subTagline}
            </p>
          </div>

          {/* Navigation Buttons (Prev is hidden if prevLink is null) */}
          <div className="flex items-center gap-3 self-end sm:self-start">
            {prevLink ? (
              <Link
                to={prevLink}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1E3F20] bg-white px-4 py-2 sm:px-5 sm:py-2.5 font-poppins text-xs sm:text-sm font-medium text-[#1E3F20] shadow-sm transition-all hover:bg-[#1E3F20] hover:text-white"
              >
                ← Prev
              </Link>
            ) : (
              <div className="hidden w-[80px] sm:block" />
            )}
            {nextLink ? (
              <Link
                to={nextLink}
                className="inline-flex items-center justify-center rounded-xl bg-[#1E3F20] px-4 py-2 sm:px-5 sm:py-2.5 font-poppins text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-[#344E41]"
              >
                Next →
              </Link>
            ) : (
              <div className="hidden w-[80px] sm:block" />
            )}
          </div>
        </div>

        {/* Hero Body Grid: Image on Left inside Frame, Description on Right */}
        <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Program Illustration in Framed Container */}
          <div className="flex justify-center lg:col-span-5">
            {image && (
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[32px] border-2 border-[#191A23] bg-white p-3 sm:p-6 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_6px_0_0_#191A23]">
                <ImageWithSkeleton
                  src={image}
                  alt={title}
                  wrapperClassName="w-full max-w-sm sm:max-w-md h-[180px] xs:h-[200px] sm:h-[300px] lg:h-[340px] flex items-center justify-center mx-auto"
                  className="h-full max-h-full w-full object-contain pointer-events-none"
                />
              </div>
            )}
          </div>

          {/* Right Column: About Section Text */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl lg:text-[32px]">
              {aboutTitle}
            </h2>

            <div className="mt-3 space-y-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/90 sm:text-base">
              {aboutParagraphs && aboutParagraphs.length > 0 ? (
                aboutParagraphs.map((pText, idx) => (
                  <p key={idx}>{pText}</p>
                ))
              ) : (
                <p>
                  At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, our program is thoughtfully designed to provide children with a joyful and nurturing introduction to education.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
