
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ${lang === 'ar' ? 'font-cairo' : 'font-jakarta'}`}>
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-40"
          />
        </div>

        <Navbar lang={lang} setLang={setLang} />

        <main className="flex-grow pt-24">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/about" element={<About lang={lang} />} />
              <Route path="/contact" element={<Contact lang={lang} />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer lang={lang} />

        {/* New Smart ChatBot */}
        <ChatBot lang={lang} />
      </div>
    </Router>
  );
};

export default App;
