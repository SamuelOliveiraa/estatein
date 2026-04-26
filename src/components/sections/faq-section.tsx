import { Button } from "../ui/button";
import { FAQS } from "@/constants";
import { FAQCard } from "../cards/faq-card";
import { SectionCarousel } from "./section-carrousel";

export function FAQSection() {
  return (
    <SectionCarousel.Root>
      <SectionCarousel.Header>
        <div className="max-w-4xl">
          <SectionCarousel.Title>
            Frequently Asked Questions
          </SectionCarousel.Title>
          <SectionCarousel.Description>
            Find answers to common questions about Estatein&apos;s services,
            property listings, and the real estate process. We&apos;re here to
            provide clarity and assist you every step of the way.
          </SectionCarousel.Description>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary">View All FAQ&apos;s</Button>
        </div>
      </SectionCarousel.Header>
      <SectionCarousel.Content itemsLength={FAQS.length}>
        {FAQS.map((faq, index) => (
          <div key={index} className="snap-center flex">
            <FAQCard question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </SectionCarousel.Content>
    </SectionCarousel.Root>
  );
}
