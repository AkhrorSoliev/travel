"use client";
import PartnersSlider from "../components/PartnersSlider";
import { TravelSelect } from "../components/TravelSelect";
import DataPicker from "../components/DataPicker";
import Title from "../components/Title";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../layout/Logo";
import Navigation from "@/components/Navigation";
import { Squash as Hamburger } from "hamburger-react";
import HiddenNavigation from "@/components/HiddenNavigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import TourBookingModal from "@/components/Modal";

function Header() {
  const t = useTranslations("Header");
  const [show, showNavbar] = useState(false);
  const [tourData, setTourData] = useState("");
  const [tourDate, setTourDate] = useState("");

  const [modal, setModal] = useState({
    isOpen: false,
    tour: "",
    date: "",
  });

  const handleOpenModal = () => {
    setModal({ isOpen: true, tour: tourData.label, date: tourDate });
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [show]);

  return (
    <>
      <header className="header mb-20 pb-24">
        <div className="align-elements">
          <div className="mb-10 flex items-center gap-6 py-8 md:flex-row">
            <Logo />
            <ul className="header-nav hidden justify-center gap-6 text-white md:flex">
              <Navigation />
            </ul>
            <LanguageSelector />
            <button
              onClick={() => showNavbar(!show)}
              className="nav-toggler hidden"
            >
              <Hamburger color="white" toggled={show} />
            </button>
          </div>
        </div>
        <HiddenNavigation show={show} showNavbar={showNavbar} />

        <div className="align-elements text-center text-white">
          <p className="text-lg md:text-3xl">{t("title")}</p>
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-7xl">
            <span className="uppercase"> {t("subtitle")}</span>
            <br />
            <Title />
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base md:text-xl">
            {t("description")}
          </p>
        </div>
        <div className="align-elements relative z-50 mb-10 md:mb-20">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-white p-3 md:flex-row md:p-5">
            <TravelSelect label={t("tours")} setTourData={setTourData} />
            <DataPicker
              label={t("selectDate")}
              placeholder={t("selectDate")}
              setTourDate={setTourDate}
            />
            <button
              onClick={() => handleOpenModal()}
              className="text-md cursor-pointer self-end rounded border border-black px-3 py-1 text-black transition hover:bg-black hover:text-white md:px-5 md:py-2"
            >
              {t("order")}
            </button>
          </div>
          -
        </div>
        <PartnersSlider />
      </header>
      {modal.isOpen && (
        <TourBookingModal
          tour={modal.tour}
          date={modal.date}
          onClose={() => setModal({ isOpen: false, tour: "", date: "" })}
        />
      )}
    </>
  );
}

export default Header;
