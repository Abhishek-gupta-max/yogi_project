import { motion } from 'framer-motion';
import { FAQS } from '../../constants';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Accordion from '../ui/Accordion';
import Badge from '../ui/Badge';

export default function FAQSection() {
  return (
    <Section id="faq" background="primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Badge variant="primary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Questions?<br />{"We've got answers."}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Find answers to common questions about our cybersecurity frameworks, location, response SLAs, compliance structures, and deployment speeds.
            </p>
            <p className="text-sm text-text-tertiary">
              {"Can't find what you're looking for? Feel free to "}
              <a href="#contact" className="text-accent-primary hover:underline font-medium">
                contact our support team
              </a>
              .
            </p>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Accordion items={FAQS} />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
