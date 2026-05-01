import { HeroSectionHome } from "@/components/sections/hero-section-home";
import { ServiceCard } from "@/components/cards/service-card";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PropertiesSection } from "@/components/sections/properties-section";
import { SERVICES_DATA_HOME } from "@/constants";
import ServiceSection from "@/components/sections/service-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSectionHome />

      <ServiceSection>
        {SERVICES_DATA_HOME.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            Icon={service.Icon}
            href={service.href}
          />
        ))}
      </ServiceSection>

      <PropertiesSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
