import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import StickyHeader from './components/StickyHeader';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BentoServices from './components/BentoServices';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TrustWarranty from './components/TrustWarranty';
import MultiStepModal from './components/MultiStepModal';
import SEOFooter from './components/SEOFooter';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <StickyHeader onOpenModal={() => setModalOpen(true)} />

        <main id="main-content">
          <Hero onOpenModal={() => setModalOpen(true)} />
          <TrustBar />
          <BentoServices />
          <BeforeAfterSlider />
          <TrustWarranty />
        </main>

        <SEOFooter />
        <MultiStepModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
