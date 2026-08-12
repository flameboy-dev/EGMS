import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import academicProgImg from '@/assets/images/Academic_Programs.jpg';
import academicProg2Img from '@/assets/images/Academic_Programs2.jpg';
import academicProg6Img from '@/assets/images/Academic_Programs6.jpg';
import academicProg7Img from '@/assets/images/Academic_Programs7.jpg';
import codingImg from '@/assets/images/Coding.png';
import { Monitor, Keyboard, FileText, Terminal, Palette, Grid, Presentation, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function Computer() {
  const { t } = useLanguage();

  const computerParagraphs = [
    <>
      {t("At Ever Green Model School, early digital literacy prepares young learners for the modern tech-driven world. Our Computer Basics program offers practical hands-on experience in a safe and engaging lab setting.")}
    </>,
    <>
      {t("Students build fundamental understanding of computer hardware—learning about the Monitor, Keyboard, Mouse, Input & Output devices. They master essential software tools including MS Paint, MS Word, MS Excel, MS PowerPoint, Notepad, Wordpad, and gain introductory exposure to system command execution in Windows CMD.")}
    </>,
  ];

  const computerPhotos = [
    {
      src: academicProg6Img,
      caption: t('Computer Fundamentals & Hardware Exploration'),
      tag: t('Hardware Basics'),
    },
    {
      src: academicProg2Img,
      caption: t('Practical Computer Lab Session & Software Practice'),
      tag: t('Software Lab'),
    },
    {
      src: academicProg7Img,
      caption: t('Interactive Abacus & Computer Logic Training'),
      tag: t('Logic & Computation'),
    },
    {
      src: academicProgImg,
      caption: t('Hands-on Software Practice: MS Paint, Word & Excel'),
      tag: t('MS Office Basics'),
    },
  ];

  const modules = [
    {
      icon: Monitor,
      title: t('Computer Fundamentals'),
      description: t(
        'Understanding what a computer is, CPU function, Monitor display, Keyboard typing, Mouse control, and distinguishing Input vs Output devices.'
      ),
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Palette,
      title: t('MS Paint & Creative Art'),
      description: t(
        'Drawing digital shapes, using brush tools, coloring pictures, and developing fine motor coordination using the mouse.'
      ),
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: FileText,
      title: t('Word Processing (Word & Wordpad)'),
      description: t(
        'Typing sentences, formatting fonts, paragraph alignment, creating documents in MS Word, Wordpad, and Notepad.'
      ),
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: Grid,
      title: t('Spreadsheets (MS Excel)'),
      description: t(
        'Understanding rows, columns, cells, simple number entry, table creation, and basic math calculations in Excel.'
      ),
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Presentation,
      title: t('Presentations (MS PowerPoint)'),
      description: t(
        'Designing slides, adding text and pictures, choosing colorful themes, and delivering simple digital presentations.'
      ),
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Terminal,
      title: t('Command Line (CMD Basics)'),
      description: t(
        'Fun intro to terminal commands in Windows CMD, learning how commands give direct instructions to the computer system.'
      ),
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title={t("Computer Basics & Tech Lab")}
          subTagline={t("Hardware fundamentals, Office suite tools, text editors, and basic command line practice.")}
          aboutTitle={t("Early Digital Literacy & Tech Skills")}
          aboutParagraphs={computerParagraphs}
          image={codingImg}
          prevLink="/facilities/transport"
          nextLink="/facilities/indoor"
          badgeText={t("Digital Education")}
        />

        {/* Image Slider Showcase */}
        <FacilitySlider
          title={t("Computer Lab Practical Sessions")}
          subtitle={t("Explore hardware learning, software applications, and interactive computer lab training.")}
          slides={computerPhotos}
        />

        {/* Modules Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#94ECBE] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> {t("Hands-On Curriculum")}
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              {t("Computer Curriculum Breakdown")}
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              {t("Empowering students with practical software, hardware, and system concepts.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border-2 border-[#191A23] bg-white p-8 shadow-[0_6px_0_0_#191A23] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_0_0_#191A23] ${mod.accentColor}`}
                >
                  <div>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#191A23] ${mod.badgeBg} text-[#1E3F20] shadow-[0_3px_0_0_#191A23] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComp className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-fredoka text-2xl font-semibold text-[#000000] group-hover:text-[#1E3F20]">
                      {mod.title}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-[#1E3F20]/85 sm:text-base">
                      {mod.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Lab Equipment Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-between rounded-[36px] border-2 border-[#191A23] bg-[#1E3F20] p-8 text-white shadow-[0_8px_0_0_#191A23] md:flex-row md:p-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="font-fredoka text-2xl font-bold text-[#B9FF66] sm:text-3xl">
                {t("State-of-the-Art Computer Lab")}
              </h3>
              <p className="mt-2 font-poppins text-sm text-white/90 sm:text-base">
                {t("Each child gets individual computer access under the supervision of skilled computer instructors.")}
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-2xl border-2 border-[#191A23] bg-[#B9FF66] px-8 py-4 font-fredoka text-base font-medium text-[#000000] shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 md:mt-0"
            >
              {t("Learn More")}
            </Link>
          </div>
        </section>
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Computer;
