"use client";

import React, { useState, useEffect } from "react";

export default function Schedule() {
  const [filters, setFilters] = useState({
    date: "",
    discipline: "",
    venue: "",
  });
  const [schedule, setSchedule] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recordsPerPage = 10;

  // Fetch data from the backend
  const fetchData = async (page, filters) => {
    const query = new URLSearchParams({
      page,
      date: filters.date || "",
      discipline: filters.discipline || "",
      venue: filters.venue || "",
    });
    // const res = await fetch(`/api/schedule?${query}`);
    const res = await fetch(`http://localhost:5000/athlete/getSchedules?${query}`);
    const data = await res.json();
    console.log(data);
    
    setSchedule(data.schedules);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchData(currentPage, filters);
  }, [currentPage, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1); // Reset to page 1 when filters are applied
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="pt-20 p-6 bg-white min-h-screen">
      <header className="text-center py-6 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Overall Schedule</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-outline">Schedule & Results</button>
          <button className="btn btn-outline">Schedule Overview</button>
        </div>
      </header>

      <div className="flex gap-4 mt-6 p-4 bg-white rounded shadow-md">
        {/* <input
          type="date"
          className="input input-bordered bg-white"
          value={filters.date}
          onChange={(e) => handleFilterChange("date", e.target.value)}
        /> */}
        {/* <input
          type="text"
          placeholder="Discipline"
          className="input input-bordered bg-white"
          value={filters.discipline}
          onChange={(e) => handleFilterChange("discipline", e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="Venue"
          className="input input-bordered bg-white"
          value={filters.venue}
          onChange={(e) => handleFilterChange("venue", e.target.value)}
        />
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="text-gray-800 p-2 text-lg font-bold">Date</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Start Time</th>
              <th className="text-gray-800 p-2 text-lg font-bold">End Time</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Discipline</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Event</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Gender</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Venue</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Location</th>
              <th className="text-gray-800 p-2 text-lg font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((event, index) => (
              <tr key={index}>
                <td className="p-2">{event.day}</td>
                <td className="p-2">{new Date(event.start_date).toLocaleTimeString()}</td>
                <td className="p-2">{new Date(event.end_date).toLocaleTimeString()}</td>
                <td className="p-2">{event.discipline}</td>
                <td className="p-2">{event.event}</td>
                <td className="p-2">{event.gender}</td>
                <td className="p-2">{event.venue}</td>
                <td className="p-2">{event.location_description}</td>
                <td className="p-2">{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className="btn btn-outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
