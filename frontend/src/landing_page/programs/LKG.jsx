import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import lkgImg from '@/assets/images/L.K.G.png';

import pictureBooksImg from '@/assets/images/Picture_Books.png';
import rhymesMusicsImg from '@/assets/images/Rhymes_Musics.png';
import playingBlocksImg from '@/assets/images/Playing_Blocks.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import sportsActivityImg from '@/assets/images/SportsActivity.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import familyImg from '@/assets/images/Family.png';
import academicProgImg from '@/assets/images/Academic_Programs.jpg';
import healthyEnv2Img from '@/assets/images/Healthy_Environment2.jpg';
import sports5Img from '@/assets/images/sports5.jpg';
import annualFunc13Img from '@/assets/images/Annual_Function13.jpg';
import art1Img from '@/assets/images/Art1.jpg';
import somaJanaGiriImg from '@/assets/images/Soma_Jana_Giri.jpeg';
import moumitaBeraImg from '@/assets/images/Moumita_Bera.jpeg';
import suparnaJanaImg from '@/assets/images/Suparna Jana.jpeg';
import swapanMondalImg from '@/assets/images/Swapan Mondal.jpeg';
import madhusudanMaityImg from '@/assets/images/Madhusudan Maity.jpeg';
import shrabaniGuchhaitImg from '@/assets/images/Shrabani Guchhait.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function LKG() {
  const lkgParagraphs = [
    "At Ever Green Model School, our Lower Kindergarten (L.K.G.) program focuses on expanding vocabulary, early word recognition, and mathematical curiosity in a warm and collaborative setting.",
    "The L.K.G. syllabus covers Bengali Word Learning, English, Math, Word Book exercises, Bengali & English Rhymes, General Knowledge, and Drawing to foster effective communication, cognitive development, and creative confidence.",
  ];

  const lkgSubjects = [
    'Bengali (Word Remembers)',
    'English',
    'Math',
    'General Knowledge (G.K.)',
    'Bengali Rhyme',
    'English Rhyme',
    'Word Book',
    'Drawing',
  ];

  const lkgActivities = [
    {
      id: 'lkg-phonics',
      title: 'Phonics & Word Reading',
      description:
        'Learning letter sounds, matching pictures to words, and reading simple words from the Word Book.',
      image: pictureBooksImg,
      icon: UserCheck,
    },
    {
      id: 'lkg-rhymes',
      title: 'Action Songs & Rhymes',
      description:
        'Singing Bengali and English rhymes with fun actions, hand gestures, and playful music.',
      image: rhymesMusicsImg,
      icon: BookOpen,
    },
    {
      id: 'lkg-games',
      title: 'Memory & Number Puzzles',
      description:
        'Fun memory cards, counting blocks, and simple pattern matching games to build thinking skills.',
      image: playingBlocksImg,
      icon: ShieldCheck,
    },
    {
      id: 'lkg-art',
      title: 'Paper Craft & Coloring',
      description:
        'Origami paper folding, cotton painting, coloring pictures, and making simple paper crafts.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'lkg-nature',
      title: 'Planting & Garden Care',
      description:
        'Watering little plants, watching seeds sprout, gathering leaves, and enjoying nature walks.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'lkg-sports',
      title: 'Fun Sports & Relays',
      description:
        'Soft ball games, walking on low balance beams, running simple relays, and outdoor playground fun.',
      image: sportsActivityImg,
      icon: Heart,
    },
  ];

  const lkgInfoCards = [
    { title: "Age Group", value: "4 - 5 years" },
    { title: "Learning Approach", value: "Activity & Inquiry-Based" },
    { title: "Medium of Instruction", value: "Bengali & English" },
    { title: "Class Environment", value: "Creative & Collaborative" },
  ];

  const lkgTeachers = [
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
      name: 'Modhusudan Maity',
      image: madhusudanMaityImg,
    },
    {
      name: 'Shrabani Guchhait',
      image: shrabaniGuchhaitImg,
    },
  ];

  const lkgGalleryPhotos = [
    { src: academicProgImg, caption: 'LKG Early Vocabulary & Interactive Reading Session' },
    { src: healthyEnv2Img, caption: 'Clean Classroom Learning & Activity Environment' },
    { src: sports5Img, caption: 'Junior Obstacle Play & Balance Training' },
    { src: annualFunc13Img, caption: 'LKG Student Rhyme Recitation & Stage Performance' },
    { src: art1Img, caption: 'Word Book Practice & Creative Workshop' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="L.K.G. Program"
          subTagline="Age: 4+ | Building vocabulary, mathematical logic, rhymes, and creative skills."
          aboutTitle="About L.K.G."
          aboutParagraphs={lkgParagraphs}
          image={lkgImg}
          prevLink="/programs/nursery"
          nextLink="/programs/ukg"
        />
        <Curriculum
          title="L.K.G. Curriculum & Subjects"
          subtitle="Skill-building syllabus focusing on word retention, mathematics, and artistic expression."
          subjects={lkgSubjects}
        />
        <Activities
          title="L.K.G. Class Activities"
          subtitle="Simple, engaging activities for children to learn words, numbers, and crafts."
          activities={lkgActivities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the L.K.G. program at a glance."
          infoCards={lkgInfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our L.K.G. students."
          images={lkgGalleryPhotos}
        />
        <TeacherProfiles teachers={lkgTeachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default LKG;
