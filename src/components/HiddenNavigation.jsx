"use client";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { navItems } from "./data";
import { useTranslations } from "next-intl";

function HiddenNavigation({ show, showNavbar }) {
  const t = useTranslations("Header");
  return (
    <nav
      className={`hidden-nav ${show ? "inline-block" : "hidden"} absolute top-[100px] right-0 bottom-0 z-[100] w-[95%] rounded-tl-xl bg-white text-center text-zinc-950 transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex h-full flex-col justify-center gap-6 text-2xl font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              onClick={() => showNavbar(false)}
              href={item.href}
              className="hover:opacity-80"
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
      <LanguageSelector />
    </nav>
  );
}

export default HiddenNavigation;
