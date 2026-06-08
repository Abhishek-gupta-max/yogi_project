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
import Section from '../layout/Section';
import Container from '../layout/Container';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

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
      style: { background: '#1A1A24', color: '#F5F5F7', border: '1px solid #2A2A3A' },
    });
    reset();
  };

  return (
    <Section id="contact" background="primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <Badge variant="primary" className="mb-4">Get In Touch</Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
                Have questions?<br />Reach out.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed font-normal">
                Have a question or ready to start? Reach out and our team will respond within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border-primary bg-bg-secondary/40 transition-all hover:border-accent-primary/40 duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BsEnvelopeFill className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">Email</div>
                  <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{CONTACT_INFO.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border-primary bg-bg-secondary/40 transition-all hover:border-accent-primary/40 duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BsTelephoneFill className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">Phone</div>
                  <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-primary bg-bg-secondary/40">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 flex-shrink-0">
                  <BsGeoAltFill className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">Location</div>
                  <div className="text-sm text-text-secondary leading-relaxed">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            {/* Office map */}
            <div className="rounded-2xl overflow-hidden border border-border-primary h-[200px]">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card hoverEffect={false} className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Send Us a Message</h3>
                  <p className="text-text-secondary text-sm">Fill out the form below and we will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <Input
                      label="Full Name *"
                      id="name"
                      placeholder="Jane Smith"
                      error={errors.name?.message}
                      register={register('name', { required: 'Name is required' })}
                    />

                    {/* Email */}
                    <Input
                      label="Work Email *"
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      error={errors.email?.message}
                      register={register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                      })}
                    />
                  </div>

                  {/* Company */}
                  <Input
                    label="Company Name"
                    id="company"
                    placeholder="Company name"
                    register={register('company')}
                  />

                  {/* Service */}
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="service" className="text-xs font-semibold tracking-wide text-text-secondary">
                      How can we help? *
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Please select a topic' })}
                      className="w-full bg-bg-secondary border border-border-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-200"
                    >
                      <option value="">Select a topic...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <span className="text-xs text-error font-medium">{errors.service.message}</span>}
                  </div>

                  {/* Message */}
                  <Input
                    label="Message *"
                    id="message"
                    textarea={true}
                    rows={4}
                    placeholder="Tell us about your IT and security needs..."
                    error={errors.message?.message}
                    register={register('message', { required: 'Message is required' })}
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full group"
                  >
                    Send Message
                    <BsArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-text-tertiary flex items-start gap-2 leading-relaxed mt-2">
                    <BsShieldCheck className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    Your information is protected and will never be shared with third parties.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
