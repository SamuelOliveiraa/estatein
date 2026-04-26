"use client";

import ButtonCircle from "@/components/ui/button-circle";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

interface ContentProps {
  itemsLength: number;
  children: React.ReactNode;
}

export default function Content({ itemsLength, children }: ContentProps) {
  const scrollBarRef = useRef<HTMLDivElement | null>(null);

  function changeScrollPosition(direction: "left" | "right") {
    if (scrollBarRef.current) {
      const { current } = scrollBarRef;
      const scrollAmount = 400;

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }

  return (
    <>
      <div
        className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar"
        ref={scrollBarRef}
      >
        {children}
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col items-center gap-6">
        {/*<Button variant="primary" className="w-full lg:hidden">
          View All FAQ&apos;s
        </Button>*/}

        <div className="flex items-center justify-between w-full pt-4">
          <span className="text-neutral-400 text-sm">
            <span className="text-white">01</span> of {itemsLength}
          </span>

          <div className="flex gap-2">
            <ButtonCircle onClick={() => changeScrollPosition("left")}>
              <ArrowLeftIcon className="w-6 h-6" />
            </ButtonCircle>

            <ButtonCircle onClick={() => changeScrollPosition("right")}>
              <ArrowRightIcon className="w-6 h-6" />
            </ButtonCircle>
          </div>
        </div>
      </div>
    </>
  );
}
