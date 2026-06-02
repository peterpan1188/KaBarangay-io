import { useState } from 'react';
import { PROBLEMS_SOLUTIONS } from '../data';
import { 
  Frown, 
  Smile, 
  ArrowRightLeft, 
  Clock, 
  Smartphone, 
  FileQuestion, 
  ClipboardCheck, 
  BellOff, 
  MessageSquare, 
  CloudRain, 
  MapPin,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const getProblemIcon = (id: string) => {
  switch (id) {
    case 'prob_1': return <Clock className="w-5 h-5 flex-shrink-0 text-brand-coral" />;
    case 'prob_2': return <FileQuestion className="w-5 h-5 flex-shrink-0 text-brand-coral" />;
    case 'prob_3': return <BellOff className="w-5 h-5 flex-shrink-0 text-brand-coral" />;
    case 'prob_4': return <CloudRain className="w-5 h-5 flex-shrink-0 text-brand-coral" />;
    default: return <FileQuestion className="w-5 h-5 flex-shrink-0 text-brand-coral" />;
  }
};

const getSolutionIcon = (id: string) => {
  switch (id) {
    case 'prob_1': return <Smartphone className="w-5 h-5 flex-shrink-0 text-brand-primary" />;
    case 'prob_2': return <ClipboardCheck className="w-5 h-5 flex-shrink-0 text-brand-primary" />;
    case 'prob_3': return <MessageSquare className="w-5 h-5 flex-shrink-0 text-brand-primary" />;
    case 'prob_4': return <MapPin className="w-5 h-5 flex-shrink-0 text-brand-primary" />;
    default: return <CheckCircle className="w-5 h-5 flex-shrink-0 text-brand-primary" />;
  }
};

export default function ProblemsSolutions() {
  const [activeTab, setActiveTab] = useState<Record<string, 'problem' | 'solution'>>({
    prob_1: 'solution',
    prob_2: 'solution',
    prob_3: 'solution',
    prob_4: 'solution',
  });

  const toggleTab = (id: string, type: 'problem' | 'solution') => {
    setActiveTab((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <section id="why-story" className="py-20 lg:py-28 bg-white border-b border-vintage-sand/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-coral uppercase">
            Buhay-Barangay: Our Everyday Reality
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal tracking-tight">
            Our Neighbors Aren’t Just Names on Lists. <span className="text-brand-primary block sm:inline">We Deserve Real Care.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-charcoal/70 leading-relaxed font-body">
            Waiting for half a day under direct heat, missing free clinic updates, or being anxious about relief aid shouldn't copy our daily energy. See how small, warm upgrades respect everyone's hard work, time, and dignity.
          </p>
        </div>

        {/* Dynamic Infographic Accordion/Comparison Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROBLEMS_SOLUTIONS.map((item) => {
            const isShowingSolution = activeTab[item.id] === 'solution';

            return (
              <div
                key={item.id}
                className="group border border-vintage-sand rounded-3xl bg-vintage-cream/30 p-6 sm:p-8 hover:bg-white hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                
                {/* Micro Header with Indicator and Toggle */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-vintage-sand/50 pb-5 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-black text-brand-coral/40">
                      {item.indicator}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md bg-vintage-sand text-brand-primary">
                      {item.metricLabel}
                    </span>
                  </div>

                  {/* Toggle Pills */}
                  <div className="flex items-center bg-vintage-sand/50 p-1 rounded-xl text-xs font-sans border border-vintage-sand w-full xl:w-auto justify-between xl:justify-start">
                    <button
                      onClick={() => toggleTab(item.id, 'problem')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-xs font-semibold cursor-pointer flex-1 xl:flex-none justify-center ${
                        !isShowingSolution
                          ? 'bg-white text-brand-coral shadow-sm'
                          : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                      }`}
                    >
                      <Frown className="w-3.5 h-3.5" />
                      Traditional
                    </button>
                    <button
                      onClick={() => toggleTab(item.id, 'solution')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-xs font-semibold cursor-pointer flex-1 xl:flex-none justify-center ${
                        isShowingSolution
                          ? 'bg-brand-primary text-white shadow-sm'
                          : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                      }`}
                    >
                      <Smile className="w-3.5 h-3.5 text-brand-accent" />
                      Modernized
                    </button>
                  </div>
                </div>

                {/* Animated Inner Panel */}
                <div className="min-h-[125px] md:min-h-[100px] xl:min-h-[110px] mb-4">
                  <AnimatePresence mode="wait">
                    {!isShowingSolution ? (
                      <motion.div
                        key="problem-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <h4 className="font-sans font-extrabold text-lg text-brand-coral flex items-start gap-2.5">
                          <span className="mt-0.5">{getProblemIcon(item.id)}</span>
                          <span>{item.problemTitle}</span>
                        </h4>
                        <p className="text-sm text-brand-charcoal/70 leading-relaxed font-body">
                          {item.problemDesc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="solution-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <h4 className="font-sans font-extrabold text-lg text-brand-primary flex items-start gap-2.5">
                          <span className="mt-0.5">{getSolutionIcon(item.id)}</span>
                          <span>{item.solutionTitle}</span>
                        </h4>
                        <p className="text-sm text-brand-charcoal/80 leading-relaxed font-body">
                          {item.solutionDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Visual Impact Box (The Metric Comparison graph mock) */}
                <div className="mt-auto bg-vintage-sand/30 border border-vintage-sand/80 rounded-2xl p-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4 xl:gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-brand-charcoal/50 uppercase tracking-widest leading-none">
                      Compare Results
                    </span>
                    <span className="text-xs text-brand-primary font-bold mt-1 xl:max-w-[120px] leading-tight">
                      {item.metricLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 justify-between xl:justify-end w-full xl:w-auto">
                    {/* Before label */}
                    <div className="text-center px-4 py-1.5 rounded-xl bg-brand-coral/10 border border-brand-coral/20 flex-1 xl:flex-none">
                      <p className="text-[9px] font-mono font-bold text-brand-coral uppercase leading-none tracking-wider">BEFORE</p>
                      <p className="text-xs font-mono font-extrabold text-brand-coral leading-none mt-1">{item.metricBefore}</p>
                    </div>

                    <ArrowRightLeft className="w-4 h-4 text-brand-charcoal/40 flex-shrink-0" />

                    {/* After label */}
                    <div className="text-center px-4 py-1.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex-1 xl:flex-none">
                      <p className="text-[9px] font-mono font-bold text-brand-primary uppercase leading-none tracking-wider">AFTER</p>
                      <p className="text-xs font-mono font-extrabold text-brand-primary leading-none mt-1">{item.metricAfter}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Soft supportive note */}
        <div className="mt-12 text-center text-xs text-brand-charcoal/50 leading-relaxed">
          💡 <em>Tip: Click on <strong>Traditional</strong> and <strong>Modernized</strong> above to see how we simplify daily life for our families.</em>
        </div>

      </div>
    </section>
  );
}
