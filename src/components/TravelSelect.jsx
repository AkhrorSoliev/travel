"use client";

import React, { useState, useEffect } from "react";
import { tourPackages } from "./data";
import { useTranslations } from "next-intl";

export const TravelSelect = ({ label, setTourData }) => {
  const t = useTranslations("TourPackages");

  const formattedOptions = tourPackages.map((option) => ({
    ...option,
    label: t(option.translationKey),
  }));

  const getRandomOption = () => {
    return formattedOptions[
      Math.floor(Math.random() * formattedOptions.length)
    ];
  };

  const [selectedOption, setSelectedOption] = useState(getRandomOption());

  useEffect(() => {
    setTourData?.(selectedOption);
  }, []);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const option = formattedOptions.find((opt) => opt.value === selectedValue);
    setSelectedOption(option);
    setTourData?.(option);
  };

  return (
    <label className="grow">
      <span className="mb-2 inline-block">{label}</span>
      <select
        value={selectedOption.value}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
      >
        {formattedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
