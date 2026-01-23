
import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

interface FooterProps {
  onOpenLegal: (type: 'kvkk' | 'privacy' | 'cookies' | 'terms' | 'hr') => void;
  onNavigate: (page: 'home' | 'projects', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { page: string, href: string }) => {
    e.preventDefault();
    const sectionId = link.href.startsWith('#') ? link.href.substring(1) : link.href;
    const page = link.page as 'home' | 'projects';
    onNavigate(page, sectionId);
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('home', 'services');
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12" id="footer">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Company Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl shadow-inner w-16 h-16 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/cinarzelal12-glitch/site-resimleri/main/logo.png" 
                  alt="Özçınar Yapı Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/1019/1019709.png";
                  }}
                />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tighter uppercase leading-none">Özçınar</h2>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Yapı & İnşaat</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Logomuzdaki çınar yaprağı gibi köklü ve sağlam, projelerimiz gibi modern ve yenilikçiyiz. İstanbul'un siluetine değer katıyoruz.
            </p>
            
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-primary-dark border border-gray-800 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                  aria-label={`${social} sayfamızı ziyaret edin`}
                >
                 <span className="material-symbols-outlined text-xl group-hover:scale-125 transition-transform">share</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-8 border-l-4 border-accent pl-4">Kurumsal</h3>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-400 hover:text-accent transition-colors font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={() => onOpenLegal('hr')} className="text-gray-400 hover:text-accent transition-colors font-medium">İnsan Kaynakları</button>
              </li>
            </ul>
          </div>
          
          {/* Work Areas */}
          <div>
            <h3 className="text-lg font-black mb-8 border-l-4 border-accent pl-4">Uzmanlıklar</h3>
            <ul className="flex flex-col gap-4">
              {[
                'Kentsel Dönüşüm',
                'Lüks Rezidans Projeleri',
                'Tarihi Eser Restorasyonu',
                'Genel Müteahhitlik',
                'Proje Danışmanlığı'
              ].map((area) => (
                <li key={area}>
                  <a 
                    href="#services" 
                    onClick={handleServicesClick}
                    className="text-gray-400 hover:text-accent transition-colors font-medium"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-black mb-8 border-l-4 border-accent pl-4">İletişim</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-dark flex items-center justify-center shrink-0 border border-gray-800 group-hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-accent group-hover:text-white">location_on</span>
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-dark flex items-center justify-center shrink-0 border border-gray-800 group-hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-accent group-hover:text-white">call</span>
                </div>
                <span className="text-gray-400 text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-dark flex items-center justify-center shrink-0 border border-gray-800 group-hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-accent group-hover:text-white">mail</span>
                </div>
                <span className="text-gray-400 text-sm truncate">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Özçınar Yapı & İnşaat. Her tuğlada güven.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => onOpenLegal('kvkk')} className="text-xs text-gray-500 hover:text-accent transition-colors uppercase tracking-widest font-bold">KVKK</button>
            <button onClick={() => onOpenLegal('privacy')} className="text-xs text-gray-500 hover:text-accent transition-colors uppercase tracking-widest font-bold">Gizlilik</button>
            <button onClick={() => onOpenLegal('terms')} className="text-xs text-gray-500 hover:text-accent transition-colors uppercase tracking-widest font-bold">Koşullar</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
