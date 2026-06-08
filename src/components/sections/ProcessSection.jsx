import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../constants';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Badge from '../ui/Badge';

export default function ProcessSection() {
  return (
    <Section id="process" background="secondary">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="primary" className="mb-4">How We Work</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            A proven path to security.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We employ an agile, compliance-aligned methodology to seamlessly integrate protections into your existing tech stack without disrupting flow.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-8 right-8 h-[1px] bg-border-primary/60 z-0 border-t border-dashed border-border-primary" />

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col group"
              >
                {/* Number & Icon Container */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  {/* Step Number Badge */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-bg-tertiary border border-border-primary text-text-primary font-bold text-lg shadow-premium group-hover:border-accent-primary/40 group-hover:bg-bg-hover transition-all duration-300">
                    <span className="text-accent-primary mr-1 text-sm font-semibold">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-bg-secondary text-text-tertiary border border-border-primary/40 group-hover:text-text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
