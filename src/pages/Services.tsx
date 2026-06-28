import { motion } from 'motion/react';
import { Layers, Wrench, ShieldCheck, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Service, SubService } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onSelectSubService: (serviceName: string, sub: SubService) => void;
}

export default function Services({ onSelectSubService }: ServicesProps) {
  const serviceIcons = [
    <Layers className="w-5 h-5 text-gold-500" key="0" />,
    <Wrench className="w-5 h-5 text-gold-500" key="1" />,
    <ShieldCheck className="w-5 h-5 text-gold-500" key="2" />
  ];

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] pt-24 md:pt-32 pb-24" id="services-page-container">
      {/* Soft background grid lines */}
      <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-24">
        
        {/* Editorial Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-gold-500/10 pb-10">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-gold-500 block">
            Capabilities // Unified Guild
          </span>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white">
            Core Guild Disciplines
          </h1>
          <p className="font-serif italic text-charcoal-300 text-sm md:text-base">
            "A seamless bridge between digital creative thesis, structural heavy execution, and artisanal timber cabinet joinery."
          </p>
        </div>

        {/* List of Services Sections */}
        <div className="space-y-24" id="services-disciplines-list">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gold-500/10 pb-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Image Banner (5 cols) */}
                <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Subtle architectural border markings */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-500/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/40" />

                  <div className="overflow-hidden bg-[#1A1A1A] border border-gold-500/10 aspect-[4/3] w-full gold-glow">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Narrative & Sub-services checklist (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#1A1A1A] border border-gold-500/15">
                      {serviceIcons[index]}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                      Discipline 0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-white">
                      {service.name}
                    </h2>
                    <p className="font-serif italic text-gold-500 text-sm tracking-widest uppercase">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-charcoal-300 leading-relaxed max-w-xl font-light">
                    {service.description}
                  </p>

                  <div className="h-[1px] bg-gold-500/10 w-full" />

                  {/* Clickable Sub-services links */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`subservice-list-${service.id}`}>
                      {service.subServices.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => onSelectSubService(service.name, sub)}
                          className="flex items-center justify-between p-4 bg-[#121212]/50 hover:bg-[#121212] border border-white/5 hover:border-gold-500/40 rounded-none text-left transition-all duration-300 group cursor-pointer"
                        >
                          <div className="space-y-1 pr-4">
                            <span className="text-xs font-sans font-medium text-white group-hover:text-gold-500 transition-colors">
                              {sub.name}
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-gold-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
