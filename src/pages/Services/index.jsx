import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { SERVICES, CONTACT_INFO } from '../../constants';
import { BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';

export default function Services() {
  useDocumentTitle('Our Services | DEVELTRIXSECURE TECHNOLOGIES LLP', 'Enterprise cybersecurity and IT solutions — Cybersecurity, Network Security, Cloud, AI Integration, Automation and more from DEVELTRIXSECURE.');
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState(
    tabParam && SERVICES.find((s) => s.id === tabParam) ? tabParam : SERVICES[0].id
  );

  useEffect(() => {
    if (tabParam && SERVICES.find((s) => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  const activeService = SERVICES.find((s) => s.id === activeTab);
  const Icon = activeService?.icon;

  return (
    <div style={{ background: '#0A0A14' }}>
      <section
        className="relative overflow-hidden pt-32 pb-20 text-center px-6"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-64" style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,87,255,0.1) 0%, transparent 100%)' }} />
        <div className="section-label justify-center mb-4 relative z-10">
          <span className="w-8 h-[1px] bg-neon-cyan block" />
          Our Services
          <span className="w-8 h-[1px] bg-neon-cyan block" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-text-primary font-display mb-4 relative z-10">
          Cybersecurity &{' '}
          <span className="gradient-text">IT Solutions</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto font-light relative z-10">
          Enterprise-grade technology services designed to protect, scale, and transform your digital infrastructure.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-2">
            {SERVICES.map((service) => {
              const ServiceIcon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabChange(service.id)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left text-sm font-semibold transition-all duration-300 border ${
                    isActive
                       ? 'text-white'
                       : 'text-text-muted hover:text-white'
                  }`}
                >
                  <ServiceIcon className={`w-5 h-5 ${isActive ? 'text-neon-cyan' : 'text-text-dim'}`} />
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-electric/5 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(0, 87, 255, 0.1)', border: '1px solid rgba(0, 87, 255, 0.3)' }}>
                        {Icon && <Icon className="w-8 h-8 text-neon-cyan" />}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-text-primary font-display">{activeService.title}</h2>
                    </div>

                     <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10 font-light">
                       {activeService.longDesc}
                     </p>

                     <h3 className="text-lg font-bold text-text-primary mb-6 pb-2 font-display" style={{ borderBottom: '1px solid rgba(26,32,53,0.8)' }}>Key Features</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                       {activeService.features.map((feature, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <BsCheckCircleFill className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                           <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                         </div>
                       ))}
                     </div>

                     <div className="pt-8 flex flex-wrap gap-4" style={{ borderTop: '1px solid rgba(26,32,53,0.8)' }}>
                        <a href={`mailto:${CONTACT_INFO.email}`}>
                          <button className="btn-primary">Schedule Consultation <BsArrowRight className="w-4 h-4" /></button>
                        </a>
                     </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
