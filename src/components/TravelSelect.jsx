"use client";

import React from "react";

import Select from "react-select";
import { tourPackages } from "./data";

export const TravelSelect = ({ label }) => {
  return (
    <>
      <label className="grow">
        <span className="mb-2 inline-block">{label}</span>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={
            tourPackages[Math.floor(Math.random() * tourPackages.length)]
          }
          name="region"
          options={tourPackages}
          maxMenuHeight={200}
        />
      </label>
    </>
  );
};
