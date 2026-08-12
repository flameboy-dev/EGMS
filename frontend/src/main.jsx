import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import GalleryPage from './landing_page/gallery/GalleryPage'
import EnrollPage from './landing_page/enroll/EnrollPage'
import PrivacyPage from './landing_page/privacy/PrivacyPage'
import NotFound from './landing_page/NotFound'

// Individual Program Pages
import Nursery from './landing_page/programs/Nursery'
import LKG from './landing_page/programs/LKG'
import UKG from './landing_page/programs/UKG'
import STDOne from './landing_page/programs/STDOne'
import STDTwo from './landing_page/programs/STDTwo'
import STDThree from './landing_page/programs/STDThree'
import STDFour from './landing_page/programs/STDFour'

// Individual Facility Pages
import SmartClass from './landing_page/facilities/SmartClass'
import Art from './landing_page/facilities/Art'
import Transport from './landing_page/facilities/Transport'
import Computer from './landing_page/facilities/Computer'
import Indoor from './landing_page/facilities/Indoor'
import Yoga from './landing_page/facilities/Yoga'

import ScrollToTop from './components/custom/ScrollToTop'
import TranslateButton from './components/custom/TranslateButton'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home & Section Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/programs" element={<HomePage />} />
        <Route path="/facilities" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />

        {/* Gallery, Enrollment & Privacy Routes */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* Program Routes */}
        <Route path="/programs/nursery" element={<Nursery />} />
        <Route path="/programs/lkg" element={<LKG />} />
        <Route path="/programs/ukg" element={<UKG />} />
        <Route path="/programs/stdone" element={<STDOne />} />
        <Route path="/programs/stdtwo" element={<STDTwo />} />
        <Route path="/programs/stdthree" element={<STDThree />} />
        <Route path="/programs/stdfour" element={<STDFour />} />

        {/* Facility Routes */}
        <Route path="/facilities/smartclass" element={<SmartClass />} />
        <Route path="/facilities/art" element={<Art />} />
        <Route path="/facilities/transport" element={<Transport />} />
        <Route path="/facilities/computer" element={<Computer />} />
        <Route path="/facilities/indoor" element={<Indoor />} />
        <Route path="/facilities/yoga" element={<Yoga />} />

        {/* Wildcard 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <TranslateButton />
    </BrowserRouter>
  </LanguageProvider>
)
