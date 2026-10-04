import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { OngoingProjects } from "@/components/home/OngoingProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ExecutionProcess } from "@/components/home/ExecutionProcess";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About Introduction */}
      <AboutIntro />

      {/* 4. Services Grid */}
      <ServicesGrid />

      {/* 5. Featured Projects */}
      <FeaturedProjects />

      {/* 6. Ongoing Projects */}
      <OngoingProjects />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Project Execution Process */}
      <ExecutionProcess />

      {/* 9. Gallery Preview */}
      <GalleryPreview />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Service Areas */}
      <ServiceAreasSection />

      {/* 12. FAQ */}
      <FaqSection />

      {/* 13. Final CTA */}
      <FinalCta />
    </>
  );
}
