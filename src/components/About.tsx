import { motion } from 'motion/react';
import { Users2, Heart, Smartphone } from 'lucide-react';
import aboutImage from '../assets/images/kabarangay_about_1780140657885.png';

export default function About() {
  const points = [
    {
      icon: <Users2 className="w-5 h-5 text-brand-primary" />,
      title: "People-First Digital Transformation",
      desc: "Governance should bend to serve the convenience of its citizens. We replace long building queues with responsive internet forms designed specifically for elderly, busy mothers, and working families."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-coral" />,
      title: "Equal Opportunity Aid (Ayuda)",
      desc: "By indexing residents securely, communities eliminate favoritism, audit leaks, and human delays during critical food or financial assistance releases."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-brand-primary" />,
      title: "Clean Mobile-Native Design",
      desc: "Our platform is stripped of heavy widgets or outdated layouts. It feeds beautifully on low-cost android smartphones and works over standard mobile data speeds."
    }
  ];

  return (
    <section id="about" className="pt-20 pb-10 lg:pt-28 lg:pb-14 bg-white border-y border-vintage-sand scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text and explanations */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-coral uppercase">
              Connecting Local Communities
            </span>
            <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
              A Warm, Dignified Bridge Between Citizens and Local Governance
            </h2>
            <p className="mt-4 text-base text-brand-charcoal/70 leading-relaxed font-body">
              For decades, local community administrations in the Philippines have relied on stacks of paper notebooks, faded logbooks, and loud neighborhood bullhorns. <strong>KaBarangay io</strong> was born from a simple idea: that everyone, from the village chief to the street vendor, deserves professional, speedy, and compassionate public service.
            </p>
            <p className="mt-3 text-base text-brand-charcoal/70 leading-relaxed font-body">
              Our system unites administrative databases, online clearings, dispute records, and emergency alerts into one unified portal that feels like an NGO service instead of a cold state bureaucracy.
            </p>

            {/* Split bullet grid */}
            <div className="mt-8 space-y-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-vintage-cream transition-colors duration-150 border border-transparent hover:border-vintage-sand">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-vintage-sand/50 flex items-center justify-center">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-primary uppercase tracking-wide">
                      {pt.title}
                    </h4>
                    <p className="mt-1 text-sm text-brand-charcoal/70 leading-relaxed font-body">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Family visual card */}
          <div className="lg:col-span-6" id="about-visual-section">
            <div className="relative">
              
              {/* Outer card with precise soft styling */}
              <div className="bg-[#FAF8F5] p-3 sm:p-5 rounded-[28px] sm:rounded-[36px] border border-[#EBE6DD] relative shadow-[0_12px_40px_-12px_rgba(30,40,36,0.06)] overflow-hidden">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] aspect-[4/3] bg-vintage-sand shadow-inner group">
                  <img
                    src={aboutImage}
                    alt="Happy multi-generational Filipino family using KaBarangay io platform on veranda"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* High fidelity frosted overlay card exactly matching the reference */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md sm:bottom-6 sm:left-6 bg-black/60 backdrop-blur-md rounded-[18px] sm:rounded-[22px] px-5 py-4 sm:px-6 sm:py-5 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                    <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-[#E9C46A] font-sans uppercase">
                      INCLUSIVITY FOCUS
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight mt-1 leading-snug">
                      Senior-friendly user interface
                    </h3>
                  </div>
                </div>
              </div>

              {/* Subcaption placed precisely under the card */}
              <p className="mt-3 ml-4 sm:ml-6 text-xs sm:text-sm text-brand-charcoal/60 font-body text-left">
                Photo: Mendoza family on their verified mobile portal
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
