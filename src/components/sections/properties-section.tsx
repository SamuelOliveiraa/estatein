import { Button } from "../ui/button";
import { SectionCarousel } from "./section-carrousel";
import { PropertiesCard } from "../cards/properties-card";
import { PROPERTIES } from "@/constants";

export function PropertiesSection() {
  return (
    <SectionCarousel.Root>
      <SectionCarousel.Header>
        <div className="max-w-4xl">
          <SectionCarousel.Title>Featured Properties</SectionCarousel.Title>
          <SectionCarousel.Description>
            {
              "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
            }
          </SectionCarousel.Description>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary">View All Properties</Button>
        </div>
      </SectionCarousel.Header>
      <SectionCarousel.Content itemsLength={PROPERTIES.length}>
        {PROPERTIES.map((property, index) => (
          <div key={index} className="snap-center flex">
            <PropertiesCard
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              category={property.category}
              description={property.description}
              imageURL={property.imageURL}
              price={property.price}
              title={property.title}
            />
          </div>
        ))}
      </SectionCarousel.Content>
    </SectionCarousel.Root>
  );
}
