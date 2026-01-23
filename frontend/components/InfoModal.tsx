import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex justify-between items-center shrink-0">
          <h3 className="text-white text-xl font-bold tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="prose prose-slate max-w-none">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className={`text-gray-600 leading-relaxed mb-4 ${paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') ? 'font-bold text-primary mt-6' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;