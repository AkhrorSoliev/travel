"use client";
import { FaBus } from "react-icons/fa";
import { MdBusAlert } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import { TbBus } from "react-icons/tb";
import { GiBus } from "react-icons/gi";
import { BsFillBusFrontFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function PartnersSlider() {
  const icons = [
    FaBus,
    MdBusAlert,
    LuBus,
    TbBus,
    GiBus,
    BsFillBusFrontFill,
    FaBus,
    MdBusAlert,
    LuBus,
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {icons.map((Icon, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center p-4 text-white">
            <Icon className="text-5xl md:text-6xl" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PartnersSlider;
