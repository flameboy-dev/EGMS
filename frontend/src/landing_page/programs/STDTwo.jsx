import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import std2Img from '@/assets/images/STD-II.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart Class.png';
import boardGamesImg from '@/assets/images/Board Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDTwo() {
  const std2Paragraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, Class II builds strong analytical and linguistic foundations through comprehensive grammar, dual mathematics, science, and humanities.
    </>,
    <>
      Students study Bengali & Bengali Grammar, English Reader & English Grammar, Bengali Math & English Math, Science, History, Geography, Bengali G.K., Conversation practice, Computer lab, and Drawing.
    </>,
  ];

  const std2Subjects = [
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

  const std2Activities = [
    {
      id: 'std2-grammar',
      title: 'Grammar & Creative Writing',
      description:
        'Simple English & Bengali grammar, short paragraph writing, and spelling practice.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'std2-performing',
      title: 'Recitation & Speech',
      description:
        'Poem recitation competitions, group reading, and speaking confidently in class.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'std2-math',
      title: 'Mental Math & Logic',
      description:
        'Multiplication tables, division concepts, mental math quizzes, and logic games.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'std2-art',
      title: 'Drawing & Craft Work',
      description:
        'Coloring landscapes, paper craft models, greeting cards, and drawing.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std2-science',
      title: 'Science & Nature Study',
      description:
        'Plant growth, water conservation, body health hygiene, and environmental awareness.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'std2-tech',
      title: 'Computer Practice & Games',
      description:
        'Typing practice in MS Word, computer games, outdoor sports, and physical games.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const std2InfoCards = [
    { title: "Age Group", value: "7 - 8 years" },
    { title: "Learning Approach", value: "Inquiry & Application-Based" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Analytical & Engaging" },
  ];

  const std2Teachers = [
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
      name: 'Ankita Pandit Rout',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
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

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - II Program"
          subTagline="Age: 7+ | Advanced language grammar, dual math, science, history, and geography."
          aboutTitle="About STD - II"
          aboutParagraphs={std2Paragraphs}
          image={std2Img}
          prevLink="/programs/stdone"
          nextLink="/programs/stdthree"
        />
        <Curriculum
          title="STD - II Curriculum & Subjects"
          subtitle="Enriching academic syllabus covering grammar, mathematics, natural sciences, and social studies."
          subjects={std2Subjects}
        />
        <Activities
          title="STD - II Class Activities"
          subtitle="Simple, effective classroom activities focusing on grammar, mental math, science, and computer practice."
          activities={std2Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - II program at a glance."
          infoCards={std2InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - II students."
        />
        <TeacherProfiles teachers={std2Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDTwo;
