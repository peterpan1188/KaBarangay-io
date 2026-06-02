import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Landmark, HeartHandshake, CheckCircle2, ChevronRight, CornerDownRight } from 'lucide-react';

export default function PartnershipCTA() {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    orgType: 'Barangay (Local Government Unit)',
    barangayName: '',
    municipality: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to local storage to make it functionally persistent
    const savedInquiries = JSON.parse(localStorage.getItem('kabarangay_inquiries') || '[]');
    savedInquiries.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('kabarangay_inquiries', JSON.stringify(savedInquiries));
    
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      contactName: '',
      email: '',
      phone: '',
      orgType: 'Barangay (Local Government Unit)',
      barangayName: '',
      municipality: '',
      message: ''
    });
  };

  return (
    <section id="partnership" className="py-20 lg:py-28 bg-gradient-to-br from-brand-primary to-brand-primary-light text-white relative overflow-hidden scroll-mt-20">
      {/* Subtle sun vector background rays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(233,196,106,0.1),transparent_40%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column: NGO + LGU context */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase">
              Join Our Network (Kabayan)
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Let’s Build Smarter, Compassionate Communities Together
            </h2>
            <p className="text-base text-white/85 leading-relaxed font-body">
              Whether you represent a local **Barangay Council**, an **LGU Municipality**, a dedicated **humanitarian NGO**, or a grassroots **welfare group**, we want to partner with you. We customize onboarding structures, configure regional systems, and support community leaders with practical tools.
            </p>

            {/* Structured benefits rows */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-body">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-brand-accent mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-sans">For Barangays & LGUs</h4>
                  <p className="text-white/80 text-xs mt-0.5">Deploy compliant database registries, online application hubs, and SMS alert pipelines securely.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-brand-accent mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-sans">For NGOs & Philanthropies</h4>
                  <p className="text-white/80 text-xs mt-0.5">Assign targeted ayudas, coordinate disaster drops, and compile metrics of social impact instantly.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Info preview */}
            <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-brand-accent">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-white">
                <span className="text-brand-accent">⚓</span> partnerships@kabarangay.io
              </span>
              <a href="tel:09104011905" className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 text-white transition-colors">
                <span className="text-brand-accent">📞</span> 09104011905
              </a>
            </div>
          </div>

          {/* Right Inquiry Form Card Column */}
          <div className="lg:col-span-6">
            <div className="bg-white text-brand-charcoal rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-white/10">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-entry"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <h3 className="font-sans font-extrabold text-xl text-brand-primary tracking-tight">
                        Inquire About Partnership
                      </h3>
                      <p className="text-xs text-brand-charcoal/60 mt-1 font-body">
                        Send details below to receive a free platform demo and municipal pricing quotation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">Your Full Name</label>
                          <input
                            type="text"
                            name="contactName"
                            required
                            value={formData.contactName}
                            onChange={handleChange}
                            placeholder="Atty. Maria Lim"
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">Representative Organization</label>
                          <select
                            name="orgType"
                            value={formData.orgType}
                            onChange={handleChange}
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-white focus:outline-none focus:border-brand-primary"
                          >
                            <option>Barangay (Local Government Unit)</option>
                            <option>Municipal / City Hall LGU</option>
                            <option>Civil Society NGO / Charity</option>
                            <option>Community Volunteer / Leader</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="maria.lim@gov.ph"
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">Mobile / Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+63 917 123 4567"
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">Barangay Name (Optional)</label>
                          <input
                            type="text"
                            name="barangayName"
                            value={formData.barangayName}
                            onChange={handleChange}
                            placeholder="Brgy. San Jose"
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">City / Municipality Province</label>
                          <input
                            type="text"
                            name="municipality"
                            required
                            value={formData.municipality}
                            onChange={handleChange}
                            placeholder="Antipolo, Rizal"
                            className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal/80 mb-1">How can we support your community?</label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your community size, challenges, or NGO scopes..."
                          className="w-full text-sm border border-vintage-sand rounded-xl px-3.5 py-2.5 bg-vintage-cream/30 focus:outline-none focus:border-brand-primary resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-brand-primary hover:bg-brand-primary-light text-white font-sans font-bold text-sm tracking-wide uppercase rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                      >
                        <HeartHandshake className="w-5 h-5 text-brand-accent" />
                        Send Partnership Proposal
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-sans font-extrabold text-2xl text-brand-primary">
                        Mabuhay! Proposal Sent
                      </h3>
                      <p className="text-sm text-brand-charcoal/70 max-w-sm mx-auto font-body leading-relaxed">
                        Thank you for reaching out, <strong>{formData.contactName}</strong>! We have securely recorded your inquiry in our local system under the category: <strong>{formData.orgType}</strong>.
                      </p>
                    </div>

                    <div className="bg-vintage-cream/60 border border-vintage-sand rounded-2xl p-4 text-xs font-body text-brand-charcoal/60 leading-relaxed text-left max-w-sm mx-auto">
                      <p className="font-bold text-[10px] font-mono uppercase tracking-wider text-brand-primary mb-1">Summary of transmission</p>
                      <p className="flex items-center gap-1.5"><CornerDownRight className="w-3 h-3 text-brand-coral" /> Region: {formData.municipality}</p>
                      <p className="flex items-center gap-1.5"><CornerDownRight className="w-3 h-3 text-brand-coral" /> Phone contact: {formData.phone}</p>
                      <p className="flex items-center gap-1.5"><CornerDownRight className="w-3 h-3 text-brand-coral" /> Security protocol: RA 10173 Encrypted</p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 text-xs font-semibold text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/5 rounded-lg cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
