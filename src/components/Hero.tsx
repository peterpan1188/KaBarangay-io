import { motion } from 'motion/react';
import { HeartHandshake, ArrowRight, ShieldCheck, FlameKindling, Info, Award, CheckCircle } from 'lucide-react';
import heroImage from '../assets/images/kabarangay_hero_1780140636347.png';

interface HeroProps {
  onPartnerClick: () => void;
  onLearnMoreClick: () => void;
}

export default function Hero({ onPartnerClick, onLearnMoreClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vintage-cream via-vintage-cream to-vintage-sand/30 pt-14 pb-10 lg:pt-24 lg:pb-12">
      
      {/* Abstract Sun Ray Vector overlay to hint Filipino community optimism */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero text side */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            
            {/* Filipino Nook Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Award className="w-3.5 h-3.5 text-brand-accent fill-brand-accent/20" />
              <span>Bayanihan goes Digital</span>
              <span className="w-1 h-1 rounded-full bg-brand-primary-light" />
              <span className="text-brand-primary-light">Civic-Tech Awardee</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight leading-tight sm:leading-none"
            >
              Modernizing <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">Barangay Services</span> <br className="hidden sm:inline" />
              for Every Filipino Community
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed"
            >
              A digital governance and welfare platform designed to connect barangay officials and residents through smarter, faster, and more accessible community services. Built with the heart of human collaboration.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onPartnerClick}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-brand-primary hover:bg-brand-primary-light transition-all rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-5 h-5 text-brand-accent" />
                Partner With Us
              </button>
              <button
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-brand-primary hover:text-brand-primary-light bg-white border border-vintage-sand hover:border-brand-primary/30 transition-all rounded-xl hover:bg-brand-primary/5 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Trust and Compliance Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-6 border-t border-brand-primary/5 flex flex-wrap gap-y-3 gap-x-6 justify-center lg:justify-start text-xs font-medium text-brand-charcoal/60"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-primary" /> Verified Secure Census (Data Privacy Compliant)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-primary-light" /> 100% Cloud-Managed
              </span>
              <span className="flex items-center gap-1.5">
                <FlameKindling className="w-4 h-4 text-brand-coral" /> Emergency Broadcast Enabled
              </span>
            </motion.div>

          </div>

          {/* Hero image side */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-3xl p-4 sm:p-5 bg-white shadow-2xl max-w-lg mx-auto sm:max-w-2xl lg:max-w-none border-2 border-vintage-sand"
            >
              {/* Rounded image border */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-vintage-sand">
                <img
                  src={heroImage}
                  alt="Modern Filipino Barangay Community using smartphone app"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500 ease-out"
                />
                
                {/* Hopeful gradient overlay to set the NGO-warm tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Float Cards summarizing Community Visuals demanded by the prompt */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-vintage-sand rounded-2xl p-3.5 shadow-lg flex items-center gap-3 max-w-[210px] hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-brand-charcoal/50 uppercase tracking-wider font-mono font-bold leading-none">Citizens</p>
                  <p className="text-xs font-extrabold text-brand-primary font-sans leading-tight mt-1">Residents & Families</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white border border-vintage-sand rounded-2xl p-3.5 shadow-lg flex items-center gap-3 max-w-[220px] hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-brand-charcoal/50 uppercase tracking-wider font-mono font-bold leading-none">Connectivity</p>
                  <p className="text-xs font-extrabold text-brand-primary font-sans leading-tight mt-1">Smartphones & Alerts</p>
                </div>
              </div>

            </motion.div>

            {/* Overlaid Micro-Badge */}
            <div className="mt-8 flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs bg-brand-primary/5 border border-brand-primary/10 rounded-full font-medium text-brand-primary">
                👥 Barangay Residents First
              </span>
              <span className="px-3 py-1 text-xs bg-brand-primary/5 border border-brand-primary/10 rounded-full font-medium text-brand-primary-light">
                🏡 Multi-Gen Families
              </span>
              <span className="px-3 py-1 text-xs bg-brand-warm/10 border border-brand-warm/20 rounded-full font-medium text-brand-charcoal">
                🤝 Officials Helping Citizens
              </span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
