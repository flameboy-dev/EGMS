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
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg4Img from '@/assets/images/Academic_Programs4.jpg';
import academicProgImg from '@/assets/images/Academic_Programs.jpg';
import sports7Img from '@/assets/images/sports7.jpg';
import annualFunc2Img from '@/assets/images/Annual_Function2.jpg';
import talentExamImg from '@/assets/images/TalentExamAwards.jpg';
import moumitaBeraImg from '@/assets/images/Moumita_Bera.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDTwo() {
  const std2Paragraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, Class II builds strong analytical and linguistic foundations through comprehensive grammar, dual mathematics, science, and humanities.
    </>,
    <>
      The Class II syllabus covers Bengali & English Reader, Practice English, Grammar, Dual Math (Bengali & English Math), Science, Geography, History, Bengali G.K., Conversation practice, Computer lab, and Drawing activities.
    </>,
  ];

  const std2Subjects = [
    'Bengali Reader',
    'English Reader',
    'Practice English',
    'Grammar',
    'Bengali Math',
    'English Math',
    'Science',
    'Geography',
    'History',
    'Bengali G.K. (B.G.K.)',
    'Conversation',
    'Computer',
    'Drawing',
  ];

  const std2Activities = [
    {
      id: 'std2-reading',
      title: 'Grammar & Writing',
      description:
        'Learning English & Bengali grammar rules, writing short essays, and reading comprehension.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'std2-math',
      title: 'Mental Math & Logic',
      description:
        'Multiplication tables, division puzzles, word problems, and mental math quick tricks.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'std2-science',
      title: 'Science & History Projects',
      description:
        'Conducting simple plant growth experiments and studying early human history timeline.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'std2-art',
      title: 'Pastel Art & Origami',
      description:
        'Mastering oil pastel color blending, drawing landscapes, and making 3D paper crafts.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std2-tech',
      title: 'MS Paint & Typing',
      description:
        'Drawing digital art in MS Paint, keyboard typing practice in Wordpad, and simple computer commands.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'std2-sports',
      title: 'Sports & Team Relays',
      description:
        'Running 100m races, high jump basics, team sports, and outdoor playground fun.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const std2InfoCards = [
    { title: "Age Group", value: "7 - 8 years" },
    { title: "Learning Approach", value: "Analytical & Concept-Driven" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Encouraging & Disciplined" },
  ];

  const std2Teachers = [
    {
      name: 'Moumita Bera',
      image: moumitaBeraImg,
    },
    {
      name: 'Swapan Mondal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
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

  const std2GalleryPhotos = [
    { src: academicProgImg, caption: 'STD II Bengali & English Rhyme Recitation' },
    { src: academicProg4Img, caption: 'Board Exercise & Grammar Concept Practice' },
    { src: sports7Img, caption: 'Tug of War Team Effort & Athletics Meet' },
    { src: annualFunc2Img, caption: 'Cultural Drama & Student Performance Showcase' },
    { src: talentExamImg, caption: 'Talent Search Exam Certificate & Awards' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - II Program"
          subTagline="Age: 7+ | Advanced primary curriculum focusing on grammar, science, and math."
          aboutTitle="About STD - II"
          aboutParagraphs={std2Paragraphs}
          image={std2Img}
          prevLink="/programs/stdone"
          nextLink="/programs/stdthree"
        />
        <Curriculum
          title="STD - II Curriculum & Subjects"
          subtitle="A comprehensive curriculum covering languages, mathematics, social studies, and computers."
          subjects={std2Subjects}
        />
        <Activities
          title="STD - II Class Activities"
          subtitle="Interactive learning activities combining language practice, science, and computer skills."
          activities={std2Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - II program at a glance."
          infoCards={std2InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - II students."
          images={std2GalleryPhotos}
        />
        <TeacherProfiles teachers={std2Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDTwo;
