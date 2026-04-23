import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={twMerge("w-fit", className)}>
      <Image
        src="/logo.png"
        alt="Estatein"
        width={130}
        height={130}
        className="h-auto"
      />
    </Link>
  );
}
