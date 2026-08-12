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
  const [cardWidth, setCardWidth] = useState(560);

  // Touch Swipe Support for Mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      let calculatedCardWidth = 560;
      let gap = 24;

      if (window.innerWidth < 640) {
        calculatedCardWidth = Math.max(containerWidth - 28, 250);
        gap = 12;
      } else if (window.innerWidth < 1024) {
        calculatedCardWidth = Math.min(containerWidth - 48, 480);
        gap = 20;
      } else {
        calculatedCardWidth = 560;
        gap = 24;
      }

      setCardWidth(calculatedCardWidth);

      // Calculate offset so current index card is centered in the container
      const offset = (containerWidth - calculatedCardWidth) / 2 - currentIndex * (calculatedCardWidth + gap);
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
    <div className="relative w-full rounded-[24px] sm:rounded-[40px] md:rounded-[45px] bg-[#1E3F20] py-6 sm:py-12 md:py-16 overflow-hidden shadow-xl border border-[#191A23]">
      {/* Sliding Track Window with Touch Support */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex gap-3 sm:gap-5 md:gap-6 ${
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
              width={cardWidth}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 sm:mt-12 flex items-center justify-center space-x-4 sm:space-x-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Testimonial"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-white hover:text-[#B9FF66] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
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
                className={`h-3.5 w-3.5 sm:h-5 sm:w-5 transition-all duration-300 ${
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
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-white hover:text-[#B9FF66] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialSlider;
