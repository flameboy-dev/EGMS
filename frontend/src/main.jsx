import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import PageSkeleton from './components/custom/PageSkeleton'

// Lazy-loaded page components for route-level code splitting
const HomePage = lazy(() => import('./landing_page/home/HomePage'))
const GalleryPage = lazy(() => import('./landing_page/gallery/GalleryPage'))
const EnrollPage = lazy(() => import('./landing_page/enroll/EnrollPage'))
const PrivacyPage = lazy(() => import('./landing_page/privacy/PrivacyPage'))
const NotFound = lazy(() => import('./landing_page/NotFound'))

// Individual Program Pages
const Nursery = lazy(() => import('./landing_page/programs/Nursery'))
const LKG = lazy(() => import('./landing_page/programs/LKG'))
const UKG = lazy(() => import('./landing_page/programs/UKG'))
const STDOne = lazy(() => import('./landing_page/programs/STDOne'))
const STDTwo = lazy(() => import('./landing_page/programs/STDTwo'))
const STDThree = lazy(() => import('./landing_page/programs/STDThree'))
const STDFour = lazy(() => import('./landing_page/programs/STDFour'))

// Individual Facility Pages
const SmartClass = lazy(() => import('./landing_page/facilities/SmartClass'))
const Art = lazy(() => import('./landing_page/facilities/Art'))
const Transport = lazy(() => import('./landing_page/facilities/Transport'))
const Computer = lazy(() => import('./landing_page/facilities/Computer'))
const Indoor = lazy(() => import('./landing_page/facilities/Indoor'))
const Yoga = lazy(() => import('./landing_page/facilities/Yoga'))

import ScrollToTop from './components/custom/ScrollToTop'
import TranslateButton from './components/custom/TranslateButton'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
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
      </Suspense>
      <TranslateButton />
    </BrowserRouter>
  </LanguageProvider>
)
