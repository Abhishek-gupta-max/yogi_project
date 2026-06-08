import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Badge from '../../components/ui/Badge';
import Container from '../../components/layout/Container';

export default function TermsOfService() {
  useDocumentTitle('Terms of Service | VeltrixSecure', 'Terms of Service for VeltrixSecure Technologies LLP.');

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
            Terms of Service
          </motion.h1>
          <p className="text-text-tertiary text-sm">Last Updated: May 2026</p>
        </div>

        {/* Content Box */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border border-border-primary/50 bg-bg-secondary/40 backdrop-blur-md shadow-premium">
            <div className="space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing our website and utilizing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">2. Use License</h2>
                <p className="mb-3">
                  Permission is granted to temporarily download one copy of the materials (information or software) on VeltrixSecure Technologies LLP&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>Attempt to decompile or reverse engineer any software contained on VeltrixSecure&apos;s website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">3. Disclaimer</h2>
                <p>
                  The materials on VeltrixSecure Technologies LLP&apos;s website are provided on an &apos;as is&apos; basis. VeltrixSecure makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">4. Limitations</h2>
                <p>
                  In no event shall VeltrixSecure Technologies LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VeltrixSecure&apos;s website, even if VeltrixSecure or a VeltrixSecure authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary mb-3">5. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Uttar Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
