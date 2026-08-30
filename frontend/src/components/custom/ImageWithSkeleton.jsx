import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'rounded-2xl bg-gray-300/60 dark:bg-gray-700/60',
  loading,
  decoding = 'async',
  fetchPriority,
  ...props
}) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // If fetchPriority is high, default loading to 'eager' instead of 'lazy'
  const computedLoading = loading || (fetchPriority === 'high' ? 'eager' : 'lazy');

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
        loading={computedLoading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
