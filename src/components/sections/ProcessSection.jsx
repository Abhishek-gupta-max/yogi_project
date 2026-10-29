import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../constants';

export default function ProcessSection() {
  return (
    <section id="process" className="section-alt py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight font-display"
          >
            A Clear Path From <span className="gradient-text">Idea to Support</span>
          </motion.h2>
        </div>

        {/* Steps as cards: icon + large faded step number */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.step}
                data-card
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="glass-card group rounded-3xl p-7 relative overflow-hidden"
              >
                {/* Accent bar appears on hover/tap */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-7 right-7 h-[3px] rounded-b-full bg-gradient-to-r from-brand-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="flex items-center justify-between mb-6">
                  <div className="icon-tile w-12 h-12 rounded-xl">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-display font-extrabold text-5xl leading-none text-line-strong/70 group-hover:text-accent/30 transition-colors duration-300"
                  >
                    {step.step}
                  </span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-fg-dim mb-1.5">Step {step.step}</p>
                <h3 className="text-lg font-bold text-fg mb-2.5 font-display transition-colors group-hover:text-accent">{step.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
