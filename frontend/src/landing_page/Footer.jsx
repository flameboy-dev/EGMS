import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '@/assets/images/Logo.png';
import { scrollToSection } from '@/lib/scrollUtils';
import { useLanguage } from '@/context/LanguageContext';

function Footer({ defaultBg = 'bg-white' }) {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const footerLinks = [
    { name: 'About us', path: '/about', sectionId: 'about' },
    { name: 'Programs', path: '/programs', sectionId: 'programs' },
    { name: 'Facilities', path: '/facilities', sectionId: 'facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  const homeSectionPaths = ['/', '/about', '/programs', '/facilities', '/contact'];

  const handleNavClick = (e, link) => {
    const isHomePage = homeSectionPaths.includes(location.pathname);

    if (isHomePage && link.sectionId) {
      e.preventDefault();
      scrollToSection(link.sectionId);
      if (location.pathname !== link.path) {
        navigate(link.path);
      }
    }
  };

  return (
    <footer className={`w-full ${defaultBg} px-3 sm:px-6 pt-4`}>
      <div className="mx-auto max-w-[1240px] rounded-t-[24px] sm:rounded-t-[35px] md:rounded-t-[45px] bg-[#1E3F20] px-5 py-6 sm:px-10 sm:py-9 md:px-12 md:py-10 text-white shadow-xl">
        {/* Top Header Row: Logo, Navigation Links & Social Media Icons */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-5 md:pb-7">
          {/* Logo & School Name */}
          <Link
            to="/"
            onClick={(e) => {
              if (homeSectionPaths.includes(location.pathname)) {
                e.preventDefault();
                scrollToSection('home');
                if (location.pathname !== '/') {
                  navigate('/');
                }
              }
            }}
            className="flex items-center gap-2.5"
          >
            <img
              src={logoImg}
              alt="E.G.M.S Crest Logo"
              className="h-[38px] w-[38px] object-contain md:h-[55px] md:w-[55px]"
            />
            <span className="font-fredoka text-xl font-bold tracking-tight text-white md:text-[28px]">
              E.G.M.S
            </span>
          </Link>

          {/* Navigation Links (Underlined) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="font-poppins text-sm sm:text-base font-medium text-white underline underline-offset-4 transition-colors hover:text-[#B9FF66]"
              >
                {t(link.name)}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@evergreenmodelschool6216"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white hover:text-[#B9FF66] transition-transform hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/evergreenmodelschool2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white hover:text-[#B9FF66] transition-transform hover:scale-110"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Content Section */}
        <div className="mt-5 md:mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col items-start space-y-2 lg:col-span-6">
            <span className="inline-block rounded-[6px] bg-[#B9FF66] px-2.5 py-0.5 font-fredoka text-xs sm:text-sm font-medium text-[#000000] md:text-base">
              {t("Contact us:")}
            </span>
            <div className="font-poppins text-xs leading-relaxed text-white/90 space-y-1 sm:text-sm">
              <p>
                <span className="font-medium text-white">{t("Email:")}</span>{' '}
                evergreenmodelschool58@gmail.com
              </p>
              <p>
                <span className="font-medium text-white">{t("Phone:")}</span>{' '}
                <a href="tel:9732644550" className="hover:underline text-white/90">
                  9732644550
                </a>
                {', '}
                <a href="tel:9932285255" className="hover:underline text-white/90">
                  9932285255
                </a>
              </p>
              <p>
                <span className="font-medium text-white">{t("Address:")}</span> NH0117, Narayanpur, Kakdwip, South 24 Parganas, West Bengal - 743357
              </p>
            </div>
          </div>

          {/* Right Side: CTA Enrollment Box */}
          <div className="lg:col-span-6">
            <div className="flex flex-col items-start justify-between gap-4 rounded-[18px] sm:rounded-[24px] bg-[#282933] p-5 sm:p-7 md:flex-row md:items-center">
              <h3 className="font-fredoka text-lg font-semibold leading-tight text-white sm:text-2xl max-w-xs">
                {t("Ready to Give Your Child the Best Start?")}
              </h3>
              <Link
                to="/enroll"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-[12px] bg-[#B9FF66] px-5 py-2.5 font-fredoka text-sm font-medium text-[#000000] transition-all duration-200 hover:bg-[#a3f04b] hover:scale-105 active:scale-95 shrink-0 shadow-md sm:px-6 sm:py-3 sm:text-base"
              >
                {t("Enroll Now")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="my-6 border-t border-white/20 sm:my-7" />

        {/* Bottom Row: Copyright & Legal */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center font-poppins text-xs text-white/80 sm:text-sm">
          <p>© {currentYear} E.G.M.S. {t("All Rights Reserved.")}</p>
          <Link
            to="/privacy"
            className="underline underline-offset-4 transition-colors hover:text-[#B9FF66] sm:ml-8"
          >
            {t("Privacy Policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
