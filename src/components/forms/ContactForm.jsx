import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiService } from '../../services/api';
import Button from '../ui/Button';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    // Wrap API call inside hot-toast promise handler
    await toast.promise(
      apiService.submitContactForm(data),
      {
        loading: 'Transmitting inquiry parameters...',
        success: (response) => {
          reset();
          return response.message || 'Inquiry logged! We will reach out shortly.';
        },
        error: (err) => `Transmission failure: ${err.message || 'Please check your connection.'}`
      },
      {
        style: {
          minWidth: '250px',
          background: '#112240',
          color: '#f8fafc',
          border: '1px solid #233554',
        },
        success: {
          duration: 5000,
          icon: '🚀',
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold tracking-wide text-slate-300">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl bg-navy-darkest border text-white text-sm focus:outline-none focus:border-brand-electric transition-colors ${
              errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-navy-slate/80'
            }`}
            {...register('name', {
              required: 'Full name is required.',
              minLength: { value: 3, message: 'Must be at least 3 characters.' }
            })}
          />
          {errors.name && (
            <span className="text-xs text-red-400 pl-1">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold tracking-wide text-slate-300">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-navy-darkest border text-white text-sm focus:outline-none focus:border-brand-electric transition-colors ${
              errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-navy-slate/80'
            }`}
            {...register('email', {
              required: 'Work email is required.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address.'
              }
            })}
          />
          {errors.email && (
            <span className="text-xs text-red-400 pl-1">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Phone and Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold tracking-wide text-slate-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 019-2834"
            className={`w-full px-4 py-3 rounded-xl bg-navy-darkest border text-white text-sm focus:outline-none focus:border-brand-electric transition-colors ${
              errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-navy-slate/80'
            }`}
            {...register('phone', {
              pattern: {
                value: /^[\d+\-\s()]{7,20}$/,
                message: 'Invalid phone format (numbers, space, dashes, brackets).'
              }
            })}
          />
          {errors.phone && (
            <span className="text-xs text-red-400 pl-1">{errors.phone.message}</span>
          )}
        </div>

        {/* Subject Select */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-semibold tracking-wide text-slate-300">
            Inquiry Area *
          </label>
          <select
            id="subject"
            className="w-full px-4 py-3 rounded-xl bg-navy-darkest border border-navy-slate/80 text-white text-sm focus:outline-none focus:border-brand-electric transition-colors"
            {...register('subject', { required: true })}
          >
            <option value="general">General Corporate Inquiry</option>
            <option value="noc">24/7 NOC Outsourcing</option>
            <option value="cloud">Cloud Migration & DevOps</option>
            <option value="telecom">MSP & Voice/Telecom Integrations</option>
            <option value="ai">AIOps Predictive Solutions</option>
            <option value="careers">Careers & HR Division</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold tracking-wide text-slate-300">
          Your Message *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your systems requirement..."
          className={`w-full px-4 py-3 rounded-xl bg-navy-darkest border text-white text-sm focus:outline-none focus:border-brand-electric transition-colors resize-none ${
            errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-navy-slate/80'
          }`}
          {...register('message', {
            required: 'Please enter details regarding your query.',
            minLength: { value: 10, message: 'Message details must exceed 10 characters.' }
          })}
        />
        {errors.message && (
          <span className="text-xs text-red-400 pl-1">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="w-full"
        >
          Transmit Secure Inquiry
        </Button>
      </div>
    </form>
  );
}
