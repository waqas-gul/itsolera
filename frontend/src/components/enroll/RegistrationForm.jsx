import React, { useRef } from "react";
import Itsolera from "../../assets/images/Itsolera.svg";
import axios from "axios";
import Swal from "sweetalert2";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
function RegistrationForm() {
  // Create refs for all form fields
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const courseRef = useRef();
  const educationRef = useRef();
  const highestDegreeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data using refs
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      course: courseRef.current.value,
      education: educationRef.current.value,
      highestDegree: highestDegreeRef.current.value,
    };

    try {
      // Send POST request to backend
      const response = await axios.post(
        `${BACKEND_URL}/api/registrations`,
        formData
      );

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Thanks !",
        text: "Registration submitted successfully!",
        confirmButtonColor: "#3085d6",
        showConfirmButton: false, // Hide the "OK" button
        timer: 1500,
      });

      // Reset form fields after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Registration failed:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.response?.data?.message ||
          "An error occurred while submitting the form",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center font-inter bg-[#FDF6F0] py-16"
      id="courseRegistrationForm"
    >
      <div className=" w-full max-w-3xl py-10 px-8 shadow-lg bg-cWhite rounded-lg">
        <div className="flex justify-center mb-8">
          <img src={Itsolera} alt="Logo" className="h-12" />
        </div>
        <h1 className="text-2xl font-bold text-center text-cDarkBlue mb-6">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                First Name:
              </label>
              <input
                type="text"
                ref={firstNameRef}
                placeholder="Enter your first name"
                className="w-full sm:w-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Last Name:
              </label>
              <input
                type="text"
                ref={lastNameRef}
                placeholder="Enter your last name"
                className="w-full sm:w-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
            </div>

            {/* Gender and Age */}
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Gender:
              </label>
              <select
                ref={genderRef}
                className="w-full sm:w-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Age:
              </label>
              <input
                type="number"
                ref={ageRef}
                placeholder="Enter your age"
                className="w-full sm:w-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Email:
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full sm:w-[700px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
            </div>

            {/* City */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                City:
              </label>
              <input
                type="text"
                ref={cityRef}
                placeholder="Enter your city name"
                className="w-full sm:w-[700px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
            </div>

            {/* Select course */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Courses:
              </label>
              <select
                ref={courseRef}
                className="w-full sm:w-[700px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              >
                <option value="">Select Course</option>
                <option value="AI">AI</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Education:
              </label>
              <select
                ref={educationRef}
                className="w-full sm:w-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              >
                <option value="">Select Education</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-medium text-cDarkBlue mb-1">
                Highest Degree:
              </label>
              <input
                type="text"
                ref={highestDegreeRef}
                placeholder="Enter your degree"
                className="w-full sm:w-[350px] px-4 py-2 block border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-CPurple focus:outline-none"
                required
              />
              <span className="text-sm text-textGray">
                E.g, Software Engineering
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
