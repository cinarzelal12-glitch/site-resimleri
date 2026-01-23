import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface border-y border-gray-200 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 text-lg">Her ölçekteki inşaat projesinde uzman kadromuzla yanınızdayız.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-surface group-hover:bg-primary/5 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-accent text-[32px] transition-colors">
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;