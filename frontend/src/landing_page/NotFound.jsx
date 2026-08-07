import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <main className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-20 text-center font-fredoka md:py-28">
          {/* 404 Big Badge Number */}
          <span className="rounded-[20px] bg-[#B9FF66] px-6 py-2 text-6xl font-extrabold text-[#191A23] shadow-md sm:text-7xl md:text-8xl">
            404
          </span>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl md:text-5xl">
            Oops! Page Not Found
          </h1>

          <p className="mt-4 max-w-lg font-poppins text-base text-[#1E3F20]/80 sm:text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Navigation Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl bg-[#344E41] px-8 py-3.5 font-poppins text-lg font-medium text-[#F6FAEF] shadow-md transition-all hover:bg-[#1E3F20] hover:shadow-lg active:scale-95"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-[#1E3F20] bg-transparent px-8 py-3.5 font-poppins text-lg font-medium text-[#1E3F20] transition-all hover:bg-[#1E3F20]/10 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </main>
      </div>

      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default NotFound;
