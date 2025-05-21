"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DataPicker({
  selected,
  onChange,
  label = "Sanani tanlang",
  placeholder = "Sanani tanlang",
}) {
  const [startDate, setStartDate] = useState(selected || null);

  const handleChange = (date) => {
    setStartDate(date);
    onChange && onChange(date);
  };

  return (
    <div className="data-picker grow">
      <span className="mb-2 block">{label}:</span>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        className="w-full rounded-lg border border-gray-300 px-3 py-[6px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
        popperPlacement="bottom-start"
        calendarClassName="rounded-lg shadow-lg"
      />
    </div>
  );
}
