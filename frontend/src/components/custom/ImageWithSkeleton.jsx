import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'rounded-2xl bg-gray-300/60 dark:bg-gray-700/60',
  ...props
}) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof window !== 'undefined' && src) {
      const img = new Image();
      img.src = src;
      return img.complete;
    }
    return false;
  });

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && (
        <Skeleton
          className={`absolute inset-0 h-full w-full ${skeletonClassName}`}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
