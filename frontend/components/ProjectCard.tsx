import React from 'react';
import { Project } from '../constants';

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, className = '' }) => {
    return (
        <article
            className={`group cursor-pointer ${className}`}
            onClick={() => onClick(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick(project);
                }
            }}
            aria-label={`${project.title} projesini görüntüle`}
        >
            <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all z-10 duration-300"></div>
                <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Proje+Görseli';
                    }}
                />

                {/* Overlay with project info */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-primary via-primary/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-accent text-sm font-bold uppercase tracking-wider mb-1">
                        {project.category}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-1">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {project.location}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
