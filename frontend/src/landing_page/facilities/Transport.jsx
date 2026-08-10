import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import FacilityApplicationModal from './FacilityApplicationModal';
import schoolBusImg from '@/assets/images/School Bus.png';
import heroImg from '@/assets/images/HeroImage.png';
import nurseryProgImg from '@/assets/images/NurseryPrograms.png';
import { Car, ShieldCheck, Flag, MapPin, Clock, UserCheck, Sparkles } from 'lucide-react';

function Transport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transportParagraphs = [
    <>
      At <strong className="font-bold text-[#000000]">Ever Green Model School</strong>, student safety and convenience during daily transit are top priorities. We offer dedicated transport facilities for any student who requests pick-up and drop-off service.
    </>,
    <>
      <strong className="font-bold text-[#000000]">Dedicated Car Fleet (Cars, Not Buses):</strong> Unlike conventional school buses, EGMS operates its own fleet of comfortable, well-maintained cars proudly featuring the official <strong className="font-bold text-[#000000]">Evergreen banner</strong>. This guarantees a cozy, less crowded, safe, and personalized commute for every child.
    </>,
  ];

  const transportPhotos = [
    {
      src: schoolBusImg,
      caption: 'Dedicated School Cars with Evergreen Banner',
      tag: 'Evergreen Banner Cars',
    },
    {
      src: heroImg,
      caption: 'Safe Student Pickup & Doorstep Route Drop',
      tag: 'Personalized Transit',
    },
    {
      src: nurseryProgImg,
      caption: 'Attendant Guided Safe Boarding & Commute',
      tag: 'Child Safety First',
    },
  ];

  const transportHighlights = [
    {
      icon: Car,
      title: 'Dedicated School Cars',
      description:
        'We operate our own private car fleet (not large buses) ensuring smaller group transit and greater comfort.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Flag,
      title: 'Official Evergreen Banner',
      description:
        'All school vehicles display the prominent Evergreen banner for instant recognition and strict identity verification.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: ShieldCheck,
      title: 'Verified & Experienced Drivers',
      description:
        'Trained, police-verified drivers and caring attendants present on every route to ensure maximum safety.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: MapPin,
      title: 'Customized Doorstep Routes',
      description:
        'Flexible pick-up and drop-off points tailored to accommodate student addresses across nearby neighborhoods.',
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: Clock,
      title: 'Punctual Timings',
      description:
        'Strict schedule adherence so students reach school on time safely and return home without delay.',
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: UserCheck,
      title: 'Optional Service',
      description:
        'Available upon request for parents who desire stress-free transportation for their young ones.',
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />

        <FacilityHero
          title="Transport Facility"
          subTagline="Safe, comfortable school cars with the official Evergreen banner for convenient student transit."
          aboutTitle="Safe & Personalized Transport in School Cars"
          aboutParagraphs={transportParagraphs}
          image={schoolBusImg}
          prevLink="/facilities/art"
          nextLink="/facilities/computer"
          badgeText="Safe Transit"
        />

        {/* Transport Inquiry Callout Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-10 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-[#94ECBE] p-8 shadow-[0_8px_0_0_#191A23] sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#191A23] bg-white px-4 py-1 font-poppins text-xs font-bold text-[#1E3F20]">
                  <Car className="h-4 w-4 text-[#1E3F20]" /> Evergreen Banner Fleet
                </div>
                <h2 className="mt-3 font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl md:text-4xl">
                  Request Transport for Your Child
                </h2>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base">
                  Would you like safe car pick-up and drop-off for your child? Submit a request and our transport supervisor will assist with route options and availability.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shrink-0 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-4 font-fredoka text-base font-semibold text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
              >
                Request Transport Service
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <FacilitySlider
          title="Transport Fleet & Commute Safety"
          subtitle="A look at our private car fleet featuring the official Evergreen banner."
          slides={transportPhotos}
        />

        {/* Transport Features Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> High Standards
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              Why Parents Choose Our Car Transport
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              Reliable, cozy, and secure transit in official Evergreen branded cars.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transportHighlights.map((item, idx) => {
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

        {/* Modal */}
        <FacilityApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          facilityTitle="School Transport Service"
          programType="Transport Service (Evergreen Banner Car)"
        />
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Transport;
