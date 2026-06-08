import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../../constants';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function CaseStudies() {
  // Show first 3 for premium density.
  const featuredCases = CASE_STUDIES.slice(0, 3);

  return (
    <Section id="case-studies" background="primary">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="primary" className="mb-4">Case Studies</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Real results, not promises.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            See how we help organizations achieve military-grade security while driving cloud and operational efficiencies.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCases.map((cs, idx) => {
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className="flex flex-col justify-between h-full p-8 transition-all duration-300">
                  <div>
                    {/* Tag / Category */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-semibold text-accent-primary tracking-wider uppercase">
                        {cs.tag}
                      </span>
                      <span className="text-xs text-text-tertiary font-medium">
                        {cs.company}
                      </span>
                    </div>

                    {/* Metric Headline */}
                    <div className="mb-6">
                      <div className="text-5xl font-extrabold tracking-tight text-text-primary mb-1">
                        {cs.metric}
                      </div>
                      <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider">
                        {cs.metricLabel}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug">
                      {cs.title}
                    </h3>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed pt-6 border-t border-border-primary/40 mt-6">
                    {cs.summary}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
