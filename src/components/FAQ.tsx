import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../utils/constants';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our detailing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq) => (
            <div 
              key={faq.id} 
              className="mb-4 border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors"
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp size={24} className="text-gray-400" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-800/50 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Contact us for more information
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;