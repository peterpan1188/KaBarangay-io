import { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Heart, ChevronLeft, ChevronRight, Languages, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardLanguages, setCardLanguages] = useState<Record<string, 'native' | 'english'>>({});

  const toggleLanguage = (id: string, mode: 'native' | 'english') => {
    setCardLanguages(prev => ({
      ...prev,
      [id]: mode
    }));
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor screen width to adjust visible cards dynamically
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  // Update active slide bounds if screen changes
  useEffect(() => {
    const maxActive = TESTIMONIALS.length - visibleCount;
    if (active > maxActive) {
      setActive(Math.max(0, maxActive));
    }
  }, [visibleCount, active]);

  // Auto-rotation effect
  useEffect(() => {
    if (isRotating) {
      timerRef.current = setInterval(() => {
        setActive((prev) => {
          const maxActive = TESTIMONIALS.length - visibleCount;
          if (maxActive <= 0) return 0;
          return (prev + 1) % (maxActive + 1);
        });
      }, 7000); // Rotate every 7 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRotating, visibleCount]);

  const handleNext = () => {
    setActive((prev) => {
      const maxActive = TESTIMONIALS.length - visibleCount;
      if (maxActive <= 0) return 0;
      return (prev + 1) % (maxActive + 1);
    });
  };

  const handlePrev = () => {
    setActive((prev) => {
      const maxActive = TESTIMONIALS.length - visibleCount;
      if (maxActive <= 0) return 0;
      return (prev - 1 + maxActive + 1) % (maxActive + 1);
    });
  };
  
  // Custom helper to render friendly stylized initials/avatars
  const renderAvatar = (imageUrl?: string, seed?: string, role?: string) => {
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20 shadow-md flex-shrink-0 group-hover:border-brand-primary transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      );
    }

    let bg = "bg-brand-primary/10 text-brand-primary";
    let emoji = "👨🏾‍💼";
    
    if (role === "resident") {
      bg = "bg-amber-100 text-amber-800";
      emoji = "👵🏼";
    } else if (role === "volunteer") {
      bg = "bg-emerald-100 text-emerald-800";
      emoji = "🧑🏻‍🚒";
    } else if (role === "official" || role === "leader") {
      bg = "bg-rose-100 text-rose-800";
      emoji = "👩🏽‍⚖️";
    }

    return (
      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center text-2xl font-bold border border-vintage-sand shadow-inner flex-shrink-0`}>
        <span>{emoji}</span>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-vintage-sand/15 to-vintage-cream scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-coral uppercase">
            Voices of the Barangay
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Loved by Public Leaders, Trusted by Residents
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-brand-charcoal/70 leading-relaxed font-body">
            Listen to people sharing how modern transparent records are improving their daily lives and safety. Read their real stories of local civic digital transformation.
          </p>
        </div>

        {/* Testimonials Carousel Wrapper */}
        <div 
          className="relative max-w-6xl mx-auto px-2 sm:px-10"
          onMouseEnter={() => setIsRotating(false)}
          onMouseLeave={() => setIsRotating(true)}
        >
          {/* Main viewport with overflow-hidden */}
          <div className="overflow-hidden py-4 -mx-3 px-3">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${active * (100 / visibleCount)}%)` 
              }}
            >
              {TESTIMONIALS.map((item, index) => {
                const isVisible = index >= active && index < active + visibleCount;
                return (
                  <div
                    key={item.id}
                    className="shrink-0 px-3 select-none flex flex-col transition-all duration-500"
                    style={{
                      width: `${100 / visibleCount}%`
                    }}
                  >
                    <div className={`bg-white border-2 border-brand-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-md relative group hover:border-brand-primary/30 transition-all duration-500 ${
                      isVisible 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}>
                    {/* Unique background quote icon */}
                    <div className="absolute top-6 right-6 text-brand-primary/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-12 h-12 fill-current" />
                    </div>

                    {/* Header bar of testimonial with rating stars/hearts and interactive language toggle */}
                    <div className="flex items-center justify-between gap-1 mb-4 relative z-10 flex-wrap">
                      <div className="flex gap-1 text-brand-accent">
                        <Heart className="w-3.5 h-3.5 fill-current text-brand-accent" />
                        <Heart className="w-3.5 h-3.5 fill-current text-brand-accent" />
                        <Heart className="w-3.5 h-3.5 fill-current text-brand-accent" />
                        <Heart className="w-3.5 h-3.5 fill-current text-brand-accent" />
                        <Heart className="w-3.5 h-3.5 fill-current text-brand-accent" />
                      </div>

                      {/* Dual Language Switcher Pills */}
                      <div className="flex items-center bg-vintage-sand/50 border border-vintage-sand/80 rounded-full p-0.5 text-[9px] font-mono font-bold">
                        <button
                          onClick={() => toggleLanguage(item.id, 'native')}
                          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                            cardLanguages[item.id] !== 'english'
                              ? 'bg-brand-primary text-white shadow-sm'
                              : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                          }`}
                        >
                          {item.languageFlag} {item.languageName}
                        </button>
                        <button
                          onClick={() => toggleLanguage(item.id, 'english')}
                          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                            cardLanguages[item.id] === 'english'
                              ? 'bg-brand-primary text-white shadow-sm'
                              : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                          }`}
                        >
                          <Globe className="w-2.5 h-2.5" /> EN
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="font-body text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed italic relative z-10 antialiased min-h-[160px] sm:min-h-[140px] md:min-h-[150px] lg:min-h-[170px] flex items-center">
                        “{cardLanguages[item.id] === 'english' ? item.quoteEn : item.quoteNative}”
                      </p>
                    </div>

                    {/* Footer Info of card */}
                    <div className="mt-6 pt-5 border-t border-vintage-sand/50 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        {renderAvatar(item.imageUrl, item.avatarSeed, item.role)}
                        <div>
                          <h4 className="font-sans font-bold text-sm text-brand-charcoal leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-brand-primary font-bold tracking-wide mt-0.5 leading-tight">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 text-[10px] text-brand-charcoal/70 font-mono font-bold uppercase tracking-wider bg-vintage-sand/40 border border-vintage-sand/80 px-2.5 py-1 rounded-full">
                          <MapPin className="w-3 h-3 text-brand-coral shrink-0" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* Left Arrow Button (Highly transparent until hovered) */}
          <button
            onClick={handlePrev}
            className="absolute left-[-4px] sm:left-[-12px] lg:left-[-24px] top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border border-brand-primary/20 text-brand-primary bg-white/95 shadow-md opacity-25 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-105"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button (Highly transparent until hovered) */}
          <button
            onClick={handleNext}
            className="absolute right-[-4px] sm:right-[-12px] lg:right-[-24px] top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border border-brand-primary/20 text-brand-primary bg-white/95 shadow-md opacity-25 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-105"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bullet Indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: TESTIMONIALS.length - visibleCount + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                  active === index 
                    ? "w-8 bg-brand-primary" 
                    : "w-2 bg-brand-primary/20 hover:bg-brand-primary/45"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


        {/* Short stats strip */}
        <div className="mt-14 max-w-4xl mx-auto bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-around gap-6">
          <div>
            <span className="font-sans font-extrabold text-2xl text-brand-primary">15,000+</span>
            <p className="text-[10px] uppercase font-mono font-bold text-brand-charcoal/50 tracking-wider">Residents Empowered</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-brand-primary/10" />
          <div>
            <span className="font-sans font-extrabold text-2xl text-brand-primary">45+</span>
            <p className="text-[10px] uppercase font-mono font-bold text-brand-charcoal/50 tracking-wider">Partner Barangays</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-brand-primary/10" />
          <div>
            <span className="font-sans font-extrabold text-2xl text-brand-primary">99.8%</span>
            <p className="text-[10px] uppercase font-mono font-bold text-brand-charcoal/50 tracking-wider">SMS Blast Delivery</p>
          </div>
        </div>

      </div>
    </section>
  );
}
