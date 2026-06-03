import React from 'react';
import { ADMIN_FEATURES, RESIDENT_FEATURES } from '../data';
import { 
  Smartphone, ShieldAlert, FileCheck, ClipboardList, Megaphone, 
  Users, Award, Landmark, Calendar, Heart, TrendingUp, HelpCircle,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/kabarangay_hero_1780140636347.png';

const getResidentIcon = (index: number) => {
  switch (index) {
    case 0: return <FileCheck className="w-5 h-5 text-brand-primary" />;
    case 1: return <ClipboardList className="w-5 h-5 text-brand-primary" />;
    case 2: return <Heart className="w-5 h-5 text-brand-primary" />;
    case 3: return <Megaphone className="w-5 h-5 text-brand-primary" />;
    case 4: return <Calendar className="w-5 h-5 text-brand-primary" />;
    case 5: return <ShieldAlert className="w-5 h-5 text-brand-primary" />;
    default: return <Smartphone className="w-5 h-5 text-brand-primary" />;
  }
};

const getAdminIcon = (index: number) => {
  switch (index) {
    case 0: return <Users className="w-5 h-5 text-brand-primary" />;
    case 1: return <Award className="w-5 h-5 text-brand-primary" />;
    case 2: return <FileCheck className="w-5 h-5 text-brand-primary" />;
    case 3: return <ClipboardList className="w-5 h-5 text-brand-primary" />;
    case 4: return <Megaphone className="w-5 h-5 text-brand-primary" />;
    case 5: return <TrendingUp className="w-5 h-5 text-brand-primary" />;
    default: return <Landmark className="w-5 h-5 text-brand-primary" />;
  }
};

export default function InteractiveFeatureExplorer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="features-explorer" className="py-20 lg:py-28 bg-vintage-sand/10 border-b border-vintage-sand scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-primary uppercase">
            Platform Capabilities
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Comprehensive Civic Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 font-body leading-relaxed">
            Discover the dual-sided framework customized for Philippine local communities. A cohesive system built to elevate citizen dignity and equip barangay officials with powerful command tools.
          </p>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* COLUMN 1: RESIDENT DETAILS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-vintage-sand rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3.5 border-b border-vintage-sand pb-5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  Citizen Services
                </span>
                <h3 className="font-sans font-extrabold text-xl text-brand-charcoal mt-0.5">
                  The Residentials Portal
                </h3>
              </div>
            </div>

            <p className="text-sm text-brand-charcoal/70 leading-relaxed font-body mb-8">
              Enabling residents to handle essential public requests remotely and securely. Say goodbye to taking unpaid leaves or waiting under the heat in long queues for basic clearance.
            </p>

            <div className="space-y-4 flex-1">
              {RESIDENT_FEATURES.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex gap-4 p-4 rounded-2xl border border-vintage-sand/55 bg-vintage-cream/10 hover:bg-vintage-cream/35 hover:border-vintage-sand transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-vintage-sand/60 flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                    {getResidentIcon(i)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h4 className="font-sans font-bold text-sm text-brand-primary leading-snug">
                        {feature.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-vintage-sand text-brand-charcoal/80">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-xs text-brand-charcoal/70 font-body mt-1.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: OFFICIALS DETAILS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-vintage-sand rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3.5 border-b border-vintage-sand pb-5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shadow-sm">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  LGU Administration
                </span>
                <h3 className="font-sans font-extrabold text-xl text-brand-charcoal mt-0.5">
                  Officials Command Center
                </h3>
              </div>
            </div>

            <p className="text-sm text-brand-charcoal/70 leading-relaxed font-body mb-8">
              A secure, high-efficiency system designed specifically for administrative personnel, welfare coordinators, and disaster responders to collaborate and manage community actions seamlessly.
            </p>

            <div className="space-y-4 flex-1">
              {ADMIN_FEATURES.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex gap-4 p-4 rounded-2xl border border-vintage-sand/55 bg-vintage-cream/10 hover:bg-vintage-cream/35 hover:border-vintage-sand transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-vintage-sand/60 flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                    {getAdminIcon(i)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h4 className="font-sans font-bold text-sm text-brand-primary leading-snug">
                        {feature.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-xs text-brand-charcoal/70 font-body mt-1.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Highlight Banner / Client Portal Gateway with Image & Green Overlay */}
        <div className="relative mt-16 p-8 md:p-12 rounded-3xl overflow-hidden border border-brand-primary/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 min-h-[220px]">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: 'center 35%'
            }}
          />
          {/* Rich Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/90 to-brand-primary/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-brand-primary/85 z-10" />

          {/* Banner Contents */}
          <div className="relative z-20 max-w-xl text-center md:text-left">
            <span className="inline-block font-mono text-[10px] font-bold text-brand-accent uppercase tracking-widest bg-black/30 border border-brand-accent/30 px-3 py-1 rounded-full">
              Kabarangay Client Portal
            </span>
            <h3 className="mt-3.5 font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Para sa Masa: Your Resident Portal
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-vintage-cream/90 leading-relaxed font-body">
              Requested documents, health status bulletins, and emergency SOS systems can be accessed directly from any smartphone. Try using our client services mock explorer options in the left column.
            </p>
          </div>

          <div className="relative z-20 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-center">
            <button 
              onClick={() => {
                const el = document.getElementById('vision');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full md:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-brand-charcoal font-sans font-extrabold text-sm uppercase tracking-widest rounded-xl transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl text-center cursor-pointer"
            >
              Learn More
            </button>
            <a 
              href="tel:09104011905"
              className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white font-sans font-bold text-sm uppercase tracking-widest rounded-xl transition-all hover:-translate-y-1 text-center flex items-center justify-center gap-2.5 cursor-pointer hover:border-white/60"
            >
              <Phone className="w-5 h-5 text-brand-accent" />
              Talk to Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
