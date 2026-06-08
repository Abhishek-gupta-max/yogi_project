import { Link } from 'react-router-dom';
import {
  BsShieldCheck,
  BsLinkedin,
  BsTwitterX,
  BsGithub,
  BsFacebook,
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Cybersecurity Solutions', path: '/#services' },
    { label: 'Managed Services', path: '/#services' },
    { label: 'Cloud Solutions', path: '/#services' },
    { label: 'Backup & Recovery', path: '/#services' },
  ];

  const companyLinks = [
    { label: 'Services', path: '/#services' },
    { label: 'How We Work', path: '/#process' },
    { label: 'Case Studies', path: '/#case-studies' },
    { label: 'FAQs', path: '/#faq' },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-border-primary/50 bg-bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center group">
              <Logo className="transition-transform duration-300 group-hover:scale-[1.02]" />
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              We protect, optimize, and elevate every business we serve with enterprise-grade cybersecurity and IT solutions.
            </p>

            {/* Compliance Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary tracking-wider uppercase">
              <BsShieldCheck className="w-4 h-4 text-accent-primary" />
              Secure · Transform · Excel
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-xs text-text-tertiary">
              <BsGeoAltFill className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { href: SOCIAL_LINKS.linkedin, icon: BsLinkedin, label: 'LinkedIn' },
                { href: SOCIAL_LINKS.twitter, icon: BsTwitterX, label: 'Twitter' },
                { href: SOCIAL_LINKS.github, icon: BsGithub, label: 'GitHub' },
                { href: SOCIAL_LINKS.facebook, icon: BsFacebook, label: 'Facebook' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary border border-border-primary bg-bg-tertiary hover:text-text-primary hover:border-accent-primary/40 hover:bg-bg-hover hover:shadow-premium transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-5">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-text-primary pl-3 border-l-2 border-accent-primary">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-text-primary pl-3 border-l-2 border-accent-primary">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-text-primary pl-3 border-l-2 border-accent-primary">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-bg-tertiary border border-border-primary flex-shrink-0 group-hover:scale-105 transition-all">
                  <BsEnvelopeFill className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-bg-tertiary border border-border-primary flex-shrink-0 group-hover:scale-105 transition-all">
                  <BsTelephoneFill className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary border-t border-border-primary/60">
          <p>
            © {currentYear} <span className="text-text-secondary font-medium">VeltrixSecure Technologies LLP.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-text-secondary transition-colors">Terms of Service</Link>
            <a href="#contact" className="hover:text-text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
