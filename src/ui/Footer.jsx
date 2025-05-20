import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import Logo from "../layout/Logo";
import ContactForm from "../layout/ContactForm";
import Navigation from "@/components/Navigation";

function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900">
      <div className="align-elements">
        <ContactForm />
        <div className="flex flex-col items-center gap-5 border-b border-white py-7 md:flex-row md:justify-between">
          <Logo />
          <ul className="flex flex-col items-center justify-center gap-5 text-white md:flex-row">
            <Navigation />
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 py-7 text-center md:flex-row md:justify-between">
          <p className="text-white">
            Fergana Favorit Avto Trans. &copy; {new Date().getFullYear()} Barcha
            huquqlar himoyalangan.
          </p>
          <p>
            <Link href="/" className="text-white">
              Maxfiylik siyosati
            </Link>
            <span className="mx-5 text-white">|</span>
            <Link href="/" className="text-white">
              Foydalanish shartlari
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
