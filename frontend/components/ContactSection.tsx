
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp mesaj taslağı oluşturma
    const waMessage = `*Hızlı İletişim Formu (Web Sitesi)*\n\n` +
                      `*Gönderen:* ${formData.firstName} ${formData.lastName}\n` +
                      `*Mesaj:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;

    // Yeni sekmede WhatsApp'ı aç
    window.open(whatsappUrl, '_blank');
    
    // Formu temizle
    setFormData({
      firstName: '',
      lastName: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* İletişim Bilgileri */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-[2px] bg-accent"></span>
                İletişim
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Bizimle İletişime Geçin</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Projeleriniz hakkında detaylı bilgi almak veya iş birliği fırsatlarını değerlendirmek için bize ulaşabilirsiniz. Ofisimize bekleriz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Adres</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Telefon</h4>
                  <p className="text-sm text-gray-500">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">E-posta</h4>
                  <p className="text-sm text-gray-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Mesai Saatleri</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Pazartesi - Cuma: 09:00 - 18:00<br/>
                    Cumartesi: 09:00 - 17:30
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Live Embed */}
            <div className="w-full h-80 bg-surface rounded-2xl overflow-hidden border border-gray-100 shadow-md relative group">
              <iframe 
                src="https://maps.google.com/maps?q=İstanbul&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                title="Özçınar İnşaat Konum Haritası"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Hızlı İletişim Formu */}
          <div className="bg-surface p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
             <h3 className="text-2xl font-bold text-primary mb-8">Hızlı Mesaj Gönder</h3>
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Adınız</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm" 
                      placeholder="Baran" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Soyadınız</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm" 
                      placeholder="Çınar" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mesajınız</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    className="w-full px-4 py-3 rounded-xl border-transparent bg-white focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm resize-none" 
                    placeholder="Konu hakkında bilgi yazınız..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                  WhatsApp ile Gönder
                </button>
             </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
