"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PopularDestinations() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const destinations = [
    {
      title: "Marg'ilon — Rishton — Qo'qon",
      img: "./images/popular-1.jpg",
      description: "",
      aos: "fade-right",
    },
    {
      title: "Samarqand + Buxoro",
      img: "./images/popular-2.jpg",
      description:
        "Yer yuzining sayqali va Islom dinining quvvati deya ta'rif berilgan betakror maskanlarni ziyorat qilishingiz uchun ajoyib imkoniyat!",
      aos: "zoom-in-up",
      wide: true,
    },
    {
      title: "Qo'qon — Rishton",
      img: "./images/popular-3.jpg",
      description: "",
      aos: "fade-left",
    },
    {
      title: "Burj Khalifa",
      img: "./images/dubai-1.jpg",
      description:
        "Dunyoning eng baland minorasi — Dubayning ramzi. Unutilmas manzara va yoritilgan kechalar.",
      aos: "flip-left",
    },
    {
      title: "Palm Jumeirah",
      img: "./images/dubai-2.jpg",
      description:
        "Sun'iy orol — Palm Jumeirah, hashamatli mehmonxonalar va plyajlar joylashgan maskan.",
      aos: "fade-up",
    },
    {
      title: "Dubai Mall",
      img: "./images/dubai-3.jpg",
      description:
        "Jahonning eng yirik savdo markazi, ichida akvarium, muz maydoni va yana ko‘p narsa mavjud.",
      aos: "zoom-in",
    },
    {
      title: "Sharm El-Sheikh",
      img: "./images/sharm-el-sheikh.jpg",
      description:
        "Qizil dengiz sohilidagi mashhur kurort shahri. Toza plyajlar, ajoyib suv osti dunyosi va zamonaviy dam olish maskanlari.",
      aos: "fade-up",
      wide: true,
    },
  ];

  return (
    <section id="special-suggest" className="popular-destinations px-4 py-12">
      <div className="align-elements mb-10 flex flex-col gap-5 text-left">
        <h1 className="text-4xl font-bold uppercase">MAXSUS PAKETLAR:</h1>
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
