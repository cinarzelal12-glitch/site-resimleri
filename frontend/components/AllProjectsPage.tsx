
import React from 'react';
import { ALL_PROJECTS } from '../constants';

const AllProjectsPage: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen">
      {/* Header Section */}
      <div className="bg-primary pt-32 pb-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Projelerimiz</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
          Geçmişten günümüze imzamızı attığımız, her biri güven ve kaliteyle inşa edilmiş projelerimizin tamamı.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project) => (
            <article 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all z-10 duration-500"></div>
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
      </div>
    </div>
  );
};

export default AllProjectsPage;
