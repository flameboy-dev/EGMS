import React from 'react';
import {
  UserCheck,
  BookOpen,
  ShieldCheck,
  Palette,
  Sprout,
  Heart,
} from 'lucide-react';
import ProgramCard from '@/components/custom/ProgramCard';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import { useLanguage } from '@/context/LanguageContext';

// Import Illustrations
import bannerImg from '@/assets/images/STD-III.png';
import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import familyImg from '@/assets/images/Family.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import partnershipImg from '@/assets/images/Partnership.png';

// Import Authority Images
import goutamGiriImg from '@/assets/images/Goutam_Giri.jpg';
import somaJanaGiriImg from '@/assets/images/Soma_Jana_Giri.jpeg';

function About() {
  const { t } = useLanguage();

  const authorities = [
    {
      id: 'goutam-giri',
      name: 'Goutam Giri',
      role: 'School Authority',
      image: goutamGiriImg,
    },
    {
      id: 'soma-jana-giri',
      name: 'Soma Jana Giri',
      role: 'School Authority',
      image: somaJanaGiriImg,
    },
    {
      id: 'pankaj-samanta',
      name: 'Pankaj Samanta',
      role: 'School Authority',
      image: partnershipImg,
    },
  ];

  const features = [
    {
      id: 'teachers',
      title: t('Qualified & Caring Teachers'),
      description: t(
        'Our experienced teachers provide individual attention and create a supportive learning environment.'
      ),
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'activity',
      title: t('Activity-Based Learning'),
      description: t(
        'Children learn through stories, games, projects, and hands-on experiences that make education enjoyable.'
      ),
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'safety',
      title: t('Safe & Secure Campus'),
      description: t(
        'A child-friendly campus with safety measures that give parents peace of mind.'
      ),
      image: familyImg,
      icon: ShieldCheck,
    },
    {
      id: 'creative',
      title: t('Creative Development'),
      description: t(
        'Art, music, dance, storytelling, and fun activities help children express themselves confidently.'
      ),
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'growth',
      title: t('Holistic  Growth'),
      description: t(
        'We focus on academic excellence, emotional well-being, communication, and social skills.'
      ),
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'partnership',
      title: t('Parent-School Partnership'),
      description: t(
        'We believe regular communication with parents helps every child achieve their full potential.'
      ),
      image: partnershipImg,
      icon: Heart,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-10 sm:py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Top Header & Sub-badge */}
        <div className="mb-6 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {t("About Us")}
          </h2>
          <span className="font-poppins text-xs sm:text-sm font-medium text-[#1E3F20]/80">
            {t("🌱 About Ever Green Model School")}
          </span>
        </div>

        {/* Nurturing Young Minds Banner Card */}
        <div className="relative mb-24 mt-16 mx-auto w-full max-w-[1240px] min-h-[347px] lg:h-[347px] rounded-[36px] bg-[#EBF1E5] px-8 py-8 md:px-12 md:py-10 flex items-center border border-[#1E3F20]/10 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 w-full">
            {/* Text Column */}
            <div className="z-10 lg:col-span-6 lg:max-w-[550px]">
              <h3 className="font-fredoka text-2xl font-bold leading-tight text-[#000000] sm:text-3xl md:text-[32px]">
                {t("Nurturing Young Minds Since 2006")}
              </h3>
              <p className="mt-4 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base md:text-[16px]">
                {t("Ever Green Model School is dedicated to providing a safe, caring, and inspiring learning environment where every child is encouraged to explore, discover, and grow. Since our establishment in 2006, we have focused on building strong academic foundations while nurturing creativity, confidence, and good values. Our experienced teachers, child-friendly classrooms, and activity-based learning approach help every student develop the skills needed for a bright future.")}
              </p>
            </div>

            {/* Illustration Column */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <ImageWithSkeleton
                src={bannerImg}
                alt="Nurturing Young Minds Classroom"
                wrapperClassName="h-auto w-full max-w-md lg:absolute lg:right-2 lg:top-1/2 lg:w-[612.51px] lg:h-[577.92px] lg:max-w-none lg:-translate-y-1/2"
                className="h-auto w-full max-w-md object-contain lg:w-[612.51px] lg:h-[577.92px] lg:max-w-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* School Authorities Section */}
        <div className="mb-20 sm:mb-24">
          <div className="mb-8 sm:mb-10 flex flex-col items-start space-y-2 sm:space-y-3">
            <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
              {t("School Authorities")}
            </h2>
            <p className="max-w-4xl font-poppins text-sm sm:text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
              {t("Guiding Ever Green Model School towards educational excellence and holistic growth.")}
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {authorities.map((person) => (
              <div
                key={person.id}
                className="flex w-full max-w-[300px] flex-col overflow-hidden rounded-[24px] sm:rounded-[32px] border-2 border-[#191A23] bg-[#EBF1E5] shadow-[0_4px_0_0_#191A23] sm:shadow-[0_5px_0_0_#191A23]"
              >
                {/* Portrait Image Frame */}
                <div className="relative h-[280px] sm:h-[320px] w-full border-b-2 border-[#191A23] bg-white">
                  <ImageWithSkeleton
                    src={person.image}
                    alt={person.name}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Profile Details */}
                <div className="flex flex-col items-center p-5 sm:p-6 text-center">
                  <h3 className="font-fredoka text-xl sm:text-2xl font-semibold text-[#000000]">
                    {person.name}
                  </h3>
                  <p className="mt-1 font-poppins text-xs sm:text-sm font-medium text-[#1E3F20]/80">
                    {t(person.role)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section Header */}
        <div className="mb-8 sm:mb-10 flex flex-col items-start space-y-2 sm:space-y-3">
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {t("Why Choose Us?")}
          </h2>
          <p className="max-w-4xl font-poppins text-sm sm:text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
            {t("We believe every child deserves the best start in life. Our learning environment is designed to help children feel safe, happy, and excited to learn every day.")}
          </p>
        </div>

        {/* 6 Feature Cards Grid re-using ProgramCard component with drop shadow */}
        <div className="grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <ProgramCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              icon={feature.icon}
              bgColor="bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;