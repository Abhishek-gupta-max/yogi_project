import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import StatsCounter from '../../components/sections/StatsCounter';
import ProcessSection from '../../components/sections/ProcessSection';
import CaseStudyShowcase from '../../components/sections/CaseStudyShowcase';
import Testimonials from '../../components/sections/Testimonials';
import FAQSection from '../../components/sections/FAQSection';
import { BsArrowRight, BsShieldCheck, BsEnvelopeFill } from 'react-icons/bs';
import { BLOGS, CONTACT_INFO } from '../../constants';

// ── Blog Card ─────────────────────────────────────────────────────────────
function BlogCard({ blog, index }) {
  const categoryColors = {
    'Cybersecurity':       { bg: 'rgba(0, 87, 255, 0.15)', text: '#3A7BFF' },
    'AI Integration':      { bg: 'rgba(0, 229, 255, 0.1)', text: '#1A75FF' },
    'Cloud Infrastructure': { bg: 'rgba(123, 97, 255, 0.12)', text: '#7B61FF' },
  };
  const color = categoryColors[blog.category] || categoryColors['Cybersecurity'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="h-full"
    >
      <div
        className="group relative overflow-hidden rounded-3xl flex flex-col h-full transition-all duration-400"
        style={{
          background: 'rgba(10, 10, 20, 0.7)',
          border: '1px solid rgba(26, 32, 53, 0.8)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 87, 255, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52 flex-shrink-0">
          <div className="absolute inset-0 bg-cyber-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: color.bg,
                color: color.text,
                backdropFilter: 'blur(8px)',
                border: `1px solid ${color.text}33`,
              }}
            >
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col gap-3 flex-grow">
          <div className="flex items-center gap-3 text-xs text-text-dim">
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-lg font-bold text-text-primary leading-snug font-display group-hover:text-white transition-colors">
            {blog.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed flex-grow font-light">
            {blog.excerpt}
          </p>
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-neon-cyan group-hover:gap-3 transition-all duration-200 mt-2"
          >
            Read Article <BsArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Home Page ─────────────────────────────────────────────────────────
export default function Home() {
  useDocumentTitle(
    'DEVELTRIXSECURE TECHNOLOGIES LLP | Cybersecurity & IT Solutions',
    'DEVELTRIXSECURE TECHNOLOGIES LLP delivers intelligent cybersecurity, scalable technology solutions, and digital transformation services for modern businesses in Noida, India.'
  );

  return (
    <div style={{ background: '#0A0A14' }}>

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. SERVICES ─────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. WHY CHOOSE US ────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 4. STATS ────────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── 5. PROCESS ──────────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── 6. CASE STUDIES ─────────────────────────────────────────── */}
      <CaseStudyShowcase />

      {/* ── 7. TESTIMONIALS ─────────────────────────────────────────── */}
      <Testimonials />

      {/* ── 8. BLOG ARTICLES ────────────────────────────────────────── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: '#06060F' }}
      >
        <div className="gradient-divider absolute top-0 inset-x-0" />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <div className="section-label mb-4">
                <span className="w-8 h-[1px] bg-neon-cyan block" />
                Insights
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-primary font-display mb-4">
                Security <span className="gradient-text">Intelligence</span>
              </h2>
              <p className="text-text-muted text-lg font-light max-w-xl">
                Expert insights from our senior cybersecurity architects and AI engineers.
              </p>
            </div>
            <Link to="/blogs" id="view-all-blogs-btn" className="flex-shrink-0">
              <button className="btn-outline">View All Articles</button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BLOGS.map((blog, idx) => (
              <BlogCard key={blog.id} blog={blog} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── 10. CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: '#050810' }}
      >
        <div className="gradient-divider absolute top-0 inset-x-0" />

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full animate-pulse-slow"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,87,255,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-20 rounded-4xl"
            style={{
              background: 'rgba(0, 87, 255, 0.04)',
              border: '1px solid rgba(0, 87, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 60px rgba(0, 87, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 inset-x-0 h-[1px] rounded-t-4xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.8), rgba(0,229,255,0.6), transparent)',
              }}
            />

            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
              style={{
                background: 'rgba(0, 87, 255, 0.1)',
                border: '1px solid rgba(0, 87, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 87, 255, 0.2)',
              }}
            >
              <BsShieldCheck className="w-8 h-8 text-neon-cyan" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6 leading-tight font-display">
              Ready to{' '}
              <span className="gradient-text">Secure Your</span>{' '}
              Digital Future?
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Join 500+ enterprises that trust DEVELTRIXSECURE to protect, automate, and transform their digital infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" id="cta-get-started-btn">
                <button className="btn-primary text-base px-8 py-4 rounded-2xl">
                  Get Started Today
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href={`mailto:${CONTACT_INFO.email}`} id="cta-email-btn">
                <button className="btn-outline text-base px-8 py-4 rounded-2xl">
                  <BsEnvelopeFill className="w-4 h-4" />
                  {CONTACT_INFO.email}
                </button>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-text-dim">
              {['ISO 27001 Certified', 'SOC 2 Compliant', 'GDPR Ready', 'Zero-Trust First', '24/7 SOC Support'].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan inline-block" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
