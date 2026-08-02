import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="rounded-2xl glass border border-white/5 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:text-cyber-cyan transition-colors duration-200 cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyber-cyan' : ''}`} />
            </button>
            
            <div 
              className={`accordion-content ${isOpen ? 'open' : ''} border-white/5 transition-all duration-300`}
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <div className="px-6 pb-5 pt-1 border-t border-white/3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
