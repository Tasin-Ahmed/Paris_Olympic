"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="navbar bg-blue-700 text-white shadow-lg font-sans">
      <div className="flex-1">
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost normal-case text-3xl font-extrabold text-white hover:text-gray-300"
        >
          Paris Olympics 2024
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-6 font-medium text-lg">
          <li>
            <button
              onClick={() => navigate("/signin")}
              className="hover:text-gray-300 transition duration-200"
            >
              Sign In
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/schedule")}
              className="hover:text-gray-300 transition duration-200"
            >
              Schedule
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/medalists")}
              className="hover:text-gray-300 transition duration-200"
            >
              Medalists
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/highlights")}
              className="hover:text-gray-300 transition duration-200"
            >
              Highlights
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
