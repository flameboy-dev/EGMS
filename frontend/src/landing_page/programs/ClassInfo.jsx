import React from 'react';

const cardColorPalette = [
  'bg-[#EAF2A1]', // Soft Yellow
  'bg-[#94ECBE]', // Soft Mint Green
  'bg-[#E8E2E2]', // Soft Pastel Gray/Pink
  'bg-[#9CC5A1]', // Soft Muted Green
];

function ClassInfo({
  title = "Class Information",
  subtitle = "Everything parents need to know about the program at a glance.",
  infoCards = [],
}) {
  const defaultCards = [
    { title: "Age Group", value: "3 - 4 years" },
    { title: "Learning Approach", value: "Play-Based & Activity-Oriented" },
    { title: "Medium of Instruction", value: "Bengali & English" },
    { title: "Class Environment", value: "Child-Friendly & Interactive" },
  ];

  const cardsToRender = infoCards && infoCards.length > 0 ? infoCards : defaultCards;

  return (
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20 border-t border-[#1E3F20]/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {title}
          </h2>
          <p className="max-w-4xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
            {subtitle}
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardsToRender.map((card, idx) => {
            const cardBg = card.bgColor || cardColorPalette[idx % cardColorPalette.length];
            return (
              <div
                key={idx}
                className={`flex flex-col justify-center rounded-[32px] border-2 border-[#191A23] ${cardBg} p-6 sm:p-7 shadow-[0_5px_0_0_#191A23] min-h-[160px] sm:min-h-[180px] transition-all duration-200 hover:-translate-y-1`}
              >
                <h3 className="font-fredoka text-xl font-bold text-[#000000] sm:text-2xl leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 font-poppins text-sm font-medium text-[#1E3F20] sm:text-base leading-relaxed">
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClassInfo;
