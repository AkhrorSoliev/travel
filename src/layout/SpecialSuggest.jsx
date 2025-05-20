"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

function SpecialSuggest() {
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);
  return (
    <section id="special-suggest" className="special-packages">
      <div className="align-elements">
        <div className="mb-10">
          <h2 className="mb-5 text-2xl uppercase md:text-4xl">
            MAXSUS PAKETLAR:
          </h2>
          <p className="text-sm opacity-80 md:text-xl">
            Sizning ehtiyojlaringizga moslashtirilgan maxsus sayohat
            paketlarimizdan bahramand bo'ling.
          </p>
        </div>
      </div>
      <div className="align-elements flex flex-col gap-5 md:h-auto md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="group relative overflow-hidden rounded-xl"
        >
          <h2 className="absolute top-[10px] right-[10px] z-10 text-5xl text-white/50">
            01
          </h2>
          <img
            src="./images/special-1.jpg"
            alt=""
            className="h-[400px] w-full rounded-xl object-bottom grayscale transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:grayscale-0 md:h-full md:w-[300px]"
          />
          <p className="absolute bottom-[10px] left-[10px] z-10 translate-y-[115%] text-3xl text-white transition duration-300 group-hover:translate-y-[0%]">
            Yer yuzining sayqali va Islom
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="flex flex-col gap-5"
        >
          <div className="relative mb-auto">
            <h2 className="absolute top-[10px] right-[10px] z-10 text-5xl text-white/50">
              02
            </h2>
            <img
              src="./images/special-2.jpg"
              alt=""
              className="h-[300] w-full rounded-xl"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-3 md:my-0 md:flex-row md:gap-5">
            <div>
              <h2 data-aos="zoom-in" className="text-4xl md:text-6xl">
                Ruhingizga sayqal, dilingizga saodat!
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex max-w-[400px] flex-col items-start justify-between gap-2 md:gap-0"
            >
              <p className="mb-5 text-right">
                Oila va yaqinlaringizga unutilmas sovg‘a – ma’naviy ziyorat!
                Islom merosi bo‘lgan Samarqand va Buxoro sizni chorlamoqda!
              </p>
              <Link
                href="#footer"
                className="text-md cursor-pointer self-center self-end rounded border border-black px-3 py-1 text-black transition hover:bg-black hover:text-white md:self-end md:px-5 md:py-2"
              >
                Buyurtma berish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSuggest;
