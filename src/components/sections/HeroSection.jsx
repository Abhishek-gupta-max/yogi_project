import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsGlobe2, BsLightning } from 'react-icons/bs';
import { INDUSTRIES } from '../../constants';

// ── Network Canvas ─────────────────────────────────────────────────────────
// Slow-moving nodes behind the hero. Pauses while the hero is off-screen and
// draws a single static frame when the visitor prefers reduced motion.
function CyberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animId = null;
    let w, h;

    const nodes = [];
    const NODE_COUNT = 36;

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
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.8,
          alpha: Math.random() * 0.45 + 0.2,
        });
      }
    };

    // Canvas can't use CSS vars directly, so read the theme token once
    const nodeRgb = getComputedStyle(canvas).getPropertyValue('--accent').trim().replace(/\s+/g, ', ');

    const drawFrame = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${nodeRgb}, ${(1 - dist / 160) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${node.alpha})`;
        ctx.fill();
      });
    };

    const loop = () => {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });
      drawFrame();
      animId = requestAnimationFrame(loop);
    };

    const start = () => { if (!reduceMotion && animId === null) animId = requestAnimationFrame(loop); };
    const stop = () => { if (animId !== null) cancelAnimationFrame(animId); animId = null; };

    const onResize = () => { resize(); init(); drawFrame(); };
    onResize();

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    observer.observe(canvas);
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full opacity-60" />;
}

// ── Hero Security Illustration ────────────────────────────────────────────
// Existing /cyber_illustration.png artwork, faded into the navy background
// with a radial mask. Static — no looping motion.
const ILLUSTRATION_MASK = 'radial-gradient(circle at 50% 50%, black 42%, transparent 70%)';

function HeroIllustration() {
  return (
    <div className="relative w-[360px] h-[360px] xl:w-[400px] xl:h-[400px]">
      <div className="absolute inset-[24%] rounded-full bg-accent/15 blur-3xl" />

      <img
        src="/cyber_illustration.png"
        alt=""
        aria-hidden="true"
        width="1024"
        height="1024"
        decoding="async"
        className="relative w-full h-full object-cover select-none pointer-events-none saturate-[0.85]"
        style={{ maskImage: ILLUSTRATION_MASK, WebkitMaskImage: ILLUSTRATION_MASK }}
      />

      <div className="absolute inset-[6%] rounded-full border border-dashed border-accent/20" />
    </div>
  );
}

export default function HeroSection() {
  const trustBadges = [
    // { icon: BsShieldCheck, text: 'ISO 27001 Certified' },
    { icon: BsLightning, text: '24/7 SOC Operations' },
    { icon: BsGlobe2, text: 'Zero-Trust Architecture' },
  ];

  return (
    <section
      id="home"
      className="theme-dark relative overflow-hidden flex flex-col lg:min-h-screen"
      style={{
        background: 'linear-gradient(180deg, rgb(var(--bg) / 0.86) 0%, rgb(var(--bg) / 0.97) 100%), url("/cyber-bg.png") center/cover no-repeat fixed',
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
            'radial-gradient(ellipse 80% 70% at 50% 30%, rgb(var(--surface) / 0.6) 0%, transparent 60%)',
        }}
      />

      {/* ── Soft corner glow ── */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-[10%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgb(var(--accent) / 0.08) 0%, transparent 70%)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-32 lg:pb-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-bold uppercase tracking-widest text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cybersecurity &amp; IT Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-[2.5rem] sm:text-5xl xl:text-[3.25rem] leading-[1.1] font-extrabold tracking-tight mb-5 font-display text-balance"
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
              className="text-fg-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl"
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
              <a href="#contact" id="hero-get-started-btn" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                Get Started
                <BsArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" id="hero-explore-services-btn" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
                Explore Services
              </a>
            </motion.div>

            {/* Hero Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-3 divide-x divide-line pt-7 border-t border-line mb-7 max-w-lg"
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
          <div className="lg:col-span-5 hidden md:flex items-center justify-center relative min-h-[400px] w-full max-w-[480px] mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <HeroIllustration />
            </motion.div>

            {/* Floating stat card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card absolute bottom-6 left-0 xl:-left-4 rounded-2xl p-4 pr-5 flex items-center gap-3 z-20 shadow-elevated"
            >
              <div className="icon-tile w-14 h-12 rounded-xl">
                <span className="text-accent text-sm font-black">99.9%</span>
              </div>
              <div>
                <div className="text-fg text-sm font-bold">Uptime SLA</div>
                <div className="text-fg-muted text-xs uppercase tracking-wider">Guaranteed</div>
              </div>
            </motion.div>

            {/* Floating stat card — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card absolute top-6 right-0 xl:-right-2 rounded-2xl p-4 pr-5 flex items-center gap-3 z-20 shadow-elevated"
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
      </div>

      {/* ── Industries served ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 border-t border-line bg-page/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-accent flex-shrink-0">Serving</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-[13px] font-medium text-fg-2">
            {INDUSTRIES.map((industry) => (
              <li key={industry.label} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {industry.label}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
