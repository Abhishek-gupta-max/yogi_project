import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CONTACT_INFO } from '../../constants';

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | VeltrixSecure', 'Privacy Policy and data protection practices for VeltrixSecure Technologies LLP.');

  return (
    <div style={{ background: '#0A0A14' }}>
      {/* ── PAGE HEADER ── */}
      <section
        className="relative overflow-hidden pt-32 pb-16 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0A0A14 100%)' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div className="section-label justify-center mb-4 relative z-10">
          <span className="w-8 h-[1px] bg-neon-cyan block" />
          Legal
          <span className="w-8 h-[1px] bg-neon-cyan block" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-text-primary font-display mb-4 relative z-10"
        >
          Privacy <span className="gradient-text">Policy</span>
        </motion.h1>
        <p className="text-text-muted text-sm font-light relative z-10">Last Updated: May 2026</p>
      </section>

      {/* ── CONTENT ── */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-text-muted text-sm md:text-base leading-relaxed font-light">
        <div 
          className="p-8 md:p-12 rounded-3xl"
          style={{
            background: 'rgba(10, 10, 20, 0.7)',
            border: '1px solid rgba(26, 32, 53, 0.8)',
          }}
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">1. Introduction</h2>
              <p>
                VeltrixSecure Technologies LLP (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">2. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">3. Use of Your Information</h2>
              <p className="mb-3">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">5. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(0, 87, 255, 0.05)', border: '1px solid rgba(0, 87, 255, 0.15)' }}>
                <p className="text-text-primary font-semibold">VeltrixSecure Technologies LLP</p>
                <p>{CONTACT_INFO.address}</p>
                <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-neon-cyan hover:underline">{CONTACT_INFO.email}</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
