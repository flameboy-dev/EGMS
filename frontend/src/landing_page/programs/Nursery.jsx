import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Activities from './Activities';
import ClassInfo from './ClassInfo';
import ProgramGallery from './ProgramGallery';
import TeacherProfiles from './TeacherProfiles';
import nurseryImg from '@/assets/images/Nursery.png';

import teacherImg from '@/assets/images/Teacher.png';
import smartClassImg from '@/assets/images/Smart_Class.png';
import boardGamesImg from '@/assets/images/Board_Games.png';
import paintingImg from '@/assets/images/Painting.png';
import growthImg from '@/assets/images/Growth.png';
import familyImg from '@/assets/images/Family.png';
import academicProg1Img from '@/assets/images/Academic_Programs1.jpg';
import healthyEnv4Img from '@/assets/images/Healthy_Environment4.jpg';
import healthyEnv2Img from '@/assets/images/Healthy_Environment2.jpg';
import sports6Img from '@/assets/images/sports6.jpg';
import annualFunc14Img from '@/assets/images/Annual_Function14.jpg';
import somaJanaGiriImg from '@/assets/images/Soma_Jana_Giri.jpeg';
import suparnaJanaImg from '@/assets/images/Suparna Jana.jpeg';
import ankitaPanditRoutImg from '@/assets/images/Ankita Pandit Rout.jpeg';
import madhusudanMaityImg from '@/assets/images/Madhusudan Maity.jpeg';
import shrabaniGuchhaitImg from '@/assets/images/Shrabani Guchhait.jpeg';
import { UserCheck, BookOpen, ShieldCheck, Palette, Sprout, Heart } from 'lucide-react';

function Nursery() {
  const nurseryParagraphs = [
    "At Ever Green Model School, our Nursery Program is thoughtfully designed to provide children with a joyful and nurturing introduction to education. We create a safe, caring, and stimulating environment where every child feels valued, encouraged, and excited to learn.",
    "Our Nursery curriculum introduces basic Bengali and English Alphabets, Math Numbers, engaging Bengali & English Rhymes, General Knowledge, and Drawing activities to build early language skills, numerical curiosity, and creative expression.",
  ];

  const nurserySubjects = [
    'Bengali (Alphabets)',
    'English (Alphabets)',
    'Math (Numbers)',
    'General Knowledge',
    'Bengali Rhyme',
    'English Rhyme',
    'Drawing',
  ];

  const nurseryActivities = [
    {
      id: 'nursery-storytelling',
      title: 'Storytelling & Picture Books',
      description:
        'Little ones listen to fun stories, look at colorful picture books, and learn new words in a cozy setting.',
      image: teacherImg,
      icon: UserCheck,
    },
    {
      id: 'nursery-rhymes',
      title: 'Nursery Rhymes & Music',
      description:
        'Singing along to Bengali and English rhymes, clapping hands, and dancing to fun music beats.',
      image: smartClassImg,
      icon: BookOpen,
    },
    {
      id: 'nursery-puzzles',
      title: 'Puzzles & Playing Blocks',
      description:
        'Shape sorters, big colorful building blocks, and fun matching games to play and learn together.',
      image: boardGamesImg,
      icon: ShieldCheck,
    },
    {
      id: 'nursery-art',
      title: 'Finger Painting & Clay',
      description:
        'Finger painting, playing with soft playdough clay, paper tearing, and coloring freely with crayons.',
      image: paintingImg,
      icon: Palette,
    },
    {
      id: 'nursery-nature',
      title: 'Garden & Nature Walks',
      description:
        'Walking in the school garden, touching green leaves, looking at flowers, and discovering nature.',
      image: growthImg,
      icon: Sprout,
    },
    {
      id: 'nursery-play',
      title: 'Fun Indoor & Outdoor Games',
      description:
        'Sandpit fun, running around safely, tossing soft balls, and playing happy group games.',
      image: familyImg,
      icon: Heart,
    },
  ];

  const nurseryInfoCards = [
    { title: "Age Group", value: "3 - 4 years" },
    { title: "Learning Approach", value: "Play-Based & Activity-Oriented" },
    { title: "Medium of Instruction", value: "Bengali & English" },
    { title: "Class Environment", value: "Child-Friendly & Interactive" },
  ];

  const nurseryTeachers = [
    {
      name: 'Soma Jana Giri',
      image: somaJanaGiriImg,
    },
    {
      name: 'Suparna Jana',
      image: suparnaJanaImg,
    },
    {
      name: 'Ankita Pandit Rout',
      image: ankitaPanditRoutImg,
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

  const nurseryGalleryPhotos = [
    { src: academicProg1Img, caption: 'Nursery Early Phonics & Rhymes Class' },
    { src: healthyEnv4Img, caption: 'Garden Exploring & Outdoor Activity' },
    { src: sports6Img, caption: 'Junior Fun Games & Spoon Marble Race' },
    { src: annualFunc14Img, caption: 'Nursery Group Dance in Festive Costumes' },
    { src: healthyEnv2Img, caption: 'Playgroup Storytelling & Clean Learning Space' },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <Hero
          title="Nursery Program"
          subTagline="Age: 3+ | Early phonics, numbers, nursery rhymes, and creative drawing."
          aboutTitle="About Nursery"
          aboutParagraphs={nurseryParagraphs}
          image={nurseryImg}
          prevLink={null}
          nextLink="/programs/lkg"
        />
        <Curriculum
          title="Nursery Curriculum & Subjects"
          subtitle="Foundational subjects introducing early language, numbers, rhymes, and art."
          subjects={nurserySubjects}
        />
        <Activities
          title="Nursery Class Activities"
          subtitle="Playful and gentle activities designed for little ones to explore and enjoy."
          activities={nurseryActivities}
        />
        <ClassInfo
          title="Class Information"
          subtitle="Everything parents need to know about the Nursery program at a glance."
          infoCards={nurseryInfoCards}
        />
        <ProgramGallery
          subtitle="A glimpse into the joyful moments, activities, and learning experiences of our Nursery students."
          images={nurseryGalleryPhotos}
        />
        <TeacherProfiles teachers={nurseryTeachers} />
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Nursery;
