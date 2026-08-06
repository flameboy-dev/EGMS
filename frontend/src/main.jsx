import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import ProgramsPage from './landing_page/programs/ProgramsPage'
import FacilitiesPage from './landing_page/facilities/FacilitiesPage'
import GalleryPage from './landing_page/gallery/GalleryPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </BrowserRouter>
)

