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

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    }
  }, [location]);

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