import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Filter, Grid, Columns } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isHoveredId, setIsHoveredId] = useState<string | null>(null);

  const categories = ['All', 'Interior Design', 'Construction', 'Furniture'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] pt-24 md:pt-32 pb-24" id="portfolio-page-container">
      {/* Soft Grid Background */}
      <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto border-b border-gold-500/10 pb-10">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-gold-500 block">
            The Archive // Curated Chronicles
          </span>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white">
            Works Gallery
          </h1>
          <p className="font-serif italic text-charcoal-300 text-sm md:text-base">
            An exploration of our architectural, interior design, and bespoke furniture commissions across Europe and Asia.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-gold-500/10 pb-6" id="portfolio-controls">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-[10px] uppercase tracking-[0.25em] px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'border-gold-500 text-gold-500 bg-gold-500/5 font-semibold'
                    : 'border-white/5 text-charcoal-400 hover:text-white hover:border-gold-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Counts metadata */}
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal-400">
            Total of {filteredProjects.length} commissions loaded
          </span>
        </div>

        {/* Masonry / Custom Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="portfolio-grid-gallery"
          >
            {filteredProjects.map((project, idx) => {
              const isFirstOrLarge = idx === 0 || idx === 4;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => setIsHoveredId(project.id)}
                  onMouseLeave={() => setIsHoveredId(null)}
                  className={`group cursor-pointer border border-gold-500/10 hover:border-gold-500/30 bg-[#121212]/20 hover:bg-[#121212]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                    isFirstOrLarge ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  {/* Photo container */}
                  <div className={`relative overflow-hidden w-full ${isFirstOrLarge ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Dark gradient veil */}
                    <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#0D0D0D]/60 transition-all duration-500" />

                    {/* Left category tag badge */}
                    <span className="absolute top-4 left-4 bg-[#0D0D0D]/85 backdrop-blur-md border border-gold-500/10 text-gold-500 font-mono text-[8px] uppercase tracking-widest px-3 py-1">
                      {project.category}
                    </span>

                    {/* Right Year badge */}
                    <span className="absolute top-4 right-4 bg-transparent text-charcoal-300 font-mono text-[9px] tracking-widest">
                      // {project.year}
                    </span>

                    {/* Visual Hover Overlays */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-1">
                        Location: {project.location}
                      </span>
                      <h3 className="font-display text-xl text-white uppercase tracking-wider">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metadata and text footer */}
                  <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] text-charcoal-400 tracking-widest uppercase block">
                        {project.location}
                      </span>
                      <h4 className="font-display text-lg uppercase tracking-wider text-white group-hover:text-gold-500 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="font-sans text-xs text-charcoal-300 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Link anchor */}
                    <div className="pt-4 border-t border-gold-500/10 flex justify-between items-center font-mono text-[9px] tracking-widest text-gold-500 uppercase">
                      <span>Examine Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
