import { motion } from 'framer-motion';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

const TESTIMONIALS = [
  {
    quote: "Implementing VeltrixSecure's Zero-Trust architecture completely reshaped our security posture. Their 15-minute incident response SLA was tested and proven during an active threat containment.",
    author: "Arthur Pendelton",
    role: "Chief Technology Officer",
    company: "VertexFintech Group",
    rating: 5,
  },
  {
    quote: "The vulnerability scanner integration and detailed penetration testing logs gave us clear actionable targets. We successfully patched critical network vulnerabilities before our SOC 2 audit.",
    author: "Elena Rostova",
    role: "VP of Infrastructure",
    company: "cloudScale Inc.",
    rating: 5,
  },
  {
    quote: "VeltrixSecure behaves as a natural extension of our local SOC team. Their proactive compliance mapping simplified our HIPAA auditing pathways and saved us months of manual effort.",
    author: "David Vance",
    role: "Director of Security Systems",
    company: "HealthCore Systems",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-page py-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-accent block" />
            Client Reviews
            <span className="w-8 h-[1px] bg-accent block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display"
          >
            Trusted by <span className="gradient-text">Forward-Thinking</span> Enterprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg-2 text-base leading-relaxed font-light"
          >
            Read how VeltrixSecure safeguards workflows, cloud configurations, and client nodes for businesses worldwide.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              {/* Testimonial Card */}
              <div
                className="glass-card-premium rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote Icon overlay */}
                <div className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors pointer-events-none">
                  <BiSolidQuoteRight className="w-16 h-16" />
                </div>

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-warning w-4 h-4" />
                    ))}
                  </div>

                  {/* Body Quote */}
                  <p className="text-fg-2 text-sm md:text-base leading-relaxed font-light italic mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-5 border-t border-line">
                  {/* Decorative Initials Avatar */}
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-xs uppercase flex-shrink-0">
                    {t.author.charAt(0)}{t.author.split(' ')[1]?.charAt(0) || ''}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-fg group-hover:text-accent transition-colors">
                      {t.author}
                    </div>
                    <div className="text-xs text-fg-muted font-light">
                      {t.role}, <span className="text-accent font-normal">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
