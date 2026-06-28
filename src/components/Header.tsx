import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Globe } from 'lucide-react';
import { Tab } from '../types';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Tab }[] = [
    { label: 'Collection', value: 'portfolio' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-gold-500/10 py-4' 
            : 'bg-transparent py-6 md:py-8'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="group cursor-pointer flex flex-col"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            <div className="flex items-baseline space-x-1.5">
              <span className="font-display text-lg md:text-2xl tracking-[0.25em] text-white group-hover:text-gold-500 transition-colors duration-300">
                KÀMER
              </span>
              <span className="font-serif italic text-gold-500 text-xs tracking-widest font-light">
                house of design
              </span>
            </div>
            <span className="text-[7px] tracking-[0.4em] text-charcoal-400 font-mono uppercase mt-0.5 group-hover:text-gold-400 transition-colors duration-300">
              ARCHITECTURE • INTERIOR • CONSTRUCTION
            </span>
          </div>
 
          {/* Hamburger Menu Trigger (Active globally for both Mobile and Desktop) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold-500 transition-colors duration-300 flex items-center space-x-3 p-2 border border-white/5 hover:border-gold-500/30 bg-[#121212]/20 cursor-pointer"
              aria-label="Toggle navigation menu"
              id="hamburger-menu-toggle"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-charcoal-300 hidden sm:inline-block">
                Menu
              </span>
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Unified Hamburger Menu Overlay (Sleek Full-Screen Drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0D0D0D] z-50 flex flex-col justify-between overflow-y-auto"
            id="unified-menu-overlay"
          >
            {/* Elegant Background Grid Overlay */}
            <div className="absolute inset-0 bg-grid-overlay opacity-25 pointer-events-none z-0" />

            {/* Menu Header (Logo and Close Button) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-6 md:pt-8 flex justify-between items-center">
              <div 
                className="group cursor-pointer flex flex-col"
                onClick={() => handleNavClick('home')}
              >
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-display text-lg md:text-2xl tracking-[0.25em] text-white">
                    KÀMER
                  </span>
                  <span className="font-serif italic text-gold-500 text-xs tracking-widest font-light">
                    house of design
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gold-500 transition-colors duration-300 flex items-center space-x-3 p-2 border border-white/5 hover:border-gold-500/30 bg-[#121212]/20 cursor-pointer"
                aria-label="Close menu"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-charcoal-300 hidden sm:inline-block">
                  Close
                </span>
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Core Content (Split Columns on large screens) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 py-12 flex-1 items-center">
              {/* Left Column: Big Nav Links (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                <span className="text-[10px] tracking-[0.4em] text-gold-500/60 uppercase font-mono block">
                  Index / Navigate
                </span>
                <div className="h-[1px] bg-gold-500/10 w-12 mb-6" />
                
                <nav className="flex flex-col space-y-4 md:space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.value}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        onClick={() => handleNavClick(item.value)}
                        className={`text-left font-display text-4xl md:text-6xl uppercase tracking-widest transition-all duration-300 group flex items-baseline space-x-4 cursor-pointer`}
                      >
                        <span className="font-mono text-xs text-gold-500/30 group-hover:text-gold-500 transition-colors">
                          0{index + 1}
                        </span>
                        <span className={`transition-all duration-300 ${
                          activeTab === item.value 
                            ? 'text-gold-500 font-normal italic lowercase font-serif tracking-widest pl-2' 
                            : 'text-white hover:text-gold-500 pl-0'
                        }`}>
                          {item.label}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Column: Company Intel & Coordinates (5 cols) */}
              <div className="md:col-span-5 space-y-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gold-500/10 pt-8 md:pt-0 md:pl-12 lg:pl-16">
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.4em] text-gold-500/60 uppercase font-mono block">
                    Brand Coordinates
                  </span>
                  <div className="space-y-2">
                    <p className="font-sans text-xs text-charcoal-300 uppercase tracking-widest font-semibold">
                      Kàmer, House of Design
                    </p>
                    <p className="font-sans text-xs text-charcoal-400 leading-relaxed max-w-sm">
                      Jl. Saraswati No 9S, Cipete Utara, Kebayoran Baru, Jakarta Selatan 12150
                    </p>
                    <p className="font-mono text-xs text-gold-500 tracking-wider">
                      +62 818 0869 5100
                    </p>
                  </div>
                </div>

                {/* Social media icons inside the menu */}
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.4em] text-gold-500/60 uppercase font-mono block">
                    Direct Liaison
                  </span>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 bg-[#121212]/30"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 bg-[#121212]/30"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://kamerdesign.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 bg-[#121212]/30"
                      aria-label="Website"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 pt-4 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 font-mono text-[9px] tracking-widest text-charcoal-500">
              <p>© {new Date().getFullYear()} KÀMER. BEYOND DESIGN.</p>
              <p className="text-gold-500/40 uppercase">Unified Design & Build Guild</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
