import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GalleryLightboxModal from './GalleryLightboxModal';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import { Sparkles, Maximize2, Camera, Calendar, ArrowRight } from 'lucide-react';

// Import Photo Assets - Academic Programs
import academicProgImg from '@/assets/images/Academic_Programs.jpg';
import academicProg1Img from '@/assets/images/Academic_Programs1.jpg';
import academicProg2Img from '@/assets/images/Academic_Programs2.jpg';
import academicProg3Img from '@/assets/images/Academic_Programs3.jpg';
import academicProg4Img from '@/assets/images/Academic_Programs4.jpg';
import academicProg5Img from '@/assets/images/Academic_Programs5.jpg';
import academicProg6Img from '@/assets/images/Academic_Programs6.jpg';
import academicProg7Img from '@/assets/images/Academic_Programs7.jpg';

// Import Photo Assets - Annual Function
import annualFunc1Img from '@/assets/images/Annual_Function1.jpg';
import annualFunc2Img from '@/assets/images/Annual_Function2.jpg';
import annualFunc3Img from '@/assets/images/Annual_Function3.jpg';
import annualFunc4Img from '@/assets/images/Annual_Function4.jpg';
import annualFunc5Img from '@/assets/images/Annual_Function5.jpg';
import annualFunc6Img from '@/assets/images/Annual_Function6.jpg';
import annualFunc7Img from '@/assets/images/Annual_Function7.jpg';
import annualFunc8Img from '@/assets/images/Annual_Function8.jpg';
import annualFunc9Img from '@/assets/images/Annual_Function9.jpg';
import annualFunc10Img from '@/assets/images/Annual_Function10.jpg';
import annualFunc11Img from '@/assets/images/Annual_Function11.jpg';
import annualFunc12Img from '@/assets/images/Annual_Function12.jpg';
import annualFunc13Img from '@/assets/images/Annual_Function13.jpg';
import annualFunc14Img from '@/assets/images/Annual_Function14.jpg';
import annualFunc15Img from '@/assets/images/Annual_Function15.jpg';
import annualFunc16Img from '@/assets/images/Annual_Function16.jpg';
import annualFunc17Img from '@/assets/images/Annual_Function17.jpg';
import annualFunc18Img from '@/assets/images/Annual_Function18.jpg';
import annualFunc19Img from '@/assets/images/Annual_Function19.jpg';

// Import Photo Assets - Art & Craft
import art1Img from '@/assets/images/Art1.jpg';

// Import Photo Assets - Awards & Achievements
import awards1Img from '@/assets/images/Awards1.jpg';
import awards2Img from '@/assets/images/Awards2.jpg';
import talentExamImg from '@/assets/images/TalentExamAwards.jpg';
import talentExam1Img from '@/assets/images/TalentExamAwards1.jpg';
import talentExam2Img from '@/assets/images/TalentExamAwards2.jpg';

// Import Photo Assets - Healthy Environment & Campus
import healthyEnv1Img from '@/assets/images/Healthy_Environment1.jpg';
import healthyEnv2Img from '@/assets/images/Healthy_Environment2.jpg';
import healthyEnv3Img from '@/assets/images/Healthy_Environment3.jpg';
import healthyEnv4Img from '@/assets/images/Healthy_Environment4.jpg';
import healthyEnv5Img from '@/assets/images/Healthy_Environment5.jpg';
import healthyEnv6Img from '@/assets/images/Healthy_Environment6.jpg';

// Import Photo Assets - Sports & Athletics
import indoorGamesImg from '@/assets/images/Indoor_gmaes.jpg';
import sports1Img from '@/assets/images/sports1.jpg';
import sports2Img from '@/assets/images/sports2.jpg';
import sports3Img from '@/assets/images/sports3.jpg';
import sports4Img from '@/assets/images/sports4.jpg';
import sports5Img from '@/assets/images/sports5.jpg';
import sports6Img from '@/assets/images/sports6.jpg';
import sports7Img from '@/assets/images/sports7.jpg';
import sports8Img from '@/assets/images/sports8.jpg';
import sports9Img from '@/assets/images/sports9.jpg';
import sports10Img from '@/assets/images/sports10.jpg';
import sports11Img from '@/assets/images/sports11.jpg';
import sports12Img from '@/assets/images/sports12.jpg';

// Import Photo Assets - Saraswati Puja
import puja1Img from '@/assets/images/swaraswatipuja1.jpg';
import puja2Img from '@/assets/images/swaraswatipuja2.jpg';
import puja3Img from '@/assets/images/swaraswatipuja3.jpg';
import puja4Img from '@/assets/images/swaraswatipuja4.jpg';
import puja5Img from '@/assets/images/swaraswatipuja5.jpg';

// Import Photo Assets - Transport & Parents
import transpotImg from '@/assets/images/Transpot.jpg';
import transport2Img from '@/assets/images/Transport2.jpg';
import parentsTeachers1Img from '@/assets/images/ParentsAndTeachers1.jpg';
import parentsTeachers2Img from '@/assets/images/ParentsAndTeachers2.jpg';

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryItems = [
    // --- Annual Function ---
    { id: 1, src: annualFunc1Img, caption: 'Annual Day Stage Performance & Dance Routine', category: 'Annual Function' },
    { id: 2, src: annualFunc2Img, caption: 'Cultural Drama & Student Performance Showcase', category: 'Annual Function' },
    { id: 3, src: annualFunc3Img, caption: 'Annual Function Chief Guest Inauguration', category: 'Annual Function' },
    { id: 4, src: annualFunc4Img, caption: 'Group Song & Chorus Performance on Stage', category: 'Annual Function' },
    { id: 5, src: annualFunc5Img, caption: 'Student Costume Drama & Theatrical Presentation', category: 'Annual Function' },
    { id: 6, src: annualFunc6Img, caption: 'Folk Dance & Rhythm Celebration', category: 'Annual Function' },
    { id: 7, src: annualFunc7Img, caption: 'Lighting of the Lamp Ceremony at Annual Function', category: 'Annual Function' },
    { id: 8, src: annualFunc8Img, caption: 'Parent Audience & Guests at Annual Cultural Fest', category: 'Annual Function' },
    { id: 9, src: annualFunc9Img, caption: 'Grand Finale Musical Performance by Students', category: 'Annual Function' },
    { id: 10, src: annualFunc10Img, caption: 'Stage Felicitations & Student Honour Moment', category: 'Annual Function' },
    { id: 11, src: annualFunc11Img, caption: 'Traditional Dance Performance in Festive Attire', category: 'Annual Function' },
    { id: 12, src: annualFunc12Img, caption: 'Annual Function Speech & Welcome Address', category: 'Annual Function' },
    { id: 13, src: annualFunc13Img, caption: 'Young Performers Recitation Showcase', category: 'Annual Function' },
    { id: 14, src: annualFunc14Img, caption: 'Children Group Dance with Props & Colorful Costumes', category: 'Annual Function' },
    { id: 15, src: annualFunc15Img, caption: 'Annual Day Award Presentation Ceremony', category: 'Annual Function' },
    { id: 16, src: annualFunc16Img, caption: 'Chorus Choir & Musical Ensemble', category: 'Annual Function' },
    { id: 17, src: annualFunc17Img, caption: 'Talented Students Receiving Trophies on Stage', category: 'Annual Function' },
    { id: 18, src: annualFunc18Img, caption: 'Spectacular Stage Lights & Annual Day Celebrations', category: 'Annual Function' },
    { id: 19, src: annualFunc19Img, caption: 'Teachers & Management Team at Annual Function', category: 'Annual Function' },

    // --- Sports & Athletics ---
    { id: 20, src: sports1Img, caption: 'Annual Sports Day Opening March Past', category: 'Sports & Athletics' },
    { id: 21, src: sports2Img, caption: 'Track & Field Sprint Championship Race', category: 'Sports & Athletics' },
    { id: 22, src: sports3Img, caption: 'Little Champions Relay Race Action', category: 'Sports & Athletics' },
    { id: 23, src: sports4Img, caption: 'High Jump & Athletic Skill Demonstration', category: 'Sports & Athletics' },
    { id: 24, src: sports5Img, caption: 'Fun Obstacle Race & Balance Games', category: 'Sports & Athletics' },
    { id: 25, src: sports6Img, caption: 'Fun Spoon & Marble Race for Junior Students', category: 'Sports & Athletics' },
    { id: 26, src: sports7Img, caption: 'Tug of War Team Effort & Spirit', category: 'Sports & Athletics' },
    { id: 27, src: sports8Img, caption: 'Sports Day Victory Lap & Medal Parade', category: 'Sports & Athletics' },
    { id: 28, src: sports9Img, caption: 'Football Match & Outdoor Physical Play', category: 'Sports & Athletics' },
    { id: 29, src: sports10Img, caption: 'Sports Day Prize Distribution to Winners', category: 'Sports & Athletics' },
    { id: 30, src: sports11Img, caption: 'Students Cheering Team Members during Sports Meet', category: 'Sports & Athletics' },
    { id: 31, src: sports12Img, caption: 'Grand Sports Meet Closing & Trophy Ceremony', category: 'Sports & Athletics' },
    { id: 32, src: indoorGamesImg, caption: 'Indoor Games & Brain Puzzles Activity', category: 'Sports & Athletics' },

    // --- Saraswati Puja ---
    { id: 33, src: puja1Img, caption: 'Saraswati Puja Mandap & Floral Decoration', category: 'Saraswati Puja' },
    { id: 34, src: puja2Img, caption: 'Student Anjali & Prayers to Goddess Saraswati', category: 'Saraswati Puja' },
    { id: 35, src: puja3Img, caption: 'Campus Devotional Gathering on Saraswati Puja', category: 'Saraswati Puja' },
    { id: 36, src: puja4Img, caption: 'Cultural Performances on Saraswati Puja Morning', category: 'Saraswati Puja' },
    { id: 37, src: puja5Img, caption: 'Prasad Distribution & Festive Celebrations', category: 'Saraswati Puja' },

    // --- Academic Programs ---
    { id: 38, src: academicProgImg, caption: 'Interactive Classroom Learning & Group Activity', category: 'Academic Programs' },
    { id: 39, src: academicProg1Img, caption: 'Phonics & Reading Workshop in Action', category: 'Academic Programs' },
    { id: 40, src: academicProg2Img, caption: 'Hands-on Mathematics & Counting Abacus Practice', category: 'Academic Programs' },
    { id: 41, src: academicProg3Img, caption: 'Science Experiment & Environmental Study Lab', category: 'Academic Programs' },
    { id: 42, src: academicProg4Img, caption: 'Language Recitation & Board Exercise Class', category: 'Academic Programs' },
    { id: 43, src: academicProg5Img, caption: 'Geography & Map Exploration Session', category: 'Academic Programs' },
    { id: 44, src: academicProg6Img, caption: 'Computer Basics & Digital Learning Practice', category: 'Academic Programs' },
    { id: 45, src: academicProg7Img, caption: 'Primary Examination & Practical Assessment', category: 'Academic Programs' },

    // --- Awards & Achievements ---
    { id: 46, src: awards1Img, caption: 'Academic Merit & Excellence Award Ceremony', category: 'Awards & Achievements' },
    { id: 47, src: awards2Img, caption: 'Top Rankers Felicitations & Trophy Presentation', category: 'Awards & Achievements' },
    { id: 48, src: talentExamImg, caption: 'Talent Search Exam Certificate & Gold Medals', category: 'Awards & Achievements' },
    { id: 49, src: talentExam1Img, caption: 'State Level Talent Exam Achievers Group Photo', category: 'Awards & Achievements' },
    { id: 50, src: talentExam2Img, caption: 'School Authority Distributing Merit Awards', category: 'Awards & Achievements' },

    // --- Healthy Environment & Campus ---
    { id: 51, src: healthyEnv1Img, caption: 'Green Campus Gardens & Outdoor Study Area', category: 'Healthy Environment' },
    { id: 52, src: healthyEnv2Img, caption: 'Clean & Hygienic School Environment', category: 'Healthy Environment' },
    { id: 53, src: healthyEnv3Img, caption: 'Open Air Morning Assembly & Fitness Routine', category: 'Healthy Environment' },
    { id: 54, src: healthyEnv4Img, caption: 'Tree Planting & Eco-Club Student Activity', category: 'Healthy Environment' },
    { id: 55, src: healthyEnv5Img, caption: 'Sanitized Classrooms & Filtered Water Station', category: 'Healthy Environment' },
    { id: 56, src: healthyEnv6Img, caption: 'Spacious Play Lawn & Fresh Air Environment', category: 'Healthy Environment' },

    // --- Parents & Teachers ---
    { id: 57, src: parentsTeachers1Img, caption: 'Parent-Teacher Meeting (PTM) Interactive Session', category: 'Parents & Teachers' },
    { id: 58, src: parentsTeachers2Img, caption: 'Teacher Guidance & Parent Consultation Day', category: 'Parents & Teachers' },

    // --- Art & Craft ---
    { id: 59, src: art1Img, caption: 'Sunday Academic Drawing School Studio Practice', category: 'Art & Craft' },

    // --- Transport & Facilities ---
    { id: 60, src: transpotImg, caption: 'Dedicated Evergreen Banner Cars Fleet', category: 'Transport & Facilities' },
    { id: 61, src: transport2Img, caption: 'Attendant Guided Safe Student Boarding', category: 'Transport & Facilities' },
  ];

  const categories = [
    'All',
    'Annual Function',
    'Sports & Athletics',
    'Saraswati Puja',
    'Academic Programs',
    'Healthy Environment',
    'Awards & Achievements',
    'Parents & Teachers',
    'Art & Craft',
    'Transport & Facilities',
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
              <p className="font-poppins text-base text-[#1E3F20]/90 sm:text-lg lg:max-w-none">
                Capturing joyful learning, sports events, annual functions, Saraswati Puja, awards, and everyday campus moments.
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
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 font-poppins text-xs font-medium transition-all sm:text-sm ${
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
                className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#191A23]/10 bg-white p-2.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Framed Image Container */}
                <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#EBF1E5]/50 sm:h-[260px] md:h-[280px]">
                  <ImageWithSkeleton
                    src={item.src}
                    alt={item.caption}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Tag Overlay */}
                  <div className="absolute left-3 top-3 z-10">
                    <span className="inline-block rounded-full bg-[#ECF39E]/90 px-3 py-1 font-poppins text-[11px] font-bold text-[#1E3F20] backdrop-blur-xs shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Overlay Icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" />
                  </div>
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
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B9FF66] px-7 py-3.5 font-fredoka text-base font-medium text-[#000000] shadow-sm transition-all hover:bg-white md:mt-0"
            >
              <span>Schedule a Campus Tour</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer defaultBg="bg-[#EBF1E5]" />
    </div>
  );
}

export default GalleryPage;

