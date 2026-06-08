import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function TermsOfService() {
  useDocumentTitle('Terms of Service | VeltrixSecure', 'Terms of Service for VeltrixSecure Technologies LLP.');

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
          Terms of <span className="gradient-text">Service</span>
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
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">1. Agreement to Terms</h2>
              <p>
                By accessing our website and utilizing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">2. Use License</h2>
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
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">3. Disclaimer</h2>
              <p>
                The materials on VeltrixSecure Technologies LLP&apos;s website are provided on an &apos;as is&apos; basis. VeltrixSecure makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">4. Limitations</h2>
              <p>
                In no event shall VeltrixSecure Technologies LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VeltrixSecure&apos;s website, even if VeltrixSecure or a VeltrixSecure authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 font-display">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Uttar Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
