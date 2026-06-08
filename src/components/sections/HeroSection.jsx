import { motion } from 'framer-motion';
import { BsArrowRight, BsShieldCheck, BsLightning, BsGlobe2 } from 'react-icons/bs';
import Button from '../ui/Button';
import Container from '../layout/Container';

export default function HeroSection() {
  const trustBadges = [
    { icon: BsShieldCheck, text: 'ISO 27001 Certified' },
    { icon: BsLightning, text: '24/7 SOC Operations' },
    { icon: BsGlobe2, text: 'Zero-Trust Security' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Premium Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
            </span>
            Next-Gen Security Operations
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 text-balance"
          >
            Cybersecurity that <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-accent-primary to-indigo-400 bg-clip-text text-transparent">
              scales with you.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed font-normal text-balance max-w-2xl mx-auto"
          >
            Enterprise-grade protection. Zero complexity. From threat defense to cloud infrastructure — one partner, complete coverage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                Book a Free Assessment
                <BsArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t border-border-primary/60 pt-8 max-w-xl mx-auto"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
                <badge.icon className="w-4 h-4 text-accent-primary" />
                <span className="text-xs font-medium tracking-wide uppercase">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
