import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="bg-[#FAFAFA] text-black py-12 px-4 sm:px-8  font-inter flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
      {/* Content Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-textGray">
          - Encourage visitors to subscribe to ITSOLERA's <br></br> newsletter
          for updates, promotions, and exclusive content.
        </p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-4 md:w-1/2 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border bg-cWhite border-textGray rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cDarkBlue to-CPurple hover:opacity-75 text-cWhite font-medium py-2 px-6 rounded w-full sm:w-auto h-full transition duration-300 ease-in-out hover:bg-gray-100 hover:bg-gradient-to-r hover:from-cDarkBlue hover:to-CPurple"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
