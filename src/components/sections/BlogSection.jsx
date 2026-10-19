import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const BLOG_POSTS = [
  {
    category: 'Security Strategy',
    title: 'Adopting Zero-Trust: A Modern Blueprint for Remote Networks',
    desc: 'Unpack the core pillars of Identity Validation, Device Verification, and Least-Privilege access routing to isolate and mitigate corporate breaches.',
    date: 'June 10, 2026',
    readTime: '6 min read',
    cover: '/blog_zero_trust.png',
  },
  {
    category: 'Threat Intelligence',
    title: 'Defeating Ransomware: Proactive Mitigation Protocols',
    desc: 'Learn about automated immutable backup schedules, endpoint behavioral alerts, and micro-segmentation tactics to keep systems immune from lateral threat migration.',
    date: 'May 28, 2026',
    readTime: '8 min read',
    cover: '/blog_ransomware.png',
  },
  {
    category: 'Cloud Compliance',
    title: 'Navigating SOC 2 & HIPAA Requirements in Hybrid Environments',
    desc: 'A checklist mapping out AWS and Azure posturing setups, encryption defaults, access log auditing, and continuous vulnerability reporting pathways.',
    date: 'May 15, 2026',
    readTime: '10 min read',
    cover: '/blog_compliance.png',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-alt py-16 relative overflow-hidden">

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
            Threat Insights
            <span className="w-8 h-[1px] bg-accent block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display"
          >
            Latest <span className="gradient-text">Cybersecurity</span> Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg-2 text-base leading-relaxed font-light"
          >
            Stay ahead of threat actors with expert analysis, technical deep-dives, and strategic guides written by our certified SOC commanders.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, idx) => {
            return (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <div
                  className="glass-card-premium rounded-3xl overflow-hidden flex flex-col justify-between h-full relative group transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative overflow-hidden h-48 border-b border-line">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Content Area */}
                    <div className="p-6.5" style={{ padding: '24px 28px' }}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-xs text-fg-muted font-light">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-fg mb-3 leading-snug font-display group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-fg-2 text-sm leading-relaxed font-light mb-6">
                        {post.desc}
                      </p>
                    </div>
                  </div>

                  {/* Read More link */}
                  <div className="mx-7 mb-7 pt-4 border-t border-line flex items-center justify-between text-xs font-semibold text-accent-soft group-hover:text-accent transition-colors uppercase tracking-wider">
                    <span>Read Article</span>
                    <div className="flex items-center gap-1">
                      <span className="text-fg-muted text-[10px] font-normal lowercase pr-1">
                        {post.readTime}
                      </span>
                      <BsArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
