import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import std3Img from '@/assets/images/STD-III.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg5Img from '@/assets/images/Academic_Programs5.jpg';
import academicProg3Img from '@/assets/images/Academic_Programs3.jpg';
import sports9Img from '@/assets/images/sports9.jpg';
import annualFunc6Img from '@/assets/images/Annual_Function6.jpg';
import talentExam1Img from '@/assets/images/TalentExamAwards1.jpg';
import goutamGiriImg from '@/assets/images/Goutam_Giri.jpg';
import somaJanaGiriImg from '@/assets/images/Soma_Jana_Giri.jpeg';
import moumitaBeraImg from '@/assets/images/Moumita_Bera.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDThree() {
  const std3Paragraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, Class III fosters deeper critical thinking and subject mastery across languages, dual mathematics, sciences, and social studies.
    </>,
    <>
      The curriculum includes Bengali & Bengali Grammar, English Reader & English Grammar, Bengali Math & English Math, Science, History, Geography, Bengali G.K., Conversation practice, Computer, and Drawing.
    </>,
  ];

  const std3Subjects = [
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

  const std3Activities = [
    {
      id: 'std3-essay',
      title: 'Essay Writing & Reading',
      description:
        'Prose literature, Bengali & English grammar exercises, essay writing, and story reviews.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'std3-poetry',
      title: 'Poetry Recitation & Music',
      description:
        'Stage poem recitation, patriotic songs, group music, and cultural performance practice.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'std3-math',
      title: 'Math Problems & Logic Games',
      description:
        'Long multiplication & division, fraction exercises, word problems, and math games.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'std3-art',
      title: 'Drawing & Poster Craft',
      description:
        'Drawing landscapes, poster making, clay models, and creative art projects.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std3-science',
      title: 'Science & Social Studies',
      description:
        'Simple science experiments, history timelines, map reading, and geography facts.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'std3-tech',
      title: 'Computer Lab & Sports',
      description:
        'Computer lab practice, typing exercises, track games, and playground sports.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const std3InfoCards = [
    { title: "Age Group", value: "8 - 9 years" },
    { title: "Learning Approach", value: "Problem-Solving & Analytical" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Tech-Enabled & Disciplined" },
  ];

  const std3Teachers = [
    {
      name: 'Goutam Giri',
      image: goutamGiriImg,
    },
    {
      name: 'Soma Jana Giri',
      image: somaJanaGiriImg,
    },
    {
      name: 'Suparna Jana',
      image: 'https://images.unsplash.com/photo-1580894732413-b7ce40807dbe?auto=format&fit=crop&q=80&w=400',
    },
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
  ];

  const std3GalleryPhotos = [
    { src: academicProg3Img, caption: 'STD III Environmental Science & Nature Exploration' },
    { src: academicProg5Img, caption: 'Interactive Geography & World Map Learning' },
    { src: sports9Img, caption: 'Football Match & Outdoor Physical Play' },
    { src: annualFunc6Img, caption: 'Folk Dance & Stage Rhythm Celebration' },
    { src: talentExam1Img, caption: 'State Level Talent Search Exam Achievers' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - III Program"
          subTagline="Age: 8+ | Advanced primary education emphasizing critical thinking and humanities."
          aboutTitle="About STD - III"
          aboutParagraphs={std3Paragraphs}
          image={std3Img}
          prevLink="/programs/stdtwo"
          nextLink="/programs/stdfour"
        />
        <Curriculum
          title="STD - III Curriculum & Subjects"
          subtitle="A comprehensive curriculum covering languages, mathematics, social studies, and sciences."
          subjects={std3Subjects}
        />
        <Activities
          title="STD - III Class Activities"
          subtitle="Engaging learning activities combining language practice, science, and computer skills."
          activities={std3Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - III program at a glance."
          infoCards={std3InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - III students."
          images={std3GalleryPhotos}
        />
        <TeacherProfiles teachers={std3Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDThree;
