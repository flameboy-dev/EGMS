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

import pictureBooksImg from '@/assets/images/Picture_Books.png';
import playingBlocksImg from '@/assets/images/Playing_Blocks.png';
import scienceImg from '@/assets/images/Science.png';
import paintingImg from '@/assets/images/Painting.png';
import codingImg from '@/assets/images/Coding.png';
import sportsActivityImg from '@/assets/images/SportsActivity.png';
import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg7Img from '@/assets/images/Academic_Programs7.jpg';
import sports8Img from '@/assets/images/sports8.jpg';
import annualFunc17Img from '@/assets/images/Annual_Function17.jpg';
import awards2Img from '@/assets/images/Awards2.jpg';
import goutamGiriImg from '@/assets/images/Goutam_Giri.jpg';
import somaJanaGiriImg from '@/assets/images/Soma_Jana_Giri.jpeg';
import suparnaJanaImg from '@/assets/images/Suparna Jana.jpeg';
import moumitaBeraImg from '@/assets/images/Moumita_Bera.jpeg';
import swapanMondalImg from '@/assets/images/Swapan Mondal.jpeg';
import ankitaPanditRoutImg from '@/assets/images/Ankita Pandit Rout.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDFour() {
  const std4Paragraphs = [
    "At Ever Green Model School, Class IV represents the pinnacle of primary education, preparing students for middle school through rigorous academics and character building.",
    "The Class IV syllabus covers Bengali Reader, English Reader, Practice English, Grammar, Dual Math (Bengali & English Math), Science, Geography, History, Bengali G.K., Conversation practice, Computer lab, and Drawing activities.",
  ];

  const std4Subjects = [
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

  const std4Activities = [
    {
      id: 'std4-reading',
      title: 'Advanced Grammar & Writing',
      description:
        'Advanced English & Bengali grammar, essay composition, and public speaking confidence.',
      image: pictureBooksImg,
      icon: UserCheck,
    },
    {
      id: 'std4-math',
      title: 'Advanced Math Logic',
      description:
        'Complex word problems, fractions, geometry basics, and competitive math puzzle solving.',
      image: playingBlocksImg,
      icon: BookOpen,
    },
    {
      id: 'std4-science',
      title: 'Science & Geography Projects',
      description:
        'Hands-on science experiments, geographical map reading, and environmental projects.',
      image: scienceImg,
      icon: ShieldCheck,
    },
    {
      id: 'std4-art',
      title: 'Fine Art & Creative Crafts',
      description:
        'Mastering oil pastels, charcoal sketching, freehand drawing, and 3D paper crafts.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std4-tech',
      title: 'Computer Lab & Typing',
      description:
        'Creating Word documents, PowerPoint presentations, Excel tables, and Windows CMD commands.',
      image: codingImg,
      icon: Sprout,
    },
    {
      id: 'std4-sports',
      title: 'Athletics & Team Leadership',
      description:
        'Track events, relay races, football, and physical leadership development.',
      image: sportsActivityImg,
      icon: Heart,
    },
  ];

  const std4InfoCards = [
    { title: "Age Group", value: "9 - 10 years" },
    { title: "Learning Approach", value: "Graduation Readiness & Leadership" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Rigorous & Empowering" },
  ];

  const std4Teachers = [
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
      image: suparnaJanaImg,
    },
    {
      name: 'Moumita Bera',
      image: moumitaBeraImg,
    },
    {
      name: 'Swapan Mondal',
      image: swapanMondalImg,
    },
    {
      name: 'Ankita Pandit Rout',
      image: ankitaPanditRoutImg,
    },
  ];

  const std4GalleryPhotos = [
    { src: academicProg7Img, caption: 'STD IV Mathematical Logic & Primary Assessment Exam' },
    { src: sports8Img, caption: 'Sports Day Victory Lap & Medal Parade' },
    { src: annualFunc17Img, caption: 'Talented Senior Students Receiving Trophies on Stage' },
    { src: awards2Img, caption: 'Academic Merit & Excellence Championship Awards' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - IV Program"
          subTagline="Age: 9+ | Primary graduation grade focusing on leadership, science, and math logic."
          aboutTitle="About STD - IV"
          aboutParagraphs={std4Paragraphs}
          image={std4Img}
          prevLink="/programs/stdthree"
          nextLink={null}
        />
        <Curriculum
          title="STD - IV Curriculum & Subjects"
          subtitle="Comprehensive primary graduation curriculum covering advanced languages, dual math, science, and humanities."
          subjects={std4Subjects}
        />
        <Activities
          title="STD - IV Class Activities"
          subtitle="Advanced classroom activities promoting scientific inquiry, math logic, leadership, and sports."
          activities={std4Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - IV program at a glance."
          infoCards={std4InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - IV students."
          images={std4GalleryPhotos}
        />
        <TeacherProfiles teachers={std4Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDFour;
