"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = (path) => {
    router.push(path);
  };

  const handleLogout = async () => {
    await logout();
    // navigate("/signin"); // Redirect to the sign-in page after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar fixed top-0 shadow-md backdrop-blur-sm shadow-gray-900 rounded-lg border-black border-x border-b z-50">
      <div className="flex-1">
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost text-xl font-extrabold text-black hover:text-gray-700"
        >
          Paris Olympics 2024
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
          {user ? (
            <>
              <li>
                <button
                  onClick={() => navigate("/schedule")}
                  className="hover:text-gray-700 transition duration-200"
                >
                  Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/medalists")}
                  className="hover:text-gray-700 transition duration-200"
                >
                  Medalists
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/highlights")}
                  className="hover:text-gray-700 transition duration-200"
                >
                  Highlights
                </button>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="hover:text-gray-700 transition duration-200"
                >
                  {user?.name || "User"}
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-300">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => navigate("/signin")}
                className="hover:text-gray-700 transition duration-200"
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
