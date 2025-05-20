"use client";

import React, { useState } from "react";
import Select from "react-select";
import "country-flag-icons/react/3x2"; // flaglar uchun CSS

// Til variantlari
const languages = [
  {
    value: "uz",
    label: (
      <div className="flex items-center gap-2">
        <span className="flag-icon flag-icon-uz" />
        <img
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg"
          width={20}
        />
        <span>O'zbek</span>
      </div>
    ),
  },
  {
    value: "ru",
    label: (
      <div className="flex items-center gap-2">
        <span className="flag-icon flag-icon-ru" />
        <img
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
          width={20}
        />
        <span>Русский</span>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex items-center gap-2">
        <span className="flag-icon flag-icon-gb" />
        <img
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          width={20}
        />
        <span>Engilsh</span>
      </div>
    ),
  },
];

// Stil sozlamalari
const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "6px",
    boxShadow: "none",
    cursor: "pointer",
    minHeight: "auto",
    padding: "4px 5px",
    color: "white",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    padding: "0 4px",
    "&:hover": {
      color: "white",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "white",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#4b5563"
      : state.isFocused
        ? "#9ca3af"
        : "white",
    color: state.isSelected || state.isFocused ? "white" : "#333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    borderRadius: "6px",
    overflow: "hidden",
  }),
};

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleChange = (selectedOption) => {
    setSelectedLang(selectedOption);
  };

  return (
    <div
      style={{ width: 160 }}
      className="language-selector hidden md:inline-block"
    >
      <Select
        value={selectedLang}
        onChange={handleChange}
        options={languages}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageSelector;
