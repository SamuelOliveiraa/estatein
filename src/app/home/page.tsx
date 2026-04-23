import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/cards/service-card";
import { SunIcon } from "@heroicons/react/24/solid";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      <section className="p-1 bg-neutral-850">
        <div className="bg-neutral-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-3">
          <ServiceCard
            title="Find Your Dream Home"
            Icon={BuildingStorefrontIcon}
            href="/properties"
          />
          <ServiceCard
            title="Unlock Property Value"
            Icon={BanknotesIcon}
            href="/services"
          />
          <ServiceCard
            title="Effortless Property Management"
            Icon={BuildingOffice2Icon}
            href="/properties"
          />
          <ServiceCard
            title="Smart Investments, Informed Decisions"
            Icon={SunIcon}
            href="/services"
          />
        </div>
      </section>
    </div>
  );
}
