import React from 'react';
import Navbar from '../Navbar';

function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F6FAEF]">
      <Navbar defaultBg="bg-[#F6FAEF]" />
      <div className="mx-auto max-w-7xl px-6 py-16 font-fredoka">
        <h1 className="text-4xl font-bold text-[#000000]">Gallery</h1>
        <p className="mt-4 font-poppins text-lg text-[#1E3F20]">
          Memorable moments and activities at Ever Green Model School.
        </p>
      </div>
    </div>
  );
}

export default GalleryPage;
