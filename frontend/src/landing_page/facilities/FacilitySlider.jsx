import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

function FacilitySlider({ title = "Facility Photo Gallery", subtitle, slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  if (!slides || slides.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <section className="w-full bg-[#F6FAEF] px-6 py-12 md:px-12 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-start space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Photo Showcase
          </div>
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="font-poppins text-sm text-[#1E3F20]/80 sm:text-base lg:max-w-none lg:whitespace-nowrap">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Slider Container */}
        <div
          className="relative w-full overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-white shadow-[0_8px_0_0_#191A23] transition-all hover:shadow-[0_12px_0_0_#191A23]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[300px] w-full sm:h-[400px] md:h-[480px] lg:h-[520px]">
            {slides.map((slide, idx) => {
              const imageSrc = typeof slide === 'string' ? slide : slide.src;
              const captionText = typeof slide === 'object' ? slide.caption : null;
              const tagText = typeof slide === 'object' ? slide.tag : null;

              return (
                <div
                  key={idx}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${idx === currentIndex
                    ? 'opacity-100 z-10 pointer-events-auto'
                    : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <ImageWithSkeleton
                    src={imageSrc}
                    alt={captionText || `Facility Image ${idx + 1}`}
                    wrapperClassName="h-full w-full bg-[#191A23]/5"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <div className="max-w-2xl space-y-2">
                      {tagText && (
                        <span className="inline-block rounded-full bg-[#B9FF66] px-3 py-1 font-poppins text-xs font-extrabold text-[#000000]">
                          {tagText}
                        </span>
                      )}
                      {captionText && (
                        <h3 className="font-fredoka text-xl font-bold text-white drop-shadow-md sm:text-2xl md:text-3xl">
                          {captionText}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Photo"
            className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#191A23] bg-white/90 text-[#000000] shadow-[0_4px_0_0_#191A23] backdrop-blur-md transition-all hover:bg-[#1E3F20] hover:text-white sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Photo"
            className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#191A23] bg-white/90 text-[#000000] shadow-[0_4px_0_0_#191A23] backdrop-blur-md transition-all hover:bg-[#1E3F20] hover:text-white sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border-2 border-[#191A23] bg-white/90 px-3.5 py-1.5 shadow-[0_3px_0_0_#191A23] backdrop-blur-md">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                  ? 'w-7 bg-[#1E3F20]'
                  : 'w-2.5 bg-[#191A23]/30 hover:bg-[#191A23]/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilitySlider;
