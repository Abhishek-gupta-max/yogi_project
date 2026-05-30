import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../../constants';

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-32 relative overflow-hidden"
      style={{ background: '#0A0A14' }}
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Right glow */}
      <div
        className="absolute -right-40 top-1/3 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              <span className="w-8 h-[1px] bg-neon-cyan block" />
              Why Choose Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-text-primary font-display leading-tight mb-6"
            >
              Built for{' '}
              <span className="gradient-text">Enterprise-Grade</span>{' '}
              Security & Scale
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg leading-relaxed mb-8 font-light"
            >
              DEVELTRIXSECURE combines cybersecurity expertise, engineering excellence, and a relentless commitment to protecting your digital infrastructure — at any scale.
            </motion.p>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(0, 87, 255, 0.05)',
                borderLeft: '3px solid #0050FF',
                border: '1px solid rgba(0, 87, 255, 0.15)',
                borderLeftWidth: '3px',
              }}
            >
              <p className="text-text-secondary text-base font-medium italic leading-relaxed">
                "Security is not a product — it's a process. We engineer every layer of your infrastructure with protection as the foundation."
              </p>
              <div className="mt-3 text-neon-cyan text-xs font-bold uppercase tracking-widest">
                — DEVELTRIXSECURE Principle
              </div>
            </motion.div>
          </div>

          {/* Right: Feature cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className={idx === 4 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto w-full' : ''}
                  >
                    <div
                      className="group p-6 rounded-2xl h-full transition-all duration-400 cursor-default"
                      style={{
                        background: 'rgba(13, 17, 23, 0.7)',
                        border: '1px solid rgba(26, 32, 53, 0.8)',
                        backdropFilter: 'blur(12px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = item.borderColor;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 16px 40px ${item.borderColor.replace('0.4', '0.15')}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${item.color.replace('from-', '').replace('/20', '').replace('/5', '')})`,
                          border: `1px solid ${item.borderColor}`,
                        }}
                      >
                        <Icon className="w-5 h-5 text-text-primary" />
                      </div>

                      <h3 className="text-base font-bold text-text-primary mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
