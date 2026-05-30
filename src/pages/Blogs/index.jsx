import { useState } from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { BLOGS } from '../../constants';
import { BsSearch, BsArrowRight, BsClock } from 'react-icons/bs';

const CATEGORY_COLORS = {
  'Cybersecurity':          { bg: 'rgba(0, 87, 255, 0.15)', text: '#3A7BFF', border: 'rgba(0, 87, 255, 0.3)' },
  'AI Integration':         { bg: 'rgba(0, 229, 255, 0.1)', text: '#1A75FF', border: 'rgba(0, 229, 255, 0.3)' },
  'Cloud Infrastructure':   { bg: 'rgba(123, 97, 255, 0.12)', text: '#7B61FF', border: 'rgba(123, 97, 255, 0.3)' },
};

export default function Blogs() {
  useDocumentTitle(
    'Security Intelligence Blog | DEVELTRIXSECURE TECHNOLOGIES LLP',
    'Expert cybersecurity insights, AI threat detection deep-dives, and cloud security best practices from DEVELTRIXSECURE engineers.'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(BLOGS.map((b) => b.category))];

  const filteredBlogs = BLOGS.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: '#0A0A14' }}>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 text-center px-6"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-64"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,87,255,0.1) 0%, transparent 100%)' }}
        />
        <div className="section-label justify-center mb-4 relative z-10">
          <span className="w-8 h-[1px] bg-neon-cyan block" />
          Security Intelligence
          <span className="w-8 h-[1px] bg-neon-cyan block" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-text-primary font-display mb-4 relative z-10"
        >
          Expert{' '}
          <span className="gradient-text">Insights & Resources</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl mx-auto font-light relative z-10"
        >
          Deep-dive cybersecurity analysis, AI/ML engineering articles, and cloud security best practices from our senior engineers.
        </motion.p>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`blog-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300"
              style={{
                background: activeCategory === cat ? 'rgba(0, 87, 255, 0.2)' : 'rgba(10, 10, 20, 0.6)',
                border: activeCategory === cat ? '1px solid rgba(0, 87, 255, 0.5)' : '1px solid rgba(26, 32, 53, 0.8)',
                color: activeCategory === cat ? '#F0F6FF' : '#8899B8',
                boxShadow: activeCategory === cat ? '0 0 16px rgba(0, 87, 255, 0.2)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <BsSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-dim w-4 h-4" />
          <input
            id="blog-search"
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder-text-dim outline-none transition-all duration-300 rounded-xl"
            style={{
              background: 'rgba(10, 10, 20, 0.8)',
              border: '1px solid rgba(26, 32, 53, 0.8)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)';
              e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(26, 32, 53, 0.8)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </section>

      {/* ── BLOG GRID ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredBlogs.map((blog, idx) => {
              const catColor = CATEGORY_COLORS[blog.category] || CATEGORY_COLORS['Cybersecurity'];
              return (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className="group overflow-hidden rounded-3xl flex flex-col h-full transition-all duration-400"
                    style={{
                      background: 'rgba(10, 10, 20, 0.7)',
                      border: '1px solid rgba(26, 32, 53, 0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 87, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-52 flex-shrink-0">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            background: catColor.bg,
                            color: catColor.text,
                            border: `1px solid ${catColor.border}`,
                            backdropFilter: 'blur(8px)',
                          }}
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col gap-3 flex-grow">
                      <div className="flex items-center gap-3 text-xs text-text-dim">
                        <span>{blog.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <BsClock className="w-3 h-3" />
                          {blog.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary leading-snug font-display group-hover:text-white transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed flex-grow font-light">
                        {blog.excerpt}
                      </p>
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-neon-cyan group-hover:gap-3 transition-all duration-200 mt-2"
                      >
                        Read Article <BsArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-text-dim text-4xl mb-4">🔍</div>
            <p className="text-text-muted text-base">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-4 btn-outline text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
