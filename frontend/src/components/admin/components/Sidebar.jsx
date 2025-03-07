import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { ImBlogger } from "react-icons/im";
import { SlLogout } from "react-icons/sl";
import { MdVerifiedUser } from "react-icons/md";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineBarChart,
  AiOutlineSetting,
} from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <aside
        className={`bg-gradient-to-r from-cDarkBlue to-CPurple font-inter text-cWhite w-64 flex-shrink-0 hidden md:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <Link
            to={"/admin"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <AiFillHome className="mr-3" size={20} />
            Dashboard
          </Link>

          <Link
            to={"/products"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <AiOutlineShopping className="mr-3" size={20} />
            Products
          </Link>
          <Link
            to={"/events"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <AiOutlineShopping className="mr-3" size={20} />
            Events
          </Link>
          <Link
            to={"/registrationList"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <FaUsers className="mr-3" size={20} />
            Registration
          </Link>
          <Link
            to={"/addBlog"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <ImBlogger className="mr-3" size={20} />
            Blogs
          </Link>
          <Link
            to={"/fileUpload"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <MdVerifiedUser className="mr-3" size={20} />
            Verification Data
          </Link>
          <Link
            to={"/signup"}
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <AiOutlineUser className="mr-3" size={20} />
            Add User
          </Link>

          <Link
            href="#"
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <AiOutlineSetting className="mr-3" size={20} />
            Settings
          </Link>
          <div
            href="#"
            className="flex items-center py-3 px-6 hover:text-[#3B82F6] hover:underline transition duration-300 ease-in-out"
          >
            <SlLogout className="mr-3" size={20} />
            <Logout />
          </div>
        </nav>
      </aside>

      {/* Sidebar toggle button for small screens */}
      <button
        className="md:hidden p-4  bg-cWhite absolute font-semibold left-0 z-50 top-20" // Adjusted top value here (top-4)
        onClick={toggleSidebar} // Toggle the sidebar visibility
      >
        <AiOutlineBarChart size={24} />
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={`bg-cWhite text-white w-full fixed top-0 left-0 h-full transform md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center py-3 px-6 bg-gray-700">
            <AiFillHome className="mr-3" size={20} />
            Dashboard
          </a>
          <a href="#" className="flex items-center py-3 px-6 hover:bg-gray-700">
            <AiOutlineUser className="mr-3" size={20} />
            Users
          </a>
          <a href="#" className="flex items-center py-3 px-6 hover:bg-gray-700">
            <AiOutlineShopping className="mr-3" size={20} />
            Products
          </a>
          <a href="#" className="flex items-center py-3 px-6 hover:bg-gray-700">
            <AiOutlineBarChart className="mr-3" size={20} />
            Analytics
          </a>
          <a href="#" className="flex items-center py-3 px-6 hover:bg-gray-700">
            <AiOutlineSetting className="mr-3" size={20} />
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
