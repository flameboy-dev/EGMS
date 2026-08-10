import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

function GalleryLightboxModal({
  isOpen,
  onClose,
  currentIndex = 0,
  photos = [],
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const photoSrc = typeof currentPhoto === 'string' ? currentPhoto : currentPhoto.src;
  const captionText = typeof currentPhoto === 'object' ? currentPhoto.caption : '';
  const categoryTag = typeof currentPhoto === 'object' ? currentPhoto.category : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:scale-110 hover:bg-white hover:text-black"
      >
        <X className="h-6 w-6 stroke-[2.5]" />
      </button>

      {/* Main Container */}
      <div className="relative flex h-full max-h-[85vh] w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#121318] p-4 sm:p-6 shadow-2xl">
        {/* Top Header Row in Modal */}
        <div className="mb-3 flex w-full items-center justify-between px-2 text-white">
          <div className="flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-[#B9FF66]" />
            <span className="font-poppins text-xs font-semibold text-white/80">
              Photo {currentIndex + 1} of {photos.length}
            </span>
          </div>
          {categoryTag && (
            <span className="rounded-full bg-[#B9FF66] px-3 py-0.5 font-poppins text-xs font-extrabold text-[#000000]">
              {categoryTag}
            </span>
          )}
        </div>

        {/* Image Display Area */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-black/40">
          <ImageWithSkeleton
            src={photoSrc}
            alt={captionText || `Gallery Image ${currentIndex + 1}`}
            wrapperClassName="h-full w-full flex items-center justify-center"
            className="h-full max-h-full w-full object-contain"
          />
        </div>

        {/* Bottom Caption Bar */}
        {captionText && (
          <div className="mt-3 w-full text-center px-4">
            <p className="font-fredoka text-lg font-semibold text-white sm:text-xl">
              {captionText}
            </p>
          </div>
        )}

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={onPrev}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-black sm:left-6"
          >
            <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
          </button>
        )}

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={onNext}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-black sm:right-6"
          >
            <ChevronRight className="h-7 w-7 stroke-[2.5]" />
          </button>
        )}
      </div>
    </div>
  );
}

export default GalleryLightboxModal;
