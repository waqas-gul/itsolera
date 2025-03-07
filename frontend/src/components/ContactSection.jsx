import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
// import form from "../../assets/images/contactUs/form.png";
import form from "../../src/assets/images/contactUs/form.png";

import { FaWhatsappSquare } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-inter sm:px-8 lg:px-24 py-12"
      style={{
        backgroundImage: `url(${form})`, // Background image for the entire section
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section: Contact Info */}
      <div className="flex-1 flex items-center justify-center p-8 bg-cover bg-center text-cWhite">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 sm:text-2xl">Get in Touch:</h2>
          <p className="mb-6 text-base sm:text-sm">
            At <span className="font-semibold">ITSOLERA,</span> we are committed
            to providing exceptional IT solutions and services to meet your
            business needs. Whether you have a question, need support, or want
            to explore our services, we are here to help.
          </p>
          <div className="mb-4 text-base">
            <a href="mailto:info@itsolera.com" className="text-[#C2ABB9]">
              <p className="text-cWhite flex items-center justify-center md:justify-start">
                <MdMarkEmailUnread className="mr-2" />
                Email:
              </p>
              info@itsolera.com
            </a>
          </div>
          <div className="mb-4">
            <a
              href="https://wa.me/923334471066"
              className="text-[#C2ABB9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-cWhite flex items-center justify-center md:justify-start">
                <FaWhatsappSquare className="mr-2" />
                Phone:
              </p>
              +92 333 4471066
            </a>
          </div>
          <div className="mb-4">
            <p className="flex justify-center md:justify-start">
              <FaLocationDot className="mr-2" /> Address:
            </p>
            <p className="text-[#C2ABB9]">
              Javeed Arcade, Office #2A St 3, G-12/1, Islamabad, Pakistan
            </p>
          </div>
          <div>
            <p className="flex justify-center md:justify-start">
              <MdMarkEmailUnread className="mr-2" />
              Sales Inquiries:
            </p>
            <a href="mailto:services@itsolera.com" className="text-[#C2ABB9]">
              services@itsolera.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <form className="bg-cWhite shadow-lg rounded-tl-lg rounded-tr-[150px] rounded-bl-lg rounded-br-lg p-6 w-full sm:w-[90%] md:w-[400px]">
          <h2 className="text-2xl font-bold mb-3 text-center sm:text-xl">
            Contact Form:
          </h2>
          <p className="mb-3 text-center sm:text-sm">
            For any inquiries, please fill out the form below, and we will get
            back to you as soon as possible.
          </p>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Name"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Phone"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-cDarkBlue text-base font-medium mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Your message here..."
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold rounded hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
