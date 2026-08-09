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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title]);

  return (
    <section className="w-full bg-[#F6FAEF] px-6 pt-8 pb-12 md:px-12 md:pt-10 md:pb-14 lg:px-16 lg:pt-12 lg:pb-16 border-t border-[#191A23]/25">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Row with Title and Prev/Next Navigation */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col min-h-[72px] justify-center">
            <h1 className="font-fredoka text-3xl font-bold text-[#000000] sm:text-4xl md:text-[36px]">
              {title}
            </h1>
            <p className="mt-1 font-poppins text-sm text-[#1E3F20]/90 sm:text-base">
              {subTagline}
            </p>
          </div>

          {/* Navigation Buttons (Prev is hidden if prevLink is null) */}
          <div className="flex items-center gap-3 self-end sm:self-start min-h-[44px]">
            {prevLink ? (
              <Link
                to={prevLink}
                className="inline-flex items-center justify-center rounded-lg bg-[#1C3A1F] px-7 py-3 font-poppins text-sm font-medium text-white shadow-sm transition-all hover:bg-[#122714]"
              >
                Prev..
              </Link>
            ) : (
              <div className="w-[85px] hidden sm:block pointer-events-none" />
            )}
            {nextLink ? (
              <Link
                to={nextLink}
                className="inline-flex items-center justify-center rounded-lg bg-[#1C3A1F] px-7 py-3 font-poppins text-sm font-medium text-white shadow-sm transition-all hover:bg-[#122714]"
              >
                Next
              </Link>
            ) : (
              <div className="w-[85px] hidden sm:block pointer-events-none" />
            )}
          </div>
        </div>

        {/* Hero Body Grid: Image on Left, Description on Right */}
        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Program Illustration Image Container with Fixed Aspect Height */}
          <div className="flex justify-center lg:col-span-6">
            {image && (
              <ImageWithSkeleton
                src={image}
                alt={title}
                wrapperClassName="w-full max-w-lg h-[260px] sm:h-[320px] lg:h-[380px] flex items-center justify-center"
                className="h-full max-h-full w-full object-contain pointer-events-none"
              />
            )}
          </div>

          {/* Right Column: About Section Text Container with Fixed Min-Height */}
          <div className="flex flex-col justify-center lg:col-span-6 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
            <h2 className="font-fredoka text-2xl font-bold text-[#000000] sm:text-3xl lg:text-[34px]">
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
