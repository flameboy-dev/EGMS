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

// Import Illustrations
import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';

function Activities({
  title = "Activities",
  subtitle = "Learning becomes more meaningful when children can explore, create, play, and discover through everyday experiences.",
  activities = [],
}) {
  const defaultActivities = [
    {
      id: 'storytelling',
      title: 'Storytelling & Picture Reading',
      description:
        'Children listen to stories, explore picture books, and participate in conversations that develop their imagination, vocabulary, and listening skills.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'music-rhymes',
      title: 'Music, Rhymes & Movement',
      description:
        'Children enjoy nursery rhymes, action songs, music, and simple movements that make learning fun and interactive.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'puzzles-games',
      title: 'Puzzles & Learning Games',
      description:
        'Age-appropriate puzzles, matching games, building blocks, and educational games introduce children to concepts through hands-on exploration.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'art-creative',
      title: 'Art & Creative Play',
      description:
        'Drawing, colouring, painting, paper crafts, and creative activities give children opportunities to express their ideas freely.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'nature-exploration',
      title: 'Nature & Exploration',
      description:
        'Children explore their surroundings through simple nature activities, observation, gardening, and conversations about the world around them.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'indoor-outdoor',
      title: 'Indoor & Outdoor Play',
      description:
        'A combination of indoor and outdoor games helps children stay active while developing balance, coordination, teamwork, and confidence.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const itemsToRender = activities && activities.length > 0 ? activities : defaultActivities;

  return (
    <section className="w-full bg-[#EBF1E5] px-6 py-14 md:px-12 lg:px-16 lg:py-20 border-t border-[#1E3F20]/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start space-y-2">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            {title}
          </h2>
          <p className="max-w-4xl font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none">
            {subtitle}
          </p>
        </div>

        {/* 6 Activity Cards Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-2 lg:grid-cols-3">
          {itemsToRender.map((item) => (
            <ProgramCard
              key={item.id || item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              icon={item.icon || UserCheck}
              bgColor="bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
