import { Instagram, Linkedin, Globe } from 'lucide-react';
import { Tab } from '../types';

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-gold-500/10 py-16 overflow-hidden" id="main-footer">
      {/* Background Soft Grid */}
      <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Logo Column */}
          <div className="space-y-3">
            <div 
              className="flex items-baseline space-x-1.5 cursor-pointer"
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-display text-xl md:text-2xl tracking-[0.25em] text-white">
                KÀMER
              </span>
              <span className="font-serif italic text-gold-500 text-sm tracking-widest font-light">
                house of design
              </span>
            </div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-charcoal-400 uppercase">
              BEYOND DESIGN • EST. 2002
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 max-w-sm">
            <p className="font-sans text-[11px] text-charcoal-300 leading-relaxed tracking-wide">
              Jl. Saraswati No 9S, Cipete Utara, Kebayoran Baru, Jakarta Selatan 12150
            </p>
            <p className="font-sans text-[11px] text-gold-500 tracking-wider">
              +62 818 0869 5100
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 rounded-none bg-[#121212]/30"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 rounded-none bg-[#121212]/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://kamerdesign.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold-500/20 hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal-400 transition-all duration-300 rounded-none bg-[#121212]/30"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-mono text-[9px] tracking-widest text-charcoal-500">
          <p>© {new Date().getFullYear()} KÀMER, HOUSE OF DESIGN. ALL RIGHTS RESERVED.</p>
          <p className="text-gold-500/40 uppercase">Beyond Design</p>
        </div>
      </div>
    </footer>
  );
}
