
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, CLINIC_INFO } from '../constants';
import StatusBadge from './StatusBadge';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  const navItems = [
    { name: t.navHome, path: '/' },
    { name: t.navAbout, path: '/about' },
    { name: t.navContact, path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo/Typography - Title stays stylized as requested */}
        <Link to="/" className="flex flex-col group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              AL BAHJA
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-blue-500 uppercase opacity-80">
              Speciality Dental Center
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full z-10 ${
                location.pathname === item.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              
              <AnimatePresence>
                {hoveredPath === item.path && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-blue-50 rounded-full -z-0"
                  />
                )}
              </AnimatePresence>

              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative ps-4 border-s border-slate-200 ms-4">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 bg-white/50 border border-slate-200 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase hover:bg-white hover:shadow-lg transition-all"
            >
              <i className="fa-solid fa-globe text-blue-600"></i>
              {lang}
              <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-3 right-0 w-40 bg-white rounded-[20px] shadow-2xl border border-slate-100 overflow-hidden py-2"
                >
                  <button
                    onClick={() => { setLang('ar'); setIsLangMenuOpen(false); }}
                    className={`w-full text-right px-4 py-3 text-xs font-bold hover:bg-blue-50 transition-colors flex items-center justify-between ${lang === 'ar' ? 'text-blue-600' : 'text-slate-500'}`}
                  >
                    <span>العربية (AR)</span>
                    {lang === 'ar' && <i className="fa-solid fa-check scale-75"></i>}
                  </button>
                  <button
                    onClick={() => { setLang('en'); setIsLangMenuOpen(false); }}
                    className={`w-full text-right px-4 py-3 text-xs font-bold hover:bg-blue-50 transition-colors flex items-center justify-between ${lang === 'en' ? 'text-blue-600' : 'text-slate-500'}`}
                  >
                    <span>English (EN)</span>
                    {lang === 'en' && <i className="fa-solid fa-check scale-75"></i>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-900 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-8">
              <div className="flex justify-center">
                <StatusBadge lang={lang} />
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-black py-2 ${location.pathname === item.path ? 'text-blue-600 translate-x-2' : 'text-slate-800'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{t.selectLanguage}</span>
                <div className="flex gap-2">
                  <button onClick={() => { setLang('ar'); setIsMenuOpen(false); }} className={`px-5 py-2 rounded-xl font-bold ${lang === 'ar' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500'}`}>AR</button>
                  <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={`px-5 py-2 rounded-xl font-bold ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500'}`}>EN</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
