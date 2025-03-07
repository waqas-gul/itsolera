import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Assuming role is stored in localStorage

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "You must be an admin to access this page.",
      });
      navigate("/login"); // Redirect non-admins to login
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://62.72.57.47:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include auth token
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "New admin user has been created.",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/dashboard"); // Redirect to admin dashboard
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: data?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Error",
        text: "Failed to connect to the server. Please try again later.",
      });
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite px-4 font-inter">
      <div className="bg-cWhite bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8">
          Create Admin Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter admin email"
              className="w-full px-4 py-2 mt-2 text-lg border-2 border-cDarkBlue text-cBlack rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-lg font-medium" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-2 text-lg text-cBlack border-2 border-cDarkBlue rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 bottom-3 text-gray-600 hover:text-gray-900 transition-all duration-200"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold text-lg py-2 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Signup
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#3b82f6] font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
