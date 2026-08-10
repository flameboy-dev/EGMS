import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

// Existing Images for Gallery
import nurseryProgImg from '@/assets/images/NurseryPrograms.png';
import lkgProgImg from '@/assets/images/LKGPrograms.png';
import ukgProgImg from '@/assets/images/UKGPrograms.png';
import heroImg from '@/assets/images/HeroImage.png';
import smartClassImg from '@/assets/images/Smart Class.png';
import paintingImg from '@/assets/images/Painting.png';

function ProgramGallery({
  title = "Gallery",
  subtitle = "A glimpse into the joyful moments, activities, and learning experiences of our students.",
  images = [],
}) {
  const defaultImages = [
    { src: nurseryProgImg, caption: 'Classroom Activities & Learning' },
    { src: lkgProgImg, caption: 'Interactive Group Discussions & Games' },
    { src: ukgProgImg, caption: 'Creative Workshops & Storytelling' },
    { src: heroImg, caption: 'Campus Life & Everyday Explorations' },
    { src: smartClassImg, caption: 'Smart Classroom & Technology Learning' },
    { src: paintingImg, caption: 'Art & Expressive Craft Sessions' },
  ];

  const slides = images && images.length > 0 ? images : defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play slider every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

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
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  return (
    <section className="w-full bg-[#F6FAEF] px-6 py-14 md:px-12 lg:px-16 lg:py-20 border-t border-[#1E3F20]/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {title}
          </h2>
          <p className="max-w-4xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
            {subtitle}
          </p>
        </div>

        {/* Gallery Slider Card */}
        <div
          className="relative w-full overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white shadow-[0_6px_0_0_#191A23]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Image Display */}
          <div className="relative h-[280px] w-full sm:h-[400px] md:h-[480px] lg:h-[540px]">
            {slides.map((slide, idx) => {
              const imageSrc = typeof slide === 'string' ? slide : slide.src;
              const captionText = typeof slide === 'object' ? slide.caption : null;

              return (
                <div
                  key={idx}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <ImageWithSkeleton
                    src={imageSrc}
                    alt={captionText || `Gallery Image ${idx + 1}`}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover"
                  />

                  {/* Caption Overlay */}
                  {captionText && (
                    <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-6 sm:right-auto">
                      <div className="inline-block rounded-xl border-2 border-[#191A23] bg-[#F6FAEF]/95 px-4 py-2 text-xs sm:text-sm font-poppins font-medium text-[#000000] shadow-[0_3px_0_0_#191A23] backdrop-blur-sm">
                        {captionText}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prev / Next Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#191A23] bg-white text-[#000000] shadow-[0_3px_0_0_#191A23] transition-all hover:bg-[#1C3A1F] hover:text-white sm:left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#191A23] bg-white text-[#000000] shadow-[0_3px_0_0_#191A23] transition-all hover:bg-[#1C3A1F] hover:text-white sm:right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator Row */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 rounded-full border-2 border-[#191A23] bg-white/90 px-3 py-1.5 shadow-[0_2px_0_0_#191A23] sm:bottom-6 sm:right-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#1C3A1F]' : 'w-2.5 bg-[#191A23]/30 hover:bg-[#191A23]/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramGallery;
