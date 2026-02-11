
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { REVIEWS, TRANSLATIONS, CLINIC_INFO } from '../constants';

interface ReviewSectionProps {
  lang: Language;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.reviewsTitle}</h2>
            <p className="text-slate-500">{t.reviewsSubtitle}</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">4.9</div>
              <div className="flex text-yellow-400 text-sm mt-1">
                {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-bold">Google Maps</div>
            </div>
            <div className="h-12 w-[1px] bg-slate-100"></div>
            <a
              href={CLINIC_INFO.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline"
            >
              {t.writeReview}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full border-2 border-blue-50" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.user}</h4>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-xs mb-4">
                {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{review.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
