"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function Title() {
  const [isMounted, setIsMounted] = useState(false);

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
          sequence={[
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
          ]}
        />
      ) : (
        // This will be rendered during SSR and initial hydration
        <span className="inline-block">— ilhom bilan ✨</span>
      )}
    </>
  );
}
