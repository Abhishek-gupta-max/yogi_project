import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';

// ── 1. Animated Counters ───────────────────────────────────────────────────

function Counter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion && ref.current) {
      ref.current.textContent = value.toFixed(decimals) + suffix;
      return;
    }
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(decimals) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView, suffix, decimals, reduceMotion]);

  return <span ref={ref}>0{suffix}</span>;
}

// ── 2. Animated Custom SVGs ────────────────────────────────────────────────

function InspectedIllustration() {
  return (
    <svg className="w-10 h-10 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="5" cy="5" r="2" className="stroke-accent" />
      <circle cx="19" cy="5" r="2" className="stroke-accent" />
      <circle cx="12" cy="19" r="2" className="stroke-accent" />
      <path d="M7 6.5l8 4.5M17 6.5l-8 4.5M12 12V17" className="stroke-brand-light" strokeDasharray="3 3" />
      <circle cx="12" cy="11" r="1.5" className="fill-brand-light" stroke="none" />
      <motion.circle
        cx="5"
        cy="5"
        r="2"
        className="fill-accent"
        animate={{ x: [0, 7], y: [0, 6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="19"
        cy="5"
        r="2"
        className="fill-brand-light"
        animate={{ x: [0, -7], y: [0, 6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </svg>
  );
}

function ThreatsBlockedIllustration() {
  return (
    <svg className="w-10 h-10 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <motion.path
        d="M8 11l3 3 5-5"
        className="stroke-accent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="8"
        className="stroke-brand-light"
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function UptimeIllustration() {
  return (
    <svg className="w-10 h-10 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <motion.circle
        cx="6"
        cy="7"
        r="1.2"
        className="fill-success"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="6"
        cy="17"
        r="1.2"
        className="fill-success"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.55 }}
      />
      <path d="M10 7h8M10 17h8" className="stroke-fg-muted" strokeLinecap="round" />
      <motion.path
        d="M2 12h3l2-3 2 6 2-3h11"
        className="stroke-accent"
        strokeWidth="1"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function CertsIllustration() {
  return (
    <svg className="w-10 h-10 text-fg-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <motion.path
        d="M12 12l2 4.5-2-.5-2 .5z"
        className="stroke-brand-light fill-brand-light/10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <circle cx="12" cy="11" r="2.5" className="stroke-accent fill-surface" />
      <line x1="8" y1="18" x2="16" y2="18" className="stroke-fg-muted" strokeLinecap="round" />
    </svg>
  );
}

// ── 3. Stats Data ──────────────────────────────────────────────────────────

const STATS_ITEMS = [
  {
    title: 'Packets Inspected',
    subtitle: 'Real-time bandwidth scans',
    value: 450,
    suffix: 'M+',
    decimals: 0,
    illustration: InspectedIllustration,
  },
  {
    title: 'Threats Neutralized',
    subtitle: 'Attacks blocked instantly',
    value: 120,
    suffix: 'K+',
    decimals: 0,
    illustration: ThreatsBlockedIllustration,
  },
  {
    title: 'SLA Uptime',
    subtitle: 'Zero downtime commitment',
    value: 99.99,
    suffix: '%',
    decimals: 2,
    illustration: UptimeIllustration,
  },
  {
    title: 'Security Certs',
    subtitle: 'Industry standard compliance',
    value: 12,
    suffix: '+',
    decimals: 0,
    illustration: CertsIllustration,
  },
];

export default function StatsSection() {
  return (
    <section className="theme-dark section-page py-14 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[600px] h-[300px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgb(var(--brand-light) / 0.12) 0%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_ITEMS.map((item, idx) => {
            const Illustration = item.illustration;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group h-full"
              >
                <div
                  className="glass-card-premium rounded-3xl p-6.5 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ padding: '24px 28px' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-tile w-14 h-14">
                      <Illustration />
                    </div>
                  </div>

                  <div className="mt-2">
                    <h4 className="text-4xl font-extrabold text-fg tracking-tight mb-1 font-display">
                      <Counter value={item.value} suffix={item.suffix} decimals={item.decimals} />
                    </h4>
                    <div className="text-fg font-bold text-sm mb-1">
                      {item.title}
                    </div>
                    <div className="text-fg-muted text-xs leading-relaxed font-light">
                      {item.subtitle}
                    </div>
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
