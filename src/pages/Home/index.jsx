import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import SocialProof from '../../components/sections/SocialProof';
import ServicesSection from '../../components/sections/ServicesSection';
import ProcessSection from '../../components/sections/ProcessSection';
import CaseStudies from '../../components/sections/CaseStudies';
import Testimonials from '../../components/sections/Testimonials';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import ContactSection from '../../components/sections/ContactSection';

// ── Main Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useDocumentTitle(
    'VeltrixSecure Technologies LLP | Cybersecurity & IT Solutions',
    'VeltrixSecure Technologies LLP delivers intelligent cybersecurity, scalable technology solutions, and digital transformation services for modern businesses.'
  );

  return (
    <div className="bg-bg-primary">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Social Proof / Trusted By */}
      <SocialProof />

      {/* 3. Services (Bento Grid) */}
      <ServicesSection />

      {/* 4. Process (4-step timeline) */}
      <ProcessSection />

      {/* 5. Case Studies */}
      <CaseStudies />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. CTA Section */}
      <CTASection />

      {/* 9. Contact */}
      <ContactSection />
    </div>
  );
}
