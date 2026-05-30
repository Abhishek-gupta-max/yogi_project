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
  BsArrowRight,
} from 'react-icons/bs';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants';

// ── Inline Shield Logo (matches Navbar) ─────────────────────────────────────
function ShieldLogo({ className = 'w-8 h-8' }) {
  return (
    <img src="/logo.png" alt="VeltrixSecure Logo" className={`${className} object-contain`} />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Cybersecurity Solutions', path: '/services?tab=cybersecurity' },
    { label: 'Network Security', path: '/services?tab=network-security' },
    { label: 'Cloud Infrastructure', path: '/services?tab=cloud' },
    { label: 'IT Consulting', path: '/services?tab=it-consulting' },
    { label: 'Web & App Development', path: '/services?tab=web-app-dev' },
    { label: 'Automation Systems', path: '/services?tab=automation' },
    { label: 'AI Integration', path: '/services?tab=ai-integration' },
    { label: 'Digital Transformation', path: '/services?tab=digital-transformation' },
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06060F 0%, #050810 100%)' }}
    >
      {/* Top gradient divider */}
      <div className="gradient-divider absolute top-0 inset-x-0" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link to="/" className="flex items-center group">
              <img src="/logo.png" alt="VeltrixSecure" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>

            <p className="text-text-muted text-sm leading-relaxed">
              We protect, optimize, and elevate every business we serve.
            </p>

            {/* Tagline pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(0, 87, 255, 0.08)',
                border: '1px solid rgba(0, 87, 255, 0.2)',
                color: '#1A75FF',
              }}
            >
              <BsShieldCheck className="w-3 h-3" />
              Secure · Transform · Excel
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs text-text-muted">
              <BsGeoAltFill className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted hover:text-white transition-all duration-300"
                  style={{
                    background: 'rgba(13, 17, 23, 0.8)',
                    border: '1px solid rgba(26, 32, 53, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.5)';
                    e.currentTarget.style.background = 'rgba(0, 87, 255, 0.12)';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 87, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                    e.currentTarget.style.background = 'rgba(13, 17, 23, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold text-xs tracking-widest uppercase text-text-primary pl-3 font-display"
              style={{ borderLeft: '2px solid #0050FF' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-muted hover:text-neon-cyan flex items-center gap-2 group transition-all duration-200"
                  >
                    <BsArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-neon-cyan flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold text-xs tracking-widest uppercase text-text-primary pl-3 font-display"
              style={{ borderLeft: '2px solid #1A75FF' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-muted hover:text-neon-cyan flex items-center gap-2 group transition-all duration-200"
                  >
                    <BsArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-neon-cyan flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications badge */}
            <div
              className="mt-4 p-4 rounded-2xl"
              style={{
                background: 'rgba(0, 87, 255, 0.05)',
                border: '1px solid rgba(0, 87, 255, 0.15)',
              }}
            >
              <div className="text-xs text-text-muted mb-2">Compliance & Certifications</div>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI DSS'].map((cert) => (
                  <span
                    key={cert}
                    className="text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wider"
                    style={{
                      background: 'rgba(0, 229, 255, 0.08)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      color: '#1A75FF',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold text-xs tracking-widest uppercase text-text-primary pl-3 font-display"
              style={{ borderLeft: '2px solid #7B61FF' }}
            >
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 87, 255, 0.1)',
                    border: '1px solid rgba(0, 87, 255, 0.3)',
                  }}
                >
                  <BsEnvelopeFill className="w-3.5 h-3.5 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-[10px] text-text-dim uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-sm text-text-muted group-hover:text-neon-cyan transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 229, 255, 0.08)',
                    border: '1px solid rgba(0, 229, 255, 0.25)',
                  }}
                >
                  <BsTelephoneFill className="w-3.5 h-3.5 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-[10px] text-text-dim uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-sm text-text-muted group-hover:text-neon-cyan transition-colors">
                    {CONTACT_INFO.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(123, 97, 255, 0.1)',
                    border: '1px solid rgba(123, 97, 255, 0.3)',
                  }}
                >
                  <BsGeoAltFill className="w-3.5 h-3.5 text-neon-purple" />
                </div>
                <div>
                  <div className="text-[10px] text-text-dim uppercase tracking-wider mb-0.5">Headquarters</div>
                  <div className="text-xs text-text-muted leading-relaxed">
                    Sector 12, Noida,<br />Uttar Pradesh – 201301
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="btn-primary text-center py-3 text-sm mt-1"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* ── Sub-Footer ─────────────────────────────────── */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-dim"
          style={{ borderTop: '1px solid rgba(26, 32, 53, 0.6)' }}
        >
          <p>
            © {currentYear}{' '}
            <span className="text-text-muted">VELTRIXSECURE TECHNOLOGIES LLP.</span>{' '}
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-text-muted transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-text-muted transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-text-muted transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
