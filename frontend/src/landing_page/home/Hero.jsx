import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/images/HeroImage.png';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import { useLanguage } from '@/context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#ECF39E] pt-2 pb-10 md:pt-3 md:pb-14 lg:pt-3 lg:pb-16 flex flex-col justify-center">
      {/* Hero Section */}
      <section className="w-full px-6 pt-0 pb-4 md:px-12 lg:px-16 flex items-start justify-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Content Column */}
          <div className="flex flex-col items-start justify-center lg:col-span-6">
            <h1 className="font-fredoka text-3xl font-semibold leading-[1.15] tracking-tight text-[#000000] sm:text-5xl lg:text-[56px]">
              {t("Where Little Minds Grow Into Bright Futures")}
            </h1>

            <p className="mt-4 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-lg lg:max-w-none">
              {t("At Ever Green Model School, we provide a safe, joyful, and nurturing environment where every child learns through play, creativity, and discovery.")}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex w-full flex-col sm:w-auto sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <Link
                to="/enroll"
                className="inline-flex items-center justify-center rounded-2xl bg-[#344E41] px-6 py-3.5 font-poppins text-base font-medium text-[#F6FAEF] shadow-md transition-all hover:bg-[#1E3F20] hover:shadow-lg sm:px-8 sm:py-4.5 sm:text-lg"
              >
                {t('Enroll Now')}
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#344E41] bg-transparent px-6 py-3.5 font-poppins text-base font-medium text-[#1E3F20] transition-all hover:bg-[#344E41]/10 sm:px-8 sm:py-4.5 sm:text-lg"
              >
                {t('Explore Programs')}
              </Link>
            </div>
          </div>

          {/* Right Illustration Column with Skeleton Loading */}
          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <ImageWithSkeleton
              src={heroImage}
              alt="Ever Green Model School Classroom Illustration"
              wrapperClassName="h-auto w-full max-w-md max-h-[560px] sm:max-w-lg lg:max-w-xl"
              className="h-auto w-full max-w-md max-h-[560px] object-contain sm:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;