import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import academicProgImg from '@/assets/images/Academic_Programs.jpg';
import academicProg1Img from '@/assets/images/Academic_Programs1.jpg';
import academicProg3Img from '@/assets/images/Academic_Programs3.jpg';
import academicProg4Img from '@/assets/images/Academic_Programs4.jpg';
import academicProg5Img from '@/assets/images/Academic_Programs5.jpg';
import smartClassImg from '@/assets/images/Smart_Class.png';
import { Tv, Film, MessageCircle, Calculator, MonitorCheck, Zap, Sparkles } from 'lucide-react';

function SmartClass() {
  const smartClassParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, our Smart Classrooms blend cutting-edge digital infrastructure with interactive teaching methodologies. We transform traditional learning into a vibrant, visual, and highly interactive experience for students across all grades.
    </>,
    <>
      With high-definition Smart TVs installed in classrooms, students engage in visual animation teaching, digital storytelling, online spoken English modules, and accelerated mental math sessions that sharpen logic and problem-solving skills from an early age.
    </>,
  ];

  const smartClassPhotos = [
    {
      src: academicProgImg,
      caption: 'Digital Animation & Visual Concept Demonstration',
      tag: 'Smart Screen',
    },
    {
      src: academicProg1Img,
      caption: 'Interactive Classroom Visual Phonics Session',
      tag: 'Phonics & Reading',
    },
    {
      src: academicProg5Img,
      caption: 'Digital Geography & Interactive Map Learning',
      tag: 'Interactive Maps',
    },
    {
      src: academicProg3Img,
      caption: 'Teacher Guided Audio-Visual Concept Explanation',
      tag: 'Visual Teaching',
    },
    {
      src: academicProg4Img,
      caption: 'Interactive Spoken English Online Class Modules',
      tag: 'Spoken English',
    },
  ];

  const features = [
    {
      icon: Film,
      title: 'Video Animation Teaching',
      description:
        'Complex scientific concepts, Bengali & English stories, and geographical topics are presented through high-quality 2D/3D video animations for deeper retention.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: MessageCircle,
      title: 'Online Spoken English',
      description:
        'Interactive online modules delivered via Smart TVs to build natural pronunciation, phonics mastery, vocabulary, and conversational English confidence.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Calculator,
      title: 'Quick Math Problem Solving',
      description:
        'Live interactive math sessions teaching short tricks, visual pattern recognition, and quick calculation methods to make Mathematics enjoyable.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: Tv,
      title: 'Modern Smart TV Setup',
      description:
        'Large high-resolution Smart Screens in classrooms equipped with digital whiteboards, audio systems, and educational content streaming.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: MonitorCheck,
      title: 'Interactive E-Learning',
      description:
        'Quizzes, interactive diagrams, and digital worksheets that allow students to answer questions on screen and learn actively.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Zap,
      title: 'Engaging & Joyful Learning',
      description:
        'Audio-visual aids keep children attentive and excited throughout the school day, making complex subjects simple and intuitive.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title="Smart Classrooms"
          subTagline="Interactive digital learning, video animation, spoken English, and quick math problem solving."
          aboutTitle="Visual & Interactive Learning Environment"
          aboutParagraphs={smartClassParagraphs}
          image={smartClassImg}
          prevLink="/facilities/yoga"
          nextLink="/facilities/art"
          badgeText="Smart Education"
        />

        {/* Image Slider Showcase */}
        <FacilitySlider
          title="Smart Classroom Experience in Action"
          subtitle="Take a visual tour through our animated digital lessons, online spoken English, and interactive math sessions."
          slides={smartClassPhotos}
        />

        {/* Feature Highlights Cards Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#94ECBE] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> High Impact Facilities
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              Key Highlights of Smart Classrooms
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              Empowering young minds through technology-driven visual learning tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-8 shadow-[0_6px_0_0_#191A23] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_0_0_#191A23] ${feat.accentColor}`}
                >
                  <div>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#191A23] ${feat.badgeBg} text-[#1E3F20] shadow-[0_3px_0_0_#191A23] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComp className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-fredoka text-2xl font-semibold text-[#000000] group-hover:text-[#1E3F20]">
                      {feat.title}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/85 sm:text-base">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Banner CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-between rounded-[36px] border-2 border-[#191A23] bg-[#1E3F20] p-8 text-white shadow-[0_8px_0_0_#191A23] md:flex-row md:p-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="font-fredoka text-2xl font-bold text-[#B9FF66] sm:text-3xl">
                Experience Smart Learning at EGMS
              </h3>
              <p className="mt-2 font-poppins text-sm text-white/90 sm:text-base">
                Discover how our visual animations, Smart TV modules, and interactive sessions inspire a lifelong passion for learning.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-2xl border-2 border-[#191A23] bg-[#B9FF66] px-8 py-4 font-fredoka text-base font-medium text-[#000000] shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 md:mt-0"
            >
              Book a Campus Visit
            </Link>
          </div>
        </section>
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default SmartClass;
