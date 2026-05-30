import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  BsGeoAltFill,
  BsEnvelopeFill,
  BsTelephoneFill,
  BsClock,
  BsArrowRight,
  BsShieldCheck,
} from 'react-icons/bs';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CONTACT_INFO, OFFICE_LOCATIONS } from '../../constants';

const SERVICES_LIST = [
  'Cybersecurity Solutions',
  'Network Security',
  'Cloud Infrastructure',
  'IT Consulting',
  'Web & App Development',
  'Automation Systems',
  'AI Integration',
  'Digital Transformation',
  'Other',
];

export default function Contact() {
  useDocumentTitle(
    'Contact Us | DEVELTRIXSECURE TECHNOLOGIES LLP',
    'Reach out to DEVELTRIXSECURE TECHNOLOGIES LLP in Noida, India. info@veltrixsecure.com — enterprise cybersecurity & IT solutions.'
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1200));
    console.log('Form submitted:', data);
    toast.success('Message sent! We\'ll get back to you within 24 hours.', {
      style: { background: '#0D1117', color: '#F0F6FF', border: '1px solid rgba(0,87,255,0.3)' },
    });
    reset();
  };

  const contactDetails = [
    {
      icon: BsGeoAltFill,
      label: 'Headquarters',
      value: CONTACT_INFO.address,
      color: '#0050FF',
      bg: 'rgba(0, 87, 255, 0.1)',
      border: 'rgba(0, 87, 255, 0.3)',
    },
    {
      icon: BsEnvelopeFill,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      color: '#1A75FF',
      bg: 'rgba(0, 229, 255, 0.08)',
      border: 'rgba(0, 229, 255, 0.25)',
    },
    {
      icon: BsTelephoneFill,
      label: 'Phone',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      color: '#7B61FF',
      bg: 'rgba(123, 97, 255, 0.1)',
      border: 'rgba(123, 97, 255, 0.3)',
    },
    {
      icon: BsClock,
      label: 'Support Hours',
      value: '24/7/365 SOC · Mon–Sat 9AM–7PM IST',
      color: '#00FFB3',
      bg: 'rgba(0, 255, 179, 0.08)',
      border: 'rgba(0, 255, 179, 0.25)',
    },
  ];

  return (
    <div style={{ background: '#0A0A14' }}>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-64"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,87,255,0.1) 0%, transparent 100%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Contact Us
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-text-primary font-display mb-6"
          >
            Let's Build Something{' '}
            <span className="gradient-text">Secure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto"
          >
            Ready to secure your digital infrastructure? Reach out to our team of cybersecurity and IT experts today.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Info + Map */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Contact detail cards */}
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                const content = (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      background: 'rgba(10, 10, 20, 0.7)',
                      border: '1px solid rgba(26, 32, 53, 0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = detail.border;
                      e.currentTarget.style.boxShadow = `0 8px 24px ${detail.bg}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: detail.bg, border: `1px solid ${detail.border}` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: detail.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-text-dim uppercase tracking-wider mb-1 font-bold">{detail.label}</div>
                      <div className="text-sm text-text-secondary leading-relaxed">{detail.value}</div>
                    </div>
                  </motion.div>
                );

                return detail.href ? (
                  <a href={detail.href} key={idx} className="block group">{content}</a>
                ) : (
                  <div key={idx}>{content}</div>
                );
              })}

              {/* Google Maps embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="rounded-3xl overflow-hidden flex-1"
                style={{
                  border: '1px solid rgba(0, 87, 255, 0.2)',
                  minHeight: '250px',
                }}
              >
                <iframe
                  src={OFFICE_LOCATIONS[0].mapUrl}
                  width="100%"
                  height="280"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DEVELTRIXSECURE Office Location — Noida, Sector 12"
                  className="w-full"
                />
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="relative rounded-4xl p-8 md:p-12"
                style={{
                  background: 'rgba(10, 10, 20, 0.8)',
                  border: '1px solid rgba(0, 87, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 60px rgba(0, 87, 255, 0.06)',
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 inset-x-0 h-[1px] rounded-t-4xl"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.6), rgba(0,229,255,0.4), transparent)' }}
                />

                <div className="mb-8">
                  <h2 className="text-2xl font-black text-text-primary font-display mb-2">Send Us a Message</h2>
                  <p className="text-text-muted text-sm font-light">We respond within 24 hours on business days.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-transparent placeholder-text-dim outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: errors.name ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26, 32, 53, 0.8)',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = errors.name ? 'rgba(255,80,80,0.5)' : 'rgba(26, 32, 53, 0.8)'; e.target.style.boxShadow = 'none'; }}
                      />
                      {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                        })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-transparent placeholder-text-dim outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: errors.email ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26, 32, 53, 0.8)',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = errors.email ? 'rgba(255,80,80,0.5)' : 'rgba(26, 32, 53, 0.8)'; e.target.style.boxShadow = 'none'; }}
                      />
                      {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      {...register('company')}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-transparent placeholder-text-dim outline-none transition-all duration-300"
                      style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(26, 32, 53, 0.8)' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(26, 32, 53, 0.8)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  {/* Service of interest */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-service" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Service of Interest *
                    </label>
                    <select
                      id="contact-service"
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
                      style={{
                        background: 'rgba(10, 10, 20, 0.95)',
                        border: errors.service ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26, 32, 53, 0.8)',
                        color: '#C8D6F0',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = errors.service ? 'rgba(255,80,80,0.5)' : 'rgba(26, 32, 53, 0.8)'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="" style={{ background: '#0D1117' }}>Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s} style={{ background: '#0D1117' }}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <span className="text-xs text-red-400">{errors.service.message}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Tell us about your project, security challenges, or requirements..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-transparent placeholder-text-dim outline-none transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: errors.message ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(26, 32, 53, 0.8)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0, 87, 255, 0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = errors.message ? 'rgba(255,80,80,0.5)' : 'rgba(26, 32, 53, 0.8)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-4 text-base rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <BsArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-dim flex items-start gap-2 leading-relaxed">
                    <BsShieldCheck className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0 mt-0.5" />
                    Your information is protected and will never be shared with third parties.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
