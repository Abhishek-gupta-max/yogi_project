import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section
      id="about"
      className="py-16 relative overflow-hidden"
      style={{ background: '#0A1A2E' }}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-10 md:p-16 rounded-3xl bg-cyber-card border border-cyber-border overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0E2138, #0A1A2E)',
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[80px] pointer-events-none" />

          <div className="section-label mb-6">
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Our Vision
          </div>

          <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed text-text-primary">
            &ldquo;To be the most trusted cybersecurity and IT partner delivering secure, intelligent, and cost-effective technology solutions that give businesses the{' '}
            <span className="text-neon-cyan">confidence to grow without boundaries.</span>&rdquo;
          </p>
        </motion.div>
      </div>
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
