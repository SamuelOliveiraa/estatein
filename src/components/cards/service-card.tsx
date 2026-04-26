import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { IconType } from "react-icons";

interface ServiceCardProps {
  Icon: IconType;
  title: string;
  href?: string;
}

export function ServiceCard({ Icon, title, href = "/home" }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-neutral-850 border border-neutral-800 rounded-xl p-6 md:p-10 flex flex-col items-center justify-center text-center gap-4 hover:border-neutral-700 transition-all duration-200 cursor-pointer scale-95 hover:scale-100"
    >
      <ArrowUpRightIcon className="text-neutral-700 size-6  md:size-8 absolute top-3 right-3 group-hover:text-neutral-500 transition-colors duration-200" />

      <div className="w-16 h-16 bg-[url('/icon-bg.png')] bg-center bg-no-repeat rounded-full border border-purple-500 flex items-center justify-center mb-2 group-hover:bg-neutral-800 transition-colors">
        <Icon className="text-purple-750 size-6" />
      </div>

      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </Link>
  );
}
