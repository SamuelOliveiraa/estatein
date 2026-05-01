import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import { Logo } from "../ui";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-360 mx-auto pt-20 pb-10 px-4 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="flex flex-col gap-8 flex-1 max-w-sm">
            <Logo />

            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 px-5 pr-12 text-neutral-400 focus:outline-none focus:border-purple-600 transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-600 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {FOOTER_SECTIONS.map(section => (
              <div key={section.title}>
                <h4 className="text-neutral-500 font-medium mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-purple-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 bg-neutral-850 px-6 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-neutral-400 text-sm">
            @2023 Estatein. All Rights Reserved.
          </p>
          <Link href="/" className="text-neutral-400 text-sm hover:text-white">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(social => (
            <Link
              key={social.label}
              href={social.href}
              className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
            >
              <span className="sr-only">{social.label}</span>
              <div className="w-4 h-4 ">
                {social.label === "Facebook" && (
                  <FaFacebook className="w-4 h-4" />
                )}
                {social.label === "Twitter" && (
                  <FaTwitter className="w-4 h-4" />
                )}
                {social.label === "LinkedIn" && (
                  <FaLinkedin className="w-4 h-4" />
                )}
                {social.label === "Instagram" && (
                  <FaInstagram className="w-4 h-4" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
