
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO, SERVICES } from '../constants';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: 'consultation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find service title
    const selectedService = SERVICES.find(s => s.id === formData.service);
    const serviceName = formData.service === 'consultation' 
      ? (lang === 'ar' ? 'استشارة طبية' : 'Medical Consultation')
      : (selectedService ? (lang === 'ar' ? selectedService.title : selectedService.id) : formData.service);

    // Construct WhatsApp Message exactly as requested
    const whatsappMsg = `السلام عليكم دكتور، أود حجز موعد جديد:

👤 المريض : ${formData.name}
📞 الهاتف : ${formData.phone}
🏥 الخدمة : ${serviceName}
📅 التاريخ : ${formData.date}
🕒 الوقت : ${formData.time}
💬 رسالة : ${formData.message || (lang === 'ar' ? 'لا يوجد' : 'None')}

يرجى تأكيد الحجز فوراً`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(whatsappMsg)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show UI Success
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const hours = [
    { day: lang === 'ar' ? 'الثلاثاء' : 'Tuesday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
    { day: lang === 'ar' ? 'الأربعاء' : 'Wednesday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
    { day: lang === 'ar' ? 'الخميس' : 'Thursday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
    { day: lang === 'ar' ? 'الجمعة' : 'Friday', hours: lang === 'ar' ? 'مغلق' : 'Closed' },
    { day: lang === 'ar' ? 'السبت' : 'Saturday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
    { day: lang === 'ar' ? 'الأحد' : 'Sunday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
    { day: lang === 'ar' ? 'الاثنين' : 'Monday', hours: '8:30 AM–12:30 PM, 4:30–9:30 PM' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-16">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">{t.contactTitle}</h2>
            <div className="w-20 h-2 bg-blue-600 rounded-full mb-12"></div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl shadow-slate-200 border border-slate-50"
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactName}</label>
                        <input 
                          required 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-bold" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactPhone}</label>
                        <input 
                          required 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-bold" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactDate}</label>
                        <input 
                          required 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-bold" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactTime}</label>
                        <input 
                          required 
                          type="time" 
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-bold" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactService}</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all appearance-none font-bold"
                        >
                          <option value="consultation">{lang === 'ar' ? 'استشارة طبية' : 'Medical Consultation'}</option>
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.id}>{lang === 'ar' ? s.title : s.id.charAt(0).toUpperCase() + s.id.slice(1)}</option>
                          ))}
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${lang === 'ar' ? 'left-6' : 'right-6'}`}>
                          <i className="fa-solid fa-chevron-down text-blue-600 text-xs"></i>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t.contactMessage}</label>
                      <textarea 
                        rows={3} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all resize-none font-bold"
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl shadow-2xl shadow-blue-200 transition-all text-lg"
                    >
                      {t.contactSubmit}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-12 rounded-[50px] text-center shadow-2xl shadow-green-100"
                >
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-3xl font-black text-green-800 mb-4">{t.confirmedTitle}</h3>
                  <p className="text-green-600 text-lg font-bold">{t.contactSuccess}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-[60px] border border-slate-100 shadow-2xl shadow-slate-200 overflow-hidden h-[420px] group relative"
          >
            <div className={`absolute top-10 ${lang === 'ar' ? 'right-10' : 'left-10'} z-10 pointer-events-none`}>
              <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{t.locationTitle}</span>
                <span className="text-sm font-black text-slate-900">Sur, Oman</span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-400">{lang === 'ar' ? 'تجدنا هنا في صور' : 'Located in Sur'}</span>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.411136979679!2d59.50144487602336!3d22.58904427926941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90a3822ae96579%3A0x12b6e0e9587d02d9!2sAL%20BAHJA%20SPECIALITY%20DENTAL+CENTER!5e0!3m2!1sen!2som!4v1716000000000!5m2!1sen!2som"
              width="100%"
              height="100%"
              className="rounded-[44px] grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <div className="space-y-12 lg:sticky lg:top-32 h-fit">
          {/* Working Hours Card */}
          <div className="bg-white p-10 md:p-14 rounded-[60px] border border-slate-100 shadow-2xl shadow-slate-200">
            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-[24px] flex items-center justify-center text-blue-600">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              {t.workingHours}
            </h3>
            <div className="space-y-5">
              {hours.map((h, i) => (
                <div key={i} className={`flex justify-between items-center py-4 border-b border-slate-50 last:border-0 ${h.hours === 'Closed' || h.hours === 'مغلق' ? 'text-red-500 opacity-60' : ''}`}>
                  <span className="font-black text-slate-800 text-lg">{h.day}</span>
                  <span className="text-sm font-jakarta font-bold text-slate-500">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Card */}
          <div className="bg-slate-900 text-white p-12 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5)] relative overflow-hidden group">
            <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-48 h-48 bg-blue-600/10 ${lang === 'ar' ? 'rounded-br-full -ml-16' : 'rounded-bl-full -mr-16'} -mt-16 group-hover:scale-150 transition-transform duration-1000`}></div>
            <div className={`absolute -bottom-10 ${lang === 'ar' ? '-right-10' : '-left-10'} w-40 h-40 bg-white/5 ${lang === 'ar' ? 'rounded-tl-full' : 'rounded-tr-full'} group-hover:rotate-45 transition-transform duration-1000`}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">{t.needHelpTitle}</h3>
              <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed">{t.needHelpDesc}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-6 bg-white text-slate-900 px-12 py-6 rounded-3xl font-black hover:bg-blue-50 transition-all shadow-2xl"
                dir="ltr"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span className="font-jakarta text-xl">{CLINIC_INFO.phone}</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
