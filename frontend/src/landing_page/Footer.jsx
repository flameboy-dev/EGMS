import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '@/assets/images/Logo.png';
import { scrollToSection } from '@/lib/scrollUtils';

function Footer({ defaultBg = 'bg-white' }) {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className={`w-full ${defaultBg} px-4 sm:px-6 pt-4`}>
      <div className="mx-auto max-w-[1240px] rounded-t-[35px] md:rounded-t-[45px] bg-[#1E3F20] px-6 py-8 sm:px-10 sm:py-9 md:px-12 md:py-10 text-white shadow-xl">
        {/* Top Header Row: Logo, Navigation Links & Social Media Icons */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6 md:pb-7">
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
            className="flex items-center gap-3"
          >
            <img
              src={logoImg}
              alt="E.G.M.S Crest Logo"
              className="h-[45px] w-[45px] object-contain md:h-[55px] md:w-[55px]"
            />
            <span className="font-fredoka text-2xl font-bold tracking-tight text-white md:text-[28px]">
              E.G.M.S
            </span>
          </Link>

          {/* Navigation Links (Underlined) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="font-poppins text-base font-medium text-white underline underline-offset-4 transition-colors hover:text-[#B9FF66]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white hover:text-[#B9FF66] transition-transform hover:scale-110"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white hover:text-[#B9FF66] transition-transform hover:scale-110"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Content Section */}
        <div className="mt-6 md:mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col items-start space-y-3 lg:col-span-6">
            <span className="inline-block rounded-[8px] bg-[#B9FF66] px-3 py-0.5 font-fredoka text-sm font-medium text-[#000000] md:text-base">
              Contact us:
            </span>
            <div className="font-poppins text-xs sm:text-sm leading-relaxed text-white/90 space-y-1">
              <p>
                <span className="font-medium text-white">Email:</span>{' '}
                evergreenmodelschool58@gmail.com
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span> 9732644550
              </p>
              <p>
                <span className="font-medium text-white">Address:</span> NH0117, Narayanpur, Kakdwip, South 24 Parganas, West Bengal - 743357
              </p>
            </div>
          </div>

          {/* Right Side: CTA Enrollment Box */}
          <div className="lg:col-span-6">
            <div className="flex flex-col items-start justify-between gap-5 rounded-[24px] bg-[#282933] p-6 sm:p-7 md:flex-row md:items-center">
              <h3 className="font-fredoka text-xl font-semibold leading-tight text-white sm:text-2xl max-w-xs">
                Ready to Give Your Child the Best Start?
              </h3>
              <Link
                to="/enroll"
                className="inline-flex items-center justify-center rounded-[14px] bg-[#B9FF66] px-6 py-3 font-fredoka text-base font-medium text-[#000000] transition-all duration-200 hover:bg-[#a3f04b] hover:scale-105 active:scale-95 shrink-0 shadow-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="my-6 border-t border-white/20 sm:my-7" />

        {/* Bottom Row: Copyright & Legal */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center font-poppins text-xs text-white/80 sm:text-sm">
          <p>© {currentYear} E.G.M.S. All Rights Reserved.</p>
          <Link
            to="/privacy"
            className="underline underline-offset-4 transition-colors hover:text-[#B9FF66] sm:ml-8"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
