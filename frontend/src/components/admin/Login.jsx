import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.token);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-inter px-4">
      <div className="bg-cWhite bg-opacity-10 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome To Login Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              className="text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-lg   text-cBlack border-1 rounded-lg border-cDarkBlue shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              style={{
                borderImage: "linear-gradient(to right, #3b82f6, #9333ea) 1",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              className="text-lg font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-lg  text-cBlack border-1  border-cDarkBlue rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              style={{
                borderImage: "linear-gradient(to right, #3b82f6, #9333ea) 1",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold text-lg py-2 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
