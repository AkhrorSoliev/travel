"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import destinations from "./data";

function PopularDestinations() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="special-suggest" className="popular-destinations px-4 py-12">
      <div className="align-elements mb-10 flex flex-col gap-5 text-left">
        <h1 className="text-4xl uppercase">MAXSUS MANZILLAR:</h1>
        <p className="text-sm opacity-80 md:text-xl">
          Sizning ehtiyojlaringizga moslashtirilgan maxsus sayohat
          paketlarimizdan bahramand bo'ling.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            data-aos={dest.aos}
            className={`group relative overflow-hidden rounded-xl shadow-md ${
              dest.wide ? "lg:col-span-2" : ""
            }`}
          >
            <img
              src={dest.img}
              alt={dest.title}
              className="h-96 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="mb-1 text-2xl font-semibold">{dest.title}</h3>
              {dest.description && (
                <p className="mb-3 text-sm">{dest.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
