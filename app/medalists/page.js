"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Medalists() {

      const router = useRouter();
    
      const navigate = (path) => {
        router.push(path);
      };
  const [filters, setFilters] = useState({
    country: "",
    gender: "",
    totalMedals: "",
    date: "",
  });

  const [medalists, setMedalists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchMedalists = async () => {
      try {
        const response = await fetch('http://localhost:5000/athlete/getMedallists');
        const data = await response.json();
        
        setMedalists(data.medallists); // Set data in state
      } catch (error) {
        console.error("Error fetching medalists:", error);
      }
    };

    fetchMedalists();
  }, []); // Empty dependency array means it runs only once when the component mounts
  // console.log(medalists);
  
  const handleFilterChange = (key, value) => {
    
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1); // Reset to the first page when filters are changed
  };
// console.log(filters);

  // Apply filters to medalists
  const filteredMedalists = medalists.filter((medalist) => {
    return (
      (!filters.country || medalist.country_code.includes(filters.country)) &&
      (!filters.gender || medalist.gender === filters.gender) &&
      (!filters.totalMedals || medalist.total >= parseInt(filters.totalMedals)) &&
      (!filters.date || medalist.date === filters.date)
    );
  });
  // let filteredMedalists= medalists
  // Calculate paginated data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const paginatedMedalists = filteredMedalists.slice(
    indexOfFirstRow,
    indexOfLastRow
  );

  const totalPages = Math.ceil(filteredMedalists.length / rowsPerPage);

  return (
    <div className="pt-20 p-6 bg-white min-h-screen">
      <header className="text-center py-6 bg-blue-500 text-black">
        <h1 className="text-4xl font-bold">MEDALISTS</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => navigate("/medals")} className="btn btn-outline">Medal Table</button>
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
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {/* <input
          type="number"
          placeholder="Total Medals"
          className="input input-bordered bg-white"
          value={filters.totalMedals}
          onChange={(e) => handleFilterChange("totalMedals", e.target.value)}
        /> */}
        {/* <input
          type="date"
          className="input input-bordered bg-white"
          value={filters.date}
          onChange={(e) => handleFilterChange("date", e.target.value)}
        /> */}
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="text-gray-800 p-2 text-lg font-bold">Country Code</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Medallist</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Medal Type</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Event</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Event Type</th>
              {/* <th className="p-2 text-lg font-bold">Total</th> */}
              <th className="text-gray-800 p-2 text-lg font-bold">Gender</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMedalists.map((medalist, index) => (
              <tr key={index}>
                <td className="p-2">{medalist.country_code}</td>
                <td className="p-2">{medalist.name}</td>
                <td className="p-2">{medalist.medal_type}</td>
                <td className="p-2">{medalist.event}</td>
                <td className="p-2">{medalist.event_type}</td>
                {/* <td className="p-2">{medalist.total}</td> */}
                <td className="p-2">{medalist.gender}</td>
                <td className="p-2">{medalist.medal_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="btn btn-outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
