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
import { apiService } from '../../services/api';

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
    try {
      const response = await apiService.submitContactForm(data);
      toast.success(response.message || 'Thank you! We will be in touch shortly.');
      reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section id="contact" className="section-page py-16 relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered CTA Assessment Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="theme-dark relative rounded-3xl px-6 py-10 sm:p-12 md:p-16 text-center overflow-hidden mb-12 border border-line shadow-float"
          style={{
            background: 'linear-gradient(120deg, rgb(var(--bg)), rgb(var(--surface-2)))',
          }}
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgb(var(--accent)/0.14),transparent)] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-fg font-display mb-6 relative">
            Ready to Secure Your Business?
          </h2>
          <p className="text-fg-muted text-base md:text-lg max-w-2xl mx-auto mb-8 font-light relative leading-relaxed">
            Contact VeltrixSecure today for a FREE IT Security Assessment and discover how we can transform your technology into your greatest competitive advantage.
          </p>
          <a href="#contact-form" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-4 relative">
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
                <span className="w-8 h-[1px] bg-accent block" />
                Get In Touch
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-black text-fg font-display mb-4">
                Have Questions? Reach Out
              </h3>
              <p className="text-fg-muted text-base font-light leading-relaxed">
                Have a question or ready to start? Reach out and our team will respond within one business day.
              </p>
            </div>

            {/* Support Technical Specialist Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden glass-card-premium p-2.5"
            >
              <img
                src="/cyber_support.png"
                alt="Cybersecurity Technical Support Specialist"
                className="w-full h-44 object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-start gap-4 p-5 rounded-2xl border border-line bg-surface shadow-card transition-all hover:border-accent/50 hover:shadow-card-hover duration-300">
                <div className="icon-tile w-10 h-10 rounded-xl">
                  <BsEnvelopeFill className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-fg-dim uppercase tracking-wider font-bold mb-1">Email</div>
                  <div className="text-sm text-fg-2 group-hover:text-accent transition-colors">{CONTACT_INFO.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone}`} className="group flex items-start gap-4 p-5 rounded-2xl border border-line bg-surface shadow-card transition-all hover:border-accent/50 hover:shadow-card-hover duration-300">
                <div className="icon-tile w-10 h-10 rounded-xl">
                  <BsTelephoneFill className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-fg-dim uppercase tracking-wider font-bold mb-1">Phone</div>
                  <div className="text-sm text-fg-2 group-hover:text-accent transition-colors">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-line bg-surface shadow-card">
                <div className="icon-tile w-10 h-10 rounded-xl">
                  <BsGeoAltFill className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-fg-dim uppercase tracking-wider font-bold mb-1">Location</div>
                  <div className="text-sm text-fg-2 leading-relaxed">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            {/* Office map */}
            <div className="rounded-2xl overflow-hidden border border-line shadow-card h-[200px]">
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
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl p-8 md:p-12 border border-line bg-surface shadow-card-hover"
            >
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-fg font-display mb-2">Send Us a Message</h3>
                <p className="text-fg-muted text-sm font-light">Fill out the form below and we will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Full Name *</label>
                    <input
                      aria-invalid={errors.name ? 'true' : 'false'}
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Jane Smith"
                      className="form-input"
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                      })}
                      placeholder="jane@company.com"
                      className="form-input"
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      {...register('phone', {
                        pattern: { value: /^[\d+\-\s()]{7,20}$/, message: 'Invalid phone number' },
                      })}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                    {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Company Name</label>
                    <input
                      {...register('company')}
                      placeholder="Company name"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">How can we help? *</label>
                  <select
                    aria-invalid={errors.service ? 'true' : 'false'}
                      {...register('service', { required: 'Please select a topic' })}
                    className="form-input"
                  >
                    <option value="">Select a topic...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error">{errors.service.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={4}
                    aria-invalid={errors.message ? 'true' : 'false'}
                      {...register('message', { required: 'Message is required' })}
                    placeholder="Tell us about your IT and security needs..."
                    className="form-input resize-none"
                  />
                  {errors.message && <span className="form-error">{errors.message.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary py-4 text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <BsArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-xs text-fg-dim flex items-start gap-2 leading-relaxed">
                  <BsShieldCheck className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
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
