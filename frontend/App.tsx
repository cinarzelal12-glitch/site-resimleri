import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import AllProjectsPage from './components/AllProjectsPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import InfoModal from './components/InfoModal';
import { COMPANY_INFO, LEGAL_CONTENTS } from './constants';

type PageType = 'home' | 'projects';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Info Modal States
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState({ title: '', content: '' });

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openInfoModal = (type: keyof typeof LEGAL_CONTENTS) => {
    setInfoModalContent(LEGAL_CONTENTS[type]);
    setIsInfoModalOpen(true);
  };

  const closeInfoModal = () => setIsInfoModalOpen(false);

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Merhaba, web siteniz üzerinden ulaşıyorum. Bilgi alabilir miyim?')}`;
    window.open(url, '_blank');
  };

  // Navigasyon Yöneticisi
  const handleNavigate = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    
    if (page === 'home') {
      if (sectionId && sectionId !== 'top') {
        // Eğer home sayfasındaysak ve bir bölüme gidilecekse
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100); // DOM render süresi için kısa bir gecikme
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Başka bir sayfaya (örn: projeler) gidiyorsak en üste scroll et
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col min-h-screen relative">
      <Navbar onQuoteClick={openContactModal} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <div id="home">
              <Hero onNavigate={handleNavigate} />
            </div>
            <About />
            <Services />
            <Projects onViewAll={() => handleNavigate('projects')} />
            <ContactSection />
          </>
        ) : (
          <AllProjectsPage />
        )}
      </main>

      <Footer onOpenLegal={openInfoModal} onNavigate={handleNavigate} />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />

      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={closeInfoModal}
        title={infoModalContent.title}
        content={infoModalContent.content}
      />

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsappClick}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-12 transition-transform">chat</span>
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Hızlı Destek
        </span>
      </button>
    </div>
  );
};

export default App;