import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { CASE_STUDIES } from '../../constants';

const TAG_COLORS = {
  'Cybersecurity':       { bg: 'rgba(0, 87, 255, 0.15)', text: '#0050FF', border: 'rgba(0, 87, 255, 0.3)' },
  'Cloud Infrastructure': { bg: 'rgba(0, 229, 255, 0.1)', text: '#1A75FF', border: 'rgba(0, 229, 255, 0.3)' },
  'Automation':          { bg: 'rgba(123, 97, 255, 0.12)', text: '#7B61FF', border: 'rgba(123, 97, 255, 0.3)' },
  'Network Security':    { bg: 'rgba(0, 255, 179, 0.1)', text: '#00FFB3', border: 'rgba(0, 255, 179, 0.3)' },
  'Digital Transformation': { bg: 'rgba(0, 180, 255, 0.12)', text: '#00B4FF', border: 'rgba(0, 180, 255, 0.3)' },
  'AI Integration':      { bg: 'rgba(0, 87, 255, 0.12)', text: '#3A7BFF', border: 'rgba(0, 87, 255, 0.25)' },
};

function CaseStudyCard({ study, index }) {
  const tagColor = TAG_COLORS[study.tag] || TAG_COLORS['Cybersecurity'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <div
        className="group relative overflow-hidden rounded-3xl p-8 h-full flex flex-col transition-all duration-500"
        style={{
          background: 'rgba(10, 10, 20, 0.7)',
          border: '1px solid rgba(26, 32, 53, 0.8)',
          backdropFilter: 'blur(16px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 87, 255, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Gradient background blob */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/4 translate-x-1/4 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${study.color})`,
            filter: 'blur(40px)',
          }}
        />

        {/* Tag */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: tagColor.bg,
              color: tagColor.text,
              border: `1px solid ${tagColor.border}`,
            }}
          >
            {study.tag}
          </span>
          <span className="text-xs text-text-dim">{study.company}</span>
        </div>

        {/* Metric highlight */}
        <div
          className="w-full py-4 px-5 rounded-2xl mb-5 relative z-10 flex items-center justify-between"
          style={{
            background: 'rgba(0, 87, 255, 0.06)',
            border: '1px solid rgba(0, 87, 255, 0.12)',
          }}
        >
          <div>
            <div
              className="text-3xl font-black font-display"
              style={{
                background: 'linear-gradient(135deg, #0050FF, #1A75FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {study.metric}
            </div>
            <div className="text-xs text-text-muted mt-0.5">{study.metricLabel}</div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(0, 87, 255, 0.12)',
              border: '1px solid rgba(0, 87, 255, 0.25)',
            }}
          >
            <BsArrowRight
              className="w-4 h-4 text-neon-cyan group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug font-display relative z-10 group-hover:text-white transition-colors">
          {study.title}
        </h3>

        {/* Summary */}
        <p className="text-text-muted text-sm leading-relaxed flex-grow relative z-10 font-light">
          {study.summary}
        </p>

        {/* Read more */}
        <div
          className="pt-5 mt-5 relative z-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <Link
            to="/case-studies"
            id={`case-study-${study.id}-link`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neon-cyan group-hover:gap-3 transition-all duration-200"
          >
            View Case Study
            <BsArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudyShowcase() {
  return (
    <section
      id="case-studies"
      className="py-32 relative overflow-hidden"
      style={{ background: '#070710' }}
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,87,255,0.06) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Case Studies
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display mb-5"
          >
            Real Results,{' '}
            <span className="gradient-text">Measurable Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto font-light"
          >
            From enterprise security hardening to AI-powered fraud detection — see how we deliver transformational outcomes for our clients.
          </motion.p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/case-studies" id="all-case-studies-btn">
            <button className="btn-outline">
              View All Case Studies
              <BsArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
