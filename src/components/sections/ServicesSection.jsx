import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <div className="service-card group h-full">
        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-light to-accent" />

        {/* Card Background Image (skipped when a service sets image: null) */}
        {service.image !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.08] group-hover:opacity-[0.16] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] pointer-events-none z-0"
            style={{
              backgroundImage: `url("${service.image ?? `/services/${service.id}.png`}")`,
            }}
          />
        )}

        {/* Icon */}
        <div className="icon-tile w-14 h-14 mb-6 relative z-10">
          <Icon className="w-7 h-7" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-fg mb-3 leading-snug relative z-10 font-display group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-fg-muted text-sm leading-relaxed relative z-10 font-light">
          {service.shortDesc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-page py-16 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-accent block" />
            What We Do
            <span className="w-8 h-[1px] bg-accent block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display"
          >
            End-to-End <span className="gradient-text">Technology</span> Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg-muted text-base leading-relaxed font-light"
          >
            One partner. Complete coverage. From threat defense to cloud transformation, we handle it all so you don&apos;t have to juggle multiple vendors.
          </motion.p>
        </div>

        {/* Services Grid (3 columns on desktop, centered on wrap) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
            >
              <ServiceCard service={service} index={idx} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
