"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function Counter() {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        data-aos="fade-up"
        data-aos-offset="600"
        ref={counterRef}
        className="align-elements counter flex flex-col py-10 text-center text-white md:mb-10 md:h-[600px]"
      >
        <h2
          data-aos="fade-up"
          data-aos-offset="150"
          className="mb-5 text-center text-4xl md:text-left md:text-6xl"
        >
          UNUTILMAS XOTIRALAR SIFAT BILAN BOSHLANADI
        </h2>
        <p
          data-aos="fade-up"
          data-aos-offset="150"
          className="mb-20 text-center text-xl md:text-left"
        >
          Unutilmas xotiralar uchun — faqat yuqori sifat. Bizga ishonchingiz
          ortishi uchun raqamlarimizga qarang — sarguzashtni birga boshlaymiz!
        </p>
        <p className="mb-auto text-center text-xl md:ml-auto md:w-[360px] md:text-right md:text-2xl">
          Siz — eng yaxshisiga loyiqsiz! Raqamlarimizga qarang va yo‘lga
          chiqing!
        </p>

        <ul className="mt-10 hidden justify-between gap-10 text-3xl md:flex">
          <li data-aos="fade-up" data-aos-offset="300" className="counter-item">
            {isVisible ? <CountUp start={0} end={100} duration={2} /> : 0} +
            <p>shaxar/tuman</p>
          </li>
          <li data-aos="fade-up" data-aos-offset="300" className="counter-item">
            {isVisible ? <CountUp end={1000} duration={2} /> : 0} +
            <p>Sayohat</p>
          </li>
          <li data-aos="fade-up" data-aos-offset="300" className="counter-item">
            {isVisible ? <CountUp end={121} duration={2} /> : 0} +
            <p>Yo'l ko'rsatuvchi</p>
          </li>
          <li data-aos="fade-up" data-aos-offset="300" className="counter-item">
            {isVisible ? <CountUp end={1541} duration={2} /> : 0} +
            <p>tajriba</p>
          </li>
        </ul>
      </section>

      {/* Mobile qismi */}
      <section className="align-elements py-5">
        <ul className="grid grid-cols-2 gap-10 text-xl md:hidden md:text-3xl">
          <li className="counter-item">
            {isVisible ? <CountUp start={0} end={100} duration={2} /> : 0}
            <p>City</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={1000} duration={2} /> : 0}
            <p>Tour</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={421} duration={2} /> : 0}
            <p>Guide</p>
          </li>
          <li className="counter-item">
            {isVisible ? <CountUp end={1541} duration={2} /> : 0}
            <p>Experience</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Counter;
