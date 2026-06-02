import { Shield, Sparkle, HeartHandshake, Eye, Users, Landmark, Heart, ShieldAlert, Target } from 'lucide-react';

export default function VisionMission() {
  const targetUsers = [
    {
      title: "Barangay Officials",
      desc: "Equipped with powerful census tracking, quick document templates, and transparent command tools to serve their constituencies with speed.",
      badge: "Administration",
      icon: <Landmark className="w-5 h-5 text-brand-primary" />,
      color: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary"
    },
    {
      title: "Residents",
      desc: "Empowered with remote document requests, direct Taglish SMS updates, and an instantaneous SOS safety beacon directly in their pockets.",
      badge: "Citizens",
      icon: <Users className="w-5 h-5 text-brand-secondary" />,
      color: "bg-brand-secondary/10 border-brand-secondary/20 text-brand-secondary"
    },
    {
      title: "Community Workers",
      desc: "Supported with intuitive offline-ready logs, streamlined aid ledger registration, and simplified health drive tracking on the ground.",
      badge: "Volunteers",
      icon: <Heart className="w-5 h-5 text-brand-coral" />,
      color: "bg-brand-coral/10 border-brand-coral/20 text-brand-coral"
    },
    {
      title: "Local Government Units",
      desc: "Interconnected through consolidated public transparency reports and real-time municipal-level communication pathways.",
      badge: "Municipalities",
      icon: <ShieldAlert className="w-5 h-5 text-brand-primary" />,
      color: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary"
    }
  ];

  return (
    <section id="vision" className="py-20 lg:py-28 bg-gradient-to-b from-vintage-cream to-vintage-sand/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-primary uppercase">
            Our North Star
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight text-center">
            Driven by Community, Built for Governance
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          
          {/* Vision card */}
          <div className="bg-white border border-vintage-sand rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-accent" />
            
            {/* Soft decorative background seal */}
            <div className="absolute -right-6 -bottom-6 text-brand-primary/5 select-none pointer-events-none transform -rotate-12">
              <Eye className="w-40 h-40" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                <Eye className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-sans font-extrabold text-2xl text-brand-primary tracking-tight">
                Vision
              </h3>
            </div>

            <p className="font-sans font-semibold text-lg sm:text-xl text-brand-charcoal/90 leading-relaxed italic relative">
              “To empower every barangay in the Philippines through accessible, modern, and community-driven digital governance.”
            </p>

            <div className="mt-8 pt-6 border-t border-vintage-sand/60">
              <span className="text-xs font-mono font-bold text-brand-primary/60 uppercase tracking-widest">
                Our Ultimate Goal (Sandigan)
              </span>
              <p className="mt-2 text-sm text-brand-charcoal/70 font-body leading-relaxed">
                By designing digital pipes that respect local community culture, we aim to transform governance into a seamless daily delight that strengthens trusts rather than enforcing distance.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-brand-primary text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            {/* Top coral line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-coral" />

            {/* Soft decorative background seal */}
            <div className="absolute -right-6 -bottom-6 text-white/5 select-none pointer-events-none transform rotate-12">
              <HeartHandshake className="w-40 h-40" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent">
                <HeartHandshake className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">
                Mission
              </h3>
            </div>

            <p className="font-sans font-medium text-lg text-white/95 leading-relaxed relative">
              “To bridge communities and local governance by providing efficient digital tools that improve transparency, communication, welfare accessibility, and public service delivery.”
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
                Our Action Call (Kalinga)
              </span>
              <p className="mt-2 text-sm text-white/80 font-body leading-relaxed">
                Empowering barangay secretaries and volunteers, streamlining public funds transparency, and keeping emergency communication pathways open and instantaneous.
              </p>
            </div>
          </div>

        </div>

        {/* MVP Goal Section */}
        <div className="max-w-5xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-brand-primary/5 border border-vintage-sand/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-3xl -z-10 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-4 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-vintage-sand pb-4 lg:pb-0 lg:pr-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-widest">Core Mission</span>
                <h3 className="font-sans font-extrabold text-xl text-brand-charcoal mt-0.5">MVP Goal</h3>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans font-bold text-base sm:text-lg text-brand-charcoal/95 leading-relaxed">
                To modernize barangay operations and improve transparency, accessibility, and public service efficiency.
              </p>
              <p className="text-xs text-brand-charcoal/70 mt-1.5 leading-relaxed font-body">
                Our focused release is designed to solve the immediate bottlenecks of document queues and public aid communication—paving the path towards complete community digitalization.
              </p>
            </div>
          </div>
        </div>

        {/* Target Users Subsection */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-coral uppercase">Cohesive Ecosystem</span>
            <h3 className="font-sans font-extrabold text-2xl text-brand-charcoal mt-1">Our Target Users</h3>
            <p className="text-xs text-brand-charcoal/70 mt-2 font-body leading-relaxed">
              Designed from the ground up to empower both the administrators executing the services and the citizens receiving them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetUsers.map((user) => (
              <div 
                key={user.title} 
                className="bg-white border border-vintage-sand hover:border-vintage-sand/100 hover:shadow-md transition-all duration-200 rounded-2xl p-5 flex flex-col h-full"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${user.color.split(' ')[1]} ${user.color.split(' ')[0]}`}>
                    {user.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-vintage-sand/60 text-brand-charcoal/80">
                    {user.badge}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-charcoal leading-snug">
                  {user.title}
                </h4>
                <p className="text-xs text-brand-charcoal/75 leading-relaxed font-body mt-2 flex-1">
                  {user.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Inspirational Quote block underneath */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono text-brand-coral font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkle className="w-3.5 h-3.5 animate-pulse" /> The Spirit of Bayanihan
          </p>
          <blockquote className="mt-2 font-sans font-medium text-base text-brand-charcoal/80 italic">
            "When local services become fast and clear, citizen trust naturally returns. We built KaBarangay io to give local leaders and their neighbors a digital platform worthy of their shared hopes."
          </blockquote>
        </div>

      </div>
    </section>
  );
}

