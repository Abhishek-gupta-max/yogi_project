import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { SERVICES } from '../../constants';

// Color map for cycling through accent colors per card
const ACCENT_COLORS = [
  { border: 'rgba(0, 87, 255, 0.4)', glow: 'rgba(0, 87, 255, 0.2)', icon: 'rgba(0, 87, 255, 0.15)' },
  { border: 'rgba(0, 229, 255, 0.4)', glow: 'rgba(0, 229, 255, 0.15)', icon: 'rgba(0, 229, 255, 0.1)' },
  { border: 'rgba(123, 97, 255, 0.4)', glow: 'rgba(123, 97, 255, 0.15)', icon: 'rgba(123, 97, 255, 0.1)' },
  { border: 'rgba(0, 255, 179, 0.3)', glow: 'rgba(0, 255, 179, 0.1)', icon: 'rgba(0, 255, 179, 0.08)' },
  { border: 'rgba(0, 180, 255, 0.4)', glow: 'rgba(0, 180, 255, 0.15)', icon: 'rgba(0, 180, 255, 0.1)' },
  { border: 'rgba(0, 87, 255, 0.4)', glow: 'rgba(0, 87, 255, 0.2)', icon: 'rgba(0, 87, 255, 0.15)' },
  { border: 'rgba(0, 229, 255, 0.3)', glow: 'rgba(0, 229, 255, 0.12)', icon: 'rgba(0, 229, 255, 0.08)' },
  { border: 'rgba(123, 97, 255, 0.35)', glow: 'rgba(123, 97, 255, 0.12)', icon: 'rgba(123, 97, 255, 0.08)' },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <div
        className="service-card group h-full"
        style={{ '--accent-border': accent.border, '--accent-glow': accent.glow }}
      >
        {/* Top glow line on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent.border}, transparent)`,
          }}
        />

        {/* Background gradient blob */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"
          style={{
            background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
            filter: 'blur(30px)',
          }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 relative z-10 transition-all duration-400 group-hover:scale-110"
          style={{
            background: accent.icon,
            border: `1px solid ${accent.border}`,
            boxShadow: `0 0 20px ${accent.glow}`,
          }}
        >
          <Icon className="w-7 h-7 text-text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug relative z-10 font-display group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-grow relative z-10 font-light">
          {service.shortDesc}
        </p>

        {/* Footer link */}
        <div
          className="pt-6 mt-6 relative z-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <Link
            to={`/services?tab=${service.id}`}
            id={`service-${service.id}-link`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
            style={{ color: '#1A75FF' }}
          >
            Learn More
            <BsArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-32 relative overflow-hidden"
      style={{ background: '#07070F' }}
    >
      {/* Top divider */}
      <div className="gradient-divider absolute top-0 inset-x-0" />

      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Side glow */}
      <div
        className="absolute -left-32 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,87,255,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              <span className="w-8 h-[1px] bg-neon-cyan block" />
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-text-primary leading-tight mb-5 font-display"
            >
              Enterprise-Grade{' '}
              <span className="gradient-text">Security & Technology</span>{' '}
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg leading-relaxed font-light"
            >
              From zero-trust cybersecurity to AI-powered automation — we deliver the full spectrum of technology services your enterprise needs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/services" id="all-services-btn">
              <button className="btn-outline flex-shrink-0">
                All Services
                <BsArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
