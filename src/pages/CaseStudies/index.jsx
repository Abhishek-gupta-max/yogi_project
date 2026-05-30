import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CASE_STUDIES, CONTACT_INFO } from '../../constants';
import { BsArrowRight } from 'react-icons/bs';

const TAG_COLORS = {
  'Cybersecurity':          { bg: 'rgba(0, 87, 255, 0.15)', text: '#3A7BFF', border: 'rgba(0, 87, 255, 0.3)' },
  'Cloud Infrastructure':   { bg: 'rgba(0, 229, 255, 0.1)', text: '#1A75FF', border: 'rgba(0, 229, 255, 0.3)' },
  'Automation':             { bg: 'rgba(123, 97, 255, 0.12)', text: '#7B61FF', border: 'rgba(123, 97, 255, 0.3)' },
  'Network Security':       { bg: 'rgba(0, 255, 179, 0.1)', text: '#00FFB3', border: 'rgba(0, 255, 179, 0.3)' },
  'Digital Transformation': { bg: 'rgba(0, 180, 255, 0.12)', text: '#00B4FF', border: 'rgba(0, 180, 255, 0.3)' },
  'AI Integration':         { bg: 'rgba(0, 87, 255, 0.12)', text: '#3A7BFF', border: 'rgba(0, 87, 255, 0.25)' },
};

export default function CaseStudies() {
  useDocumentTitle(
    'Case Studies | DEVELTRIXSECURE TECHNOLOGIES LLP',
    'Real enterprise cybersecurity and IT transformation results — from zero-trust implementations to cloud migrations and AI-powered security.'
  );

  return (
    <div style={{ background: '#0A0A14' }}>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 text-center px-6"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-64"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,87,255,0.1) 0%, transparent 100%)' }}
        />
        <div className="section-label justify-center mb-4 relative z-10">
          <span className="w-8 h-[1px] bg-neon-cyan block" />
          Case Studies
          <span className="w-8 h-[1px] bg-neon-cyan block" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-text-primary font-display mb-4 relative z-10"
        >
          Real Results,{' '}
          <span className="gradient-text">Measurable Impact</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl mx-auto font-light relative z-10"
        >
          Explore how DEVELTRIXSECURE has transformed enterprise security, cloud infrastructure, and digital operations across industries.
        </motion.p>
      </section>

      {/* ── CASE STUDIES GRID ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CASE_STUDIES.map((study, idx) => {
            const tagColor = TAG_COLORS[study.tag] || TAG_COLORS['Cybersecurity'];
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                id={`case-study-${study.id}`}
              >
                <div
                  className="group relative overflow-hidden rounded-3xl p-8 h-full flex flex-col transition-all duration-400"
                  style={{
                    background: 'rgba(10, 10, 20, 0.7)',
                    border: '1px solid rgba(26, 32, 53, 0.8)',
                    backdropFilter: 'blur(16px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 87, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Tag + Company */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: tagColor.bg, color: tagColor.text, border: `1px solid ${tagColor.border}` }}
                    >
                      {study.tag}
                    </span>
                    <span className="text-xs text-text-dim">{study.company}</span>
                  </div>

                  {/* Metric */}
                  <div
                    className="w-full py-4 px-5 rounded-2xl mb-5 flex items-center justify-between"
                    style={{ background: 'rgba(0, 87, 255, 0.06)', border: '1px solid rgba(0, 87, 255, 0.12)' }}
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
                    <BsArrowRight className="w-5 h-5 text-neon-cyan opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug font-display flex-shrink-0">
                    {study.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-grow font-light">
                    {study.summary}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center p-12 md:p-16 rounded-4xl relative overflow-hidden"
          style={{
            background: 'rgba(0, 87, 255, 0.04)',
            border: '1px solid rgba(0, 87, 255, 0.2)',
          }}
        >
          <div
            className="absolute top-0 inset-x-0 h-[1px] rounded-t-4xl"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.6), rgba(0,229,255,0.4), transparent)' }}
          />
          <h2 className="text-3xl md:text-4xl font-black text-text-primary font-display mb-4">
            Ready to Write Your <span className="gradient-text">Success Story?</span>
          </h2>
          <p className="text-text-muted text-base mb-8 max-w-xl mx-auto font-light">
            Our experts analyze your IT infrastructure to identify immediate security improvements and efficiency gains.
          </p>
          <Link to="/contact" id="casestudies-cta-btn">
            <button className="btn-primary text-base px-8 py-4 rounded-2xl">
              Book a Consultation
              <BsArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
