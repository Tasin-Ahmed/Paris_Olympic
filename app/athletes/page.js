
"use client";

import React, { useState } from "react";

export default function Athletes() {
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    sport: "",
  });

  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [athletes, setAthletes] = useState([
    {
      name: "Usain Bolt",
      country: "Jamaica",
      sport: "Athletics",
      achievements: "8 Olympic Gold Medals",
    },
    {
      name: "Simone Biles",
      country: "USA",
      sport: "Gymnastics",
      achievements: "7 Olympic Medals",
    },
    {
      name: "Michael Phelps",
      country: "USA",
      sport: "Swimming",
      achievements: "28 Olympic Medals",
    },
    {
      name: "Katie Ledecky",
      country: "USA",
      sport: "Swimming",
      achievements: "10 Olympic Medals",
    },
    {
      name: "Eliud Kipchoge",
      country: "Kenya",
      sport: "Marathon",
      achievements: "2 Olympic Gold Medals",
    },
  ]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredAndSortedAthletes = athletes
    .filter((athlete) => {
      return (
        (!filters.name || athlete.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.country || athlete.country.toLowerCase().includes(filters.country.toLowerCase())) &&
        (!filters.sport || athlete.sport.toLowerCase().includes(filters.sport.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortKey].localeCompare(b[sortKey]);
      } else {
        return b[sortKey].localeCompare(a[sortKey]);
      }
    });

  return (
    <div className="pt-20 p-6 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen text-white">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4">Athletes</h1>
        <p className="text-lg">Explore athletes and their achievements</p>
      </header>

      <div className="flex flex-wrap gap-4 mt-6 p-4 bg-white bg-opacity-80 rounded shadow-md">
        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-1/3"
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by country"
          className="input input-bordered w-1/3"
          value={filters.country}
          onChange={(e) => handleFilterChange("country", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by sport"
          className="input input-bordered w-1/3"
          value={filters.sport}
          onChange={(e) => handleFilterChange("sport", e.target.value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedAthletes.map((athlete, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-bold mb-2">{athlete.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={`https://flagcdn.com/w40/${athlete.country.slice(0, 2).toLowerCase()}.png`}
                alt={athlete.country}
                className="w-8 h-8 rounded"
              />
              <p>{athlete.country}</p>
            </div>
            <p className="text-gray-800 mb-2">{athlete.sport}</p>
            <p className="text-gray-600">{athlete.achievements}</p>
          </div>
        ))}
      </div>

      <footer className="text-center mt-12 text-white">
      <p>&copy; 2024 Paris Olympics</p>
      </footer>
    </div>
  );
}