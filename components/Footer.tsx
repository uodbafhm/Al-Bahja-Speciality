
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO } from '../constants';

interface FooterProps { lang: Language; }

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const omanTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Muscat" }));
      const day = omanTime.getDay();
      const hours = omanTime.getHours();
      const minutes = omanTime.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      const morningStart = 8 * 60 + 30;
      const morningEnd = 12 * 60 + 30;
      const eveningStart = 16 * 60 + 30;
      const eveningEnd = 21 * 60 + 30;

      if (day === 5) { // Friday
        setIsOpen(false);
        return;
      }
      setIsOpen((timeInMinutes >= morningStart && timeInMinutes <= morningEnd) || (timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd));
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Section - Rectangular (Mostatila) and shorter */}
        <div className="relative rounded-[40px] md:rounded-[50px] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center min-h-[380px]">
          
          {/* Map Layer */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.411136979679!2d59.50144487602336!3d22.58904427926941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90a3822ae96579%3A0x12b6e0e9587d02d9!2sAL%20BAHJA%20SPECIALITY%20DENTAL%20CENTER!5e0!3m2!1sen!2som!4v1716000000000!5m2!1sen!2som"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) brightness(0.8)' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            {/* Gradient Overlay for clarity and focus */}
            <div className={`absolute inset-0 z-10 ${isRtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-slate-950 via-slate-950/80 to-transparent`}></div>
          </div>

          {/* Content Layer - Reorganized for better spacing */}
          <div className={`relative z-20 w-full p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 ${isRtl ? 'text-right' : 'text-left'}`}>
            
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-10 text-center lg:text-start">
                <h3 className="text-4xl md:text-5xl font-black text-blue-400 tracking-tighter uppercase mb-2">
                  AL BAHJA
                </h3>
                <p className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase">
                  Speciality Dental Center
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-0.5">{t.locationLabel}</p>
                    <p className="text-base font-bold text-white">Sur, Oman</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-0.5">{t.callUsLabel}</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-xl font-black text-white font-jakarta" dir="ltr">{CLINIC_INFO.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Status and Social Actions */}
            <div className="flex flex-col items-center lg:items-end gap-8">
              <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border backdrop-blur-md shadow-2xl ${isOpen ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                {isOpen ? t.clinicStatusOpen : t.clinicStatusClosed}
              </div>

              <div className="flex gap-4">
                <a href={CLINIC_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-700 shadow-xl group">
                  <i className="fa-brands fa-instagram text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href={CLINIC_INFO.maps} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-700 shadow-xl group">
                  <i className="fa-solid fa-map-location-dot text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-all border border-slate-700 shadow-xl group">
                  <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">
            {isRtl ? '© ٢٠٢٤ مركز البهجة التخصصي لطب الأسنان - صور' : '© 2024 Al Bahja Speciality Dental Center - Sur'}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-black text-slate-700 hover:text-blue-400 transition-colors uppercase tracking-widest">{t.privacyPolicy}</a>
            <a href="#" className="text-[9px] font-black text-slate-700 hover:text-blue-400 transition-colors uppercase tracking-widest">{t.legalTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
