import React from 'react';
import {
  BookOpen,
  Calculator,
  Brain,
  Music,
  Palette,
  MessageSquare,
  Laptop,
  FlaskConical,
  Globe,
  Landmark,
  Sparkles,
  Smile,
} from 'lucide-react';

const getSubjectIcon = (subjectName = '') => {
  const name = subjectName.toLowerCase();
  if (name.includes('math')) return Calculator;
  if (name.includes('bengali') || name.includes('english') || name.includes('reader') || name.includes('grammer') || name.includes('barna') || name.includes('word')) return BookOpen;
  if (name.includes('drawing') || name.includes('art')) return Palette;
  if (name.includes('rhyme') || name.includes('music')) return Music;
  if (name.includes('g.k') || name.includes('gk') || name.includes('general knowledge')) return Brain;
  if (name.includes('conversation')) return MessageSquare;
  if (name.includes('computer')) return Laptop;
  if (name.includes('science')) return FlaskConical;
  if (name.includes('geoghraphy') || name.includes('geography')) return Globe;
  if (name.includes('history')) return Landmark;
  return Sparkles;
};

function Curriculum({
  title = "Curriculum & Subjects",
  subtitle = "A well-balanced syllabus designed for holistic learning and academic excellence.",
  subjects = [],
}) {
  return (
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20 border-t border-[#1E3F20]/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Title & Subtitle */}
        <div className="mb-10 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {title}
          </h2>
          <p className="max-w-4xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
            {subtitle}
          </p>
        </div>

        {/* Subjects Grid */}
        {subjects && subjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {subjects.map((sub, idx) => {
              const subjectName = typeof sub === 'string' ? sub : sub.name;
              const subjectDetail = typeof sub === 'object' ? sub.detail : null;
              const IconComponent = getSubjectIcon(subjectName);

              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-2xl border-2 border-[#191A23] bg-[#F6FAEF] p-4 shadow-[0_4px_0_0_#191A23] transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C3A1F] text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-fredoka text-base font-semibold text-[#000000] sm:text-lg leading-snug">
                      {subjectName}
                    </h3>
                    {subjectDetail && (
                      <p className="font-poppins text-xs text-[#1E3F20]/75 mt-0.5">
                        {subjectDetail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="font-poppins text-base text-[#1E3F20]">Subject list coming soon.</p>
        )}
      </div>
    </section>
  );
}

export default Curriculum;
