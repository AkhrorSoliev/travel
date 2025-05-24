"use client";

import TourBookingModal from "@/components/Modal";
import { useTranslations } from "next-intl";
import { useState } from "react";

function SpecialSuggest() {
  const [modal, setModal] = useState({
    isOpen: false,
    tour: "",
    date: "",
  });

  const handleOpenModal = (tour, date = "") => {
    setModal({ isOpen: true, tour, date });
  };

  const t = useTranslations("SpecialSuggest");
  return (
    <section id="popular-destinations" className="popular-destinations">
      <div className="align-elements mb-10 flex flex-col gap-5">
        <h1 className="text-4xl"> {t("title")}:</h1>
        <p className="text-sm opacity-80 md:text-xl">{t("description")}</p>

        {/* First Row - Original Packages */}
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative w-[100%] rounded-xl md:w-[25%]"
          >
            <img
              src="./images/popular-1.jpg"
              className="popular-img rounded-xl transition duration-300 md:mb-3 md:group-hover:scale-110"
              alt=""
            />
            <h3 className="text-3xl">{t("package1.title")}</h3>
            <div className="absolute top-0 p-4">
              <div className="flex justify-end">
                <button
                  className="cursor-pointer self-end rounded border border-white px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:px-5 md:py-2"
                  onClick={() => handleOpenModal(t("package1.title"))}
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="group popular-img-main relative w-[100%] overflow-hidden rounded-xl text-white md:w-[50%]"
          >
            <img
              src="./images/popular-2.jpg"
              className="popular-img relative -z-10 h-[400px] rounded-xl transition duration-300 md:group-hover:scale-110"
              alt=""
            />
            <div className="absolute bottom-0 p-4">
              <h3 className="text-5xl md:mb-3">{t("package2.title")}</h3>
              <p className="mb-5">{t("package2.description")}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(t("package2.title"))}
                  className="text-md cursor-pointer self-end rounded border border-white px-3 py-1 text-white transition hover:bg-white hover:text-black md:px-5 md:py-2"
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="group relative w-[100%] rounded-xl md:w-[25%]"
          >
            <img
              src="./images/popular-3.jpg"
              className="popular-img rounded-xl transition duration-300 md:mb-3 md:group-hover:scale-110"
              alt=""
            />
            <h3 className="text-3xl">{t("package3.title")}</h3>
            <div className="absolute top-0 p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(t("package3.title"))}
                  className="cursor-pointer self-end rounded border border-white px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:px-5 md:py-2"
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - New Packages */}
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative w-[100%] rounded-xl md:w-[33%]"
          >
            <img
              src="./images/sharm-el-sheikh.jpg"
              className="popular-img rounded-xl transition duration-300 md:mb-3 md:group-hover:scale-110"
              alt="Sharm El Sheikh"
            />
            <h3 className="text-3xl">{t("package4.title")}</h3>
            <p className="text-sm opacity-80">{t("package4.description")}</p>
            <div className="absolute top-0 p-4">
              <div className="flex justify-end">
                <button
                  className="cursor-pointer self-end rounded border border-white px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:px-5 md:py-2"
                  onClick={() => handleOpenModal(t("package4.title"))}
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="group relative w-[100%] rounded-xl md:w-[33%]"
          >
            <img
              src="./images/dubai.jpg"
              className="popular-img rounded-xl transition duration-300 md:mb-3 md:group-hover:scale-110"
              alt="Dubai"
            />
            <h3 className="text-3xl">{t("package5.title")}</h3>
            <p className="text-sm opacity-80">{t("package5.description")}</p>
            <div className="absolute top-0 p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(t("package5.title"))}
                  className="cursor-pointer self-end rounded border border-white px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:px-5 md:py-2"
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="group relative w-[100%] rounded-xl md:w-[33%]"
          >
            <img
              src="./images/maldives.jpg"
              className="popular-img rounded-xl transition duration-300 md:mb-3 md:group-hover:scale-110"
              alt="Maldives"
            />
            <h3 className="text-3xl">{t("package6.title")}</h3>
            <p className="text-sm opacity-80">{t("package6.description")}</p>
            <div className="absolute top-0 p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(t("package6.title"))}
                  className="cursor-pointer self-end rounded border border-white px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:px-5 md:py-2"
                >
                  {t("order")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal.isOpen && (
        <TourBookingModal
          tour={modal.tour}
          date={modal.date}
          onClose={() => setModal({ isOpen: false, tour: "", date: "" })}
        />
      )}
    </section>
  );
}

export default SpecialSuggest;
