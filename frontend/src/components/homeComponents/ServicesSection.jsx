import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-[34px] font-bold text-customBlue mb-4">
          Our Services
        </h2>
        <p className="text-customBlue text-base mb-12">
          We offer an extensive array of IT services to cater to your unique
          requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Link to="/ai-services">
            <div className="bg-cWhite  shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
              <div className="flex justify-center mb-4">
                <img
                  src={"/images/AI.svg"}
                  alt="Artificial Intelligence"
                  className="h-16"
                />
              </div>
              <h3 className="font-semibold text-2xl text-cDarkBlue mb-2">
                Artificial Intelligence
              </h3>
              <p className="text-cDarkBlue font-thin mb-4">
                Implement AI technologies to drive innovation and efficiency.
              </p>
              <div className="flex justify-center">
                <button className="text-cDarkBlue font-medium hover:underline flex items-center gap-2 outline-none">
                  LEARN MORE <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </Link>

          {/* Service 2 */}
          <Link to="/cyber-security-services">
            <div className="bg-white shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
              <div className="flex justify-center mb-4">
                <img
                  src={"/images/cyber.svg"}
                  alt="Cybersecurity"
                  className="h-16"
                />
              </div>
              <h3 className="font-semibold text-2xl text-cDarkBlue mb-2">
                Cybersecurity
              </h3>
              <p className="text-cDarkBlue font-thin mb-4">
                Protect your digital assets with our robust cybersecurity
                measures.
              </p>
              <div className="flex justify-center">
                <button className="text-cDarkBlue font-medium hover:underline flex items-center gap-2 outline-none">
                  LEARN MORE <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </Link>

          {/* Service 3 */}
          <Link to="/wordpress-services">
            <div className="bg-white shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
              <div className="flex justify-center mb-4">
                <img
                  src={"/images/WordPress.svg"}
                  alt="WordPress"
                  className="h-16"
                />
              </div>
              <h3 className="font-semibold text-2xl text-cDarkBlue mb-2">
                WordPress
              </h3>
              <p className="text-cDarkBlue font-thin mb-4">
                Create reliable and scalable connections with our advanced
                networking solutions.
              </p>
              <div className="flex justify-center">
                <button className="text-cDarkBlue font-medium hover:underline flex items-center gap-2">
                  LEARN MORE <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-12">
          <Link to="/all-services">
            <button className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90">
              All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
