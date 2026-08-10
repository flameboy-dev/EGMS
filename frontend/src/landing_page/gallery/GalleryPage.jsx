import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GalleryLightboxModal from './GalleryLightboxModal';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import { Sparkles, Maximize2, Camera, Calendar, ArrowRight } from 'lucide-react';

// Import Photo Assets
import smartClassImg from '@/assets/images/Smart Class.png';
import paintingImg from '@/assets/images/Painting.png';
import schoolBusImg from '@/assets/images/School Bus.png';
import codingImg from '@/assets/images/Coding.png';
import boardGamesImg from '@/assets/images/Board Games.png';
import familyImg from '@/assets/images/Family.png';
import nurseryProgImg from '@/assets/images/NurseryPrograms.png';
import lkgProgImg from '@/assets/images/LKGPrograms.png';
import ukgProgImg from '@/assets/images/UKGPrograms.png';
import heroImg from '@/assets/images/HeroImage.png';
import std1Img from '@/assets/images/STD-I.png';
import std2Img from '@/assets/images/STD-II.png';
import std3Img from '@/assets/images/STD-III.png';
import std4Img from '@/assets/images/STD-IV.png';
import teacherImg from '@/assets/images/Teacher.png';

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: smartClassImg,
      caption: 'Digital Smart Classroom Animation Session',
      category: 'Smart Classrooms',
    },
    {
      id: 2,
      src: paintingImg,
      caption: 'Pastel Painting & Creative Craft Workshop',
      category: 'Art & Craft',
    },
    {
      id: 3,
      src: codingImg,
      caption: 'Hands-on Computer Lab Training & Software Practice',
      category: 'Academic Programs',
    },
    {
      id: 4,
      src: boardGamesImg,
      caption: 'Puzzle Boxes & Strategic Chess Match',
      category: 'Sports & Indoor Play',
    },
    {
      id: 5,
      src: familyImg,
      caption: 'Sunday Morning Yoga & Breathing Mindfulness',
      category: 'Events & Yoga',
    },
    {
      id: 6,
      src: schoolBusImg,
      caption: 'Dedicated School Cars with Evergreen Banner',
      category: 'Smart Classrooms',
    },
    {
      id: 7,
      src: nurseryProgImg,
      caption: 'Nursery Phonics, Rhymes & Activity Time',
      category: 'Academic Programs',
    },
    {
      id: 8,
      src: lkgProgImg,
      caption: 'LKG Creative Workshops & Storytelling',
      category: 'Academic Programs',
    },
    {
      id: 9,
      src: ukgProgImg,
      caption: 'UKG Paper Folding & 3D Craft Project Showcase',
      category: 'Art & Craft',
    },
    {
      id: 10,
      src: heroImg,
      caption: 'Campus Morning Assembly & Life at EGMS',
      category: 'Events & Yoga',
    },
    {
      id: 11,
      src: std1Img,
      caption: 'STD I Interactive Reading & Number Practice',
      category: 'Academic Programs',
    },
    {
      id: 12,
      src: std2Img,
      caption: 'STD II Bengali & English Rhyme Recitation',
      category: 'Academic Programs',
    },
    {
      id: 13,
      src: std3Img,
      caption: 'STD III Science Project & Environmental Study',
      category: 'Academic Programs',
    },
    {
      id: 14,
      src: std4Img,
      caption: 'STD IV Mathematical Logic & Problem Solving',
      category: 'Academic Programs',
    },
    {
      id: 15,
      src: teacherImg,
      caption: 'Teacher-Student Storytelling Session',
      category: 'Events & Yoga',
    },
  ];

  const categories = [
    'All',
    'Smart Classrooms',
    'Art & Craft',
    'Academic Programs',
    'Sports & Indoor Play',
    'Events & Yoga',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (idx) => {
    setSelectedIndex(idx);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#EBF1E5]">
      <div>
        <Navbar defaultBg="bg-[#EBF1E5]" />

        {/* Hero Section */}
        <section className="w-full border-t border-[#191A23]/10 bg-[#EBF1E5] px-6 pb-10 pt-10 md:px-12 md:pb-12 md:pt-12 lg:px-16 lg:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/10 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
                <Camera className="h-3.5 w-3.5" /> Photo Gallery
              </span>
              <h1 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl md:text-5xl">
                Life at Ever Green Model School
              </h1>
              <p className="font-poppins text-base text-[#1E3F20]/90 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
                Capturing joyful learning, creative achievements, sports, celebrations, and everyday moments.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? galleryItems.length
                    : galleryItems.filter((i) => i.category === cat).length;

                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 font-poppins text-xs font-semibold transition-all sm:text-sm ${
                      isActive
                        ? 'bg-[#1E3F20] text-white shadow-xs'
                        : 'border border-[#191A23]/15 bg-white text-[#191A23] hover:bg-[#ECF39E]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        isActive ? 'bg-[#B9FF66] text-[#000000]' : 'bg-[#EBF1E5] text-[#1E3F20]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:px-16 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#191A23]/10 bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Framed Image Container */}
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-[#EBF1E5]/50 sm:h-[240px] md:h-[260px]">
                  <ImageWithSkeleton
                    src={item.src}
                    alt={item.caption}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Expand Overlay Icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Caption */}
                <div className="mt-3 px-1 pb-1">
                  <span className="inline-block rounded-full bg-[#ECF39E] px-2.5 py-0.5 font-poppins text-[11px] font-bold text-[#1E3F20]">
                    {item.category}
                  </span>
                  <h3 className="mt-1.5 font-fredoka text-base font-semibold text-[#000000] leading-snug group-hover:text-[#1E3F20]">
                    {item.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        <GalleryLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          currentIndex={selectedIndex}
          photos={filteredItems}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Campus Visit CTA Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-between rounded-[28px] border border-[#191A23]/10 bg-[#1E3F20] p-8 text-white shadow-md md:flex-row md:p-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="font-fredoka text-2xl font-semibold text-[#B9FF66] sm:text-3xl">
                Want to Experience EGMS Campus in Person?
              </h3>
              <p className="mt-2 font-poppins text-sm text-white/90 sm:text-base">
                Schedule a campus tour to see our Smart Classrooms, Computer Lab, Art Studio, and Play Zone live!
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B9FF66] px-7 py-3.5 font-fredoka text-base font-semibold text-[#000000] shadow-sm transition-all hover:bg-white md:mt-0"
            >
              <span>Schedule a Campus Tour</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>

      <Footer defaultBg="bg-[#EBF1E5]" />
    </div>
  );
}

export default GalleryPage;
