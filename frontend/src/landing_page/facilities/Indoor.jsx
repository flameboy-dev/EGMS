import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import FacilityApplicationModal from './FacilityApplicationModal';
import boardGamesImg from '@/assets/images/Board Games.png';
import familyImg from '@/assets/images/Family.png';
import nurseryProgImg from '@/assets/images/NurseryPrograms.png';
import { Gamepad2, Puzzle, Sparkles, Smile, Sun, Trophy } from 'lucide-react';

function Indoor() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const indoorParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, indoor play and cognitive games play a vital role in developing logical thinking, motor coordination, and social teamwork among young children.
    </>,
    <>
      Our indoor play zone features engaging <strong className="font-bold text-[#000000]">puzzle boxes, chess boards, indoor slide-down playsets, and strategy games</strong>. Additionally, we conduct dedicated <strong className="font-bold text-[#000000]">Yoga and Meditation sessions every Sunday</strong> where interested students can apply to improve focus, physical balance, and mental well-being.
    </>,
  ];

  const indoorPhotos = [
    {
      src: boardGamesImg,
      caption: 'Puzzle Boxes, Chess & Mind Strategy Games',
      tag: 'Cognitive Play',
    },
    {
      src: familyImg,
      caption: 'Sunday Special Yoga & Meditation Practice',
      tag: 'Sunday Yoga',
    },
    {
      src: nurseryProgImg,
      caption: 'Indoor Slide Down Play Station & Fun Zone',
      tag: 'Indoor Slides',
    },
  ];

  const activityCards = [
    {
      icon: Puzzle,
      title: 'Puzzle Box & Brain Teasers',
      description:
        'Shape sorting, 3D puzzle boxes, pattern matching, and problem-solving games that boost analytical intelligence.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Trophy,
      title: 'Chess & Strategy Games',
      description:
        'Guided chess sessions for young grandmasters to learn tactics, concentration, focus, and strategic foresight.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Smile,
      title: 'Slide Down Play Station',
      description:
        'Child-friendly indoor slides, play houses, and soft-mat play gear for energetic physical play indoors.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: Sun,
      title: 'Sunday Yoga & Meditation',
      description:
        'Special Sunday wellness sessions. Interested students can apply to participate in mindfulness and yoga routines.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Gamepad2,
      title: 'Board Games & Building Blocks',
      description:
        'Ludo, Carrom, Lego building blocks, and memory cards for positive peer interaction and friendship building.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Sparkles,
      title: 'Sensory & Fine Motor Play',
      description:
        'Sorting beads, clay modeling, tactile games, and balance activities for healthy sensory development.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title="Indoor Activities & Sunday Specials"
          subTagline="Puzzle boxes, chess, indoor slides, and Sunday Yoga & Meditation sessions for holistic growth."
          aboutTitle="Playful Learning & Cognitive Growth"
          aboutParagraphs={indoorParagraphs}
          image={boardGamesImg}
          prevLink="/facilities/computer"
          nextLink="/facilities/yoga"
          badgeText="Play & Wellness"
        />

        {/* Sunday Yoga Special Application Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-10 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-[#B9FF66] p-8 shadow-[0_8px_0_0_#191A23] sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#191A23] bg-white px-4 py-1 font-poppins text-xs font-bold text-[#1E3F20]">
                  <Sun className="h-4 w-4 text-[#1E3F20]" /> Sunday Special Sessions
                </div>
                <h2 className="mt-3 font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl md:text-4xl">
                  Join Sunday Yoga & Meditation Classes
                </h2>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base">
                  Every Sunday, interested students can participate in dedicated Yoga & Meditation sessions to enhance concentration, flexibility, and inner calm.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shrink-0 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-4 font-fredoka text-base font-semibold text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
              >
                Apply for Sunday Yoga
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <FacilitySlider
          title="Indoor Play & Sunday Activity Moments"
          subtitle="Discover our puzzle zone, chess tables, indoor slide setups, and Sunday wellness routines."
          slides={indoorPhotos}
        />

        {/* Activity Cards Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> Fun & Learning
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              Indoor Play & Cognitive Activities
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              Safe, joyful, and mentally stimulating indoor play facilities for all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activityCards.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-8 shadow-[0_6px_0_0_#191A23] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_0_0_#191A23] ${act.accentColor}`}
                >
                  <div>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#191A23] ${act.badgeBg} text-[#1E3F20] shadow-[0_3px_0_0_#191A23] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComp className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-fredoka text-2xl font-semibold text-[#000000] group-hover:text-[#1E3F20]">
                      {act.title}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/85 sm:text-base">
                      {act.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Modal Dialog */}
        <FacilityApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          facilityTitle="Sunday Yoga & Meditation"
          programType="Sunday Yoga & Meditation Session"
        />
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Indoor;
