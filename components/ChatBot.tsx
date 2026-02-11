
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO } from '../constants';
import { Link } from 'react-router-dom';

interface ChatBotProps {
  lang: Language;
}

type ChatView = 'main' | 'booking' | 'prices' | 'location';

const ChatBot: React.FC<ChatBotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [view, setView] = useState<ChatView>('main');
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const resetChat = () => {
    setView('main');
  };

  const handleToggle = () => {
    if (!isOpen) {
      setHasUnread(false);
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (v: ChatView) => {
    setView(v);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="mb-4 w-[350px] md:w-[400px] bg-white rounded-[40px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-slate-100"
          >
            {/* Header */}
            <div className="bg-blue-600 p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center relative">
                  <i className="fa-solid fa-comment-dots text-xl"></i>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600"></span>
                </div>
                <div>
                  <h4 className="font-black text-sm tracking-tight">
                    {isRtl ? 'مساعد البهجة' : 'Al Bahja Assistant'}
                  </h4>
                  <p className="text-[10px] opacity-80 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    {t.activeNow}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 h-[400px] overflow-y-auto bg-slate-50/50 flex flex-col gap-4">
              
              <AnimatePresence mode="wait">
                {view === 'main' && (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-white p-5 rounded-[25px] rounded-br-none shadow-sm border border-slate-100 max-w-[85%] self-start text-sm leading-relaxed font-bold text-slate-700">
                      {isRtl 
                        ? 'يا هلا بك 👋 حياك الله في عيادة البهجة لطب الأسنان 🦷 كيف نقدر نساعدك اليوم؟' 
                        : 'Hello 👋 Welcome to Al Bahja Dental Clinic 🦷 How can we help you today?'}
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <button 
                        onClick={() => handleOptionClick('booking')}
                        className="w-full bg-white hover:bg-blue-50 border border-slate-100 p-4 rounded-2xl text-blue-600 font-bold text-sm flex items-center justify-between transition-all group"
                      >
                        <i className={`fa-solid ${isRtl ? 'fa-chevron-left' : 'fa-chevron-right'} text-[10px] text-slate-300 group-hover:text-blue-400`}></i>
                        <span>{isRtl ? 'أبغي أحجز موعد' : 'I want to book an appointment'}</span>
                      </button>
                      
                      <button 
                        onClick={() => handleOptionClick('prices')}
                        className="w-full bg-white hover:bg-blue-50 border border-slate-100 p-4 rounded-2xl text-blue-600 font-bold text-sm flex items-center justify-between transition-all group"
                      >
                        <i className={`fa-solid ${isRtl ? 'fa-chevron-left' : 'fa-chevron-right'} text-[10px] text-slate-300 group-hover:text-blue-400`}></i>
                        <span>{isRtl ? 'أريد أعرف الأسعار' : 'I want to know the prices'}</span>
                      </button>

                      <button 
                        onClick={() => handleOptionClick('location')}
                        className="w-full bg-white hover:bg-blue-50 border border-slate-100 p-4 rounded-2xl text-blue-600 font-bold text-sm flex items-center justify-between transition-all group"
                      >
                        <i className={`fa-solid ${isRtl ? 'fa-chevron-left' : 'fa-chevron-right'} text-[10px] text-slate-300 group-hover:text-blue-400`}></i>
                        <span>{isRtl ? 'وين موقعكم بالضبط؟' : 'Where is the clinic located?'}</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {view === 'booking' && (
                  <motion.div
                    key="booking"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col gap-2">
                       <div className="bg-blue-600 text-white p-4 rounded-[20px] rounded-bl-none max-w-[80%] self-end ml-auto text-sm font-bold">
                         {isRtl ? 'أبغي أحجز موعد' : 'I want to book an appointment'}
                       </div>
                       <div className="bg-white p-5 rounded-[25px] rounded-br-none shadow-sm border border-slate-100 max-w-[85%] text-sm font-bold text-slate-700 leading-relaxed">
                         {isRtl 
                           ? 'يا هلا بك! تقدر تختار الموعد اللي يناسبك من هذا الزر:' 
                           : 'We are happy to serve you! You can choose the appointment that suits you directly by clicking the button below:'}
                       </div>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-black py-4 rounded-2xl shadow-xl shadow-blue-100 transition-all"
                    >
                      {isRtl ? 'احجز الحين' : 'Book Now'}
                    </Link>
                  </motion.div>
                )}

                {view === 'prices' && (
                  <motion.div
                    key="prices"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col gap-2">
                       <div className="bg-blue-600 text-white p-4 rounded-[20px] rounded-bl-none max-w-[80%] self-end ml-auto text-sm font-bold">
                         {isRtl ? 'أريد أعرف الأسعار' : 'I want to know the prices'}
                       </div>
                       <div className="bg-white p-5 rounded-[25px] rounded-br-none shadow-sm border border-slate-100 max-w-[85%] text-sm font-bold text-slate-700 leading-relaxed">
                         {isRtl 
                           ? 'عشان تعرف الأسعار بالتفصيل وتكلم الدكتور، تواصل معنا ع الواتساب:' 
                           : 'To get the detailed price list and a preliminary consultation, please contact the doctor directly via WhatsApp:'}
                       </div>
                    </div>
                    
                    <a 
                      href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black py-4 rounded-2xl shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-3"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                      {isRtl ? 'تواصل مع الدكتور' : 'Contact Doctor'}
                    </a>
                  </motion.div>
                )}

                {view === 'location' && (
                  <motion.div
                    key="location"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col gap-2">
                       <div className="bg-blue-600 text-white p-4 rounded-[20px] rounded-bl-none max-w-[80%] self-end ml-auto text-sm font-bold">
                         {isRtl ? 'وين موقعكم بالضبط؟' : 'Where is the clinic?'}
                       </div>
                       <div className="bg-white p-5 rounded-[25px] rounded-br-none shadow-sm border border-slate-100 max-w-[85%] text-sm font-bold text-slate-700 leading-relaxed">
                         {isRtl 
                           ? 'موقعنا في صور.. تشرفنا في أي وقت! هذي الخريطة عشان توصل لنا بسهولة:' 
                           : 'Our location is in Sur city. We are happy to have you visit us, you can follow the map to reach us easily:'}
                       </div>
                    </div>
                    
                    <a 
                      href={CLINIC_INFO.maps}
                      target="_blank"
                      className="block w-full bg-slate-900 hover:bg-black text-white text-center font-black py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3"
                    >
                      <i className="fa-solid fa-map-location-dot"></i>
                      {isRtl ? 'شوف الموقع ع الخريطة' : 'Clinic Location'}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Back to menu button */}
              {view !== 'main' && (
                <button 
                  onClick={resetChat}
                  className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest mt-auto transition-colors"
                >
                  {t.backToMenu}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-white text-blue-600 border-2 border-slate-100' : 'bg-blue-600 text-white shadow-blue-500/20'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.i
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="fa-solid fa-xmark text-2xl"
            ></motion.i>
          ) : (
            <motion.i
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="fa-solid fa-comment-dots text-2xl"
            ></motion.i>
          )}
        </AnimatePresence>

        {/* Unread Message Badge */}
        {!isOpen && hasUnread && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-red-500/40"
          >
            1
            <motion.span 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-red-500 rounded-full"
            ></motion.span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
