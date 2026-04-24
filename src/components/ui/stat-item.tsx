import { twMerge } from "tailwind-merge";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div
      className={twMerge(
        "bg-neutral-850 border border-neutral-800 p-4 md:p-6 rounded-xl flex flex-col gap-1 flex-1 min-w-30 cursor-default hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <span className="text-white text-2xl md:text-4xl font-bold">{value}</span>
      <span className="text-neutral-400 text-sm md:text-base">{label}</span>
    </div>
  );
}
