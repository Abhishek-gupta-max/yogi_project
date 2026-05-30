import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BsShieldCheck,
  BsCpu,
  BsCloudArrowUp,
  BsRobot,
  BsGlobe2,
  BsArrowRight,
  BsPeopleFill,
  BsAwardFill,
  BsLightningFill,
} from 'react-icons/bs';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CONTACT_INFO } from '../../constants';

const EXPERTISE = [
  { label: 'Cybersecurity & Zero-Trust', icon: BsShieldCheck, color: '#0050FF' },
  { label: 'Cloud Architecture', icon: BsCloudArrowUp, color: '#1A75FF' },
  { label: 'AI & Machine Learning', icon: BsCpu, color: '#7B61FF' },
  { label: 'Network Engineering', icon: BsGlobe2, color: '#00FFB3' },
  { label: 'Automation & DevSecOps', icon: BsRobot, color: '#00B4FF' },
];

const VALUES = [
  {
    icon: BsShieldCheck,
    title: 'Security First',
    desc: 'Every solution we architect has security baked in from the foundation — not bolted on as an afterthought.',
    color: 'rgba(0, 87, 255, 0.4)',
  },
  {
    icon: BsPeopleFill,
    title: 'Client Partnership',
    desc: 'We don\'t just deliver projects — we become an extension of your team, invested in your long-term success.',
    color: 'rgba(0, 229, 255, 0.35)',
  },
  {
    icon: BsAwardFill,
    title: 'Excellence in Delivery',
    desc: 'Our engineers hold 50+ certifications and follow rigorous quality standards in every engagement.',
    color: 'rgba(123, 97, 255, 0.4)',
  },
  {
    icon: BsLightningFill,
    title: 'Innovation at Speed',
    desc: 'We combine deep expertise with agile execution to deliver transformational outcomes at enterprise speed.',
    color: 'rgba(0, 255, 179, 0.3)',
  },
];

export default function About() {
  useDocumentTitle(
    'About | DEVELTRIXSECURE TECHNOLOGIES LLP',
    'Learn about DEVELTRIXSECURE TECHNOLOGIES LLP — our mission, values, and the team delivering world-class cybersecurity and IT solutions from Noida, India.'
  );

  return (
    <div style={{ background: '#0A0A14' }}>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-64"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,87,255,0.1) 0%, transparent 100%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            About Us
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-text-primary font-display mb-6 text-balance"
          >
            Vision-Driven IT Services & <span className="gradient-text">Consulting</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-text-muted text-lg font-light max-w-3xl mx-auto"
          >
            VeltrixSecure Technologies LLP specializes in Cybersecurity, Managed Services, Cloud Solutions, IT Consulting, Operations Management, Backup & Recovery, and End-to-End IT Support. Our goal is simple: to make IT secure, cost-effective, and easy to manage, enabling businesses to focus on growth and innovation while we take care of their technology needs.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-4">
                <span className="w-8 h-[1px] bg-neon-cyan block" />
                Our Vision & Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary font-display leading-tight mb-6">
                Empowering Businesses to Grow <span className="gradient-text">Confidently</span>
              </h2>
              
              <div className="mb-6 p-5 rounded-2xl bg-electric-DEFAULT/5 border border-electric-DEFAULT/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-electric-DEFAULT rounded-l-2xl" />
                <h3 className="text-lg font-bold text-text-primary mb-2">Our Vision</h3>
                <p className="text-text-secondary text-base leading-relaxed italic font-light">
                  "To be the most trusted IT partner delivering secure, simplified, and cost‑effective technology solutions that empower businesses to grow confidently."
                </p>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-3">Our Mission</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { title: 'Secure every business', desc: 'Provide advanced cybersecurity and compliance‑driven solutions.' },
                  { title: 'Simplify infrastructure', desc: 'Make IT operations easy, reliable, and scalable.' },
                  { title: 'Optimize Costs', desc: 'Maximize technology investments through managed services and cloud adoption.' },
                  { title: 'Build trust', desc: 'Deliver transparent, customer‑centric support with measurable outcomes.' },
                  { title: 'Enable continuity', desc: 'Ensure uninterrupted business operations through backup, recovery, and end-to-end support.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <BsArrowRight className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-text-primary">{item.title}</strong>{' '}
                      <span className="text-text-muted font-light">— {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Address highlight */}
              <div
                className="p-5 rounded-2xl flex items-start gap-4"
                style={{
                  background: 'rgba(0, 87, 255, 0.06)',
                  border: '1px solid rgba(0, 87, 255, 0.15)',
                }}
              >
                <BsShieldCheck className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
                <div>
                  <div className="text-text-primary font-bold text-sm mb-1">Registered Office</div>
                  <div className="text-text-muted text-sm leading-relaxed">{CONTACT_INFO.address}</div>
                  <div className="text-neon-cyan text-xs mt-2 font-semibold">
                    ✉ {CONTACT_INFO.email}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats / Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: '500+', label: 'Enterprises Secured', color: 'rgba(0, 87, 255, 0.4)' },
                { value: '99.9%', label: 'Uptime SLA', color: 'rgba(0, 229, 255, 0.35)' },
                { value: '50+', label: 'Certifications', color: 'rgba(123, 97, 255, 0.35)' },
                { value: '24/7', label: 'SOC Coverage', color: 'rgba(0, 255, 179, 0.3)' },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="p-7 rounded-3xl text-center"
                  style={{
                    background: 'rgba(10, 10, 20, 0.8)',
                    border: `1px solid ${item.color}`,
                    boxShadow: `0 0 20px ${item.color.replace('0.4', '0.1').replace('0.35', '0.08').replace('0.3', '0.07')}`,
                  }}
                >
                  <div
                    className="text-3xl font-black font-display mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #F0F6FF, #1A75FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.value}
                  </div>
                  <div className="text-text-muted text-xs leading-snug">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ background: '#07070F' }}
      >
        <div className="gradient-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-[1px] bg-neon-cyan block" />
              Our Values
              <span className="w-8 h-[1px] bg-neon-cyan block" />
            </div>
            <h2 className="text-4xl font-black text-text-primary font-display">
              Principles That Drive <span className="gradient-text">Everything We Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="p-7 rounded-3xl"
                  style={{
                    background: 'rgba(10, 10, 20, 0.7)',
                    border: `1px solid ${val.color}`,
                    boxShadow: `0 0 20px ${val.color.replace('0.4', '0.08').replace('0.35', '0.07').replace('0.3', '0.06')}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: val.color.replace('0.4', '0.1').replace('0.35', '0.08').replace('0.3', '0.07'),
                      border: `1px solid ${val.color}`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 font-display">{val.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-light">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="gradient-divider absolute bottom-0 inset-x-0" />
      </section>

      {/* ── EXPERTISE ───────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Our Expertise
          </div>
          <h2 className="text-4xl font-black text-text-primary font-display mb-10">
            Certified in What <span className="gradient-text">Matters Most</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {EXPERTISE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(10, 10, 20, 0.7)',
                    border: `1px solid ${item.color}44`,
                    boxShadow: `0 0 16px ${item.color}22`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                  <span className="text-sm font-semibold text-text-secondary">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST 800-207', 'IEC 62443'].map((cert) => (
              <span
                key={cert}
                className="text-xs px-4 py-2 rounded-full font-bold tracking-wider"
                style={{
                  background: 'rgba(0, 229, 255, 0.06)',
                  border: '1px solid rgba(0, 229, 255, 0.2)',
                  color: '#1A75FF',
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: '#050810' }}
      >
        <div className="gradient-divider absolute top-0 inset-x-0" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,87,255,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black text-text-primary font-display mb-5">
            Ready to Partner with <span className="gradient-text">DEVELTRIXSECURE?</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 font-light">
            Let's talk about how we can secure and transform your digital infrastructure.
          </p>
          <Link to="/contact" id="about-cta-btn">
            <button className="btn-primary text-base px-8 py-4 rounded-2xl">
              Get In Touch <BsArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
