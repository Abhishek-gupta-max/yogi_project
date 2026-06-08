import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { CONTACT_INFO } from '../../constants';
import Badge from '../../components/ui/Badge';
import Container from '../../components/layout/Container';

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | VeltrixSecure', 'Privacy Policy and data protection practices for VeltrixSecure Technologies LLP.');

  return (
    <div className="bg-bg-primary pt-32 pb-24">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">Legal</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-text-tertiary text-sm">Last Updated: May 2026</p>
        </div>

        {/* Content Box */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border border-border-primary/50 bg-bg-secondary/40 backdrop-blur-md shadow-premium">
            <div className="space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">1. Introduction</h2>
                <p>
                  VeltrixSecure Technologies LLP (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">3. Use of Your Information</h2>
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
                <h2 className="text-lg font-semibold text-text-primary mb-3">4. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">5. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <div className="mt-6 p-6 rounded-xl bg-bg-tertiary border border-border-primary">
                  <p className="text-text-primary font-semibold mb-2">VeltrixSecure Technologies LLP</p>
                  <p className="text-text-secondary text-sm mb-1">{CONTACT_INFO.address}</p>
                  <p className="text-text-secondary text-sm">
                    Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent-primary hover:underline">{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
