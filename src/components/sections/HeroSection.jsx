import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsShieldCheck, BsGlobe2, BsLightning } from 'react-icons/bs';
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
            ctx.strokeStyle = `rgba(0, 87, 255, ${alpha})`;
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
        ctx.fillStyle = `rgba(0, 229, 255, ${node.alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 87, 255, ${node.alpha * 0.2})`;
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

// ── Animated Shield SVG ───────────────────────────────────────────────────
function AnimatedShield() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <svg width="320" height="360" viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hero-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0050FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1A75FF" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0050FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0050FF" stopOpacity="0" />
          </radialGradient>
          <filter id="shield-shadow">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Glow behind shield */}
        <ellipse cx="160" cy="180" rx="130" ry="140" fill="url(#hero-glow)" />

        {/* Main shield */}
        <path
          d="M160 20L40 70v100c0 82.84 67.16 150 120 160 52.84-10 120-77.16 120-160V70L160 20z"
          fill="url(#hero-shield-grad)"
          fillOpacity="0.12"
          stroke="url(#hero-shield-grad)"
          strokeWidth="2"
        />

        {/* Inner shield detail */}
        <path
          d="M160 45L60 87v83c0 66.27 53.73 120 100 128 46.27-8 100-61.73 100-128V87L160 45z"
          fill="none"
          stroke="rgba(0, 87, 255, 0.3)"
          strokeWidth="1"
        />

        {/* Circuit grid lines */}
        <line x1="90" y1="130" x2="140" y2="130" stroke="#1A75FF" strokeWidth="1.5" opacity="0.7" />
        <line x1="140" y1="130" x2="140" y2="160" stroke="#1A75FF" strokeWidth="1.5" opacity="0.7" />
        <line x1="140" y1="160" x2="230" y2="160" stroke="#1A75FF" strokeWidth="1.5" opacity="0.7" />
        <line x1="180" y1="130" x2="230" y2="130" stroke="#0050FF" strokeWidth="1.5" opacity="0.7" />
        <line x1="180" y1="130" x2="180" y2="145" stroke="#0050FF" strokeWidth="1.5" opacity="0.7" />
        <line x1="90" y1="190" x2="140" y2="190" stroke="#7B61FF" strokeWidth="1.5" opacity="0.6" />
        <line x1="140" y1="190" x2="140" y2="220" stroke="#7B61FF" strokeWidth="1.5" opacity="0.6" />
        <line x1="140" y1="220" x2="200" y2="220" stroke="#7B61FF" strokeWidth="1.5" opacity="0.6" />

        {/* Circuit nodes */}
        {[
          [90, 130, '#1A75FF'], [140, 130, '#1A75FF'], [140, 160, '#1A75FF'],
          [230, 160, '#1A75FF'], [180, 130, '#0050FF'], [230, 130, '#0050FF'],
          [180, 145, '#0050FF'], [90, 190, '#7B61FF'], [140, 220, '#7B61FF'],
          [200, 220, '#7B61FF'],
        ].map(([cx, cy, color], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={4}
            fill={color}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Center emblem */}
        <motion.circle
          cx="160" cy="175" r="24"
          fill="url(#hero-shield-grad)"
          fillOpacity="0.25"
          stroke="url(#hero-shield-grad)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <path
          d="M155 165l-8 5v8c0 4.418 3.582 8 8 10 4.418-2 8-5.582 8-10v-8l-8-5z"
          fill="url(#hero-shield-grad)"
          transform="translate(5, 5)"
        />
      </svg>

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0 m-auto rounded-full"
        style={{
          width: '220px',
          height: '220px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(0, 87, 255, 0.2)',
          boxShadow: '0 0 30px rgba(0, 87, 255, 0.15)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
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
    { icon: BsShieldCheck, text: 'ISO 27001 Certified' },
    { icon: BsLightning, text: '24/7 SOC Operations' },
    { icon: BsGlobe2, text: 'Zero-Trust Architecture' },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #050810 0%, #0A0A14 60%, #06060F 100%)',
        paddingTop: '96px',
      }}
    >
      {/* ── Animated Background Canvas ── */}
      <CyberCanvas />

      {/* ── Static grid overlay ── */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,87,255,0.08) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-64"
        style={{
          background: 'linear-gradient(to top, #0A0A14, transparent)',
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
          background: 'radial-gradient(circle, rgba(0,87,255,0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: mousePos.x * 20,
          y: mousePos.y * 15,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 w-full">
        {/* Industries ticker */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10"
          style={{
            background: 'rgba(0, 87, 255, 0.06)',
            border: '1px solid rgba(0, 87, 255, 0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan" />
          </div>
          <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase">
            <span className="text-neon-cyan mr-2">Serving:</span>
            {INDUSTRIES.map(i => i.label).join(' · ')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-8 font-display"
            >
              Secure Digital{' '}
              <span className="block relative">
                <span
                  style={{
                    background: 'linear-gradient(135deg, #0050FF 0%, #00B4FF 50%, #1A75FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Infrastructure
                </span>
              </span>
              <span className="text-text-primary">for the Modern</span>{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #F0F6FF, #1A75FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light"
            >
              <strong className="text-text-secondary font-semibold">VeltrixSecure Technologies LLP</strong>{' '}
              delivers intelligent cybersecurity, scalable technology solutions, and digital transformation
              services for modern businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/contact" id="hero-get-started-btn">
                <button
                  className="btn-primary text-base px-8 py-4 rounded-2xl"
                >
                  Get Started
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/services" id="hero-explore-services-btn">
                <button className="btn-outline text-base px-8 py-4 rounded-2xl">
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Hero Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-cyber-border/40 mb-10 max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-text-primary">10+</div>
                <div className="text-[10px] text-text-muted mt-1 leading-snug tracking-wider uppercase font-bold">Years of Expertise</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-text-primary">24×7</div>
                <div className="text-[10px] text-text-muted mt-1 leading-snug tracking-wider uppercase font-bold">Monitoring & Support</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-text-primary">100%</div>
                <div className="text-[10px] text-text-muted mt-1 leading-snug tracking-wider uppercase font-bold">Security-First</div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-text-muted">
                  <Icon className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Shield */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
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
                <AnimatedShield />
              </motion.div>
            </div>

            {/* Floating stat card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring', bounce: 0.4 }}
              className="absolute -bottom-4 -left-8 rounded-2xl p-4 flex items-center gap-3 z-20"
              style={{
                background: 'rgba(10, 10, 20, 0.9)',
                border: '1px solid rgba(0, 87, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 87, 255, 0.2)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(0,87,255,0.3), rgba(0,87,255,0.1))', border: '1px solid rgba(0,87,255,0.4)' }}
              >
                <span className="text-white text-sm font-black">99.9%</span>
              </div>
              <div>
                <div className="text-white text-sm font-bold">Uptime SLA</div>
                <div className="text-neon-cyan text-xs uppercase tracking-wider">Guaranteed</div>
              </div>
            </motion.div>

            {/* Floating stat card — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, type: 'spring', bounce: 0.4 }}
              className="absolute -top-2 -right-4 rounded-2xl p-4 flex items-center gap-3 z-20"
              style={{
                background: 'rgba(10, 10, 20, 0.9)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,229,255,0.05))', border: '1px solid rgba(0,229,255,0.3)' }}
              >
                <span className="text-neon-cyan text-sm font-black">500+</span>
              </div>
              <div>
                <div className="text-white text-sm font-bold">Clients Secured</div>
                <div className="text-text-muted text-xs uppercase tracking-wider">Worldwide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade out */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A14, transparent)' }}
      />
    </section>
  );
}
