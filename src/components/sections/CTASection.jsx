import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { BsArrowRight } from 'react-icons/bs';

export default function CTASection() {
  return (
    <Section id="cta" background="secondary" className="border-t border-border-primary/50">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-accent-primary to-indigo-600 px-8 py-16 md:p-20 shadow-premium text-center">
          {/* Spotlight Effect overlay */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Start your free security assessment.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-lg mb-10 leading-relaxed max-w-lg mx-auto"
            >
              Identify vulnerabilities, assess cloud configuration hygiene, and get a tailored roadmap to enterprise-grade security.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-accent-primary border-white hover:bg-white/95 hover:border-white/95 hover:scale-[1.02] shadow-lg font-semibold group"
                >
                  Book Assessment Now
                  <BsArrowRight className="w-4 h-4 text-accent-primary transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
