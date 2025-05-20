"use client";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

function HiddenNavigation({ show, showNavbar }) {
  return (
    <nav
      className={`hidden-nav ${show ? "translate-x-0" : "translate-x-full"} absolute top-[100px] right-0 bottom-0 z-[100] w-[95%] rounded-tl-xl bg-white text-center text-zinc-950 transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex h-full flex-col justify-center gap-6 text-2xl font-medium">
        <li>
          <Link
            onClick={() => showNavbar(false)}
            href="#popular-destinations"
            className="hover:opacity-80"
          >
            Mashxur Manzillar
          </Link>
        </li>
        <li>
          <Link
            onClick={() => showNavbar(false)}
            href="#features"
            className="hover:opacity-80"
          >
            Imkoniyatlar
          </Link>
        </li>
        <li>
          <Link
            onClick={() => showNavbar(false)}
            href="#special-suggest"
            className="hover:opacity-80"
          >
            Maxsus Paketlar
          </Link>
        </li>
        <li>
          <Link
            onClick={() => showNavbar(false)}
            href="#counter"
            className="hover:opacity-80"
          >
            Biz raqamlarda
          </Link>
        </li>
      </ul>
      <LanguageSelector />
    </nav>
  );
}

export default HiddenNavigation;
