"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Logo, Button } from "../ui";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50">
      <div className="bg-neutral-850 py-3 text-center text-xs md:text-sm text-white px-4">
        <p>
          ✨ Discover Your Dream Property with Estatein{" "}
          <Link href="/properties" className="underline ml-1">
            Learn More
          </Link>
        </p>
      </div>

      <nav className="max-w-360 mx-auto px-6 2xl:px-0 py-4 md:py-5 flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center gap-2 lg:gap-6">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white hover:bg-neutral-850 px-4 py-3 rounded-xl transition-colors text-sm lg:text-base ${pathname === link.href ? "bg-neutral-850" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden md:block">
          <Button className="py-3">Contact Us</Button>
        </Link>

        {/* Menu hamburguer*/}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
