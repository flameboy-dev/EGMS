import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/Logo.png';
import { scrollToSection } from '@/lib/scrollUtils';

function Navbar({ defaultBg = 'bg-[#ECF39E]' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: 'home' },
    { name: 'About us', path: '/#about', hash: 'about' },
    { name: 'Programs', path: '/#programs', hash: 'programs' },
    { name: 'Facilities', path: '/#facilities', hash: 'facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/#contact', hash: 'contact' },
  ];

  const handleNavClick = (e, link) => {
    const isHomePage = location.pathname === '/';

    if (isHomePage && link.hash) {
      e.preventDefault();
      scrollToSection(link.hash);
    } else if (!isHomePage && link.hash) {
      e.preventDefault();
      navigate(`/#${link.hash}`);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full px-6 pt-1 pb-3 md:px-12 md:pt-2 md:pb-3 lg:px-16 lg:pt-2 lg:pb-3 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : defaultBg
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand Logo & Title */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
          className="flex items-center gap-2"
        >
          <img
            src={logoImg}
            alt="E.G.M.S Crest Logo"
            className="h-[60px] w-[60px] object-contain md:h-[93.27px] md:w-[93.27px]"
          />
          <span className="font-fredoka text-[28px] font-extrabold leading-none tracking-tight text-[#000000] md:text-[38.43px]">
            E.G.M.S
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8 ml-auto mr-4 lg:mr-5 xl:mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className="font-poppins text-lg font-medium text-[#000000] transition-colors hover:text-[#344E41]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Header Enroll Now Button */}
        <div className="hidden lg:block">
          <Link
            to="/enroll"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-[#1E3F20] bg-transparent px-8 py-3.5 font-poppins text-lg font-medium text-[#000000] transition-all hover:bg-[#1E3F20] hover:text-[#F6FAEF]"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#000000] lg:hidden hover:bg-[#344E41]/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 rounded-2xl bg-[#F6FAEF] p-6 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => {
                setIsOpen(false);
                handleNavClick(e, link);
              }}
              className="font-poppins text-lg font-semibold text-[#000000] transition-colors hover:text-[#344E41]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/enroll"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block w-full text-center rounded-2xl border-2 border-[#1E3F20] bg-[#344E41] py-3 font-poppins text-base font-semibold text-[#F6FAEF] transition-all hover:bg-[#1E3F20]"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
