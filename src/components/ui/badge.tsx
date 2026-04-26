import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full p-1 px-2 gap-2 text-sm font-semibold bg-neutral-850 border border-neutral-800",
        className
      )}
    >
      {children}
    </span>
  );
}
