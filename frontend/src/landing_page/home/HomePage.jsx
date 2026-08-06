import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import HomePrograms from './HomePrograms';
import About from './About';
import HomeFacilities from './HomeFacilities';
import Testimonials from './Testimonials';
import FAQs from './FAQs';
import Contact from './Contact';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <HomePrograms />
            <About />
            <HomeFacilities />
            <Testimonials />
            <FAQs />
            <Contact />
        </>
    );
}

export default HomePage;