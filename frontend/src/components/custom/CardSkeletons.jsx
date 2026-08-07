import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function ProgramCardSkeleton() {
  return (
    <div className="relative flex h-[331px] w-full max-w-[387px] flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23]/20 bg-[#F3F3F3] p-8 shadow-sm">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-3/4 rounded-lg bg-gray-300/70" />
        <Skeleton className="h-5 w-1/3 rounded-md bg-gray-300/50" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-[140px] w-[160px] rounded-2xl bg-gray-300/70" />
      </div>
    </div>
  );
}

export function FacilityCardSkeleton() {
  return (
    <div className="relative flex h-[306px] w-full max-w-[600px] flex-col justify-between overflow-hidden rounded-[45px] border-2 border-[#191A23]/20 bg-[#F3F3F3] p-8 md:p-10 shadow-sm">
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-8 w-36 rounded-lg bg-gray-300/70" />
        <Skeleton className="h-8 w-48 rounded-lg bg-gray-300/70" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-11 w-11 rounded-full bg-gray-300/70" />
        <Skeleton className="h-5 w-28 rounded-md bg-gray-300/50" />
      </div>
      <div className="absolute right-4 bottom-4">
        <Skeleton className="h-[160px] w-[180px] rounded-2xl bg-gray-300/70" />
      </div>
    </div>
  );
}
