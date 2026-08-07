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

// Import Illustrations
import bannerImg from '@/assets/images/STD-III.png';
import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart Class.png';
import familyImg from '@/assets/images/Family.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import partnershipImg from '@/assets/images/Partnership.png';

function About() {
  const features = [
    {
      id: 'teachers',
      title: 'Qualified & Caring Teachers',
      description:
        'Our experienced teachers provide individual attention and create a supportive learning environment.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'activity',
      title: 'Activity-Based Learning',
      description:
        'Children learn through stories, games, projects, and hands-on experiences that make education enjoyable.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'safety',
      title: 'Safe & Secure Campus',
      description:
        'A child-friendly campus with safety measures that give parents peace of mind.',
      image: familyImg,
      icon: ShieldCheck,
    },
    {
      id: 'creative',
      title: 'Creative Development',
      description:
        'Art, music, dance, storytelling, and fun activities help children express themselves confidently.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'growth',
      title: 'Holistic  Growth',
      description:
        'We focus on academic excellence, emotional well-being, communication, and social skills.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'partnership',
      title: 'Parent-School Partnership',
      description:
        'We believe regular communication with parents helps every child achieve their full potential.',
      image: partnershipImg,
      icon: Heart,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Top Header & Sub-badge */}
        <div className="mb-6 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            About Us
          </h2>
          <span className="font-poppins text-sm font-medium text-[#1E3F20]/80">
            🌱 About Ever Green Model School
          </span>
        </div>

        {/* Nurturing Young Minds Banner Card */}
        <div className="relative mb-24 mt-16 mx-auto w-full max-w-[1240px] min-h-[347px] lg:h-[347px] rounded-[36px] bg-[#EBF1E5] px-8 py-8 md:px-12 md:py-10 flex items-center border border-[#1E3F20]/10 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 w-full">
            {/* Text Column */}
            <div className="z-10 lg:col-span-6 lg:max-w-[550px]">
              <h3 className="font-fredoka text-2xl font-bold leading-tight text-[#000000] sm:text-3xl md:text-[32px]">
                Nurturing Young Minds Since 2006
              </h3>
              <p className="mt-4 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base md:text-[16px]">
                Ever Green Model School is dedicated to providing a safe, caring, and inspiring learning environment where every child is encouraged to explore, discover, and grow. Since our establishment in 2006, we have focused on building strong academic foundations while nurturing creativity, confidence, and good values. Our experienced teachers, child-friendly classrooms, and activity-based learning approach help every student develop the skills needed for a bright future.
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

        {/* Why Choose Us Section Header */}
        <div className="mb-10 flex flex-col items-start space-y-3">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            Why Choose Us?
          </h2>
          <p className="max-w-3xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg">
            We believe every child deserves the best start in life. Our learning environment is designed to help children feel safe, happy, and excited to learn every day.
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