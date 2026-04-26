import { StarIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="flex items-center justify-center rounded-full p-2 bg-neutral-850 border border-neutral-800"
        >
          <StarIcon
            className={twMerge(
              "size-6 w-fit text-neutral-500",
              i < rating ? "text-yellow-300" : ""
            )}
          />
        </div>
      ))}
    </div>
  );
}
