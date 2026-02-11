
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { SERVICES, TRANSLATIONS, CLINIC_INFO } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const handleServiceClick = (serviceTitle: string) => {
    const msg = lang === 'ar' 
      ? `يا هلا، أريد استفسر عن خدمة (${serviceTitle}) في عيادة البهجة.` 
      : `Hello, I would like to inquire about (${serviceTitle}) service at Al Bahja Dental Center.`;
    
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-32 px-6 bg-slate-50/80 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/20 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            {t.premiumDentalCare}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight"
          >
            {t.ourServices}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            className="h-2 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            const displayTitle = lang === 'ar' ? service.title : service.id.charAt(0).toUpperCase() + service.id.slice(1);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                onClick={() => handleServiceClick(displayTitle)}
                className="group bg-white rounded-[50px] p-2 shadow-2xl shadow-slate-200 border border-white hover:shadow-blue-200 transition-all duration-700 flex flex-col cursor-pointer transform hover:-translate-y-2"
              >
                <div className="bg-slate-50 rounded-[42px] p-8 flex-grow flex flex-col items-center text-center">
                  {/* Image Composition */}
                  <div className="relative w-full h-64 rounded-[36px] overflow-hidden mb-10 border-4 border-white shadow-xl group-hover:shadow-blue-100 transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl">
                        <i className={`${service.icon} text-xl`}></i>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500"></div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-blue-600 transition-colors">
                    {displayTitle}
                  </h3>
                  
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3 font-medium px-4">
                    {lang === 'ar' ? service.description : 'Precision care using the world\'s most advanced dental technologies for a perfect result.'}
                  </p>
                  
                  <div className="mt-auto w-full pt-6 border-t border-slate-100 flex items-center justify-between px-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {t.requestServiceNow}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <i className={`fa-brands fa-whatsapp text-sm`}></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
