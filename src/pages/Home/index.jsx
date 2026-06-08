import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import IndustriesSection from '../../components/sections/IndustriesSection';
import VisionSection from '../../components/sections/VisionSection';
import ContactSection from '../../components/sections/ContactSection';

// ── Main Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useDocumentTitle(
    'VeltrixSecure Technologies LLP | Cybersecurity & IT Solutions',
    'VeltrixSecure Technologies LLP delivers intelligent cybersecurity, scalable technology solutions, and digital transformation services for modern businesses.'
  );

  return (
    <div className="bg-cyber-dark">

      {/* ── 1. HERO (background + animated canvas) ──────────────────── */}
      <HeroSection />

      {/* ── 2. SERVICES ─────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. WHY CHOOSE US ────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 4. INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <IndustriesSection />

      {/* ── 5. VISION STATEMENT ─────────────────────────────────────── */}
      <VisionSection />

      {/* ── 6. CONTACT & ASSESSMENT ──────────────────────────────────── */}
      <ContactSection />

    </div>
  );
}
