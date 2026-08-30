import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function PageSkeleton() {
  return (
    <div className="w-full min-h-[70vh] bg-[#F6FAEF] px-6 py-12 md:px-12 lg:px-16 animate-pulse">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Banner Skeleton */}
        <div className="h-64 md:h-80 w-full rounded-3xl bg-[#ECF39E]/60 p-8 flex flex-col justify-end space-y-4">
          <Skeleton className="h-10 w-2/3 md:w-1/2 rounded-xl bg-[#1E3F20]/20" />
          <Skeleton className="h-6 w-1/3 rounded-lg bg-[#1E3F20]/15" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          <Skeleton className="h-64 w-full rounded-2xl bg-gray-200/80" />
          <Skeleton className="h-64 w-full rounded-2xl bg-gray-200/80" />
          <Skeleton className="h-64 w-full rounded-2xl bg-gray-200/80" />
        </div>
      </div>
    </div>
  );
}

export default PageSkeleton;
