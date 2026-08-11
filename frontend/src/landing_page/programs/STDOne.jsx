import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import std1Img from '@/assets/images/STD-I.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg3Img from '@/assets/images/Academic_Programs3.jpg';
import academicProg4Img from '@/assets/images/Academic_Programs4.jpg';
import sports2Img from '@/assets/images/sports2.jpg';
import annualFunc4Img from '@/assets/images/Annual_Function4.jpg';
import puja2Img from '@/assets/images/swaraswatipuja2.jpg';
import moumitaBeraImg from '@/assets/images/Moumita_Bera.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function STDOne() {
  const std1Paragraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, Class I marks the start of formal elementary education with a rich multi-subject curriculum designed for analytical and linguistic growth.
    </>,
    <>
      Our Class I syllabus covers Bengali & Barna Porichoy, English Reader & Practice English, Bengali Math & English Math, Science, Geography, Bengali G.K., Conversation practice, Computer lab, and Drawing activities.
    </>,
  ];

  const std1Subjects = [
    'Bengali',
    'Barna Porichoy',
    'English Reader',
    'Practice English',
    'Bengali Math',
    'English Math',
    'Science',
    'Geography',
    'Bengali G.K. (B.G.K.)',
    'Conversation',
    'Computer',
    'Drawing',
  ];

  const std1Activities = [
    {
      id: 'std1-reading',
      title: 'Reading & Storytelling',
      description:
        'Reading prose stories, English & Bengali poem recitation, and guided class conversation practice.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'std1-conversation',
      title: 'Group Recitation & Songs',
      description:
        'Group singing, rhymes, national anthem practice, and classroom recitation.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'std1-math',
      title: 'Math Practice & Puzzles',
      description:
        'Addition and subtraction exercises, number puzzles, shapes, and counting games.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'std1-art',
      title: 'Drawing & Art Craft',
      description:
        'Drawing pictures, coloring with oil pastels, paper folding, and simple craft work.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'std1-science',
      title: 'Science & Geography Basics',
      description:
        'Learning about plants, animals, weather charts, and basic map reading.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'std1-tech',
      title: 'Computer Basics & Sports',
      description:
        'Learning computer parts, MS Paint drawing practice, running games, and sports.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const std1InfoCards = [
    { title: "Age Group", value: "6 - 7 years" },
    { title: "Learning Approach", value: "Subject-Oriented & Interactive" },
    { title: "Medium of Instruction", value: "English & Bengali" },
    { title: "Class Environment", value: "Structured & Supportive" },
  ];

  const std1Teachers = [
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

  const std1GalleryPhotos = [
    { src: academicProg4Img, caption: 'STD I Interactive Reading & Language Arts Practice' },
    { src: academicProg3Img, caption: 'Science Lab & Environmental Study Projects' },
    { src: sports2Img, caption: 'Annual Sports Sprint & Athletic Track Events' },
    { src: annualFunc4Img, caption: 'STD I Choir & Group Song Performance on Stage' },
    { src: puja2Img, caption: 'Saraswati Puja Student Anjali & Prayers' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="STD - I Program"
          subTagline="Age: 6+ | Comprehensive elementary curriculum in sciences, languages, and math."
          aboutTitle="About STD - I"
          aboutParagraphs={std1Paragraphs}
          image={std1Img}
          prevLink="/programs/ukg"
          nextLink="/programs/stdtwo"
        />
        <Curriculum
          title="STD - I Curriculum & Subjects"
          subtitle="Elementary academic framework spanning language arts, dual mathematics, science, and geography."
          subjects={std1Subjects}
        />
        <Activities
          title="STD - I Class Activities"
          subtitle="Engaging learning activities combining reading, math practice, science, and computer basics."
          activities={std1Activities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the STD - I program at a glance."
          infoCards={std1InfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our STD - I students."
          images={std1GalleryPhotos}
        />
        <TeacherProfiles teachers={std1Teachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default STDOne;
