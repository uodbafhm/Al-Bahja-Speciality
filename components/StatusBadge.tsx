
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface StatusBadgeProps {
  lang: Language;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const checkStatus = () => {
      // Create a date object specifically for Oman (Asia/Muscat)
      const omanTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Muscat" }));
      
      const day = omanTime.getDay(); // 0: Sunday, 1: Monday, ..., 5: Friday, 6: Saturday
      const hours = omanTime.getHours();
      const minutes = omanTime.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      const morningStart = 8 * 60 + 30; // 08:30
      const morningEnd = 12 * 60 + 30;   // 12:30
      const eveningStart = 16 * 60 + 30; // 16:30
      const eveningEnd = 21 * 60 + 30;   // 21:30

      // Friday is closed
      if (day === 5) {
        setIsOpen(false);
        return;
      }

      const inMorning = timeInMinutes >= morningStart && timeInMinutes <= morningEnd;
      const inEvening = timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd;

      setIsOpen(inMorning || inEvening);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds for higher accuracy
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full border transition-colors duration-500 ${isOpen ? 'bg-green-50 border-green-200 text-green-700 shadow-lg shadow-green-100' : 'bg-red-50 border-red-200 text-red-700 shadow-lg shadow-red-100'}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest">
        {isOpen ? t.clinicStatusOpen : t.clinicStatusClosed}
      </span>
    </div>
  );
};

export default StatusBadge;
