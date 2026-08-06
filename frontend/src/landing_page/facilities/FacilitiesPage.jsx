import React from 'react';
import Navbar from '../Navbar';

function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#F6FAEF]">
      <Navbar defaultBg="bg-[#F6FAEF]" />
      <div className="mx-auto max-w-7xl px-6 py-16 font-fredoka">
        <h1 className="text-4xl font-bold text-[#000000]">Our Facilities</h1>
        <p className="mt-4 font-poppins text-lg text-[#1E3F20]">
          State-of-the-art facilities designed for safe, creative, and active learning.
        </p>
      </div>
    </div>
  );
}

export default FacilitiesPage;
