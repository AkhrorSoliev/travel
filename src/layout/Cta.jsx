import { useTranslations } from "next-intl";
import React from "react";

function Cta() {
  const t = useTranslations("Cta");
  return (
    <section id="cta" className="cta py-20 text-center text-white md:py-40">
      <div className="align-elements">
        <h2 className="mb-5 text-3xl uppercase md:text-6xl">{t("title")}</h2>
        <p className="text-md mn= mx-auto max-w-3xl md:text-xl">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

export default Cta;
