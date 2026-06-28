import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Award, ShieldAlert, Sparkles } from 'lucide-react';
import { SubService } from '../types';

interface ServiceModalProps {
  serviceName: string;
  subService: SubService | null;
  onClose: () => void;
}

export default function ServiceModal({ serviceName, subService, onClose }: ServiceModalProps) {
  if (!subService) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0D0D0D]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', duration: 0.6, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-none overflow-hidden gold-glow-strong z-10"
          id="service-detail-modal"
        >
          {/* Subtle Grid overlay in modal */}
          <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

          {/* Golden Highlight Border Trim */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent w-full" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 border border-[#D4AF37]/15 hover:border-gold-500 text-charcoal-400 hover:text-gold-500 p-2 transition-all duration-300 cursor-pointer z-20"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8 md:p-10 space-y-8 relative z-10">
            {/* Header metadata */}
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500 bg-gold-500/5 border border-gold-500/10 px-3 py-1 rounded-none inline-block">
                {serviceName}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider leading-tight mt-2">
                {subService.name}
              </h3>
              <div className="h-[1px] bg-gold-500/10 w-20" />
            </div>

            {/* Description narrative */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-400 block">
                Atmosphere & Methodology
              </span>
              <p className="font-sans text-charcoal-200 text-sm md:text-base leading-relaxed">
                {subService.description}
              </p>
            </div>

            {/* Specifications Details List */}
            <div className="space-y-4 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-400 block">
                Key Parameters & Direct Deliverables
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="service-spec-list">
                {subService.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-2.5 text-xs text-charcoal-300 leading-normal"
                  >
                    <Check className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Trust and quality assurance tag removed */}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
