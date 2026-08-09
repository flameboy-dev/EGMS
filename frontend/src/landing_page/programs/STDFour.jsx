import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import std4Img from '@/assets/images/STD-IV.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart Class.png';
import boardGamesImg from '@/assets/images/Board Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDFour() {
  const std4Paragraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, Class IV represents the pinnacle of primary education, preparing students for middle school through rigorous academics and character building.
    </>,
    <>
      Students master advanced Bengali & Bengali Grammar, English Reader & English Grammar, Bengali Math & English Math, Science, History, Geography, Bengali G.K., Conversation practice, Computer technology, and Drawing.
    </>,
  ];

  const std4Subjects = [
    'Bengali',
    'Bengali Grammar',
    'English Reader',
    'English Grammar',
    'Bengali Math',
    'English Math',
    'Science',
    'History',
    'Geography',
    'Bengali G.K. (B.G.K.)',
    'Conversation',
    'Computer',
    'Drawing',
  ];

  const std4Activities = [
    {
      id: 'std4-speech',
      title: 'Speech & Composition',
      description:
        'Literature comprehension, essay composition, speech presentation, and debate practice.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'std4-stage',
      title: 'Stage Performance & Music',
      description:
        'Poem recitation, drama skits, group singing, and annual function performance.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'std4-math',
      title: 'Advanced Math & Logic',
      description:
        'Decimals, percentages, geometry shapes, word problem solving, and math quizzes.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'std4-art',
      title: 'Art & Craft Projects',
      description:
        'Painting, drawing, craft projects, and decorating classroom displays.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std4-science',
      title: 'Science Projects & Geography',
      description:
        'Science project models, plant respiration, Indian geography, and map plotting.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'std4-tech',
      title: 'Computer Practice & Athletics',
      description:
        'Computer applications, document formatting, track races, and team sports.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const std4InfoCards = [
    { title: "Age Group", value: "9 - 10 years" },
    { title: "Learning Approach", value: "Advanced Conceptual & Leadership" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Middle-School Preparatory" },
  ];

  const std4Teachers = [
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
    {
      name: 'Swapan Mondal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Ankita Pandit Rout',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - IV Program"
          subTagline="Age: 9+ | Primary wing graduation preparing students for middle school challenges."
          aboutTitle="About STD - IV"
          aboutParagraphs={std4Paragraphs}
          image={std4Img}
          prevLink="/programs/stdthree"
          nextLink={null}
        />
        <Curriculum
          title="STD - IV Curriculum & Subjects"
          subtitle="Comprehensive primary wing graduation syllabus fostering academic excellence and middle school readiness."
          subjects={std4Subjects}
        />
        <Activities
          title="STD - IV Class Activities"
          subtitle="Grounded academic, artistic, and athletic activities preparing graduates for Middle School."
          activities={std4Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - IV program at a glance."
          infoCards={std4InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - IV students."
        />
        <TeacherProfiles teachers={std4Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDFour;
