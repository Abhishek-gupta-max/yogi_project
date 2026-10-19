import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsGlobe2, BsLightning } from 'react-icons/bs';
import { INDUSTRIES } from '../../constants';

// ── Animated Cyber-Grid Canvas ────────────────────────────────────────────
function CyberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    const nodes = [];
    const NODE_COUNT = 40;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    // Canvas can't use CSS vars directly, so read the theme tokens once
    const styles = getComputedStyle(canvas);
    const lineRgb = styles.getPropertyValue('--brand-light').trim().replace(/\s+/g, ', ');
    const nodeRgb = styles.getPropertyValue('--accent').trim().replace(/\s+/g, ', ');

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${node.alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${lineRgb}, ${node.alpha * 0.2})`;
        ctx.fill();

        // Move
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

// ── Hero Security Illustration ────────────────────────────────────────────
// Uses the existing /cyber_illustration.png artwork, faded into the navy
// background with a radial mask, plus a glow and slow-rotating orbit rings.
const ILLUSTRATION_MASK = 'radial-gradient(circle at 50% 50%, black 42%, transparent 70%)';

function HeroIllustration() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-[420px] h-[420px] xl:w-[460px] xl:h-[460px]"
    >
      {/* Glow behind the shield */}
      <div className="absolute inset-[18%] rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute inset-[28%] rounded-full bg-brand/30 blur-2xl" />

      <img
        src="/cyber_illustration.png"
        alt=""
        aria-hidden="true"
        width="1024"
        height="1024"
        decoding="async"
        className="relative w-full h-full object-cover select-none pointer-events-none saturate-[0.9]"
        style={{ maskImage: ILLUSTRATION_MASK, WebkitMaskImage: ILLUSTRATION_MASK }}
      />

      {/* Orbit rings */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-dashed border-accent/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[14%] rounded-full border border-brand-light/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute -top-1 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent))]" />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const trustBadges = [
    // { icon: BsShieldCheck, text: 'ISO 27001 Certified' },
    { icon: BsLightning, text: '24/7 SOC Operations' },
    { icon: BsGlobe2, text: 'Zero-Trust Architecture' },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="theme-dark relative overflow-hidden flex items-center lg:min-h-screen"
      style={{
        background: 'linear-gradient(180deg, rgb(var(--bg) / 0.86) 0%, rgb(var(--bg) / 0.97) 100%), url("/cyber-bg.png") center/cover no-repeat fixed',
        paddingTop: '96px',
      }}
    >
      {/* ── Animated Background Canvas ── */}
      <CyberCanvas />

      {/* ── Static grid overlay ── */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 30%, rgb(var(--brand-light) / 0.1) 0%, transparent 60%)',
        }}
      />

      {/* ── Floating orbs (mouse-parallax) ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgb(var(--brand-light) / 0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: mousePos.x * -30,
          y: mousePos.y * -20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          bottom: '5%',
          right: '-5%',
          background: 'radial-gradient(circle, rgb(var(--accent) / 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: mousePos.x * 20,
          y: mousePos.y * 15,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 relative z-10 w-full">
        {/* Industries ticker */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-2xl sm:rounded-full mb-8 bg-surface/50 border border-line backdrop-blur-md max-w-full"
        >
          <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </div>
          <span className="text-[10px] font-bold text-fg-muted tracking-widest uppercase leading-relaxed">
            <span className="text-accent mr-2">Serving:</span>
            {INDUSTRIES.map(i => i.label).join(' · ')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.08] font-extrabold tracking-tight mb-6 font-display text-balance"
            >
              Secure Digital{' '}
              <span className="block relative">
                <span className="gradient-text">Infrastructure</span>
              </span>
              <span className="text-fg">for the Modern</span>{' '}
              <span className="text-fg">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-fg-muted text-base md:text-lg leading-relaxed mb-9 max-w-xl"
            >
              <strong className="text-fg-2 font-semibold">VeltrixSecure Technologies</strong>{' '}
              delivers intelligent cybersecurity, scalable technology solutions, and digital transformation
              services for modern businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#contact" id="hero-get-started-btn" className="btn-primary text-base px-8 py-4">
                Get Started
                <BsArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" id="hero-explore-services-btn" className="btn-outline text-base px-8 py-4">
                Explore Services
              </a>
            </motion.div>

            {/* Hero Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-3 divide-x divide-line pt-8 border-t border-line mb-8 max-w-lg"
            >
              <div className="first:pl-0 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black font-display text-fg">10+</div>
                <div className="text-[10px] text-fg-muted mt-1.5 leading-snug tracking-wider uppercase font-bold">Years of Expertise</div>
              </div>
              <div className="first:pl-0 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black font-display text-fg">24×7</div>
                <div className="text-[10px] text-fg-muted mt-1.5 leading-snug tracking-wider uppercase font-bold">Monitoring & Support</div>
              </div>
              <div className="first:pl-0 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black font-display text-fg">100%</div>
                <div className="text-[10px] text-fg-muted mt-1.5 leading-snug tracking-wider uppercase font-bold">Security-First</div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs font-semibold text-fg-2 px-3.5 py-2 rounded-full bg-surface/50 border border-line">
                  <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Security illustration */}
          <div className="lg:col-span-5 hidden md:flex items-center justify-center relative min-h-[460px] w-full max-w-[540px] mx-auto lg:max-w-none">
            <div
              style={{
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                willChange: 'transform',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <HeroIllustration />
              </motion.div>
            </div>

            {/* Floating stat card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring', bounce: 0.4 }}
              className="glass-card absolute bottom-6 left-0 xl:-left-4 rounded-2xl p-4 pr-5 flex items-center gap-3 z-20 shadow-float backdrop-blur-md"
            >
              <div className="w-14 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand/25 border border-brand-light/40">
                <span className="text-fg text-sm font-black">99.9%</span>
              </div>
              <div>
                <div className="text-fg text-sm font-bold">Uptime SLA</div>
                <div className="text-accent text-xs uppercase tracking-wider">Guaranteed</div>
              </div>
            </motion.div>

            {/* Floating stat card — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, type: 'spring', bounce: 0.4 }}
              className="glass-card absolute top-6 right-0 xl:-right-2 rounded-2xl p-4 pr-5 flex items-center gap-3 z-20 shadow-float backdrop-blur-md"
            >
              <div className="icon-tile w-14 h-12 rounded-xl">
                <span className="text-accent text-sm font-black">500+</span>
              </div>
              <div>
                <div className="text-fg text-sm font-bold">Clients Secured</div>
                <div className="text-fg-muted text-xs uppercase tracking-wider">Worldwide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
