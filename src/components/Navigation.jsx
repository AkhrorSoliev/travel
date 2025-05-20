import React from "react";
import Link from "next/link";

const navItems = [
  { href: "#popular-destinations", label: "Mashxur Manzillar" },
  { href: "#features", label: "Imkoniyatlar" },
  { href: "#special-suggest", label: "Maxsus Paketlar" },
  { href: "#counter", label: "Biz raqamlarda" },
];

function Navigation() {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:opacity-80">
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Navigation;
