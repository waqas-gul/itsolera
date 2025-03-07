import React, { useState, useRef } from "react";
import { FaUserTie, FaRupeeSign, FaGlobe, FaClock } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import waqas from "../../assets/images/AboutNewsImage/waqas.jpg";
import RegistrationForm from "./RegistrationForm";
import CertificateSection from "./CertificateSection";

const courses = [
  {
    title: "Machine Learning",
    trainer: "Muhammad Waqas",
    price: "20,000",
    duration: "3 months",
    image: waqas,
  },
  {
    title: "Cyber Security",
    trainer: "Ahsan Khan",
    price: "20,000",
    duration: "3 months",
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg?t=st=1738563288~exp=1738566888~hmac=ce7b5dae2fbfc231f62de1759c92fc8183d16addaf9568cb0581adeeb086a4db&w=740",
  },
  {
    title: "Web Development",
    trainer: "Waqas Gul/Ali Khan",
    price: "15,000",
    duration: "3 months",
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg?t=st=1738563288~exp=1738566888~hmac=ce7b5dae2fbfc231f62de1759c92fc8183d16addaf9568cb0581adeeb086a4db&w=740",
  },
  {
    title: "Digital Marketing",
    trainer: "Dad Rehman",
    price: "15,000",
    duration: "2 months",
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg?t=st=1738563288~exp=1738566888~hmac=ce7b5dae2fbfc231f62de1759c92fc8183d16addaf9568cb0581adeeb086a4db&w=740",
  },
];

const handleEnrollClick = () => {
  const registrationForm = document.getElementById("courseRegistrationForm");
  if (registrationForm) {
    registrationForm.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the start of the container
    });
  }
};

const CoursePage = () => {
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const registrationRef = useRef(null); // Reference for the registration form

  const toggleWeek = (courseIndex, weekIndex) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [`${courseIndex}-${weekIndex}`]: !prev[`${courseIndex}-${weekIndex}`],
    }));
  };

  const handleEnrollClick = (courseIndex) => {
    // Scroll to the registration form when the "Enroll Now" button is clicked
    registrationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-cWhite min-h-screen font-inter">
      {/* Navigation Bar */}
      <div className="bg-cDarkBlue text-cWhite">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 p-4">
          {courses.map((course, index) => (
            <a
              key={index}
              href={`#course${index}`}
              className="text-sm md:text-base font-medium  hover:text-[#E44F25] border p-2 rounded text-center"
            >
              {course.title}
            </a>
          ))}
        </div>
      </div>

      {/* Swiper for Courses */}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-6xl mx-auto p-6"
      >
        {courses.map((course, courseIndex) => (
          <SwiperSlide key={courseIndex} id={`course${courseIndex}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Section - Course Details */}
              <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl text-CPurple font-bold mb-4">
                  {course.title}
                </h1>
                <h2 className="text-2xl font-bold mb-4">Course Description:</h2>
                <p className="text-gray-700">
                  This course provides participants with the skills to excel in{" "}
                  {course.title}.
                </p>

                {/* Course Curriculum */}
                <h2 className="text-xl font-bold mt-6 mb-4">
                  Course Curriculum:
                </h2>
                <div className="space-y-4">
                  {Array.from({ length: 7 }, (_, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="border rounded-lg p-4 bg-gray-100 cursor-pointer"
                      onClick={() => toggleWeek(courseIndex, weekIndex)}
                    >
                      <div className="w-full flex justify-between items-center text-gray-800 font-medium">
                        <span>Week {weekIndex + 1}: Introduction</span>
                        {expandedWeeks[`${courseIndex}-${weekIndex}`] ? (
                          <FiMinus className="text-red-600" />
                        ) : (
                          <FiPlus className="text-green-600" />
                        )}
                      </div>
                      {expandedWeeks[`${courseIndex}-${weekIndex}`] && (
                        <p className="mt-2 text-gray-700">
                          Detailed course content for Week {weekIndex + 1}...
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section - Course Info */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={course.image}
                    alt={course.trainer}
                    className="rounded w-full h-auto object-cover mb-2"
                  />
                  <h3 className="text-lg font-bold text-center flex items-center gap-2">
                    <FaUserTie className="text-blue-600" /> Trainer:{" "}
                    {course.trainer}
                  </h3>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                  <FaRupeeSign className="text-blue-600" /> Price:{" "}
                  <span className="text-blue-600">{course.price}</span>/per
                  month
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaGlobe className="text-blue-600" /> <strong>Mode:</strong>{" "}
                    Online
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-blue-600" />{" "}
                    <strong>Duration:</strong> {course.duration}
                  </li>
                </ul>
                <h4 className="text-xl font-bold mb-2">Schedule:</h4>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Tech Classes: Monday-Thursday, 7:00 PM–9:00 PM</li>
                  <li>Project Practice: Saturday, 5:00 PM–8:00 PM</li>
                </ul>
                {/* Existing Start Learning Button */}
                <button
                  type="button"
                  className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite py-2 px-4 rounded-lg font-semibold  cursor-pointer  hover:bg-cWhite hover:border-CPurple w-full mb-4  transition duration-300 ease-in-out hover:from-CPurple hover:to-cDarkBlue "
                >
                  Start Learning
                </button>

                {/* Enroll Now Button */}
                <button
                  type="button"
                  className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite ml-2 py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-cWhite hover:border-CPurple w-full  transition duration-300 ease-in-out hover:from-CPurple hover:to-cDarkBlue "
                  onClick={handleEnrollClick} // Scroll to RegistrationForm
                >
                  ENROLL NOW →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Registration Form Section */}
      <CertificateSection />
      <div ref={registrationRef}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default CoursePage;
