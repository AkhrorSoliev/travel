"use client";

import React from "react";

import Select from "react-select";
import { regionOptions } from "./data";

export const TravelSelect = ({ label }) => {
  return (
    <>
      <label className="w-full">
        <span className="mb-2 inline-block">{label}</span>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={
            regionOptions[Math.floor(Math.random() * regionOptions.length)]
          }
          name="region"
          options={regionOptions}
          maxMenuHeight={200}
        />
      </label>
    </>
  );
};
