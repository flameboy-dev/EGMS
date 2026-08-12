import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FacilityHero from './FacilityHero';
import FacilitySlider from './FacilitySlider';
import FacilityApplicationModal from './FacilityApplicationModal';
import transportImg from '@/assets/images/Transpot.jpg';
import transport2Img from '@/assets/images/Transport2.jpg';
import healthyEnv1Img from '@/assets/images/Healthy_Environment1.jpg';
import healthyEnv6Img from '@/assets/images/Healthy_Environment6.jpg';
import schoolBusImg from '@/assets/images/School_Bus.png';
import { Car, ShieldCheck, MapPin, Sparkles, UserCheck, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function Transport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const transportParagraphs = [
    <>
      {t("At Ever Green Model School, student safety and convenience during daily transit are top priorities. We offer dedicated transport facilities for any student who requests pick-up and drop-off service.")}
    </>,
    <>
      {t("Dedicated Car Fleet (Cars, Not Buses): Unlike conventional school buses, EGMS operates its own fleet of comfortable, well-maintained cars proudly featuring the official Evergreen banner. This guarantees a cozy, less crowded, safe, and personalized commute for every child.")}
    </>,
  ];

  const transportPhotos = [
    {
      src: transportImg,
      caption: t('EGMS Dedicated Transport Car Fleet with Official School Banner'),
      tag: t('Transport Fleet'),
    },
    {
      src: transport2Img,
      caption: t('Safe Student Boarding & Supervised Pick-up Drop-off'),
      tag: t('Pick-Up Service'),
    },
    {
      src: healthyEnv1Img,
      caption: t('Supervised Student Arrival & Gate Safety Protocol'),
      tag: t('Campus Safety'),
    },
    {
      src: healthyEnv6Img,
      caption: t('Clean & Comfortable Vehicle Interior Standard'),
      tag: t('Vehicle Comfort'),
    },
  ];

  const features = [
    {
      icon: Car,
      title: t('Dedicated Car Fleet (Not Buses)'),
      description: t(
        'Comfortable cars with the official EGMS Evergreen banner instead of crowded buses, ensuring personalized care for young children.'
      ),
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: UserCheck,
      title: t('Request-Based Service'),
      description: t(
        'Transport service is provided to any student upon request. Parents can easily apply during admission or mid-session.'
      ),
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: ShieldCheck,
      title: t('Verified Drivers & Attendants'),
      description: t(
        'Experienced, background-verified drivers trained in child safety protocols and careful driving practices.'
      ),
      badgeBg: 'bg-[#ECF39E]',
      accentColor: 'border-l-4 border-l-[#ECF39E]',
    },
    {
      icon: MapPin,
      title: t('Doorstep Pick-Up & Drop'),
      description: t(
        'Strategic routes covering key neighborhoods around Narayanpur, Kakdwip, and surrounding South 24 Parganas areas.'
      ),
      badgeBg: 'bg-[#B9FF66]',
      accentColor: 'border-l-4 border-l-[#B9FF66]',
    },
    {
      icon: PhoneCall,
      title: t('Direct Parent Communication'),
      description: t(
        'Driver and attendant phone contacts shared directly with parents for real-time timing updates during commute.'
      ),
      badgeBg: 'bg-[#94ECBE]',
      accentColor: 'border-l-4 border-l-[#94ECBE]',
    },
    {
      icon: Sparkles,
      title: t('Sanitized & Well-Maintained'),
      description: t(
        'Regular vehicle inspections, routine servicing, and daily sanitization to ensure maximum hygiene and safety.'
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
          title={t("Transport Facility")}
          subTagline={t("Dedicated fleet of cars (not buses) featuring official Evergreen banners for safe, cozy student transit.")}
          aboutTitle={t("Safe, Comfortable & Reliable Transit")}
          aboutParagraphs={transportParagraphs}
          image={schoolBusImg}
          prevLink="/facilities/art"
          nextLink="/facilities/computer"
          badgeText={t("Safe Transit")}
        />

        {/* Callout Banner for Transport Application */}
        <section className="mx-auto max-w-7xl px-6 pt-10 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] border-2 border-[#191A23] bg-[#94ECBE] p-8 shadow-[0_8px_0_0_#191A23] sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#191A23] bg-white px-4 py-1 font-poppins text-xs font-bold text-[#1E3F20]">
                  <Car className="h-4 w-4 text-[#1E3F20]" /> {t("Request-Based Transport")}
                </div>
                <h2 className="mt-3 font-fredoka text-2xl font-semibold text-[#000000] sm:text-3xl md:text-4xl">
                  {t("Request Transport Pick-Up & Drop Service")}
                </h2>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#1E3F20] sm:text-base">
                  {t("Parents can apply for our dedicated car transport service for their children. Submit a quick online transport request today!")}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shrink-0 rounded-2xl border-2 border-[#191A23] bg-[#1E3F20] px-8 py-4 font-fredoka text-base font-medium text-white shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-1 hover:bg-[#344E41]"
              >
                {t("Apply for Transport Service")}
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <FacilitySlider
          title={t("Transport Fleet & Safety Showcase")}
          subtitle={t("Explore our official Evergreen cars, boarding protocols, and comfortable commute environment.")}
          slides={transportPhotos}
        />

        {/* Feature Cards Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col items-start space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/20 bg-[#B9FF66] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
              <Sparkles className="h-3.5 w-3.5" /> {t("Safety Standards")}
            </span>
            <h2 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl">
              {t("Why Parents Trust EGMS Transport")}
            </h2>
            <p className="font-poppins text-base text-[#1E3F20]/80 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
              {t("Personalized care, official car fleet, and door-to-door transit reliability.")}
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

        {/* Modal Dialog */}
        <FacilityApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          facilityTitle="School Transport Service"
          programType="Request Pick-Up & Drop Transport Service"
        />
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Transport;
