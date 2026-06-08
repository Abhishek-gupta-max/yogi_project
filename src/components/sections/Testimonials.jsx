import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function Testimonials() {
  return (
    <Section id="testimonials" background="secondary">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="primary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Hear from our clients.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We are trusted partners to CISOs, CTOs, and tech leaders around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className="flex flex-col justify-between h-full p-8 transition-all duration-300">
                  {/* Quote */}
                  <blockquote className="text-base text-text-secondary leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border-primary/40 mt-auto">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover grayscale border border-border-primary"
                    />
                    <div>
                      <cite className="not-italic text-sm font-semibold text-text-primary block">
                        {t.author}
                      </cite>
                      <span className="text-xs text-text-tertiary">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
