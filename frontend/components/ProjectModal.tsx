import React, { useEffect } from 'react';
import { Project } from '../constants';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-label="Modalı kapat"
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 text-white hover:text-accent transition-colors bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2"
                    aria-label="Modalı kapat"
                >
                    <span className="material-symbols-outlined text-[28px]">close</span>
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto custom-scrollbar">
                    {/* Project Image */}
                    <div className="relative w-full h-[400px] overflow-hidden">
                        <img
                            src={project.image}
                            alt={`${project.title} - ${project.category}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x400?text=Proje+Görseli';
                            }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Project Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 pb-6">
                            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-2">
                                <span className="w-8 h-[2px] bg-accent"></span>
                                {project.category}
                            </div>
                            <h2 className="text-white text-3xl md:text-4xl font-bold">
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 md:p-12">
                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Proje Hakkında</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
