
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO } from '../constants';
import StatusBadge from './StatusBadge';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-10 blur-[100px] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-400 via-teal-200 to-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 text-center lg:text-right"
        >
          <div className="flex justify-center lg:justify-start mb-8">
            <StatusBadge lang={lang} />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
            {t.heroTitle.split('،').map((part, i) => (
              <span key={i} className="block last:text-blue-600 last:drop-shadow-sm">
                {part}{i === 0 && '،'}
              </span>
            ))}
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:ms-0 leading-relaxed font-medium">
            {t.heroSubtitle}
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-blue-200 transition-all duration-300 block text-center"
              >
                {t.bookAppointment}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-white hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-black shadow-xl border border-slate-100 transition-all duration-300 flex items-center gap-4 group"
                dir="ltr"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <span className="font-jakarta">{CLINIC_INFO.phone}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] md:h-[650px] flex items-center justify-center"
        >
          {/* Advanced Visual Composition */}
          <div className="relative w-full aspect-square max-w-[550px] group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[80px] -rotate-6 scale-105 transition-transform duration-1000 group-hover:rotate-0"></div>
            <div className="absolute inset-0 bg-teal-400/5 rounded-[80px] rotate-3 scale-105 transition-transform duration-1000 group-hover:-rotate-3"></div>
            
            <div className="absolute inset-0 overflow-hidden rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white bg-slate-100">
              <img
                src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Clinic Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            
            {/* Real-time Stat Widget */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className={`absolute top-10 ${lang === 'ar' ? '-right-10 md:-right-20' : '-left-10 md:-left-20'} glass p-5 rounded-[30px] shadow-2xl border border-white/80 z-20 flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white text-xl">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <div className={lang === 'ar' ? 'pe-4' : 'ps-4'}>
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{t.satisfiedPatientsHero}</div>
                <div className="text-xl font-black text-slate-900">10,000+</div>
              </div>
            </motion.div>

            {/* Google Rating Overlay */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className={`absolute bottom-10 ${lang === 'ar' ? '-left-5 md:-left-10' : '-right-5 md:-right-10'} bg-white p-6 rounded-[30px] shadow-2xl border border-blue-50 z-20`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                   <div className="text-3xl font-black text-blue-900">4.9</div>
                   <div className="flex text-yellow-400 text-[10px] mt-1">
                    {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-slate-100"></div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{t.clinicExcellenceHero}</p>
                  <p className="text-[10px] font-medium text-slate-400">{t.verifiedByPatientsHero}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
