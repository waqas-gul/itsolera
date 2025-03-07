import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa"; // Import icons from react-icons

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-inter shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <div className="flex items-center bg-gray-800 rounded-lg p-2 w-full max-w-md mx-auto shadow-md transition-all hover:shadow-lg focus-within:shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-full rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <FaSearch className="text-gray-400 ml-2" size={20} />
        </div>

        {/* Notification & User Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <FaBell size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaUser size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
