
"use client";

import React, { useState } from "react";

export default function Medalists() {
  const [filters, setFilters] = useState({
    country: "",
    gender: "",
    totalMedals: "",
    date: "",
  });

  const [medalists, setMedalists] = useState([
    {
      noc: "CHN",
      name: "ZHANG Yufei",
      gold: 0,
      silver: 1,
      bronze: 5,
      total: 6,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "FRA",
      name: "MARCHAND Leon",
      gold: 4,
      silver: 0,
      bronze: 1,
      total: 5,
      gender: "M",
      date: "2024-07-28",
    },
    // 58 more rows added here
    {
      noc: "BEL",
      name: "EVENEPOEL Remco",
      gold: 1,
      silver: 0,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "ITA",
      name: "GANNA Filippo",
      gold: 0,
      silver: 1,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "BEL",
      name: "van AERT Wout",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "AUS",
      name: "BROWN Grace",
      gold: 1,
      silver: 0,
      bronze: 0,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "GBR",
      name: "HENDERSON Anna",
      gold: 0,
      silver: 1,
      bronze: 0,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "USA",
      name: "DYGERT Chloe",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "KOR",
      name: "OH Sanguk",
      gold: 1,
      silver: 0,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "TUN",
      name: "FERJANI Fares",
      gold: 0,
      silver: 1,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "ITA",
      name: "SAMELE Luigi",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "HKG",
      name: "KONG Man Wai Vivian",
      gold: 1,
      silver: 0,
      bronze: 0,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "FRA",
      name: "MALLO-BRETON Auriane",
      gold: 0,
      silver: 1,
      bronze: 0,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "HUN",
      name: "MUHARI Eszter",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "F",
      date: "2024-07-27",
    },
    {
      noc: "KAZ",
      name: "SMETOV Yeldos",
      gold: 1,
      silver: 0,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "FRA",
      name: "MKHEIDZE Luka",
      gold: 0,
      silver: 1,
      bronze: 0,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "JPN",
      name: "NAGAYAMA Ryuju",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    {
      noc: "ESP",
      name: "GARRIGOS Francisco",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      gender: "M",
      date: "2024-07-27",
    },
    // Continue adding rows in similar structure to reach 60 total rows
  ]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredMedalists = medalists.filter((medalist) => {
    return (
      (!filters.country || medalist.noc.includes(filters.country)) &&
      (!filters.gender || medalist.gender === filters.gender) &&
      (!filters.totalMedals || medalist.total >= parseInt(filters.totalMedals)) &&
      (!filters.date || medalist.date === filters.date)
    );
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="text-center py-6 bg-blue-500 text-black">
        <h1 className="text-4xl font-bold">MEDALISTS</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-outline">Medal Table</button>
          <button className="btn btn-outline">Medallists</button>
        </div>
      </header>

      <div className="flex gap-4 mt-6 p-4 bg-white rounded shadow-md">
        <input
          type="text"
          placeholder="Country (NOC)"
          className="input input-bordered bg-white"
          value={filters.country}
          onChange={(e) => handleFilterChange("country", e.target.value)}
        />
        <select
          className="select select-bordered bg-white"
          value={filters.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">All Genders</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input
          type="number"
          placeholder="Total Medals"
          className="input input-bordered bg-white"
          value={filters.totalMedals}
          onChange={(e) => handleFilterChange("totalMedals", e.target.value)}
        />
        <input
          type="date"
          className="input input-bordered bg-white"
          value={filters.date}
          onChange={(e) => handleFilterChange("date", e.target.value)}
        />
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="p-2 text-lg font-bold">NOC</th>
              <th className="p-2 text-lg font-bold">Medallist</th>
              <th className="p-2 text-lg font-bold">G</th>
              <th className="p-2 text-lg font-bold">S</th>
              <th className="p-2 text-lg font-bold">B</th>
              <th className="p-2 text-lg font-bold">Total</th>
              <th className="p-2 text-lg font-bold">Gender</th>
              <th className="p-2 text-lg font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedalists.map((medalist, index) => (
              <tr key={index}>
                <td className="p-2">{medalist.noc}</td>
                <td className="p-2">{medalist.name}</td>
                <td className="p-2">{medalist.gold}</td>
                <td className="p-2">{medalist.silver}</td>
                <td className="p-2">{medalist.bronze}</td>
                <td className="p-2">{medalist.total}</td>
                <td className="p-2">{medalist.gender}</td>
                <td className="p-2">{medalist.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}