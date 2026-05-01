import { SERVICES_DATA_CONTACT } from "@/constants";
import { ServiceCard } from "@/components/cards";
import { PageHero, ServiceSection } from "@/components/sections";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch with Estatein"
        description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
      />
      <ServiceSection>
        {SERVICES_DATA_CONTACT.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            Icon={service.Icon}
            href={service.href}
          />
        ))}
      </ServiceSection>
    </>
  );
}
