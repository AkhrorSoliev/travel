"use client";

import React, { useEffect } from "react";
import {
  FaSmileBeam,
  FaMountain,
  FaMapMarkedAlt,
  FaClock,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <FaSmileBeam size={60} className="text-blue-500" />,
      title: "Mijozlar mamnunligi",
      description:
        "Biz mijozlarimizga eng yaxshi xizmat va unutilmas tajriba taqdim etamiz.",
    },
    {
      icon: <FaMountain size={60} className="text-blue-500" />,
      title: "Haqiqiy sarguzasht",
      description:
        "Sizga chinakam sarguzashtga boy sayohat tajribasini taqdim qilamiz.",
    },
    {
      icon: <FaMapMarkedAlt size={60} className="text-blue-500" />,
      title: "Tajribali yo‘l ko‘rsatuvchilar",
      description:
        "Faqat eng malakali va tajribali gidlar xizmatini taqdim qilamiz.",
    },
    {
      icon: <FaClock size={60} className="text-blue-500" />,
      title: "Vaqt bo‘yicha moslashuvchanlik",
      description:
        "Sizning sayohat vaqtingizga moslashamiz va qulaylik yaratamiz.",
    },
  ];

  return (
    <section className="">
      <div className="align-elements grid grid-cols-1 gap-8 bg-white md:grid-cols-2">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {item.icon}
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
