import { Oswald, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

// Oswald font is used for the headings
const OswaldFont = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Poppins font is used for the main text
const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fergana Favorit Avto Trans",
  description:
    "Dunyoning eng qiziqarli manzillarini tajribali jamoamiz tomonidan tayyorlangan sayohat paketlari bilan kashf eting.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html className="h-full" lang={locale}>
      <body className={`${OswaldFont.style} flex h-full flex-col antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <Toaster position="bottom-center" reverseOrder={false} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
