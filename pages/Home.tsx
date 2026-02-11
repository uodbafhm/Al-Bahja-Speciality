
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ReviewSection from '../components/ReviewSection';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero lang={lang} />
      <Services lang={lang} />
      <ReviewSection lang={lang} />
    </motion.div>
  );
};

export default Home;
