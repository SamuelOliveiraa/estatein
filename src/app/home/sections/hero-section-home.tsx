import Image from "next/image";
import Link from "next/link";
import { StatItem } from "@/components/ui/stat-item";
import { Button } from "@/components/ui/button";

export function HeroSectionHome() {
  return (
    <section
      id="hero-section"
      className="w-full flex flex-col-reverse lg:flex-row items-stretch border-b border-neutral-800"
    >
      <div className="flex-1 px-4 md:px-20 py-10 md:py-24">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your Dream <br className="hidden md:block" /> Property with
          Estatein
        </h1>
        <p className="text-neutral-400 text-sm md:text-xl mb-8 md:mb-12 max-w-2xl">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
          <Link href="/about" className="w-full md:w-auto">
            <Button variant="primary" className="w-full py-4">
              Learn More
            </Button>
          </Link>
          <Link href="/properties" className="w-full md:w-auto">
            <Button variant="secondary" className="w-full py-4">
              Browse Properties
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-6 items-stretch">
          <StatItem value="200+" label="Happy Customers" />
          <StatItem value="10k+" label="Properties For Clients" />
          <StatItem
            value="16+"
            label="Years of Experience"
            className="col-span-2 text-center md:text-start"
          />
        </div>
      </div>

      <div className="flex-1 w-full relative bg-neutral-850 overflow-hidden">
        <div className="relative w-full h-full min-h-100">
          <Image
            src="/hero-image.png"
            alt="Estatein Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
