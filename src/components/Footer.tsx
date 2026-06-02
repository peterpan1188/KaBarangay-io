import React from 'react';
import { HelpCircle, Heart, Star } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.75-.44 8.5-4.5 8.5-9.95z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M12.03 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.81 0 5.37-1.16 7.21-3.04l-1.42-1.42c-1.34 1.14-3.29 1.98-5.48 1.98-4.41 0-8-3.59-8-8s3.59-8 8-8c3.27 0 6.08 1.96 7.33 4.77l.08.18c.24.64.44 1.48.44 2.38 0 1.63-.64 2.89-1.63 3.63a3.3 3.3 0 0 1-1.92.54 3.03 3.03 0 0 1-2.18-.75c-.32-.28-.5-.65-.5-1.15V13c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.94A2.5 2.5 0 0 1 11.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 1 .2V10a4 4 0 0 0-4-4 4 4 0 0 0-4 4c0 2.21 1.79 4 4 4a3.98 3.98 0 0 0 2.82-1.18c.63.81 1.6 1.18 2.68 1.18 1.62 0 3.04-.84 3.96-2.12.87-1.22 1.25-2.81 1.25-4.52 0-1.14-.24-2.22-.56-3.08l-.13-.33C17.06 4.3 14.71 2 12 2z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M19.077 4.928A9.913 9.913 0 0 0 12.04 2c-5.496 0-9.97 4.47-9.97 9.97 0 1.76.459 3.476 1.33 4.996L2.05 22l5.12-1.34A9.9 9.9 0 0 0 12.04 22c5.496 0 9.97-4.47 9.97-9.97a9.924 9.924 0 0 0-2.933-7.102zM12.04 20.316h-.005a8.211 8.211 0 0 1-4.186-1.144l-.3-.178-3.111.815.829-3.033-.195-.31a8.2 8.2 0 0 1-1.258-4.375c.002-4.537 3.693-8.225 8.232-8.225 2.196 0 4.26.855 5.811 2.408a7.712 7.712 0 0 1 2.407 5.818c-.002 4.54-3.693 8.226-8.23 8.226zm4.568-6.223c-.25-.124-1.478-.73-1.707-.813-.227-.083-.393-.124-.558.124-.165.248-.64.813-.784.978-.144.165-.29.185-.54.062-.25-.125-1.056-.39-2.012-1.242-.743-.662-1.245-1.48-1.391-1.73-.144-.247-.015-.382.11-.505.112-.11.25-.29.375-.434.125-.144.165-.248.25-.413.082-.165.04-.31-.02-.434-.062-.124-.559-1.343-.765-1.84-.2-.484-.403-.413-.557-.42-.144-.007-.31-.007-.476-.007-.165 0-.434.062-.66.31-.227.248-.868.847-.868 2.062 0 1.216.887 2.395 1.01 2.56.124.165 1.745 2.664 4.226 3.732.59.255 1.05.408 1.41.52.593.189 1.134.162 1.56.101.477-.072 1.477-.604 1.684-1.157.207-.552.207-1.027.145-1.126-.062-.1-.227-.165-.477-.29z" />
  </svg>
);

const ViberIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M11.996 0c-6.626 0-11.996 5.37-11.996 11.996 0 6.626 5.37 11.996 11.996 11.996 6.626 0 11.996-5.37 11.996-11.996 0-6.626-5.37-11.996-11.996-11.996zm6.309 15.65c-.279.412-.9.704-1.393.754-.452.05-.882.022-1.383-.171-.341-.131-.774-.322-1.298-.553-2.225-.975-4.043-2.738-5.078-4.939-.24-.512-.424-.93-.538-1.258-.168-.485-.178-.9-.108-1.332.072-.472.4-.853.844-1.077l.951-.497c.306-.164.672-.089.873.181l1.109 1.488c.189.253.155.603-.075.818l-.485.45c-.144.136-.184.341-.097.514.512 1.018 1.309 1.815 2.327 2.327.173.087.378.047.514-.097l.45-.485c.215-.231.565-.264.818-.075l1.488 1.109c.27.201.345.567.181.873l-.497.951zm-.517-5.592c-.172 0-.311-.139-.311-.311 0-1.849-1.503-3.351-3.351-3.351-.172 0-.311-.139-.311-.311s.139-.311.311-.311c2.193 0 3.972 1.78 3.972 3.972 0 .172-.139.312-.312.312zm1.253.003c-.172 0-.311-.139-.311-.311 0-2.541-2.064-4.605-4.605-4.605-.172 0-.311-.139-.311-.311s.139-.311.311-.311c2.884 0 5.227 2.343 5.227 5.227 0 .172-.139.311-.311.311z" />
  </svg>
);

export default function Footer() {
  
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 relative overflow-hidden font-body border-t border-vintage-sand/15">
      
      {/* Decorative warm radial flare */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Column 1: App identity & Mission statement */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" onClick={handleScrollToTop} className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-105 transition-transform duration-200 border border-white/15">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L3 11H5V20H19V11H21L12 4Z" fill="currentColor" opacity="0.15" />
                  <path d="M12 3L2 11H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V11H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="var(--color-brand-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 16C9 14.5 10.5 14 12 14C13.5 14 15 14.5 15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg text-white tracking-tight leading-none">
                  KaBarangay<span className="text-brand-accent">.io</span>
                </span>
                <span className="font-mono text-[9px] text-brand-accent/70 font-semibold tracking-widest mt-0.5 uppercase">
                  Civic-Tech Pilipinas
                </span>
              </div>
            </a>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              KaBarangay io is a modern civic-tech digital governance and welfare platform designed to connect barangay officials and residents through smarter, faster, and more accessible Filipino community services.
            </p>

            {/* Social media connections */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="https://www.facebook.com/pan.buenavente" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="Facebook link" title="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/pitapeterpan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="Instagram link" title="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.threads.net/@pitapeterpan" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="Threads link" title="Threads">
                <ThreadsIcon className="w-4 h-4" />
              </a>
              <a href="https://discord.gg/2x93pZFq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="Discord link" title="Discord">
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/639104011905" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="WhatsApp link" title="WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href="viber://chat?number=%2B639104011905" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-brand-accent transition-all cursor-pointer" aria-label="Viber link" title="Viber">
                <ViberIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: System Features shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="#features-explorer" onClick={(e) => handleFooterLinkClick(e, '#features-explorer')} className="hover:text-brand-accent transition-colors">
                  Online Clearances Request
                </a>
              </li>
              <li>
                <a href="#features-explorer" onClick={(e) => handleFooterLinkClick(e, '#features-explorer')} className="hover:text-brand-accent transition-colors">
                  Welfare & Ayuda Monitoring
                </a>
              </li>
              <li>
                <a href="#features-explorer" onClick={(e) => handleFooterLinkClick(e, '#features-explorer')} className="hover:text-brand-accent transition-colors">
                  Incident Blotter Ledger
                </a>
              </li>
              <li>
                <a href="#features-explorer" onClick={(e) => handleFooterLinkClick(e, '#features-explorer')} className="hover:text-brand-accent transition-colors">
                  SOS Vulnerability Broadcast
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="#why-story" onClick={(e) => handleFooterLinkClick(e, '#why-story')} className="hover:text-brand-accent transition-colors">
                  The Case Study
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleFooterLinkClick(e, '#about')} className="hover:text-brand-accent transition-colors">
                  About Platform
                </a>
              </li>
              <li>
                <a href="#vision" onClick={(e) => handleFooterLinkClick(e, '#vision')} className="hover:text-brand-accent transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleFooterLinkClick(e, '#testimonials')} className="hover:text-brand-accent transition-colors">
                  User Voices
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleFooterLinkClick(e, '#faqs')} className="hover:text-brand-accent transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: National Regulatory Alignment seal */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              Regulatory Alignment
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-[10px] text-white/70 space-y-2">
              <p className="font-mono font-bold text-white uppercase text-[8px] tracking-wide text-brand-accent flex items-center gap-1">
                <span>🛡️</span> RA 10173 COMPLIANT
              </p>
              <p className="leading-relaxed font-body">
                Complies with the National Data Privacy Act. Sensitive identity registry files are encrypted at rest with multi-factor authentication.
              </p>
            </div>
          </div>

        </div>

        {/* Lower footer row and credit lines */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-xs text-white/50 font-sans">
          
          <p>© 2026 KaBarangay io. Private Civic Enterprise. Built for sustainable municipal acceleration.</p>
          
          <div className="flex items-center gap-1 font-body text-[11px]">
            <span>With the spirit of</span>
            <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral animate-pulse" />
            <span>and Bayanihan in Manila, Philippines.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
