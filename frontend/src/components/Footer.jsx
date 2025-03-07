import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { IoIosTime } from "react-icons/io";
import {
  FaShieldAlt,
  FaBrain,
  FaCloud,
  FaLink,
  FaCode,
  FaTools,
} from "react-icons/fa"; // Import icons
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import footer from "../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="text-cWhite py-8 font-inter"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src="/images/IT-Solera.svg" // Replace with your logo URL
            alt="ITSolera Logo"
            className="mb-4"
          />
          <p className="text-sm text-lightBlue">
            Join us on a journey of innovation and discovery as we navigate the
            ever-evolving landscape of technology together. Welcome to ITSOLERA
            – where the future of technology begins.
          </p>
        </div>

        {/* Services */}
        <div className="">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <a
                href="/cybersecurity"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaShieldAlt className="mr-2" />
                Cybersecurity
              </a>
            </li>
            <li>
              <a
                href="/artificial-intelligence"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaBrain className="mr-2" />
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a
                href="/cloud-computing"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaCloud className="mr-2" />
                Cloud Computing
              </a>
            </li>
            <li>
              <a
                href="/blockchain"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaLink className="mr-2" />
                Blockchain
              </a>
            </li>
            <li>
              <a
                href="/application-development"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaCode className="mr-2" />
                Application and Web Development
              </a>
            </li>
            <li>
              <a
                href="/expanded-services"
                className="flex items-center hover:text-CPurple transition-colors duration-300"
              >
                <FaTools className="mr-2" />
                Expanded Services
              </a>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4">Business Hours</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <span className="font-semibold  text-[#983139] flex items-center">
                <IoIosTime />
                Monday to Friday:
              </span>{" "}
              9:00 AM - 9:00 PM
            </li>
            <li>
              <span className="font-semibold flex text-[#983139] flez items-center">
                <IoIosTime />
                Saturday:
              </span>{" "}
              10:00 AM - 6:00 PM
            </li>
            <li>
              <span className="font-semibold flex text-[#983139]  items-center">
                <IoIosTime />
                Sunday:
              </span>{" "}
              10:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <span className="font-semibold flex text-[#983139]">
                <FaLocationDot />
                Address:
              </span>{" "}
              Javeed Arcade, Office #2A St 3, G-12/1, Islamabad, Capital
              Territory 46000
            </li>
            <li>
              <span className="font-semibold text-[#983139] flex items-center">
                {" "}
                <FaWhatsapp className="mr-2" />
                Phone:
              </span>{" "}
              <a
                href="https://wa.me/923334471066"
                className="text-blue-400 hover:underline hover:text-CPurple flex items-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 333 4471066
              </a>
            </li>
            <li className="hover:text-CPurple  transition-colors duration-300">
              <span className="font-semibold text-[#983139] flex items-center ">
                <MdMarkEmailUnread className="mr-2" /> Email:
              </span>{" "}
              <a
                href="mailto:info@itsolera.com"
                className="text-blue-400 hover:underline"
              >
                info@itsolera.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-textGray text-textGray mt-8  pt-4 text-center text-sm">
        <p>IT Solera Copyright © 2025. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            Terms of Services
          </a>
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
