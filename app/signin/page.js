'use client'

import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function SignIn() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", cfPassword: "", gender: "", country: "" });
    const handleInputs = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    // console.log(formData);
    const { login } = useAuth();
    
    const postData = async (e) => {
      e.preventDefault();
      const { email, password} = formData;
      // console.log(formData);
      
      // try {
        await login(email,password)
        // await register(name, email, gender, password, cfPassword, country);
    }
  return (
    <div
      className="pt-16 flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/olympics-logo-in-white-92ps4sftjgakuf2f.jpg')",
      }}
    >
      <div className="card w-96 bg-black/70 shadow-2xl rounded-lg overflow-hidden">
        <div className="card-body bg-white/90 rounded-lg p-8">
          <h1 className="card-title text-3xl font-bold text-center text-gray-700 mb-6">
            Sign In
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="email"
                value={formData.email}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="password"
                value={formData.password}
                onChange={handleInputs}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
              onClick={postData}
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
