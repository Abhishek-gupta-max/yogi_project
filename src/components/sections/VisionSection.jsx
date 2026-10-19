import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section
      id="about"
      className="section-alt py-16 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="theme-dark relative p-10 md:p-16 rounded-3xl border border-line overflow-hidden shadow-float"
          style={{
            background: 'linear-gradient(135deg, rgb(var(--surface)), rgb(var(--bg)))',
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <div className="section-label mb-6">
            <span className="w-8 h-[1px] bg-accent block" />
            Our Vision
          </div>

          <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed text-fg">
            &ldquo;To be the most trusted cybersecurity and IT partner delivering secure, intelligent, and cost-effective technology solutions that give businesses the{' '}
            <span className="text-accent">confidence to grow without boundaries.</span>&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
