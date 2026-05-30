import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../constants';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06060F 0%, #0A0A14 100%)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,87,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Our Process
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display mb-5"
          >
            How We{' '}
            <span className="gradient-text">Deliver Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto font-light"
          >
            A battle-tested 6-step delivery process that ensures your project is on time, on budget, and secured from day one.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(1/12*100%)] right-[calc(1/12*100%)] h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.3) 10%, rgba(0,229,255,0.3) 50%, rgba(0,87,255,0.3) 90%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="process-step"
                >
                  {/* Step number bubble */}
                  <div className="relative mb-6">
                    <div
                      className="process-step-number mx-auto"
                      style={{
                        boxShadow: isEven
                          ? '0 0 20px rgba(0, 229, 255, 0.2)'
                          : '0 0 20px rgba(0, 87, 255, 0.2)',
                        borderColor: isEven ? 'rgba(0, 229, 255, 0.4)' : 'rgba(0, 87, 255, 0.4)',
                        background: isEven
                          ? 'rgba(0, 229, 255, 0.06)'
                          : 'rgba(0, 87, 255, 0.08)',
                        color: isEven ? '#1A75FF' : '#1A75FF',
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: isEven ? '#1A75FF' : '#0050FF' }} />
                    </div>

                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                      style={{
                        background: isEven
                          ? 'linear-gradient(135deg, #1A75FF, #0050FF)'
                          : 'linear-gradient(135deg, #0050FF, #1A75FF)',
                        color: '#050810',
                      }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-text-primary mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-sm text-text-muted"
            style={{
              background: 'rgba(0, 87, 255, 0.06)',
              border: '1px solid rgba(0, 87, 255, 0.15)',
            }}
          >
            <span>Typical project timeline:</span>
            <span className="font-bold text-neon-cyan">2–12 weeks</span>
            <span>from discovery to deployment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
