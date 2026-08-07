import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Computer() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F6FAEF]">
      <div>
        <Navbar defaultBg="bg-[#F6FAEF]" />
        <div className="mx-auto max-w-7xl px-6 py-16 font-fredoka">
          <h1 className="text-4xl font-bold text-[#000000]">Computer Basics</h1>
          <p className="mt-4 font-poppins text-lg text-[#1E3F20]">
            Early digital literacy, computer fundamentals, and interactive educational software.
          </p>
        </div>
      </div>
      <Footer defaultBg="bg-[#F6FAEF]" />
    </div>
  );
}

export default Computer;
