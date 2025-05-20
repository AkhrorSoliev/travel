import Link from "next/link";
import React from "react";
import { FaBusAlt } from "react-icons/fa";

function Logo() {
  return (
    <Link
      href="/"
      className="mr-auto flex items-center gap-3 self-center text-xl text-white hover:opacity-80 md:text-2xl"
    >
      <FaBusAlt className="text-2xl md:text-5xl" />
      <span className="flex flex-col">
        <span>Fergana Favorit</span>
        <span>Avto Trans</span>
      </span>
    </Link>
  );
}

export default Logo;
