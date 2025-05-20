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

function Header() {
  const [show, showNavbar] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [show]);

  return (
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
        <p className="text-lg md:text-3xl">
          UNUTILMAS SAYOHATLAR SIZNI KUTMOQDA
        </p>
        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-7xl">
          <span className="uppercase">Sayohat qilamiz</span>
          <br />
          <Title />
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-base md:text-xl">
          Dunyoning eng qiziqarli manzillarini tajribali jamoamiz tomonidan
          tayyorlangan sayohat paketlari bilan kashf eting.
        </p>
      </div>
      <div className="align-elements relative z-50 mb-10 md:mb-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-white p-3 md:flex-row md:p-5">
          <TravelSelect label="Qayerdan:" />
          <DataPicker />
          <button className="text-md cursor-pointer self-end rounded border border-black px-3 py-1 text-black transition hover:bg-black hover:text-white md:px-5 md:py-2">
            Qidirish
          </button>
        </div>
        -
      </div>
      <PartnersSlider />
    </header>
  );
}

export default Header;
