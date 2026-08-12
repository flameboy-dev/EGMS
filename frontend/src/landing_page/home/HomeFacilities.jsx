import React from 'react';
import FacilityCard from '@/components/custom/FacilityCard';
import { FacilityCardSkeleton } from '@/components/custom/CardSkeletons';
import { useLanguage } from '@/context/LanguageContext';

// Import Facility Illustrations
import smartClassImg from '@/assets/images/Smart_Class.png';
import paintingImg from '@/assets/images/Painting.png';
import schoolBusImg from '@/assets/images/School_Bus.png';
import codingImg from '@/assets/images/Coding.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import familyImg from '@/assets/images/Family.png';

function HomeFacilities({ isLoading = false }) {
  const { t } = useLanguage();

  const facilitiesData = [
    {
      id: 'smart-classrooms',
      titleLines: [t('Smart'), t('Classrooms')],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#F3F3F3]',
      image: smartClassImg,
      isDarkCard: false,
      linkTo: '/facilities/smartclass',
    },
    {
      id: 'art-craft',
      titleLines: [t('Art &'), t('Craft')],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#94ECBE]',
      image: paintingImg,
      isDarkCard: false,
      linkTo: '/facilities/art',
    },
    {
      id: 'transport-facility',
      titleLines: [t('Transport'), t('Facility')],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#1E3F20]',
      image: schoolBusImg,
      isDarkCard: true,
      linkTo: '/facilities/transport',
    },
    {
      id: 'computer-basics',
      titleLines: [t('Computer'), t('Basics')],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#F3F3F3]',
      image: codingImg,
      isDarkCard: false,
      linkTo: '/facilities/computer',
    },
    {
      id: 'indoor-activities',
      titleLines: [t('Indoor'), t('Activities')],
      titleBadgeBg: 'bg-white',
      cardBg: 'bg-[#94ECBE]',
      image: boardGamesImg,
      isDarkCard: false,
      linkTo: '/facilities/indoor',
    },
    {
      id: 'yoga-meditation',
      titleLines: [t('Yoga &'), t('Meditation')],
      titleBadgeBg: 'bg-[#B9FF66]',
      cardBg: 'bg-[#1E3F20]',
      image: familyImg,
      isDarkCard: true,
      linkTo: '/facilities/yoga',
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-10 sm:py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col items-start space-y-2 sm:space-y-3">
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {t("Facilities That We Offer")}
          </h2>
          <p className="max-w-4xl font-poppins text-sm sm:text-base text-[#000000]/80 sm:text-lg lg:max-w-none">
            {t("Everything your child needs to learn, play, and grow in a safe and nurturing environment.")}
          </p>
        </div>

        {/* Facilities Grid */}
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
                  linkTo={facility.linkTo}
                />
              ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFacilities;