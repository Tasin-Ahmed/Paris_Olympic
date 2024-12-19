"use client";

import React, { useState } from "react";

export default function Schedule() {
  const [filters, setFilters] = useState({
    date: "",
    discipline: "",
    venue: "",
  });

  const [schedule, setSchedule] = useState([
    {
      start_date: "2024-07-24T15:00:00+02:00",
      end_date: "2024-07-24T16:45:00+02:00",
      day: "2024-07-24",
      status: "FINISHED",
      discipline: "Football",
      event: "Men's Group B",
      gender: "M",
      venue: "Geoffroy-Guichard Stadium",
      location_description: "Saint-Etienne",
    },
    {
      start_date: "2024-07-24T15:30:00+02:00",
      end_date: "2024-07-24T15:46:00+02:00",
      day: "2024-07-24",
      status: "FINISHED",
      discipline: "Rugby Sevens",
      event: "Men's Pool B",
      gender: "M",
      venue: "Stade de France",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-24T16:00:00+02:00",
      end_date: "2024-07-24T17:30:00+02:00",
      day: "2024-07-24",
      status: "SCHEDULED",
      discipline: "Basketball",
      event: "Women's Group A",
      gender: "F",
      venue: "Accor Arena",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-25T10:00:00+02:00",
      end_date: "2024-07-25T11:45:00+02:00",
      day: "2024-07-25",
      status: "SCHEDULED",
      discipline: "Archery",
      event: "Men's Individual",
      gender: "M",
      venue: "Eiffel Tower Stadium",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-25T12:00:00+02:00",
      end_date: "2024-07-25T13:45:00+02:00",
      day: "2024-07-25",
      status: "ONGOING",
      discipline: "Artistic Gymnastics",
      event: "Men's Qualification",
      gender: "M",
      venue: "Bercy Arena",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-25T14:00:00+02:00",
      end_date: "2024-07-25T15:30:00+02:00",
      day: "2024-07-25",
      status: "FINISHED",
      discipline: "Swimming",
      event: "Women's 100m Freestyle",
      gender: "F",
      venue: "Olympic Aquatics Centre",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-26T08:30:00+02:00",
      end_date: "2024-07-26T09:15:00+02:00",
      day: "2024-07-26",
      status: "FINISHED",
      discipline: "Cycling",
      event: "Men's Road Race",
      gender: "M",
      venue: "Champs-Élysées",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-26T10:00:00+02:00",
      end_date: "2024-07-26T11:30:00+02:00",
      day: "2024-07-26",
      status: "SCHEDULED",
      discipline: "Judo",
      event: "Women's -57kg",
      gender: "F",
      venue: "Le Bourget",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-26T12:00:00+02:00",
      end_date: "2024-07-26T13:45:00+02:00",
      day: "2024-07-26",
      status: "SCHEDULED",
      discipline: "Tennis",
      event: "Men's Singles Round 1",
      gender: "M",
      venue: "Roland Garros",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-26T14:00:00+02:00",
      end_date: "2024-07-26T15:45:00+02:00",
      day: "2024-07-26",
      status: "ONGOING",
      discipline: "Badminton",
      event: "Women's Singles",
      gender: "F",
      venue: "Paris Expo Porte de Versailles",
      location_description: "Paris",
    },
    {
      start_date: "2024-07-27T09:00:00+02:00",
      end_date: "2024-07-27T10:45:00+02:00",
      day: "2024-07-27",
      status: "FINISHED",
      discipline: "Volleyball",
      event: "Men's Preliminary Round",
      gender: "M",
      venue: "Paris Volleyball Arena",
      location_description: "Paris",
    },
  ]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredSchedule = schedule.filter((event) => {
    return (
      (!filters.date || event.day === filters.date) &&
      (!filters.discipline || event.discipline.includes(filters.discipline)) &&
      (!filters.venue || event.venue.includes(filters.venue))
    );
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="text-center py-6 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Overall Schedule</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-outline">Schedule & Results</button>
          <button className="btn btn-outline">Schedule Overview</button>
        </div>
      </header>

      <div className="flex gap-4 mt-6 p-4 bg-white rounded shadow-md">
        <input
          type="date"
          className="input input-bordered bg-white"
          value={filters.date}
          onChange={(e) => handleFilterChange("date", e.target.value)}
        />
        <input
          type="text"
          placeholder="Discipline"
          className="input input-bordered bg-white"
          value={filters.discipline}
          onChange={(e) => handleFilterChange("discipline", e.target.value)}
        />
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
        <th className="p-2 text-lg font-bold">Date</th>
        <th className="p-2 text-lg font-bold">Start Time</th>
        <th className="p-2 text-lg font-bold">End Time</th>
        <th className="p-2 text-lg font-bold">Discipline</th>
        <th className="p-2 text-lg font-bold">Event</th>
        <th className="p-2 text-lg font-bold">Gender</th>
        <th className="p-2 text-lg font-bold">Venue</th>
        <th className="p-2 text-lg font-bold">Location</th>
        <th className="p-2 text-lg font-bold">Status</th>
      </tr>
    </thead>
    <tbody>
      {filteredSchedule.map((event, index) => (
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

    </div>
  );
}
