"use client";

import { Button } from "../ui/button";
import { FAQS } from "@/constants";
import { FAQCard } from "../cards/faq-card";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export function FAQSection() {
  const scrollBarRef = useRef<HTMLDivElement | null>(null);

  function changeScrollPosition(direction: "left" | "right") {
    if (scrollBarRef.current) {
      const { current } = scrollBarRef;
      const scrollAmount = 350; // Ajuste para a largura do seu card + gap

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }
  return (
    <section className="w-full py-16 px-4 md:px-20" id="faq-section">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 md:mb-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
              Find answers to common questions about Estatein&apos;s services,
              property listings, and the real estate process. We&apos;re here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="primary">View All FAQ&apos;s</Button>
          </div>
        </div>

        <div
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          ref={scrollBarRef}
        >
          {FAQS.map((faq, index) => (
            <div key={index} className="snap-center flex">
              <FAQCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col items-center gap-6">
          <Button variant="primary" className="w-full">
            View All FAQ&apos;s
          </Button>

          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-neutral-400 text-sm">
              <span className="text-white">01</span> of {FAQS.length}
            </span>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-850 transition-colors"
                onClick={() => changeScrollPosition("left")}
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <button
                className="w-10 h-10 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-850 transition-colors"
                onClick={() => changeScrollPosition("right")}
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/*<div className="hidden md:flex items-center justify-between pt-10 border-t border-neutral-800 mt-10">
          <span className="text-neutral-400">
            <span className="text-white">01</span> of {FAQS.length}
          </span>
          <div className="flex gap-3">
            <button
              className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-850 transition-colors cursor-pointer"
              onClick={() => changeScrollPosition("left")}
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-850 transition-colors cursor-pointer"
              onClick={() => changeScrollPosition("right")}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
