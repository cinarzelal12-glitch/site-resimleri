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
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-200 flex items-center gap-1 text-lg">
                                <span className="material-symbols-outlined text-[20px]">location_on</span>
                                {project.location}
                            </p>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 md:p-12">
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-[24px]">calendar_month</span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Tamamlanma</div>
                                    <div className="text-primary font-bold text-lg">{project.year}</div>
                                </div>
                            </div>

                            {project.area && (
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-accent text-[24px]">square_foot</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Alan</div>
                                        <div className="text-primary font-bold text-lg">{project.area.toLocaleString('tr-TR')} m²</div>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-[24px]">category</span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Kategori</div>
                                    <div className="text-primary font-bold text-lg">{project.category}</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Proje Hakkında</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Özellikler</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 bg-surface px-4 py-3 rounded-lg"
                                        >
                                            <span className="material-symbols-outlined text-accent text-[20px]">check_circle</span>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
