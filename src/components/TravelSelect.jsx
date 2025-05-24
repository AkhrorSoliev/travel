"use client";

import React from "react";
import Select from "react-select";
import { tourPackages } from "./data";
import { useTranslations } from "next-intl";

export const TravelSelect = ({ label }) => {
  const t = useTranslations("TourPackages");
  const formatOptions = (options) => {
    return options.map((option) => ({
      ...option,
      label: t(option.translationKey),
    }));
  };
  const formattedOptions = formatOptions(tourPackages);
  return (
    <>
      <label className="grow">
        <span className="mb-2 inline-block">{label}</span>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={
            formattedOptions[
              Math.floor(Math.random() * formattedOptions.length)
            ]
          }
          name="region"
          options={formattedOptions}
          maxMenuHeight={200}
        />
      </label>
    </>
  );
};
