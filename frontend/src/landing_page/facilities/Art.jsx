import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import FacilityApplicationModal from './FacilityApplicationModal';
import art1Img from '@/assets/images/Art1.jpg';
import awards1Img from '@/assets/images/Awards1.jpg';
import annualFunc15Img from '@/assets/images/Annual_Function15.jpg';
import annualFunc11Img from '@/assets/images/Annual_Function11.jpg';
import academicProg1Img from '@/assets/images/Academic_Programs1.jpg';
import paintingImg from '@/assets/images/Painting.png';
import { Palette, Calendar, Trophy, Award, Scissors, Sparkles, Layers } from 'lucide-react';

function Art() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, creativity is nurtured as a fundamental form of self-expression and mental growth. Our comprehensive Art & Craft curriculum encourages every child to explore colors, shapes, textures, and imagination.
    </>,
    <>
      Every grade has 1 dedicated weekly drawing class integrated into the timetable. Furthermore, we run the specialized <strong className="font-bold text-[#000000]">Academic Drawing School every Sunday</strong>, where interested students can apply, take grade-upgrading exams held on Sundays, and showcase their talents in our annual Art Competition & Exhibition with prestigious awards.
    </>,
  ];

  const artPhotos = [
    {
      src: art1Img,
      caption: 'Sunday Academic Drawing School Studio & Exam Practice',
      tag: 'Academic Art',
    },
    {
      src: annualFunc11Img,
      caption: 'Annual Cultural Festival Traditional Costume & Stage Art',
      tag: 'Festive Art',
    },
    {
      src: awards1Img,
      caption: 'Annual Art Competition Award Presentation & Trophies',
      tag: 'Art Awards',
    },
    {
      src: annualFunc15Img,
      caption: 'Exhibition Stage Felicitation & Student Recognition',
      tag: 'Annual Exhibition',
    },
    {
      src: academicProg1Img,
      caption: 'Creative Crafting & Classroom Art Workshops',
      tag: 'Creative Craft',
    },
  ];

  const artOfferings = [
    {
      icon: Palette,
      title: 'Weekly Drawing Classes',
      description:
        'Every class gets one structured drawing & craft session every week as part of the core school curriculum.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Calendar,
      title: 'Sunday Academic Drawing School',
      description:
        'Special Sunday sessions for passionate students. Conducted weekly on Sundays with exams to upgrade into higher drawing levels.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Trophy,
      title: 'Annual Competition & Exhibition',
      description:
        'Grand annual exhibition where students display artwork, paper crafts, and paintings for parents and visitors to admire.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: Award,
      title: 'Winner Awards & Trophies',
      description:
        'Certificates, awards, and trophies awarded to top artists in various categories during the annual exhibition.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Layers,
      title: 'Pastel & Pencil Sketching',
      description:
        'Mastering oil pastel shading, color blending, charcoal sketching, and freehand drawing techniques step by step.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Scissors,
      title: 'Paper Crafting & Origami',
      description:
        'Paper folding, 3D paper crafts, greeting card creation, origami, and eco-friendly recycled craft projects.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title="Art & Craft & Drawing School"
          subTagline="Weekly drawing sessions, Sunday Academic Drawing School with exams, and annual art exhibitions."
          aboutTitle="Creative Expression & Fine Arts"
          aboutParagraphs={artParagraphs}
          image={paintingImg}
          prevLink="/facilities/smartclass"
          nextLink="/facilities/transport"
          badgeText="Creativity & Fine Arts"
        />

        {/* Sunday Drawing School Special Callout Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-10 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-[#ECF39E] p-8 shadow-[0_8px_0_0_#191A23] sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#191A23] bg-white px-4 py-1 font-poppins text-xs font-bold text-[#1E3F20]">
                  <Sparkles className="h-4 w-4 text-[#1E3F20]" /> Special Sunday Program
                </div>
                <h2 className="mt-3 font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl md:text-4xl">
                  Enroll in Sunday Academic Drawing School
                </h2>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base">
                  Interested students can join extra Sunday drawing sessions, give exams to upgrade into new drawing levels, and participate in our annual competition exhibition to win awards!
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shrink-0 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-4 font-fredoka text-base font-medium text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
              >
                Apply for Sunday Drawing School
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <FacilitySlider
          title="Student Artwork & Craft Showcase"
          subtitle="Explore paintings, pastel sketches, paper crafts, and annual exhibition award moments."
          slides={artPhotos}
        />

        {/* Feature Highlights Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#B9FF66] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> Creative Excellence
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              What Students Experience in Art & Craft
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              From weekly classroom lessons to specialized Sunday drawing academy sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artOfferings.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-8 shadow-[0_6px_0_0_#191A23] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_0_0_#191A23] ${item.accentColor}`}
                >
                  <div>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#191A23] ${item.badgeBg} text-[#1E3F20] shadow-[0_3px_0_0_#191A23] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComp className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-fredoka text-2xl font-semibold text-[#000000] group-hover:text-[#1E3F20]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/85 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Modal Dialog */}
        <FacilityApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          facilityTitle="Sunday Academic Drawing School"
          programType="Sunday Academic Drawing School & Exams"
        />
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Art;
