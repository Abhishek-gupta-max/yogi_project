import { motion } from 'framer-motion';

// ── 1. Animated Vector SVG Illustrations ──

function FastResponseIllustration() {
  return (
    <svg className="w-16 h-16 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="stroke-accent" />
      <motion.path
        d="M5 13h14"
        className="stroke-brand-light"
        strokeWidth="1"
        strokeDasharray="4 4"
        animate={{ x: [-10, 10] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

function AffordableSolutionsIllustration() {
  return (
    <svg className="w-16 h-16 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M15 9H10.5a2.5 2.5 0 0 0 0 5h3.5" className="stroke-accent" />
      <motion.circle
        cx="12"
        cy="12"
        r="7.5"
        className="stroke-brand-light"
        strokeWidth="1"
        strokeDasharray="3 3"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

function ExpertGuidanceIllustration() {
  return (
    <svg className="w-16 h-16 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 11l2 2 4-4" className="stroke-accent" />
      <motion.circle
        cx="12"
        cy="11"
        r="5"
        className="stroke-brand-light"
        strokeWidth="1"
        strokeDasharray="2 2"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

function ModernPracticesIllustration() {
  return (
    <svg className="w-16 h-16 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <motion.circle
        cx="12" cy="7" r="1.5"
        className="fill-accent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="6" cy="9.5" r="1.5"
        className="fill-brand-light"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
    </svg>
  );
}

// ── 2. Feature Cards Models ──

const FEATURE_CARDS = [
  {
    title: 'Fast Response',
    desc: 'Proactive round-the-clock protection under rigid containment timelines. Critical network alerts trigger direct mitigation plans.',
    illustration: FastResponseIllustration,
  },
  {
    title: 'Affordable Solutions',
    desc: 'Cost-effective security scopes for growing corporate systems. Minimize waste and optimize coverage to scale safely.',
    illustration: AffordableSolutionsIllustration,
  },
  {
    title: 'Expert Guidance',
    desc: 'Direct consultation alongside Microsoft & Azure certified IT commanders with decadal enterprise infrastructure experience.',
    illustration: ExpertGuidanceIllustration,
  },
  {
    title: 'Modern Security Practices',
    desc: 'Zero-Trust access boundaries, ongoing vulnerability checks, compliance posture reporting, and automated recovery scripts.',
    illustration: ModernPracticesIllustration,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="section-alt py-16 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-accent block" />
            Why Choose Us
            <span className="w-8 h-[1px] bg-accent block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display"
          >
            A Partner You Can <span className="gradient-text">Trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg-2 text-base leading-relaxed font-light"
          >
            We don&apos;t just manage technology — we transform it into your greatest competitive advantage.
          </motion.p>
        </div>

        {/* Feature Grid (4 columns on desktop / 2 on tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {FEATURE_CARDS.map((card, idx) => {
            const IllustrationComp = card.illustration;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="h-full"
              >
                <div
                  className="glass-card-premium rounded-3xl p-6.5 flex flex-col justify-between h-full relative overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{ padding: '28px 24px' }}
                >
                  <div>
                    {/* SVG Illustration at Top */}
                    <div className="icon-tile mb-6 w-20 h-20">
                      <IllustrationComp />
                    </div>

                    <h3 className="text-lg font-bold text-fg mb-3.5 font-display group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-fg-2 text-sm leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
