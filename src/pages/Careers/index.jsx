import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CAREERS } from '../../constants';
import {
  BsXLg,
  BsBriefcaseFill,
  BsGeoAltFill,
  BsArrowRight,
  BsShieldCheck,
} from 'react-icons/bs';

export default function Careers() {
  useDocumentTitle(
    'Careers | DEVELTRIXSECURE TECHNOLOGIES LLP',
    'Join DEVELTRIXSECURE TECHNOLOGIES LLP — open positions in Cybersecurity, Cloud Architecture, and AI Engineering based in Noida, India.'
  );
  const [selectedJob, setSelectedJob] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Application submitted! Our HR team will contact you soon.', {
        style: { background: '#0D1117', color: '#F0F6FF', border: '1px solid rgba(0,87,255,0.3)', borderRadius: '12px' },
      });
      reset();
      setSelectedJob(null);
    } catch {
      toast.error('Failed to submit. Please try again.');
    }
  };

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
          Careers
          <span className="w-8 h-[1px] bg-neon-cyan block" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-text-primary font-display mb-4 relative z-10"
        >
          Join the Team Securing{' '}
          <span className="gradient-text">the Future</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl mx-auto font-light relative z-10"
        >
          Be part of an elite team building cutting-edge cybersecurity and AI solutions for enterprises worldwide — based in Noida, India.
        </motion.p>
      </section>

      {/* ── JOB LISTINGS ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-5">
          {CAREERS.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div
                className="group p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-400"
                style={{
                  background: 'rgba(10, 10, 20, 0.7)',
                  border: '1px solid rgba(26, 32, 53, 0.8)',
                  backdropFilter: 'blur(16px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.35)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 87, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-text-primary mb-3 font-display">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-muted mb-4">
                    <span className="flex items-center gap-1.5">
                      <BsBriefcaseFill className="text-neon-cyan w-3.5 h-3.5" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BsGeoAltFill className="text-neon-cyan w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: 'rgba(0, 87, 255, 0.1)',
                        border: '1px solid rgba(0, 87, 255, 0.3)',
                        color: '#1A75FF',
                      }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed font-light">{job.desc}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-dim">
                        <BsShieldCheck className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <button
                    id={`apply-${job.id}`}
                    onClick={() => setSelectedJob(job)}
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                    <BsArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General application note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm">
            Don't see your role?{' '}
            <a
              href="mailto:info@veltrixsecure.com"
              id="careers-general-apply"
              className="text-neon-cyan font-semibold hover:underline"
            >
              Email us your resume
            </a>
          </p>
        </motion.div>
      </section>

      {/* ── APPLICATION MODAL ───────────────────────────── */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(5, 8, 16, 0.95)', backdropFilter: 'blur(12px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedJob(null); }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-w-md w-full rounded-3xl p-8 overflow-y-auto max-h-[90vh]"
              style={{
                background: 'rgba(10, 10, 20, 0.98)',
                border: '1px solid rgba(0, 87, 255, 0.3)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 40px 100px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 87, 255, 0.1)',
              }}
            >
              {/* Top glow */}
              <div
                className="absolute top-0 inset-x-0 h-[1px] rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.6), rgba(0,229,255,0.4), transparent)' }}
              />

              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-xl text-text-muted hover:text-white transition-colors"
                style={{ background: 'rgba(26, 32, 53, 0.8)' }}
              >
                <BsXLg className="w-4 h-4" />
              </button>

              <div className="mb-7">
                <div className="text-xs font-bold uppercase tracking-widest text-neon-cyan mb-1">
                  Applying for
                </div>
                <h3 className="text-xl font-black text-text-primary font-display">{selectedJob.title}</h3>
                <div className="text-xs text-text-muted mt-1">{selectedJob.department} · {selectedJob.location}</div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apply-name" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="apply-name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-dim outline-none"
                    style={{ background: 'rgba(255,255,255,0.03)', border: errors.name ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26,32,53,0.8)' }}
                    placeholder="John Doe"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,87,255,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.name ? 'rgba(255,80,80,0.5)' : 'rgba(26,32,53,0.8)'; }}
                  />
                  {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apply-email" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-dim outline-none"
                    style={{ background: 'rgba(255,255,255,0.03)', border: errors.email ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26,32,53,0.8)' }}
                    placeholder="john@example.com"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,87,255,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.email ? 'rgba(255,80,80,0.5)' : 'rgba(26,32,53,0.8)'; }}
                  />
                  {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apply-linkedin" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    LinkedIn Profile URL
                  </label>
                  <input
                    id="apply-linkedin"
                    {...register('linkedin')}
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-dim outline-none"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,32,53,0.8)' }}
                    placeholder="https://linkedin.com/in/..."
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,87,255,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(26,32,53,0.8)'; }}
                  />
                </div>

                {/* Cover Note */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apply-note" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    Cover Note
                  </label>
                  <textarea
                    id="apply-note"
                    {...register('note')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-dim outline-none resize-none"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,32,53,0.8)' }}
                    placeholder="Tell us why you're a great fit..."
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,87,255,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(26,32,53,0.8)'; }}
                  />
                </div>

                {/* Submit */}
                <button
                  id="apply-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary py-4 text-base rounded-2xl mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <BsArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
