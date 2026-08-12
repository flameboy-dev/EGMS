import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GalleryLightboxModal from './GalleryLightboxModal';
import ImageWithSkeleton from '@/components/custom/ImageWithSkeleton';
import { Sparkles, Maximize2, Camera, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import galleryManifest from '@/data/galleryManifest.json';
import { useLanguage } from '@/context/LanguageContext';

// Eagerly resolve image modules from asset directory
const imageModules = import.meta.glob('@/assets/images/*.jpg', { eager: true });
const imageMap = {};
Object.keys(imageModules).forEach((key) => {
  const filename = key.split('/').pop();
  if (filename) {
    imageMap[filename] = imageModules[key].default || imageModules[key];
  }
});

const galleryItems = galleryManifest.map((item) => ({
  ...item,
  src: imageMap[item.filename] || '',
}));

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

const INITIAL_BATCH_SIZE = 12;

function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_BATCH_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + INITIAL_BATCH_SIZE);
  };

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
                <Camera className="h-3.5 w-3.5" /> {t("Photo Gallery")}
              </span>
              <h1 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl md:text-5xl">
                {t("Life at Ever Green Model School")}
              </h1>
              <p className="font-poppins text-base text-[#1E3F20]/90 sm:text-lg lg:max-w-none">
                {t("Capturing joyful learning, sports events, annual functions, Saraswati Puja, awards, and everyday campus moments.")}
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
                    onClick={() => handleCategoryChange(cat)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 font-poppins text-xs font-medium transition-all sm:text-sm ${
                      isActive
                        ? 'bg-[#1E3F20] text-white shadow-xs'
                        : 'border border-[#191A23]/15 bg-white text-[#191A23] hover:bg-[#ECF39E]'
                    }`}
                  >
                    <span>{t(cat)}</span>
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
            {visibleItems.map((item, idx) => (
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
                      {t(item.category)}
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

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#191A23] bg-white px-8 py-3.5 font-fredoka text-base font-medium text-[#1E3F20] shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#ECF39E]"
              >
                <span>{t("Load More Photos")} ({filteredItems.length - visibleCount} {t("remaining")})</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          )}
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
                {t("Want to Experience EGMS Campus in Person?")}
              </h3>
              <p className="mt-2 font-poppins text-sm text-white/90 sm:text-base">
                {t("Schedule a campus tour to see our Smart Classrooms, Computer Lab, Art Studio, and Play Zone live!")}
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B9FF66] px-7 py-3.5 font-fredoka text-base font-medium text-[#000000] shadow-sm transition-all hover:bg-white md:mt-0"
            >
              <span>{t("Schedule a Campus Tour")}</span>
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

