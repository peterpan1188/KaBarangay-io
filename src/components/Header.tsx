import React, { useState } from 'react';
import { Menu, X, Landmark, Users, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onPartnerClick: () => void;
  onDemoClick: () => void;
}

export default function Header({ onPartnerClick, onDemoClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The "Why"', href: "#why-story" },
    { name: "About KaBarangay", href: "#about" },
    { name: "Features", href: "#features-explorer" },
    { name: "Our Vision", href: "#vision" },
    { name: "Voices", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-vintage-cream/90 backdrop-blur-md border-b border-vintage-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand ID */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Custom heart-shaped nipa hut (home) roof */}
                  <path d="M12 4L3 11H5V20H19V11H21L12 4Z" fill="currentColor" opacity="0.15" />
                  <path d="M12 3L2 11H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V11H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="var(--color-brand-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 16C9 14.5 10.5 14 12 14C13.5 14 15 14.5 15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg sm:text-xl text-brand-primary tracking-tight leading-none">
                  KaBarangay<span className="text-brand-accent">.io</span>
                </span>
                <span className="font-mono text-[9px] text-brand-accent font-semibold tracking-widest mt-0.5 uppercase">
                  Civic-Tech Pilipinas
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-sm font-medium text-brand-charcoal/80 hover:text-brand-primary transition-all duration-150 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Call-to-action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onDemoClick}
              className="px-4 py-2 text-xs font-semibold text-brand-primary hover:text-brand-primary-light transition-colors border border-brand-primary/20 rounded-lg hover:bg-brand-primary/5 cursor-pointer font-sans"
            >
              Explore Features
            </button>
            <button
              onClick={onPartnerClick}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-brand-primary hover:bg-brand-primary-light transition-all rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer font-sans flex items-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4 text-brand-accent" />
              Partner With Us
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-vintage-sand/50 hover:text-brand-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden border-t border-vintage-sand bg-vintage-cream"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-brand-charcoal hover:bg-vintage-sand hover:text-brand-primary font-body text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-vintage-sand flex flex-col gap-3 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onDemoClick();
                  }}
                  className="w-full text-center px-4 py-3 text-sm font-semibold text-brand-primary border border-brand-primary/20 rounded-lg hover:bg-brand-primary/5 cursor-pointer"
                >
                  Explore Features
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onPartnerClick();
                  }}
                  className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-light rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-brand-accent" />
                  Partner With Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
