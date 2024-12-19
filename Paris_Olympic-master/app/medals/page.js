"use client";

import React, { useState } from "react";
import Image from "next/image";
import backgroundImage from "../medals/415207.jpg";

export default function Medals() {
  const [filters, setFilters] = useState({
    medalType: "",
    gender: "",
    discipline: "",
  });

  const [medals, setMedals] = useState([
    {
      medal_type: "Gold Medal",
      medal_date: "2024-07-27",
      name: "Remco EVENEPOEL",
      gender: "M",
      discipline: "Cycling Road",
      event: "Men's Individual Time Trial",
      country: "Belgium",
    },
    {
      medal_type: "Silver Medal",
      medal_date: "2024-07-27",
      name: "Filippo GANNA",
      gender: "M",
      discipline: "Cycling Road",
      event: "Men's Individual Time Trial",
      country: "Italy",
    },
    {
      medal_type: "Bronze Medal",
      medal_date: "2024-07-27",
      name: "Wout van AERT",
      gender: "M",
      discipline: "Cycling Road",
      event: "Men's Individual Time Trial",
      country: "Belgium",
    },
    {
      medal_type: "Gold Medal",
      medal_date: "2024-07-27",
      name: "Grace BROWN",
      gender: "W",
      discipline: "Cycling Road",
      event: "Women's Individual Time Trial",
      country: "Australia",
    },
    {
      medal_type: "Silver Medal",
      medal_date: "2024-07-27",
      name: "Anna HENDERSON",
      gender: "W",
      discipline: "Cycling Road",
      event: "Women's Individual Time Trial",
      country: "Great Britain",
    },
  ]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredMedals = medals.filter((medal) => {
    return (
      (!filters.medalType || medal.medal_type.includes(filters.medalType)) &&
      (!filters.gender || medal.gender === filters.gender) &&
      (!filters.discipline || medal.discipline.includes(filters.discipline))
    );
  });

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative p-6">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold mb-4">Medals Page</h1>
          <p className="text-lg">Explore the medals and achievements of athletes</p>
        </header>

        <div className="flex gap-4 mt-6 p-4 bg-white bg-opacity-80 rounded shadow-md backdrop-blur-md">
          <select
            className="select select-bordered w-1/3"
            value={filters.medalType}
            onChange={(e) => handleFilterChange("medalType", e.target.value)}
          >
            <option value="">All Medal Types</option>
            <option value="Gold Medal">Gold</option>
            <option value="Silver Medal">Silver</option>
            <option value="Bronze Medal">Bronze</option>
          </select>
          <select
            className="select select-bordered w-1/3"
            value={filters.gender}
            onChange={(e) => handleFilterChange("gender", e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="M">Male</option>
            <option value="W">Female</option>
          </select>
          <input
            type="text"
            placeholder="Discipline"
            className="input input-bordered w-1/3"
            value={filters.discipline}
            onChange={(e) => handleFilterChange("discipline", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredMedals.map((medal, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-bold mb-2">{medal.name}</h2>
              <p className="text-gray-800 mb-2">{medal.discipline} - {medal.event}</p>
              <p className="text-gray-600 mb-2">{medal.medal_type}</p>
              <p className="text-gray-500">{medal.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
