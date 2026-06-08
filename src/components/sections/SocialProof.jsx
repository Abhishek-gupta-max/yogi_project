import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TRUSTED_BY, STATS } from '../../constants';
import Container from '../layout/Container';

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  useEffect(() => {
    if (!isInView) return;
    const end = parseFloat(value);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const duration = 1500; // 1.5s
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentCount = end * (progress * (2 - progress));
      
      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value, isInView]);

  const formatCount = (num) => {
    if (typeof num === 'string') return num;
    if (num % 1 !== 0) {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return <span ref={ref}>{formatCount(count)}{suffix}</span>;
}

export default function SocialProof() {
  // Double the list to make seamless marquee scrolling
  const marqueeItems = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="py-20 border-y border-border-primary/50 bg-bg-secondary/20 relative overflow-hidden">
      <Container>
        {/* Trusted By Marquee */}
        <div className="mb-16">
          <p className="text-center text-overline text-text-tertiary mb-8">
            Trusted by teams who take security seriously
          </p>
          
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max gap-16 py-2 marquee-track">
              {marqueeItems.map((company, index) => (
                <div 
                  key={index} 
                  className="text-text-secondary text-lg md:text-xl font-bold tracking-tight opacity-50 hover:opacity-100 transition-opacity select-none cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-border-primary/40 bg-bg-secondary/40 hover:border-accent-primary/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-bg-tertiary text-accent-primary mb-4 border border-border-primary group-hover:border-accent-primary/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-2">
                  <Counter value={stat.count} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
