import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'rounded-2xl bg-gray-300/60 dark:bg-gray-700/60',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && (
        <Skeleton
          className={`absolute inset-0 h-full w-full ${skeletonClassName}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
