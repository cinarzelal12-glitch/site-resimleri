
import React, { useState } from 'react';
import { ALL_PROJECTS, Project } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const AllProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default AllProjectsPage;
