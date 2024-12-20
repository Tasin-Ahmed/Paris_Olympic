'use client'

import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function SignUp() {

  const [formData, setFormData] = useState({ name: "", email: "", password: "", cfPassword: "", gender: "", country: "" });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);
  const { register } = useAuth();
  
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, gender, password, cfPassword, country } = formData;
    console.log(formData);
    
    // try {
      // await login(email,password)
      await register(name, email, gender, password, cfPassword, country);
  }
  return (
    <div
      className="flex justify-center items-center pt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/olympics-logo-in-white-92ps4sftjgakuf2f.jpg')",
      }}
    >
      <div className="card w-96 bg-white/90 shadow-2xl rounded-lg overflow-hidden">
        <div className="card-body bg-white rounded-lg p-8">
          <h1 className="card-title text-3xl font-bold text-center text-gray-700 mb-6">
            Sign Up
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="full-name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Enter your full name"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="name"
                value={formData.name}
                onChange={handleInputs}
                required
              />
            </div>
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
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="cfPassword"
                value={formData.cfPassword}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="gender" className="block text-gray-700 mb-2">
                Gender
              </label>
              <select
                id="gender"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="gender"
                value={formData.gender}
                onChange={handleInputs}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
           
            <div className="mb-6">
              <label htmlFor="country" className="block text-gray-700 mb-2">
                Country
              </label>
              <select
                id="country"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="country"
                value={formData.country}
                onChange={handleInputs}
                required
              >
                <option value="">Select your country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
              onClick={postData}
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
