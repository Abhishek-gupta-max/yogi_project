import useDocumentTitle from '../../hooks/useDocumentTitle';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import StatsSection from '../../components/sections/StatsSection';
import IndustriesSection from '../../components/sections/IndustriesSection';
import ProcessSection from '../../components/sections/ProcessSection';
import AboutSection from '../../components/sections/AboutSection';
// import TeamSection from '../../components/sections/TeamSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import BlogSection from '../../components/sections/BlogSection';
import ContactSection from '../../components/sections/ContactSection';

// ── Main Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useDocumentTitle(
    'VeltrixSecure Technologies | Cybersecurity & IT Solutions',
    'VeltrixSecure Technologies in Noida delivers cybersecurity, managed IT, cloud, networking, web and application development, and MySQL database support for modern businesses.'
  );

  return (
    <div className="bg-page">

      {/* ── 1. HERO (background + animated canvas) ──────────────────── */}
      <HeroSection />

      {/* ── 2. SERVICES ─────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. ABOUT + WHY CHOOSE US ─────────────────────────────────── */}
      <AboutSection />

      {/* ── 4. WORK PROCESS ─────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── 4b. SECURITY STATS ──────────────────────────────────────── */}
      <StatsSection />

      {/* ── 5. INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <IndustriesSection />

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
