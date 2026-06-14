import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import StatsSection from '../../components/sections/StatsSection';
import IndustriesSection from '../../components/sections/IndustriesSection';
import VisionSection from '../../components/sections/VisionSection';
// import TeamSection from '../../components/sections/TeamSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import BlogSection from '../../components/sections/BlogSection';
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

      {/* ── 3b. SECURITY STATS ──────────────────────────────────────── */}
      <StatsSection />

      {/* ── 4. INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <IndustriesSection />

      {/* ── 5. VISION STATEMENT (ABOUT) ──────────────────────────────── */}
      <VisionSection />

      {/* ── 5b. SECURITY COMMAND TEAM ────────────────────────────────── */}
      {/* <TeamSection /> */}

      {/* ── 5c. CLIENT TESTIMONIALS ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── 5d. THREAT INSIGHTS BLOG ─────────────────────────────────── */}
      <BlogSection />

      {/* ── 6. CONTACT & ASSESSMENT ──────────────────────────────────── */}
      <ContactSection />

    </div>
  );
}
