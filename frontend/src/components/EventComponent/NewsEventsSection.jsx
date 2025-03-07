import React from "react";

const NewsEventsSection = () => {
  return (
    <div
      className="lg:h-[90vh]  flex items-center justify-center bg-cover bg-center text-center font-inter px-4"
      style={{
        backgroundImage: `url('/images/newsAndEvents/news.svg')`, // Update with the correct path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-lg sm:max-w-xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cWhite mb-4">
          NEWS & EVENTS
        </h1>
        <p className="text-cWhite text-base sm:text-lg md:text-xl">
          Stay updated with the latest happenings at ITSOLERA Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default NewsEventsSection;
