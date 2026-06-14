import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  BsGeoAltFill,
  BsEnvelopeFill,
  BsTelephoneFill,
  BsShieldCheck,
  BsArrowRight,
} from 'react-icons/bs';
import { CONTACT_INFO, OFFICE_LOCATIONS } from '../../constants';

const SERVICES_LIST = [
  'Cybersecurity Solutions',
  'Managed Services',
  'Cloud Solutions',
  'Backup & Recovery',
  'IT Consulting',
  'Operations Management',
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1200));
    console.log('Form submitted:', data);
    toast.success('Thank you! We will be in touch shortly.', {
      style: { background: '#0E2138', color: '#F0F6FF', border: '1px solid rgba(0, 212, 255, 0.3)' },
    });
    reset();
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden" style={{ background: '#06121F' }}>
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered CTA Assessment Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden mb-12 border border-cyber-border"
          style={{
            background: 'linear-gradient(120deg, #072136, #0A2647)',
          }}
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,212,255,0.14),transparent)] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary font-display mb-6 relative">
            Ready to Secure Your Business?
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-8 font-light relative leading-relaxed">
            Contact VeltrixSecure today for a FREE IT Security Assessment and discover how we can transform your technology into your greatest competitive advantage.
          </p>
          <a href="#contact-form" className="btn-primary text-base px-8 py-4 rounded-2xl relative inline-flex items-center gap-2">
            Claim Your Free Assessment
            <BsArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-form">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-label mb-4"
              >
                <span className="w-8 h-[1px] bg-neon-cyan block" />
                Get In Touch
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-black text-text-primary font-display mb-4">
                Have Questions? Reach Out
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                Have a question or ready to start? Reach out and our team will respond within one business day.
              </p>
            </div>

            {/* Support Technical Specialist Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden border border-white/10 glass-card-premium p-2.5 bg-cyber-black/20 shadow-lg"
            >
              <img
                src="/cyber_support.png"
                alt="Cybersecurity Technical Support Specialist"
                className="w-full h-44 object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neon-cyan/5 pointer-events-none" />
            </motion.div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-start gap-4 p-5 rounded-2xl border border-cyber-border bg-cyber-card/40 transition-all hover:border-neon-cyan duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BsEnvelopeFill className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-dim uppercase tracking-wider font-bold mb-1">Email</div>
                  <div className="text-sm text-text-secondary group-hover:text-neon-cyan transition-colors">{CONTACT_INFO.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone}`} className="group flex items-start gap-4 p-5 rounded-2xl border border-cyber-border bg-cyber-card/40 transition-all hover:border-neon-cyan duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BsTelephoneFill className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-dim uppercase tracking-wider font-bold mb-1">Phone</div>
                  <div className="text-sm text-text-secondary group-hover:text-neon-cyan transition-colors">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-cyber-border bg-cyber-card/40">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/20 flex-shrink-0">
                  <BsGeoAltFill className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-dim uppercase tracking-wider font-bold mb-1">Location</div>
                  <div className="text-sm text-text-secondary leading-relaxed">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            {/* Office map */}
            <div className="rounded-2xl overflow-hidden border border-cyber-border h-[200px]">
              <iframe
                src={OFFICE_LOCATIONS[0].mapUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VeltrixSecure Office map"
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl p-8 md:p-12 border border-cyber-border bg-cyber-card/60 backdrop-blur-md"
            >
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-text-primary font-display mb-2">Send Us a Message</h3>
                <p className="text-text-muted text-sm font-light">Fill out the form below and we will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-cyber-dark/40 placeholder-text-dim outline-none border border-cyber-border focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                    />
                    {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Work Email *</label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                      })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-cyber-dark/40 placeholder-text-dim outline-none border border-cyber-border focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                    />
                    {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Company Name</label>
                  <input
                    {...register('company')}
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-cyber-dark/40 placeholder-text-dim outline-none border border-cyber-border focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">How can we help? *</label>
                  <select
                    {...register('service', { required: 'Please select a topic' })}
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-secondary bg-cyber-dark/80 outline-none border border-cyber-border focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                  >
                    <option value="">Select a topic...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <span className="text-xs text-red-400">{errors.service.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Message *</label>
                  <textarea
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Tell us about your IT and security needs..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-cyber-dark/40 placeholder-text-dim outline-none border border-cyber-border focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  />
                  {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary py-4 text-base rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <BsArrowRight className="w-4 h-4" />}
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
  );
}
