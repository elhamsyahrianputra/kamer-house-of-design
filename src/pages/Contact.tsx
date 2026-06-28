import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    timeline: '3-6 Months',
    message: '',
    subscribeNewsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        timeline: '3-6 Months',
        message: '',
        subscribeNewsletter: false
      });
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] pt-24 md:pt-32 pb-24" id="contact-page-container">
      {/* Soft background grid lines */}
      <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Page Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto border-b border-gold-500/10 pb-10">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-gold-500 block">
            Initiate Contact // Secure Liaison
          </span>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white">
            Let’s Start a Conversation
          </h1>
          <p className="font-serif italic text-charcoal-300 text-sm md:text-base">
            Tell us about your project or commission ideas, and let’s create something exceptional together.
          </p>
        </div>

        {/* Dual Panel Grid: Form (7 cols) & Coordinates/Maps (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Form Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A]/40 border border-gold-500/10 p-8 md:p-10 gold-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form-element"
                >
                  <h3 className="font-display text-lg uppercase tracking-wider text-white border-b border-gold-500/10 pb-4 flex items-center space-x-2">
                    <span>Commission Project Parameters</span>
                  </h3>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                      Your Name / Principal Representative *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sterling Cooper"
                      className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-sm px-4 py-3 rounded-none outline-none transition-all duration-300 font-sans tracking-wide placeholder:text-charcoal-500"
                    />
                  </div>

                  {/* Email & Phone side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sterling@cooper.com"
                        className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-sm px-4 py-3 rounded-none outline-none transition-all duration-300 font-sans tracking-wide placeholder:text-charcoal-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                        Telephone (Optional)
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +41 44 200 4800"
                        className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-sm px-4 py-3 rounded-none outline-none transition-all duration-300 font-sans tracking-wide placeholder:text-charcoal-500"
                      />
                    </div>
                  </div>

                  {/* Project Type & Timeline Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="project-type-select" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                        Focus Area of Interest
                      </label>
                      <select
                        id="project-type-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-xs px-4 py-3 rounded-none outline-none transition-all duration-300 font-sans tracking-wide"
                      >
                        <option value="Residential">Residential Construction</option>
                        <option value="Commercial">Commercial Architecture</option>
                        <option value="Hospitality">Hospitality/Boutique Design</option>
                        <option value="Furniture">Bespoke Custom Furniture</option>
                        <option value="MixedScope">Full Combined Design-Build</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="timeline-select" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                        Desired Commencement Target
                      </label>
                      <select
                        id="timeline-select"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-xs px-4 py-3 rounded-none outline-none transition-all duration-300 font-sans tracking-wide"
                      >
                        <option value="Immediate">Immediate / Underway</option>
                        <option value="3-6 Months">3 to 6 Months</option>
                        <option value="6-12 Months">6 to 12 Months</option>
                        <option value="Flexible">Exploratory / Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Narrative Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">
                      Scope Narrative & Requirements *
                    </label>
                    <textarea
                      id="message-input"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your spatial coordinates, dimensions, budget boundaries, and any creative design inspirations..."
                      className="w-full bg-[#0D0D0D] border border-gold-500/15 focus:border-gold-500/80 text-white text-xs p-4 rounded-none outline-none transition-all duration-300 font-sans tracking-wide placeholder:text-charcoal-500 resize-none leading-relaxed"
                    />
                  </div>

                  {/* GDPR and submission button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <label className="flex items-start space-x-2.5 text-[10px] text-charcoal-400 font-mono tracking-wider cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.subscribeNewsletter}
                        onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                        className="accent-gold-500 border-gold-500/30 rounded-none w-3.5 h-3.5 mt-0.5 cursor-pointer"
                      />
                      <span>SUBSCRIBE TO THE KÀMER ANTHOLOGY BI-ANNUAL COMPENDIUM</span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold-500 hover:bg-white text-[#0D0D0D] font-sans text-xs uppercase tracking-[0.25em] font-medium py-3.5 px-8 rounded-none transition-all duration-500 flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                      id="contact-submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0D0D0D] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="py-12 text-center space-y-6"
                  id="form-success-state"
                >
                  <div className="w-16 h-16 bg-gold-500/15 border border-gold-500 text-gold-500 flex items-center justify-center mx-auto rounded-none">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl uppercase tracking-widest text-white">
                      Transmission Confirmed
                    </h3>
                    <p className="font-serif italic text-gold-500 text-sm">
                      "Thank you for reaching out to Kàmer, House of Design."
                    </p>
                  </div>
                  <p className="font-sans text-xs text-charcoal-300 max-w-md mx-auto leading-relaxed">
                    Your brief has been securely cataloged and assigned directly to Risa Firnandi's private review queue. A representative will contact you or your representative within two business days.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-gold-500/30 text-charcoal-300 hover:text-gold-500 hover:border-gold-500 px-6 py-2.5 rounded-none font-mono text-[9px] uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Transmit Another Brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Coordinates & Custom Stylized Blueprint Map Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Coordinates */}
            <div className="border border-gold-500/10 bg-[#121212]/20 p-8 space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500 border-b border-gold-500/10 pb-4">
                Liaison Coordinates
              </h4>

              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">General & Press Inquiries</span>
                    <a href="mailto:hello@kamerdesign.com" className="text-xs text-white hover:text-gold-500 transition-colors">hello@kamerdesign.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">Main Call Desk</span>
                    <span className="text-xs text-white">+62 818 0869 5100</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block">Jakarta Head Studio</span>
                    <span className="text-xs text-white leading-relaxed block">Jl. Saraswati No 9S, Cipete Utara, Kebayoran Baru, Jakarta Selatan 12150</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/10 flex items-center space-x-3.5">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span className="text-[9px] text-charcoal-400 font-mono tracking-widest uppercase">
                  COMPLETE SECURE DATABANK PROTECTION GUARANTEED
                </span>
              </div>
            </div>

            {/* Stylized Dark Mode Blueprint Map */}
            <div className="border border-gold-500/10 bg-[#0D0D0D] overflow-hidden relative aspect-[4/3] flex flex-col justify-between" id="stylized-map-mock">
              {/* Abstract Map Grid Lines */}
              <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
              
              {/* Graphic Blueprint Vectors */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Diagonal roads */}
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gold-500 rotate-12" />
                <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gold-500 -rotate-[8deg]" />
                <div className="absolute top-0 left-[45%] w-[1px] h-full bg-gold-500 rotate-[35deg]" />
                
                {/* Abstract River circle */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full border border-gold-500/30" />
                <div className="absolute top-8 right-12 w-24 h-24 rounded-full border border-gold-500/30" />
              </div>

              {/* Glowing Coordinate pins */}
              <div className="absolute top-[42%] left-[45%] z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gold-500 rounded-full animate-ping opacity-50" />
                  <div className="w-3 h-3 bg-gold-500 rounded-full border border-white" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-gold-500 bg-[#0D0D0D]/90 border border-gold-500/20 px-1.5 py-0.5 rounded-none mt-2 whitespace-nowrap">
                  KÀMER JAKARTA STUDIO
                </span>
              </div>

              <div className="absolute bottom-[30%] right-[30%] z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gold-500 rounded-full animate-ping opacity-50" />
                  <div className="w-3 h-3 bg-gold-500 rounded-full border border-white" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-gold-500 bg-[#0D0D0D]/90 border border-gold-500/20 px-1.5 py-0.5 rounded-none mt-2 whitespace-nowrap">
                  KÀMER ATELIER & WORKSHOP
                </span>
              </div>

              {/* Bottom text overlays */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-black to-transparent w-full mt-auto">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-charcoal-400 block">
                  Studio Coordinates System Map
                </span>
                <span className="text-[10px] text-white font-sans font-medium block">
                  Click coordinates in header to dispatch navigation directions
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
