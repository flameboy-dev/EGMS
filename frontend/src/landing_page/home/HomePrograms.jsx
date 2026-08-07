import React from 'react';
import ProgramCard from '@/components/custom/ProgramCard';
import { ProgramCardSkeleton } from '@/components/custom/CardSkeletons';

// Import Program Illustrations
import nurseryImg from '@/assets/images/Nursery.png';
import lkgImg from '@/assets/images/L.K.G.png';
import ukgImg from '@/assets/images/U.K.G.png';
import std1Img from '@/assets/images/STD-I.png';
import std2Img from '@/assets/images/STD-II.png';
import std3Img from '@/assets/images/STD-III.png';
import std4Img from '@/assets/images/STD-IV.png';

function HomePrograms({ isLoading = false }) {
  const programsData = [
    {
      id: 'nursery',
      title: 'Nursery',
      age: 'Age: 3+',
      image: nurseryImg,
      bgColor: 'bg-[#9CC5A1]',
      linkTo: '/programs/nursery',
    },
    {
      id: 'lkg',
      title: 'L.K.G.',
      age: 'Age: 4+',
      image: lkgImg,
      bgColor: 'bg-[#ECF39E]',
      linkTo: '/programs/lkg',
    },
    {
      id: 'ukg',
      title: 'U.K.G',
      age: 'Age: 5+',
      image: ukgImg,
      bgColor: 'bg-[#9CC5A1]',
      linkTo: '/programs/ukg',
    },
    {
      id: 'std1',
      title: 'STD - I',
      age: 'Age: 6+',
      image: std1Img,
      bgColor: 'bg-[#ECF39E]',
      linkTo: '/programs/stdone',
    },
    {
      id: 'std2',
      title: 'STD - II',
      age: 'Age: 7+',
      image: std2Img,
      bgColor: 'bg-[#9CC5A1]',
      linkTo: '/programs/stdtwo',
    },
    {
      id: 'std3',
      title: 'STD - III',
      age: 'Age: 8+',
      image: std3Img,
      bgColor: 'bg-[#ECF39E]',
      linkTo: '/programs/stdthree',
    },
    {
      id: 'std4',
      title: 'STD - IV',
      age: 'Age: 9+',
      image: std4Img,
      bgColor: 'bg-[#9CC5A1]',
      linkTo: '/programs/stdfour',
    },
  ];

  return (
    <section className="w-full bg-[#F6FAEF] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start space-y-3">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            Our Learning Programs
          </h2>
          <p className="max-w-2xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg">
            Every program is thoughtfully designed to help children learn, explore, create, and grow with confidence.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <ProgramCardSkeleton key={idx} />
              ))
            : programsData.map((program) => (
                <ProgramCard
                  key={program.id}
                  title={program.title}
                  age={program.age}
                  image={program.image}
                  bgColor={program.bgColor}
                  linkTo={program.linkTo}
                />
              ))}
        </div>
      </div>
    </section>
  );
}

export default HomePrograms;