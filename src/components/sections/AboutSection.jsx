import { motion } from 'framer-motion';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';

// Existing "Why Choose Us" strengths (previously WhyChooseUs feature cards)
const STRENGTHS = [
  {
    title: 'Fast Response',
    desc: 'Proactive round-the-clock protection under rigid containment timelines. Critical network alerts trigger direct mitigation plans.',
  },
  {
    title: 'Affordable Solutions',
    desc: 'Cost-effective security scopes for growing corporate systems. Minimize waste and optimize coverage to scale safely.',
  },
  {
    title: 'Expert Guidance',
    desc: 'Direct consultation alongside Microsoft & Azure certified IT commanders with decadal enterprise infrastructure experience.',
  },
  {
    title: 'Modern Security Practices',
    desc: 'Zero-Trust access boundaries, ongoing vulnerability checks, compliance posture reporting, and automated recovery scripts.',
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

export default function AboutSection() {
  return (
    <section id="about" className="section-page py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
        {/* ── Left: About ── */}
        <motion.div {...reveal()}>
          <div className="section-label mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display">
            Your Trusted <span className="gradient-text">Technology Partner</span>
          </h2>
          <p className="text-fg-2 text-base leading-relaxed mb-4">
            VeltrixSecure Technologies delivers intelligent cybersecurity, scalable technology solutions, and
            digital transformation services for modern businesses.
          </p>
          <blockquote className="border-l-2 border-accent pl-4 text-fg-muted text-base leading-relaxed mb-8">
            &ldquo;To be the most trusted cybersecurity and IT partner delivering secure, intelligent, and
            cost-effective technology solutions that give businesses the{' '}
            <span className="text-accent font-medium">confidence to grow without boundaries.</span>&rdquo;
          </blockquote>

          <div className="relative rounded-3xl overflow-hidden border border-line shadow-card-hover aspect-[16/10] theme-dark bg-page">
            <img
              src="/cyber_illustration.webp"
              alt="Digital security shield protecting a connected network"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* ── Right: Why Choose Us ── */}
        {/* Fade only: a slide-in would shift this anchor after "Why Us" scrolls to it */}
        <motion.div
          id="why"
          data-anchor
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-label mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display">
            A Partner You Can <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-fg-2 text-base leading-relaxed mb-8">
            We don&apos;t just manage technology — we transform it into your greatest competitive advantage.
          </p>

          <ul className="flex flex-col gap-1 mb-8">
            {STRENGTHS.map((item) => (
              <li key={item.title} data-card className="group flex gap-4 -mx-4 px-4 py-3 rounded-2xl border border-transparent transition-all duration-300 hover:bg-surface hover:border-line hover:shadow-card">
                <BsCheckCircleFill className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-fg mb-1 font-display transition-colors group-hover:text-accent">{item.title}</h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Compact CTA card */}
          <div className="theme-dark rounded-3xl p-7 bg-page border border-line shadow-elevated relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/20 blur-3xl pointer-events-none"
            />
            <h3 className="relative text-xl font-bold text-fg mb-2 font-display">Have a project in mind?</h3>
            <p className="relative text-fg-muted text-sm leading-relaxed mb-5">
              Tell us what you need and our team will respond within one business day.
            </p>
            <a href="#contact" className="btn-primary relative px-6 py-3">
              Discuss Your Project
              <BsArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
