import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import FacilityApplicationModal from './FacilityApplicationModal';
import healthyEnv1Img from '@/assets/images/Healthy_Environment1.jpg';
import healthyEnv2Img from '@/assets/images/Healthy_Environment2.jpg';
import healthyEnv3Img from '@/assets/images/Healthy_Environment3.jpg';
import healthyEnv5Img from '@/assets/images/Healthy_Environment5.jpg';
import healthyEnv6Img from '@/assets/images/Healthy_Environment6.jpg';
import { Sun, Heart, Sparkles, Smile, ShieldCheck, Flame } from 'lucide-react';

function Yoga() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const yogaParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, physical wellness and mental tranquility go hand in hand with academic learning. We organize special <strong className="font-bold text-[#000000]">Yoga and Meditation sessions every Sunday</strong> morning.
    </>,
    <>
      Each and every Sunday, interested students can apply to join expert-guided sessions focusing on posture correction, flexibility, breathing techniques (Pranayama), memory enhancement, and stress-free mindfulness.
    </>,
  ];

  const yogaPhotos = [
    {
      src: healthyEnv3Img,
      caption: 'Open Air Morning Assembly & Student Physical Exercises',
      tag: 'Morning Fitness',
    },
    {
      src: healthyEnv1Img,
      caption: 'Serene Green Campus Lawn for Outdoor Pranayama',
      tag: 'Green Campus',
    },
    {
      src: healthyEnv2Img,
      caption: 'Mindfulness & Physical Balance Assembly',
      tag: 'Mindfulness',
    },
    {
      src: healthyEnv6Img,
      caption: 'Spacious Fresh Air Environment for Physical Balance',
      tag: 'Holistic Health',
    },
    {
      src: healthyEnv5Img,
      caption: 'Pranayama Breathing & Mental Focus Exercises',
      tag: 'Breath Control',
    },
  ];

  const yogaBenefits = [
    {
      icon: Sun,
      title: 'Sunday Special Sessions',
      description:
        'Conducted every Sunday morning in a serene environment dedicated to holistic student health.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Heart,
      title: 'Pranayama & Breath Control',
      description:
        'Guided deep breathing techniques that increase oxygen flow, calm the mind, and boost immunity.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Sparkles,
      title: 'Mindfulness & Meditation',
      description:
        'Short age-appropriate meditation practices that enhance mental clarity, focus, and memory power.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: Smile,
      title: 'Posture & Flexibility',
      description:
        'Fun yoga postures (Asanas) like Vrikshasana, Bhujangasana, and Tadasana designed for growing children.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: ShieldCheck,
      title: 'Stress Relief & Energy',
      description:
        'Helps children release weekly academic stress, build emotional resilience, and stay energized.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Flame,
      title: 'Open to All Interested Students',
      description:
        'Any student from Nursery to STD IV can apply and enroll for these weekly Sunday morning wellness classes.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title="Yoga & Meditation (Sunday Special)"
          subTagline="Dedicated Sunday sessions for physical flexibility, breathing control, and mental focus."
          aboutTitle="Nurturing Mind, Body & Spirit Every Sunday"
          aboutParagraphs={yogaParagraphs}
          image={familyImg}
          prevLink="/facilities/indoor"
          nextLink="/facilities/smartclass"
          badgeText="Wellness & Mindfulness"
        />

        {/* Application CTA Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-10 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-[#ECF39E] p-8 shadow-[0_8px_0_0_#191A23] sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#191A23] bg-white px-4 py-1 font-poppins text-xs font-bold text-[#1E3F20]">
                  <Sun className="h-4 w-4 text-[#1E3F20]" /> Sunday Registration Open
                </div>
                <h2 className="mt-3 font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl md:text-4xl">
                  Register for Sunday Yoga & Meditation
                </h2>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base">
                  Unlock the benefits of morning yoga and meditation for your child. Interested students can apply directly online!
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shrink-0 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-4 font-fredoka text-base font-medium text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
              >
                Apply for Sunday Yoga Session
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <FacilitySlider
          title="Sunday Yoga & Meditation Gallery"
          subtitle="Moments of mindfulness, breathing exercises, and morning yoga routines."
          slides={yogaPhotos}
        />

        {/* Benefits Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#94ECBE] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> Mind & Body Health
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              Benefits of Our Sunday Yoga Program
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              Empowering students with vitality, self-discipline, and inner peace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {yogaBenefits.map((item, idx) => {
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
          facilityTitle="Sunday Yoga & Meditation"
          programType="Sunday Yoga & Meditation Session"
        />
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Yoga;
