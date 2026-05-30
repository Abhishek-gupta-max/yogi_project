import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';

function useCountUp(target, suffix, duration = 2000, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const isDecimal = String(target).includes('.');

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? Math.round(target * eased * 10) / 10
        : Math.floor(target * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };

    requestAnimationFrame(tick);
  }, [start, target, duration]);

  if (suffix === '/7') return value === 0 ? '0' : `${value}`;
  return value;
}

function StatCard({ stat, index }) {
  const Icon = stat.icon;
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(stat.count, stat.suffix, 2200, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const accentColors = [
    { border: 'rgba(0, 87, 255, 0.4)', glow: 'rgba(0, 87, 255, 0.15)', iconBg: 'rgba(0, 87, 255, 0.1)' },
    { border: 'rgba(0, 229, 255, 0.35)', glow: 'rgba(0, 229, 255, 0.1)', iconBg: 'rgba(0, 229, 255, 0.08)' },
    { border: 'rgba(123, 97, 255, 0.35)', glow: 'rgba(123, 97, 255, 0.1)', iconBg: 'rgba(123, 97, 255, 0.08)' },
    { border: 'rgba(0, 255, 179, 0.3)', glow: 'rgba(0, 255, 179, 0.08)', iconBg: 'rgba(0, 255, 179, 0.06)' },
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        className="group relative overflow-hidden rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center gap-4 transition-all duration-400"
        style={{
          background: 'rgba(10, 10, 20, 0.8)',
          border: `1px solid ${accent.border}`,
          backdropFilter: 'blur(16px)',
          boxShadow: `0 0 30px ${accent.glow}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 20px 50px ${accent.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `0 0 30px ${accent.glow}`;
        }}
      >
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${accent.glow}, transparent)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
          style={{
            background: accent.iconBg,
            border: `1px solid ${accent.border}`,
          }}
        >
          <Icon className="w-6 h-6 text-text-primary" />
        </div>

        {/* Count */}
        <div
          className="text-4xl xl:text-5xl font-black font-display"
          style={{
            background: 'linear-gradient(135deg, #F0F6FF, #1A75FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {count}{stat.suffix}
        </div>

        {/* Label */}
        <p className="text-text-muted text-sm font-medium leading-snug">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section
      id="stats"
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A14 0%, #060610 100%)' }}
    >
      {/* Top and bottom dividers */}
      <div className="gradient-divider absolute top-0 inset-x-0" />
      <div className="gradient-divider absolute bottom-0 inset-x-0" />

      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,87,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            By the Numbers
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display"
          >
            Trusted by{' '}
            <span className="gradient-text">Enterprises Worldwide</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
