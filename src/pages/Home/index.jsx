import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import IndustriesSection from '../../components/sections/IndustriesSection';

// ── Main Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useDocumentTitle(
    'DEVELTRIXSECURE TECHNOLOGIES LLP | Cybersecurity & IT Solutions',
    'DEVELTRIXSECURE TECHNOLOGIES LLP delivers intelligent cybersecurity, scalable technology solutions, and digital transformation services for modern businesses in Noida, India.'
  );

  return (
    <div style={{ background: '#0A0A14' }}>

      {/* ── 1. HERO (background + animated canvas) ──────────────────── */}
      <HeroSection />

      {/* ── 2. SERVICES ─────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. WHY CHOOSE US ────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 4. INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <IndustriesSection />

    </div>
  );
}
