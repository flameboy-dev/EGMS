import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from './Hero';
import HomePrograms from './HomePrograms';
import About from './About';
import HomeFacilities from './HomeFacilities';
import Testimonials from './Testimonials';
import FAQs from './FAQs';
import Contact from './Contact';
import Footer from '../Footer';
import { scrollToSection } from '@/lib/scrollUtils';

function HomePage() {
  const location = useLocation();

  const pathToSectionMap = {
    '/about': 'about',
    '/programs': 'programs',
    '/facilities': 'facilities',
    '/contact': 'contact',
  };

  useEffect(() => {
    const sectionId = pathToSectionMap[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    } else if (location.hash) {
      const hashId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(hashId);
      }, 150);
    } else {
      scrollToSection('home');
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="programs">
        <HomePrograms />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="facilities">
        <HomeFacilities />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;