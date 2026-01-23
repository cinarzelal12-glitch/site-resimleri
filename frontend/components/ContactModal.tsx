
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp mesaj taslağı oluşturma
    const message = `*Yeni Teklif Talebi (Web Sitesi)*\n\n` +
                    `*Ad Soyad:* ${formData.firstName} ${formData.lastName}\n` +
                    `*E-posta:* ${formData.email}\n` +
                    `*Telefon:* ${formData.phone}\n` +
                    `*Proje Detayları:* ${formData.details}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;

    // Yeni sekmede WhatsApp'ı aç
    window.open(whatsappUrl, '_blank');
    
    // Modalı kapat ve formu sıfırla
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      details: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        <div className="bg-primary px-6 py-4 flex justify-between items-center">
          <h3 className="text-white text-lg font-bold">Teklif İste</h3>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-sm">
            Projenizle ilgili detayları bizimle paylaşın, uzman ekibimiz WhatsApp üzerinden hızlıca sizinle iletişime geçsin.
          </p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Ad</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
                  placeholder="Baran"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Soyad</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
                  placeholder="Çınar"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">E-posta</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
                placeholder="baran@ornek.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Telefon</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
                placeholder="(5XX) XXX XX XX"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Proje Detayları</label>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm resize-none"
                placeholder="Projeniz hakkında kısaca bilgi verin..."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              WhatsApp ile Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
