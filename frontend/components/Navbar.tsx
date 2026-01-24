
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onQuoteClick: () => void;
  onNavigate: (page: 'home' | 'projects', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, link: { page: string, href: string }) => {
    e.preventDefault();
    const sectionId = link.href.startsWith('#') ? link.href.substring(1) : link.href;
    const page = link.page as 'home' | 'projects';

    onNavigate(page, sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? 'bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-md py-2'
          : 'bg-white border-b border-transparent py-4'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div
            className="flex items-center gap-4 cursor-pointer group shrink-0"
            onClick={(e) => handleNavClick(e, { page: 'home', href: '#home' })}
          >
            <div className="relative overflow-hidden h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center">
              <img
                src="/imagines/logo.png"
                alt="Özçınar Yapı Logo"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if the URL fails
                  (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/1019/1019709.png";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-primary tracking-tighter uppercase leading-none">
                Özçınar
              </span>
              <span className="text-accent text-sm sm:text-base font-bold uppercase tracking-[0.2em] leading-tight">
                Yapı & İnşaat
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[15px] font-bold text-gray-600 hover:text-accent transition-all relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <button
              onClick={onQuoteClick}
              className="bg-accent hover:bg-accent-hover text-white text-[14px] font-black py-3 px-8 rounded-full transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-accent/20 hidden sm:flex items-center gap-2"
            >
              TEKLİF AL
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </button>

            <button
              className="lg:hidden text-primary p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü Aç"
            >
              <span className="material-symbols-outlined text-[32px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-fade-in-up">
          <div className="px-6 py-10 space-y-6 flex flex-col items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-primary hover:text-accent transition-colors w-full text-center"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.name}
              </a>
            ))}
            <div className="w-full pt-6 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full bg-accent text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-accent/20"
              >
                TEKLİF ALIN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
