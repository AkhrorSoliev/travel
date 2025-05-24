"use client";

import { useState, useEffect } from "react";

export default function DataPicker({
  selected,
  setTourDate,
  label = "Sanani tanlang",
  placeholder = "Sanani tanlang",
}) {
  const formatDate = (date) => {
    return date?.toISOString().split("T")[0]; // yyyy-MM-dd format
  };

  const [startDate, setStartDate] = useState(formatDate(selected) || "");

  useEffect(() => {
    if (selected) {
      setStartDate(formatDate(selected));
    }
  }, [selected]);

  const handleChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
    setTourDate(startDate);
  };

  return (
    <div className="data-picker grow">
      <span className="mb-2 block">{label}:</span>
      <input
        type="date"
        value={startDate}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-[6px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
}
