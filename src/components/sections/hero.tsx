import Image from "next/image";
import Link from "next/link";
import { StatItem } from "@/components/ui/stat-item";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row items-center border-b border-neutral-800">
      {/* Text Content */}
      <div className="flex-1 px-4 md:px-20 py-10 md:py-24">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your Dream <br className="hidden md:block" /> Property with
          Estatein
        </h1>
        <p className="text-neutral-400 text-sm md:text-xl mb-8 md:mb-12 max-w-2xl">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
          <Link href="/about" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full py-4">
              Learn More
            </Button>
          </Link>
          <Link href="/properties" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full py-4">
              Browse Properties
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-6">
          <StatItem value="200+" label="Happy Customers" />
          <StatItem value="10k+" label="Properties For Clients" />
          <div className="col-span-2 md:col-span-1">
            <StatItem value="16+" label="Years of Experience" />
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full relative bg-neutral-850 overflow-hidden">
        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-full min-h-[300px] md:min-h-[600px]">
          <Image
            src="/hero-image.png"
            alt="Estatein Hero"
            fill
            className="object-cover"
            priority
          />

          {/* Abstract Circle/Icon Placeholder for Mobile Design */}
          <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/icon-bg.png"
              alt="Design Element"
              fill
              className="animate-spin-slow"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-8 h-8 rotate-[-45deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
