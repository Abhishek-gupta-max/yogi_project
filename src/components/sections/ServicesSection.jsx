import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function ServicesSection() {
  // Define custom col-span classes for bento layout
  const colSpans = [
    'md:col-span-4', // Card 1 (Cybersecurity)
    'md:col-span-2', // Card 2 (Managed Services)
    'md:col-span-2', // Card 3 (Cloud Solutions)
    'md:col-span-4', // Card 4 (Backup & Recovery)
    'md:col-span-3', // Card 5 (IT Consulting)
    'md:col-span-3', // Card 6 (Operations Management)
  ];

  return (
    <Section id="services" background="primary">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="primary" className="mb-4">What We Do</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Everything you need to stay secure.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            One partner. Complete coverage. From defense and compliance to resilient cloud engineering — we protect and scale your modern operations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isLarge = colSpans[index].includes('col-span-4') || colSpans[index].includes('col-span-3');

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={colSpans[index]}
              >
                <Card className="flex flex-col justify-between h-full p-8 transition-all duration-300">
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet points on large cards for details */}
                  {isLarge && service.features && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-primary/40 mt-auto">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-md bg-bg-secondary border border-border-primary/60 text-xs text-text-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
