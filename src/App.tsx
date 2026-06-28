import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import ServiceModal from './components/ServiceModal';
import { Tab, Project, SubService } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Service modal states
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null);
  const [activeServiceName, setActiveServiceName] = useState<string>('');

  // Close modals on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setActiveSubService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSubService = (serviceName: string, sub: SubService) => {
    setActiveServiceName(serviceName);
    setActiveSubService(sub);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            onSelectProject={setSelectedProject} 
            setActiveTab={setActiveTab} 
          />
        );
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio onSelectProject={setSelectedProject} />;
      case 'services':
        return <Services onSelectSubService={handleSelectSubService} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSelectProject={setSelectedProject} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F2F2F2] flex flex-col justify-between selection:bg-gold-500 selection:text-[#0D0D0D] border-8 md:border-12 border-[#1A1A1A] transition-all duration-500">
      
      {/* Cinematic Static Ambient Glow Ring */}
      <div className="fixed top-0 right-0 w-[60vw] h-[60vh] bg-gold-500/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vh] bg-gold-500/[0.015] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Primary Floating Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Stage Area */}
      <main className="flex-1 relative z-10" id="main-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* PORTFOLIO DETAILED SLIDE-OVER OVERLAY */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />

      {/* SERVICES MODAL DETAIL POPUP */}
      <ServiceModal
        serviceName={activeServiceName}
        subService={activeSubService}
        onClose={() => setActiveSubService(null)}
      />

    </div>
  );
}
