import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import ukgImg from '@/assets/images/U.K.G.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart Class.png';
import boardGamesImg from '@/assets/images/Board Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg2Img from '@/assets/images/Academic_Programs2.jpg';
import academicProg1Img from '@/assets/images/Academic_Programs1.jpg';
import art1Img from '@/assets/images/Art1.jpg';
import sports3Img from '@/assets/images/sports3.jpg';
import annualFunc5Img from '@/assets/images/Annual_Function5.jpg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function UKG() {
  const ukgParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, our Upper Kindergarten (U.K.G.) program bridges early childhood learning with structured primary education. Students engage in dual language reading, math, and digital basics.
    </>,
    <>
      The U.K.G. curriculum encompasses Bengali, Barna Porichoy, English & Practice English, Bengali Math & English Math, Bengali G.K., Conversation practice, Computer skills, and Drawing to build comprehensive academic readiness.
    </>,
  ];

  const ukgSubjects = [
    'Bengali',
    'Barna Porichoy',
    'English',
    'Practice English',
    'Bengali Math (B-Math)',
    'English Math (E-Math)',
    'Bengali General Knowledge (B.G.K.)',
    'Conversation',
    'Computer',
    'Drawing',
  ];

  const ukgActivities = [
    {
      id: 'ukg-reading',
      title: 'Reading & Conversation',
      description:
        'Reading short sentences, Barna Porichoy stories, and speaking confidently in daily class dialogues.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'ukg-recitation',
      title: 'Stage Poems & Recitation',
      description:
        'Reciting Bengali and English poems on stage and speaking comfortably in front of classmates.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'ukg-logic',
      title: 'Math Puzzles & Counting',
      description:
        'Simple addition games, B-Math and E-Math counting grids, shape puzzles, and pattern games.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'ukg-art',
      title: 'Drawing & Craft Work',
      description:
        'Drawing pictures, clay modeling, making paper crafts, and painting with watercolors.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'ukg-science',
      title: 'Science & Nature Tests',
      description:
        'Fun water experiments, checking weather charts, and learning interesting B.G.K. nature facts.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'ukg-computer',
      title: 'Computer & Active Games',
      description:
        'Simple computer mouse games, basic typing practice, running games, and active team play.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const ukgInfoCards = [
    { title: "Age Group", value: "5 - 6 years" },
    { title: "Learning Approach", value: "Primary Readiness & Practical" },
    { title: "Medium of Instruction", value: "Bengali & English" },
    { title: "Class Environment", value: "Interactive & Digital" },
  ];

  const ukgTeachers = [
    {
      name: 'Suparna Jana',
      image: 'https://images.unsplash.com/photo-1580894732413-b7ce40807dbe?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Moumita Bera',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Swapan Mondal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Modhusudan Maity',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Shrabani Guchhait',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const ukgGalleryPhotos = [
    { src: academicProg2Img, caption: 'UKG Dual Math & Abacus Practice Class' },
    { src: art1Img, caption: 'Creative Art & Sunday Drawing School Session' },
    { src: sports3Img, caption: 'Relay Race & Outdoor Sports Readiness' },
    { src: annualFunc5Img, caption: 'UKG Costume Drama & Stage Performance' },
    { src: academicProg1Img, caption: 'Paper Folding & Phonics Workshop Showcase' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="U.K.G. Program"
          subTagline="Age: 5+ | Academic readiness through dual math, language practice, and computers."
          aboutTitle="About U.K.G."
          aboutParagraphs={ukgParagraphs}
          image={ukgImg}
          prevLink="/programs/lkg"
          nextLink="/programs/stdone"
        />
        <Curriculum
          title="U.K.G. Curriculum & Subjects"
          subtitle="Comprehensive primary-readiness subjects spanning language, arithmetic, and technology."
          subjects={ukgSubjects}
        />
        <Activities
          title="U.K.G. Class Activities"
          subtitle="Clear and cheerful activities preparing children for Primary School."
          activities={ukgActivities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the U.K.G. program at a glance."
          infoCards={ukgInfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our U.K.G. students."
          images={ukgGalleryPhotos}
        />
        <TeacherProfiles teachers={ukgTeachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default UKG;
