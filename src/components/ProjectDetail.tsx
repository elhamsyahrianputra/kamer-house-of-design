import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Ruler, Users, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export default function ProjectDetail({ project, onClose, onSelectProject }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when the project changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  // Get related projects
  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#0D0D0D] text-white flex flex-col"
        id="project-detail-overlay"
      >
        {/* Soft Grid Lines */}
        <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none z-0" />

        {/* Floating Top Control Bar */}
        <div className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#D4AF37]/10 py-4 px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="text-charcoal-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 text-xs uppercase tracking-widest cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Works</span>
            </button>
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold-500 uppercase">
            {project.category} // Selected Case Study
          </div>
          <button
            onClick={onClose}
            className="border border-[#D4AF37]/20 hover:border-gold-500 p-2 text-charcoal-300 hover:text-gold-500 transition-all duration-300 cursor-pointer"
            id="close-detail-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 relative z-10">
          
          {/* Section 1: Hero Banner */}
          <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Dark Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/50" />
            
            {/* Title positioning over Hero */}
            <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12">
              <div className="max-w-4xl">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500 block mb-2"
                >
                  {project.location}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-display text-4xl md:text-7xl tracking-wider text-white uppercase font-light"
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>
          </div>

          {/* Section 2: Metadata & Narrative Grid */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#D4AF37]/10">
            
            {/* Left Specs Panel (4 cols) */}
            <div className="md:col-span-4 space-y-8 bg-[#1A1A1A] p-8 border border-gold-500/10 gold-glow">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono block">Location</span>
                    <span className="text-sm font-sans font-medium">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono block">Commission Year</span>
                    <span className="text-sm font-sans font-medium">{project.year}</span>
                  </div>
                </div>

                {project.squareFootage && (
                  <div className="flex items-start space-x-3">
                    <Ruler className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono block">Dimensions</span>
                      <span className="text-sm font-sans font-medium">{project.squareFootage}</span>
                    </div>
                  </div>
                )}

                {project.architects && (
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono block">Team Led By</span>
                      <span className="text-sm font-sans font-medium">{project.architects.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Used Tags */}
              <div className="pt-4 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono block">Scope of Service</span>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span 
                      key={idx}
                      className="border border-gold-500/20 text-gold-500 text-[10px] uppercase tracking-widest px-3 py-1 bg-[#0D0D0D]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Editorial Copy (8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-500 block">
                  Concept & Execution Narrative
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
                  "Every design decision serves a cohesive atmospheric rhythm."
                </h2>
                <p className="font-sans text-charcoal-300 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <p className="font-sans text-charcoal-300 leading-relaxed text-sm">
                  To realize this design, our studio handpicked material specimens, matching wooden grains precisely, sand-blasting textured structural concrete elements, and sculpting architectural illumination grids so that fixtures remain hidden from sight lines. The integration of mechanical ducting and soundproofing was conducted in-house by our general engineering team to prevent acoustic leakage, preserving absolute interior serenity.
                </p>
              </div>

              {/* Client Quote Box */}
              {project.clientQuote && (
                <div className="relative border-l-2 border-gold-500 pl-6 py-4 bg-[#1A1A1A]/50 italic text-charcoal-200">
                  <Quote className="absolute right-4 top-4 w-12 h-12 text-gold-500/10" />
                  <p className="text-sm md:text-base leading-relaxed mb-3">
                    "{project.clientQuote.text}"
                  </p>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-widest text-gold-500 font-semibold block">
                      {project.clientQuote.author}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400 block mt-0.5">
                      {project.clientQuote.role}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: High-Fidelity Gallery Experience */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                  Visual Curation
                </span>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-widest">
                  Atmospheric Detail Slides
                </h2>
              </div>
              <span className="font-mono text-xs text-charcoal-400 tracking-widest mt-2 sm:mt-0">
                Slide {activeImageIndex + 1} of {project.gallery.length}
              </span>
            </div>

            {/* Slider Showcase Box */}
            <div className="relative h-[50vh] md:h-[70vh] bg-[#1A1A1A] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={project.gallery[activeImageIndex]}
                  alt={`${project.title} slide`}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dark overlay gradients inside the slider */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent h-24 pointer-events-none" />

              {/* Left/Right Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/70 hover:bg-gold-500 hover:text-[#0D0D0D] border border-[#D4AF37]/30 p-4 transition-all duration-300 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/70 hover:bg-gold-500 hover:text-[#0D0D0D] border border-[#D4AF37]/30 p-4 transition-all duration-300 cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail dots */}
            <div className="flex justify-center space-x-3 pt-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-10 md:w-24 md:h-16 overflow-hidden border cursor-pointer transition-all duration-300 ${
                    idx === activeImageIndex 
                      ? 'border-gold-500 opacity-100 scale-105' 
                      : 'border-transparent opacity-40 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Continue Browsing (Next projects) */}
          <div className="bg-[#0D0D0D] py-20 border-t border-[#D4AF37]/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
              <div className="space-y-1 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                  Endless Discoveries
                </span>
                <h2 className="font-display text-2xl md:text-4xl uppercase tracking-widest text-white">
                  Continue Browsing Selected Works
                </h2>
                <div className="h-[1px] bg-gold-500/10 w-24 mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {relatedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer border border-[#D4AF37]/10 hover:border-gold-500/30 bg-[#0D0D0D] overflow-hidden transition-all duration-500 flex flex-col justify-between"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                      <span className="absolute top-4 left-4 bg-[#0D0D0D]/80 backdrop-blur-md border border-[#D4AF37]/10 text-gold-500 font-mono text-[9px] uppercase tracking-widest px-3 py-1">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] tracking-widest text-charcoal-400 block">{p.location}</span>
                        <h4 className="font-display text-lg uppercase tracking-wider text-white group-hover:text-gold-500 transition-colors duration-300">
                          {p.title}
                        </h4>
                        <p className="font-sans text-xs text-charcoal-300 line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                      <div className="pt-6 flex justify-between items-center font-mono text-[9px] tracking-widest text-gold-500 uppercase">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
