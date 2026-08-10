import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkle } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

function TestimonialSlider({ testimonials = [] }) {
  const count = testimonials.length;
  // Duplicate array 3 times for infinite circular rotation
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Start in middle set at index count (first item of 2nd set)
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isAnimate, setIsAnimate] = useState(true);
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setIsAnimate(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= count * 2) {
      setIsAnimate(false);
      setCurrentIndex(currentIndex - count);
    } else if (currentIndex < count) {
      setIsAnimate(false);
      setCurrentIndex(currentIndex + count);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      let cardWidth = 560;
      let gap = 24;

      if (window.innerWidth < 640) {
        cardWidth = Math.min(containerWidth - 32, 480);
        gap = 16;
      } else if (window.innerWidth < 1024) {
        cardWidth = 480;
        gap = 20;
      }

      // Calculate offset so current index card is centered in the container
      const offset = (containerWidth - cardWidth) / 2 - currentIndex * (cardWidth + gap);
      setTranslateX(offset);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [currentIndex, count]);

  // Calculate real active index (0 to count - 1)
  const activeRealIndex = ((currentIndex % count) + count) % count;

  const handleIndicatorClick = (idx) => {
    setIsAnimate(true);
    setCurrentIndex(count + idx);
  };

  return (
    <div className="relative w-full rounded-[24px] sm:rounded-[40px] md:rounded-[45px] bg-[#1E3F20] py-8 sm:py-12 md:py-16 overflow-hidden shadow-xl border border-[#191A23]">
      {/* Sliding Track Window */}
      <div ref={containerRef} className="w-full overflow-hidden">
        <div
          className={`flex gap-4 sm:gap-5 md:gap-6 ${
            isAnimate ? 'transition-transform duration-500 ease-in-out' : ''
          }`}
          style={{ transform: `translateX(${translateX}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={`${testimonial.id || idx}-${idx}`}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 sm:mt-12 flex items-center justify-center space-x-6 sm:space-x-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Testimonial"
          className="flex h-10 w-10 items-center justify-center text-white hover:text-[#B9FF66] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
        </button>

        {/* 4-Pointed Star / Diamond Indicators */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className="p-1 cursor-pointer transition-all duration-200 hover:scale-125 focus:outline-none"
            >
              <Sparkle
                className={`h-3 w-3 sm:h-5 sm:w-5 transition-all duration-300 ${
                  idx === activeRealIndex
                    ? 'fill-[#B9FF66] text-[#B9FF66] scale-110'
                    : 'fill-white text-white opacity-70 hover:opacity-100'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Testimonial"
          className="flex h-10 w-10 items-center justify-center text-white hover:text-[#B9FF66] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialSlider;
