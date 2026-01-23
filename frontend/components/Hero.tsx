import React from 'react';

interface HeroProps {
  onNavigate: (page: 'home' | 'projects', sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'projects', id: string) => {
    e.preventDefault();
    onNavigate(page, id);
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image - Priority Loading for LCP */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmo-p8sXVEmLzuT52FPd4WsA5h2srDDXkyT4BGBgqey6XuhUZoGVk5QYq9FPPeoBg7ZEW45TN4L4Ess5pT6r4_KGMSuV5cRx9YDl8D_rprHO08aHZuxfeFvRgp31_59xAShJI2ZARgYHPBxBdVSxsW_B8NGPmrWFRLSF-q0li2nhR2Mj2RC_IY7OZW6pGrK0emldyNMen9guCRfYpONv-IrO8dFdg7I2EPodJwK2zIqCf11nrZMeQFU85Za54wap0mwZZS2Dt-zI5E")' 
        }}
        role="img"
        aria-label="Akşam karanlığında modern, cam cepheli lüks bir rezidans binası"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent sm:to-primary/20"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl flex flex-col gap-6 animate-fade-in-up">
          <div className="w-16 h-1 bg-accent mb-2"></div>
          
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
            Geleceği Güvenle <br/>İnşa Ediyoruz
          </h1>
          
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-light max-w-lg drop-shadow-md">
            Kentsel dönüşüm, rezidans projeleri ve restorasyon işlerinde genel müteahhitlik çözümleri ile yaşam standartlarını yükseltiyoruz.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              onClick={(e) => handleClick(e, 'home', 'projects')}
              className="bg-accent hover:bg-accent-hover text-white text-base font-bold py-3.5 px-8 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group w-full sm:w-auto"
              aria-label="Tamamladığımız projeleri inceleyin"
            >
              <span>Projelerimizi İnceleyin</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            
            <a 
              href="#corporate"
              onClick={(e) => handleClick(e, 'home', 'corporate')}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-primary text-base font-bold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              aria-label="Şirketimiz hakkında bilgi edinin"
            >
              Hakkımızda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;