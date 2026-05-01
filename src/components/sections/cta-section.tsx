import Link from "next/link";
import { Button } from "../ui";

export function CTASection() {
  return (
    <section className="w-full bg-neutral-900 border-t border-neutral-800 py-16 px-4 md:p-16 flex justify-center items-center">
      <div className="max-w-360 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-neutral-400 text-md leading-relaxed">
            Your dream property is just a click away. Whether you are looking
            for a new home, a strategic investment, or expert real estate
            advice, Estatein is here to assist you every step of the way. Take
            the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <Link href="/properties" className="w-full mr-auto sm:w-fit md:mr-0">
          <Button variant="secondary" className="w-full">
            Explore Properties
          </Button>
        </Link>
      </div>
    </section>
  );
}
