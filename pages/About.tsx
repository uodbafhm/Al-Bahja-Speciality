
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO } from '../constants';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-4 border-[1px] border-blue-200 relative">
            <div className="absolute inset-0 rounded-full border-[1px] border-blue-100 rotate-45 animate-pulse"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={CLINIC_INFO.doctor}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className={`absolute bottom-10 ${lang === 'ar' ? '-left-4' : '-right-4'} glass p-4 rounded-2xl shadow-lg border border-white z-20`}>
              <span className="block text-2xl font-bold text-blue-600">15+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">{t.experienceYears}</span>
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            {t.aboutMeTitle}
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>{t.aboutMeContent}</p>
            <p>
              {lang === 'ar' 
                ? 'مركز البهجة التخصصي لطب الأسنان مجهز بأفضل الأدوات الطبية الحديثة لضمان دقة التشخيص وجودة العلاج. نسعى جاهدين لخلق بيئة هادئة ومريحة لكل من يزورنا.'
                : 'Al Bahja Speciality Dental Center is equipped with top-tier modern medical tools to ensure precision and quality. We strive to create a calm and comfortable environment for everyone who visits us.'
              }
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-blue-600 font-bold mb-2">{t.philosophyLabel}</h4>
                <p className="text-sm">{t.philosophyContent}</p>
              </div>
              <div>
                <h4 className="text-blue-600 font-bold mb-2">{t.educationLabel}</h4>
                <p className="text-sm">{t.educationContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: t.statsHappyPatients, value: '10k+' },
          { label: t.statsSuccessImplants, value: '2500+' },
          { label: t.statsClinics, value: '01' },
          { label: t.statsAwardsWon, value: '12' },
        ].map((stat, i) => (
          <div key={i} className="text-center p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm">
            <div className="text-4xl font-bold text-slate-900 mb-2 font-jakarta">{stat.value}</div>
            <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
