import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { navItems } from "./data";

function Navigation() {
  const t = useTranslations("Header");

  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:opacity-80">
            {t(item.label)}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Navigation;
