import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';

function TeacherProfiles({
  title = "MEET YOUR TEACHERS",
  subtitle = "Meet the caring educators who guide, support, and inspire our students throughout their journey.",
  teachers = [],
}) {
  const defaultTeachers = [
    {
      name: 'Goutam Giri',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Soma Jana Giri',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Suparna Jana',
      image: 'https://images.unsplash.com/photo-1580894732413-b7ce40807dbe?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Moumita Bera',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const teachersToRender = teachers && teachers.length > 0 ? teachers : defaultTeachers;
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -290, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 290, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20 border-t border-[#1E3F20]/10">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Row with Title and Slider Navigation Controls */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start space-y-2">
            <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px] uppercase">
              {title}
            </h2>
            <p className="max-w-3xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
              {subtitle}
            </p>
          </div>

          {/* Navigation Arrows for Horizontal Scroll */}
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#191A23] bg-white text-[#000000] shadow-[0_3px_0_0_#191A23] transition-all hover:bg-[#1C3A1F] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#191A23] bg-white text-[#000000] shadow-[0_3px_0_0_#191A23] transition-all hover:bg-[#1C3A1F] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Single Row Horizontal Scroll Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teachersToRender.map((teacher, idx) => (
            <div
              key={idx}
              className="flex w-[220px] sm:w-[250px] md:w-[270px] shrink-0 snap-start flex-col items-center group"
            >
              {/* Soft Yellow Top Card Container */}
              <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] rounded-[32px] border-2 border-[#191A23] bg-[#EAF2A1] shadow-[0_5px_0_0_#191A23] overflow-hidden transition-all duration-200 group-hover:-translate-y-1">
                {teacher.image ? (
                  <ImageWithSkeleton
                    src={teacher.image}
                    alt={teacher.name}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#EAF2A1] font-fredoka text-xl font-bold text-[#1C3A1F]/60 px-4 text-center">
                    {teacher.name}
                  </div>
                )}
              </div>

              {/* Teacher Name Label */}
              <h3 className="mt-3 font-poppins text-base font-semibold text-[#000000] sm:text-lg text-center leading-snug">
                {teacher.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeacherProfiles;
