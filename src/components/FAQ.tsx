import { useState } from 'react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { ChevronDown, HelpCircle, ShieldAlert, Info, User, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq_1");
  const [selectedCat, setSelectedCat] = useState<'all' | 'general' | 'residents' | 'admins' | 'security'>('all');

  const categories = [
    { value: 'all', label: 'All Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { value: 'general', label: 'General Info', icon: <Info className="w-3.5 h-3.5 text-brand-accent" /> },
    { value: 'residents', label: 'For Residents', icon: <User className="w-3.5 h-3.5 text-brand-primary" /> },
    { value: 'admins', label: 'For Admins', icon: <Landmark className="w-3.5 h-3.5 text-brand-primary" /> },
    { value: 'security', label: 'Data Security', icon: <ShieldAlert className="w-3.5 h-3.5 text-brand-coral" /> }
  ];

  const filteredFaqs = FAQS.filter(item => 
    selectedCat === 'all' ? true : item.category === selectedCat
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white border-b border-vintage-sand/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-primary uppercase">
            Got Questions?
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight text-center">
            Frequently Asked Inquiries
          </h2>
          <p className="mt-3 text-sm text-brand-charcoal/70 font-body max-w-xl mx-auto">
            Everything you need to know about setting up KaBarangay io for your local community, resident security details, and offline access options.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCat(cat.value as any);
                // Auto-open first item in filtered list if available
                const firstFound = FAQS.find(f => cat.value === 'all' ? true : f.category === cat.value);
                setOpenId(firstFound ? firstFound.id : null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                selectedCat === cat.value
                  ? 'bg-vintage-sand border-brand-primary/20 text-brand-primary font-bold'
                  : 'bg-white border-vintage-sand text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-primary/10'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-xs text-brand-charcoal/50 font-body py-8 bg-vintage-cream/30 border border-teal-500 rounded-2xl">
              No matching questions found in this category.
            </p>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-primary/20 bg-vintage-cream/35 shadow-sm' 
                      : 'border-vintage-sand/80 bg-white hover:border-brand-primary/10'
                  }`}
                >
                  {/* Header Row */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left px-5 py-4 sm:py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-brand-charcoal text-balance">
                      {item.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-vintage-sand/50 flex items-center justify-center text-brand-charcoal/60 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 bg-brand-primary/10 text-brand-primary' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:pb-6 pt-1 border-t border-vintage-sand/30">
                          <p className="font-body text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
