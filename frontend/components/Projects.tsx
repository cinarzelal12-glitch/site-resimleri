
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onViewAll: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Öne Çıkan Projeler</h2>
            <p className="text-gray-500">İmzamızı taşıyan seçkin yapılardan bazıları.</p>
          </div>
          <button 
            onClick={onViewAll}
            className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
            aria-label="Tüm projeler sayfasını görüntüle"
          >
            Tüm Projeler 
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt="Özçınar İnşaat Projesi"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center sm:hidden">
          <button 
            onClick={onViewAll}
            className="text-primary font-bold border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors w-full text-center"
          >
            Tüm Projeleri Gör
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
