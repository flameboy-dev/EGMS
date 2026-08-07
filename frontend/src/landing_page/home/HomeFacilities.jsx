import React from 'react';
import FacilityCard from '@/components/custom/FacilityCard';
import { FacilityCardSkeleton } from '@/components/custom/CardSkeletons';

// Import Facility Illustrations
import smartClassImg from '@/assets/images/Smart Class.png';
import paintingImg from '@/assets/images/Painting.png';
import schoolBusImg from '@/assets/images/School Bus.png';
import codingImg from '@/assets/images/Coding.png';
import boardGamesImg from '@/assets/images/Board Games.png';
import familyImg from '@/assets/images/Family.png';

function HomeFacilities({ isLoading = false }) {
  const facilitiesData = [
    {
      id: 'smart-classrooms',
      titleLines: ['Smart', 'Classrooms'],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#F3F3F3]',
      image: smartClassImg,
      isDarkCard: false,
    },
    {
      id: 'art-craft',
      titleLines: ['Art &', 'Craft'],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#94ECBE]',
      image: paintingImg,
      isDarkCard: false,
    },
    {
      id: 'transport-facility',
      titleLines: ['Transport', 'Facility'],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#1E3F20]',
      image: schoolBusImg,
      isDarkCard: true,
    },
    {
      id: 'computer-basics',
      titleLines: ['Computer', 'Basics'],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#F3F3F3]',
      image: codingImg,
      isDarkCard: false,
    },
    {
      id: 'indoor-activities',
      titleLines: ['Indoor', 'Activities'],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#94ECBE]',
      image: boardGamesImg,
      isDarkCard: false,
    },
    {
      id: 'healthy-environment',
      titleLines: ['Healthy', 'Environment'],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#1E3F20]',
      image: familyImg,
      isDarkCard: true,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start space-y-3">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            Facilities That We Offer
          </h2>
          <p className="max-w-2xl font-poppins text-base text-[#000000]/80 sm:text-lg">
            Everything your child needs to learn, play, and grow in a safe and nurturing environment.
          </p>
        </div>

        {/* Facilities Grid with Skeleton Support */}
        <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <FacilityCardSkeleton key={idx} />
              ))
            : facilitiesData.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  titleLines={facility.titleLines}
                  titleBadgeBg={facility.titleBadgeBg}
                  cardBg={facility.cardBg}
                  image={facility.image}
                  isDarkCard={facility.isDarkCard}
                  linkTo="/facilities"
                />
              ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFacilities;