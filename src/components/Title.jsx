"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Title() {
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);

  const data = {
    uz: [
      2000,
      "— ilhom bilan ✨",
      2000,
      "— sarguzasht uchun 🧭",
      2000,
      "— erkinlik ruhi bilan 🕊️",
      2000,
      "— unutilmas lahzalar bilan 📸",
      2000,
      "— his-tuyg'ular bilan 💖",
      2000,
      "— kashfiyot uchun 🔎",
      2000,
      "— tabiat bag'rida 🌳",
      2000,
      "— madaniyat izidan 🏛️",
      2000,
      "— orzular sari 🌠",
      2000,
      "— yuragingiz uchun ❤️",
      3000,
    ],
    ru: [
      2000,
      "— с вдохновением ✨",
      2000,
      "— ради приключений 🧭",
      2000,
      "— с духом свободы 🕊️",
      2000,
      "— с незабываемыми моментами 📸",
      2000,
      "— с эмоциями 💖",
      2000,
      "— ради открытий 🔎",
      2000,
      "— на лоне природы 🌳",
      2000,
      "— по следам культуры 🏛️",
      2000,
      "— к мечтам 🌠",
      2000,
      "— для вашего сердца ❤️",
      3000,
    ],
    en: [
      2000,
      "— with inspiration ✨",
      2000,
      "— for adventure 🧭",
      2000,
      "— with the spirit of freedom 🕊️",
      2000,
      "— with unforgettable moments 📸",
      2000,
      "— with emotions 💖",
      2000,
      "— for discovery 🔎",
      2000,
      "— in the heart of nature 🌳",
      2000,
      "— in pursuit of culture 🏛️",
      2000,
      "— towards dreams 🌠",
      2000,
      "— for your heart ❤️",
      3000,
    ],
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <TypeAnimation
          speed={50}
          repeat={Infinity}
          className="inline-block"
          sequence={data[locale]}
        />
      ) : (
        // This will be rendered during SSR and initial hydration
        <span className="inline-block">Fergana Favorit Avto Trans</span>
      )}
    </>
  );
}
