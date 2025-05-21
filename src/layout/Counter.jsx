"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function Counter() {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Counter");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); // faqat bir marta ishga tushsin
        }
      },
      { threshold: 0.8 }, // 30% ko‘rinsa yetarli
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="counter"
        data-aos="fade-up"
        data-aos-offset="400"
        ref={counterRef}
        className="align-elements"
      >
        <div className="counter flex flex-col rounded-xl px-10 py-20 text-center text-white md:mb-10 md:h-[700px]">
          <h2
            data-aos="fade-up"
            data-aos-offset="150"
            className="mb-5 text-center text-4xl md:text-left md:text-6xl"
          >
            {t("heading")}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="150"
            className="mb-20 text-center text-xl md:text-left"
          >
            {t("description1")}
          </p>
          <p className="mb-auto text-center text-xl md:ml-auto md:w-[360px] md:text-right md:text-2xl">
            {t("description2")}
          </p>

          <ul className="counter-list mt-10 hidden justify-between gap-10 text-3xl md:flex">
            <li className="counter-item">
              {isVisible ? <CountUp start={0} end={100} duration={2} /> : 0} +
              <p> {t("stats.cityDistrict")}</p>
            </li>
            <li data-aos-offset="300" className="counter-item">
              {isVisible ? <CountUp end={1000} duration={2} /> : 0} +
              <p>{t("stats.tours")}</p>
            </li>
            <li data-aos-offset="300" className="counter-item">
              {isVisible ? <CountUp end={121} duration={2} /> : 0} +
              <p>{t("stats.guides")}</p>
            </li>
            <li data-aos-offset="300" className="counter-item">
              {isVisible ? <CountUp end={1541} duration={2} /> : 0} +
              <p>{t("stats.experience")}</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Mobile qismi */}
      <section className="align-elements py-5">
        <ul className="grid grid-cols-2 gap-10 text-xl md:hidden md:text-3xl">
          <li className="counter-item">
            {isVisible ? <CountUp start={0} end={100} duration={2} /> : 0}
            <p>{t("stats.cityDistrict")}</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={1000} duration={2} /> : 0}
            <p>{t("stats.tours")}</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={421} duration={2} /> : 0}
            <p>{t("stats.guides")}</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={1541} duration={2} /> : 0}
            <p>{t("stats.experience")}</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Counter;
