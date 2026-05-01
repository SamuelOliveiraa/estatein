import { SERVICES_DATA_HOME } from "@/constants";
import {
  ServiceSection,
  FAQSection,
  PropertiesSection
} from "@/components/sections";
import { ServiceCard } from "@/components/cards";
import { HeroSectionHome, TestimonialsSection } from "./sections";

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
