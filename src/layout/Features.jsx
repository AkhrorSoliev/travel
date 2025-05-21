"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "./data";
import { useLocale } from "next-intl";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const locale = useLocale();

  return (
    <section id="features">
      <div className="align-elements grid grid-cols-1 gap-8 place-self-center bg-white text-center md:grid-cols-2">
        {features.map((item, index) => (
          <div
            key={index}
            className="mx-auto flex max-w-[400px] flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {item.icon}
            <h3 className="mt-3 text-3xl font-semibold">
              {item.title[locale]}
            </h3>
            <p className="mt-2 text-xl text-gray-600">
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
