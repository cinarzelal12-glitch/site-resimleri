import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="corporate" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm">
                <span className="w-8 h-[2px] bg-accent"></span>
                Kurumsal
              </div>
              
              <h3 className="text-primary text-3xl md:text-4xl font-bold leading-tight">
                Felsefemiz: <span className="text-gray-400 font-light">Güven ve Estetik</span>
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Özçınar İnşaat olarak, her tuğlada güven, her çizgide estetik arıyoruz. Yılların getirdiği deneyimle, sadece bina değil, gelecek nesiller için güvenli yaşam alanları inşa ediyoruz.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                Modern mimari anlayışını geleneksel sağlamlık ilkeleriyle birleştirerek, kentsel dokuya değer katan projelere imza atıyoruz. Müşteri memnuniyeti ve iş güvenliği, vazgeçilmez önceliklerimizdir.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-6 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="text-4xl font-black text-primary mb-1">
                    {new Date().getFullYear() - COMPANY_INFO.yearFounded}+
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Yıllık Tecrübe</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-primary mb-1">
                    {COMPANY_INFO.completedProjects}+
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Tamamlanan Proje</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMKkjS4cxENz_wQdgeAoP9Ly3pMGJfYim4CnAA2QlS1pUjWZR78LmXoZrh7pYzIGbfSCqU_9wFlDyOSnj2JQLY-ggcZ1jyBI_EEGEAPj9pYtlUg684U1kzlpogYJyfAD1JmurXsIHJb3mcP9Xcx80pQ7-_JuphCLuzHzYRpN1SNNi9_vM3wchQEiukiVH_MWO4BaI3H-D9ET0eNpwPniE-u8-9-nLNuWZygVOu2xlaoaiQMt3E0TubG8jqpMG42O2s0VPzqMPi0wr"
                alt="Architects reviewing construction blueprints on a wooden table"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative square */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 z-0 rounded-full blur-2xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;