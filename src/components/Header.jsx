import Link from "next/link";
import { FaBusAlt } from "react-icons/fa";
import PartnersSlider from "./PartnersSlider";
import { TravelSelect } from "./TravelSelect";
import DataPicker from "./DataPicker";
import Title from "./Title";

function Header() {
  return (
    <header className="header pb-24">
      <div className="align-elements">
        <div className="mb-10 flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 self-center text-2xl text-white hover:opacity-80 md:text-4xl"
          >
            <FaBusAlt /> SAYOHAT
          </Link>

          <ul className="hidden justify-center gap-6 md:flex">
            <li>
              <Link href="/about" className="text-white hover:opacity-80">
                Yo'nalishlar
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:opacity-80">
                Turlar
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white hover:opacity-80">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white hover:opacity-80">
                Blog
              </Link>
            </li>
          </ul>

          <Link
            href="/"
            className="text-md hidden rounded border border-white px-5 py-2 text-white transition hover:bg-white hover:text-zinc-900 md:inline-block"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>

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
