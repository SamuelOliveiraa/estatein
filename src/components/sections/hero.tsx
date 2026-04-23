import Image from "next/image";
import Link from "next/link";
import { StatItem } from "@/components/ui/stat-item";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="w-full h-full items-stretch flex flex-col lg:flex-row border-b border-neutral-800">
      <div className="flex-1 px-4 md:px-20 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your Dream <br className="hidden md:block" /> Property with
          Estatein
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/about">
            <Button>Learn More</Button>
          </Link>
          <Link href="/properties">
            <Button variant="secondary">Browse Properties</Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          <StatItem value="200+" label="Happy Customers" />
          <StatItem value="10k+" label="Properties For Clients" />
          <StatItem value="16+" label="Years of Experience" />
        </div>
      </div>

      <div className="flex-1 relative bg-neutral-850 min-h-11/12">
        <Image
          src="/hero-image.png"
          alt="Estatein Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
