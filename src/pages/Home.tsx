import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Grid, List, Compass, ChevronDown } from 'lucide-react';
import { Project, Tab } from '../types';
import { PROJECTS_DATA } from '../data';

interface HomeProps {
  onSelectProject: (project: Project) => void;
  setActiveTab: (tab: Tab) => void;
}

export default function Home({ onSelectProject, setActiveTab }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewStyle, setViewStyle] = useState<'grid' | 'editorial'>('grid');

  const categories = ['All', 'Interior Design', 'Construction', 'Furniture'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA.filter(p => p.featured) // On homepage show featured items
    : PROJECTS_DATA.filter(p => p.category === selectedCategory && p.featured);

  const handleCTAInquiry = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrowsePortfolio = () => {
    setActiveTab('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D]" id="home-page-container">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center overflow-hidden" id="hero-section">
        {/* Full-screen Background Visual */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.75 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            src="/images/hero_luxury_lounge_1782603846816.jpg"
            alt="Atmospheric Luxury Lounge"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Rich Cinematic Dark Gradient Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/30" />
        </div>

        {/* Soft Grid overlay in Hero */}
        <div className="absolute inset-0 bg-grid-overlay opacity-25 pointer-events-none z-1" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="font-mono text-xs uppercase tracking-[0.45em] text-gold-500">
                KÀMER, HOUSE OF DESIGN • EST. 2002
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-9xl tracking-wider text-white uppercase font-light leading-none"
              >
                Beyond Design
              </motion.h1>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={handleBrowsePortfolio}
                className="bg-gold-500 text-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] border border-gold-500 hover:border-white px-8 py-4 rounded-none font-sans text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500 flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-charcoal-400 font-mono text-[9px] tracking-[0.3em] uppercase z-10 pointer-events-none">
          <span className="animate-pulse">Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* SECTION 2: PROJECT SHOWCASE */}
      <section className="relative py-28 px-6 md:px-12 border-b border-[#D4AF37]/10" id="selected-works-section">
        {/* Soft background grid overlay */}
        <div className="absolute inset-0 bg-grid-overlay opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gold-500/10 pb-10">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center space-x-2.5">
                <Compass className="w-4 h-4 text-gold-500" />
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold-500">
                  Curation
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-widest text-white">
                Our Works
              </h2>
            </div>
            <div>
              <p className="font-serif italic text-charcoal-400 text-sm md:text-base max-w-md">
                A highly-edited archive of spatial commissions defined by raw material honesty, poetic light, and structural precision.
              </p>
            </div>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2.5" id="homepage-portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-[10px] uppercase tracking-[0.25em] px-5 py-2.5 rounded-none border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'border-gold-500 text-gold-500 bg-gold-500/5 font-semibold'
                    : 'border-white/5 text-charcoal-400 hover:text-white hover:border-gold-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Gallery Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20"
              id="homepage-project-list"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  {/* Image Thumbnail with soft zooming */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/5 group-hover:border-gold-500/20 transition-colors duration-500">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Hover Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Subtle Category Badge on image */}
                    <span className="absolute top-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md border border-white/5 text-gold-500 font-mono text-[8px] uppercase tracking-widest px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  {/* Fine-art Minimal Caption */}
                  <div className="mt-5 flex justify-between items-baseline border-b border-white/5 pb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[9px] tracking-widest text-gold-500/80">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white group-hover:text-gold-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] text-charcoal-400 tracking-[0.15em] uppercase">
                      {project.location} // {project.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Trigger */}
          <div className="text-center pt-8">
            <button
              onClick={handleBrowsePortfolio}
              className="border border-gold-500/20 hover:border-gold-500 px-8 py-3.5 rounded-none font-sans text-xs uppercase tracking-[0.25em] text-white hover:text-gold-500 transition-all duration-500 flex items-center space-x-3 mx-auto cursor-pointer"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT CTA (High-End Split Screen Layout) */}
      <section className="relative border-t border-gold-500/10 bg-[#0D0D0D] overflow-hidden" id="homepage-cta">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] items-stretch">
          
          {/* Left Column: Full-Height Photography Dominance */}
          <div className="md:col-span-6 relative min-h-[350px] md:min-h-full overflow-hidden border-r border-gold-500/10">
            <img
              src="/images/bespoke_credenza_1782603874686.jpg"
              alt="Artisanal Architectural Joinery Detail"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Elegant vignette layer */}
            <div className="absolute inset-0 bg-[#0D0D0D]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]" />
            
            {/* Fine print photo label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-[8px] font-mono tracking-widest text-white/50 uppercase">
                KÀMER, HOUSE OF DESIGN // CABINETRY & METALLURGY WORKSHOP
              </span>
            </div>
          </div>

          {/* Right Column: Quiet Luxury Text Composition */}
          <div className="md:col-span-6 flex flex-col justify-center px-6 py-20 md:p-16 lg:p-24 space-y-10 relative bg-[#0D0D0D]">
            {/* Subtle aesthetic element */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold-500 block">
                Commence a Dialogue
              </span>
              <div className="h-[1px] bg-gold-500/20 w-12" />
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest text-white leading-tight">
                Let’s build something <br />
                <span className="font-serif italic text-gold-500 lowercase font-light">meaningful</span>
              </h2>
              <p className="font-sans text-charcoal-400 text-sm leading-relaxed max-w-lg font-light">
                Whether you are conceptualizing a private retreat, a high-end commercial headquarters, or seeking singular master cabinet carpentry, our team is prepared to guide you from initial blueprint to final hand-crafted joinery detail.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleCTAInquiry}
                className="bg-[#1A1A1A] text-gold-500 hover:bg-gold-500 hover:text-[#0D0D0D] border border-gold-500/30 hover:border-gold-500 px-10 py-5 rounded-none font-sans text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 inline-flex items-center space-x-3 cursor-pointer group"
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
