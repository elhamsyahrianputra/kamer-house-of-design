import { motion } from 'motion/react';
import { Quote, Sparkles, Shield, Anchor, Compass } from 'lucide-react';
import { BRAND_STORY, OWNER_PROFILE } from '../data';

export default function About() {
  const principlesIcons = [
    <Compass className="w-6 h-6 text-gold-500" key="0" />,
    <Anchor className="w-6 h-6 text-gold-500" key="1" />,
    <Sparkles className="w-6 h-6 text-gold-500" key="2" />,
    <Shield className="w-6 h-6 text-gold-500" key="3" />
  ];

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] pt-24 md:pt-32 pb-24" id="about-page-container">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-28">
        
        {/* Page Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-gold-500/10 pb-12">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-gold-500 block">
            Studio Profile // Since 2002
          </span>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white">
            Who We Are
          </h1>
          <p className="font-serif italic text-charcoal-300 text-sm md:text-lg">
            "A master builder's synthesis of structural gravity, sensory warmth, and wood joinery craftsmanship."
          </p>
        </div>

        {/* SECTION 1: FOUNDER / OWNER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-founder-section">
          {/* Portrait Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Double Border Frame accent */}
            <div className="absolute -top-3 -left-3 w-1/2 h-1/2 border-t-2 border-l-2 border-gold-500/30" />
            <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 border-b-2 border-r-2 border-gold-500/30" />
            
            <div className="overflow-hidden bg-[#1A1A1A] border border-gold-500/10 aspect-[3/4]">
              <motion.img
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src={OWNER_PROFILE.portrait}
                alt={OWNER_PROFILE.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-700"
              />
            </div>
            {/* Tiny Caption */}
            <span className="text-[8px] font-mono tracking-widest text-charcoal-400 absolute bottom-3 left-4 bg-[#0D0D0D]/80 px-2 py-0.5 border border-gold-500/10">
              Risa Firnandi • Portrait by Studio Jakarta
            </span>
          </div>

          {/* Description biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500 block">
              Founding Leadership
            </span>
            <h2 className="font-display text-3xl uppercase tracking-wider text-white">
              {OWNER_PROFILE.name}
            </h2>
            <p className="font-serif text-gold-500 text-sm tracking-widest uppercase">
              {OWNER_PROFILE.role}
            </p>
            
            <div className="h-[1px] bg-gold-500/10 w-24" />

            {/* Editorial quote */}
            <div className="relative bg-[#121212]/50 p-6 border-l-2 border-gold-500 italic text-charcoal-200">
              <Quote className="absolute right-4 top-4 w-12 h-12 text-gold-500/10" />
              <p className="text-sm md:text-base leading-relaxed">
                "{OWNER_PROFILE.quote}"
              </p>
            </div>

            <p className="font-sans text-xs md:text-sm text-charcoal-300 leading-relaxed font-light">
              {OWNER_PROFILE.bio}
            </p>
            <p className="font-sans text-xs md:text-sm text-charcoal-300 leading-relaxed font-light">
              Under Risa's direction, Kàmer, House of Design has evolved into a multi-disciplinary design and building powerhouse. Risa works directly with clients, hand-selecting premium materials, visiting construction teams at dawn, and ensuring that our projects match the architectural framework down to the last millimeter.
            </p>
          </div>
        </section>

        {/* SECTION 2: BRAND STORY */}
        <section className="border-t border-gold-500/10 pt-20 grid grid-cols-1 md:grid-cols-12 gap-12" id="about-brand-story-section">
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500 block">
              The Genesis
            </span>
            <h3 className="font-display text-2xl uppercase tracking-widest text-white">
              Our Legacy
            </h3>
            <p className="font-sans text-[11px] text-charcoal-400 font-mono tracking-widest uppercase">
              Unified Design-Build Atelier
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            <h4 className="font-serif text-xl md:text-2xl italic text-gold-200">
              {BRAND_STORY.tagline}
            </h4>
            <p className="font-sans text-xs md:text-sm text-charcoal-300 leading-relaxed font-light">
              {BRAND_STORY.history}
            </p>
            <p className="font-sans text-xs md:text-sm text-charcoal-300 leading-relaxed font-light">
              {BRAND_STORY.philosophy}
            </p>
          </div>
        </section>

        {/* SECTION 3: DESIGN STYLE / PRINCIPLES */}
        <section className="border-t border-gold-500/10 pt-20 space-y-12" id="about-principles-section">
          <div className="space-y-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold-500 block">
              Aesthetics & Philosophy
            </span>
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-widest text-white">
              Our Core Design Style
            </h3>
            <p className="font-serif italic text-charcoal-300 text-xs md:text-sm max-w-xl mx-auto">
              How we conceptualize volumes, express authentic raw materials, and choreograph physical luxury.
            </p>
            <div className="h-[1px] bg-gold-500/10 w-24 mx-auto mt-4" />
          </div>

          {/* Grid of Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_STORY.stylePrinciples.map((principle, index) => (
              <div 
                key={index}
                className="border border-gold-500/10 bg-[#121212]/30 p-8 space-y-4 hover:border-gold-500/30 transition-all duration-500 group"
              >
                {/* Icon wrapper */}
                <div className="p-3 bg-[#1A1A1A] border border-gold-500/10 rounded-none w-12 h-12 flex items-center justify-center group-hover:border-gold-500 transition-colors duration-300">
                  {principlesIcons[index]}
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-base uppercase tracking-wider text-white group-hover:text-gold-500 transition-colors duration-300">
                    {principle.title}
                  </h4>
                  <p className="font-sans text-xs text-charcoal-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
