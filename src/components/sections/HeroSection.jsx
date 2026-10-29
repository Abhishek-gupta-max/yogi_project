import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
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

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full opacity-40" />;
}

// Strengths already stated elsewhere on the site (no new claims)
const TRUST_POINTS = ['10+ Years of Expertise', '24×7 Monitoring & Support', 'Security-First Approach', 'Reliable Support'];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function HeroSection() {
  return (
    <section id="home" className="theme-dark relative overflow-hidden flex flex-col lg:min-h-screen bg-page">
      {/* ── Background image: engineer at a monitoring workspace ── */}
      <img
        src="/hero-workspace.webp"
        alt=""
        aria-hidden="true"
        width="1024"
        height="1024"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-[center_35%] select-none pointer-events-none"
      />
      {/* Navy overlay: solid behind the text, lifting toward the image on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--bg) / 0.97) 0%, rgb(var(--bg) / 0.9) 45%, rgb(var(--bg-alt) / 0.55) 100%), linear-gradient(0deg, rgb(var(--bg)) 0%, transparent 35%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 lg:hidden bg-page/50" />

      {/* ── Subtle network animation ── */}
      <CyberCanvas />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-36 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-bold uppercase tracking-widest text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cybersecurity &amp; IT Solutions
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.5rem] sm:text-5xl xl:text-[3.75rem] leading-[1.08] font-extrabold tracking-tight mb-6 font-display text-balance"
            >
              Build Your <span className="gradient-text">Digital Future</span> with VeltrixSecure
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-fg-2 text-base md:text-lg leading-relaxed mb-9 max-w-xl">
              <strong className="text-fg font-semibold">VeltrixSecure Technologies</strong> delivers
              cybersecurity, web and application development, technical support and MySQL support to help
              your business grow securely in the digital world.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#services" id="hero-explore-services-btn" className="btn-primary text-base px-8 py-4">
                Explore Our Services
                <BsArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" id="hero-get-started-btn" className="btn-outline text-base px-8 py-4">
                Contact Us
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.ul
              {...fadeUp(0.4)}
              className="grid grid-cols-1 min-[430px]:grid-cols-2 gap-x-8 gap-y-3 pt-8 border-t border-line max-w-xl"
            >
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-fg-2">
                  <BsCheckCircleFill className="w-4 h-4 text-accent flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
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
