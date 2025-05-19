import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import Logo from "./layout/Logo";
import ContactForm from "./layout/ContactForm";

function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="align-elements">
        <ContactForm />
        <div className="flex flex-col items-center gap-5 border-b border-white py-7 md:flex-row md:justify-between">
          <Logo />
          <ul className="flex justify-center gap-5">
            <li>
              <Link href="/about" className="text-white">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link href="/" className="text-3xl text-white">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-3xl text-white">
                <FaTelegram />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-3xl text-white">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 py-7 text-center md:flex-row md:justify-between">
          <p className="text-white">
            Travel. &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p>
            <Link href="/" className="text-white">
              Privacy Policy
            </Link>
            <span className="mx-5 text-white">|</span>
            <Link href="/" className="text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
