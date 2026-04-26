import { twMerge } from "tailwind-merge";

interface CardRootProps {
  children: React.ReactNode;
  className?: string;
}

export function CardRoot({ children, className }: CardRootProps) {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-10 flex flex-col gap-6 min-w-75 md:min-w-100 flex-1",
        className
      )}
    >
      {children}
    </div>
  );
}
