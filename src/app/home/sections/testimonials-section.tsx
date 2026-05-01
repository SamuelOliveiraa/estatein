import { Button } from "../../../components/ui/button";
import { TESTIMONIALS } from "@/constants";
import { SectionCarousel } from "../../../components/sections/section-carrousel";
import { TestimonialsCard } from "../../../components/cards/testimonials-card";

export function TestimonialsSection() {
  return (
    <SectionCarousel.Root>
      <SectionCarousel.Header>
        <div className="max-w-4xl">
          <SectionCarousel.Title>What Our Clients Say</SectionCarousel.Title>
          <SectionCarousel.Description>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </SectionCarousel.Description>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary">View All Testimonials</Button>
        </div>
      </SectionCarousel.Header>
      <SectionCarousel.Content itemsLength={TESTIMONIALS.length}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="snap-center flex">
            <TestimonialsCard
              rating={testimonial.rating}
              imageURL={testimonial.imageURL}
              name={testimonial.name}
              title={testimonial.title}
              description={testimonial.description}
            />
          </div>
        ))}
      </SectionCarousel.Content>
    </SectionCarousel.Root>
  );
}
