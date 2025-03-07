import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loader";

const EventComponent = () => {
  const [events, setEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 4;

  const filters = [
    "All",
    "Workshop",
    "Conference",
    "Events",
    "Moments & Memories",
    "Team Spotlight",
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://62.72.57.47:8080/api/events");
        setEvents(
          Array.isArray(response.data.events) ? response.data.events : []
        );
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredData =
    activeFilter === "All"
      ? events
      : events.filter(
          (item) => item.type?.toLowerCase() === activeFilter.toLowerCase()
        );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = Array.isArray(filteredData)
    ? filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-cDarkBlue py-6 font-inter ">
      {/* Filters */}
      <div className="my-6 bg-cDarkBlue">
        <div className="flex justify-center md:hidden overflow-x-auto space-x-4 px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all transform ${
                activeFilter === filter
                  ? "bg-CPurple text-cWhite shadow-lg scale-105 border-blue-400 outline-offset-2"
                  : "bg-cWhite hover:bg-cDarkBlue hover:text-cWhite hover:scale-105 border-transparent"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* For larger devices */}
        <div className="hidden md:flex justify-center space-x-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all transform ${
                activeFilter === filter
                  ? "bg-CPurple text-cWhite shadow-lg scale-105 border-blue-400 outline-offset-2"
                  : "bg-cWhite hover:bg-cDarkBlue hover:text-cWhite hover:scale-105 border-transparent"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Rendering for Empty State */}
      {paginatedData.length === 0 && !isLoading ? (
        <div className="flex justify-center items-center min-h-screen bg-cDarkBlue">
          <div className="text-cWhite text-lg">
            No events found matching the current filter.
          </div>
        </div>
      ) : (
        <div className="w-full bg-cDarkBlue flex items-center justify-center my-8">
          {/* Events List */}
          <div className="flex flex-col space-y-6 px-12 w-[1200px] md:px-10 lg:px-20">
            <AnimatePresence>
              {paginatedData.map((event) => (
                <NavLink to={`/event/${event._id}`} key={event._id}>
                  <motion.div
                    className="relative bg-cWhite rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden transition-transform transform hover:scale-[1.07] hover:shadow-2xl hover:shadow-[#0000ff] w-full md:w-72 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/3 h-40 md:h-auto">
                      <img
                        src={`http://62.72.57.47:8080/${event.images[7]}`} // Use the first image
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between flex-grow p-6">
                      <div>
                        <h3 className="font-semibold text-2xl py-4 text-cDarkBlue">
                          {event.title}
                        </h3>
                        <div className="flex items-center">
                          <FaLocationDot className="pr-2 text-CPurple text-2xl" />
                          <p className="text-base text-gray-500">
                            {event.location}
                          </p>
                        </div>

                        <div className="flex items-center mt-2">
                          <MdDateRange className="text-CPurple text-2xl" />
                          <p className="text-sm text-textGray ml-2">
                            {new Date(event.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <p>
                        <button className="mt-auto relative top-3 text-cDarkBlue font-semibold hover:underline hover:text-CPurple">
                          READ MORE →
                        </button>
                      </p>
                    </div>
                  </motion.div>
                </NavLink>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              currentPage === index + 1
                ? "bg-CPurple text-cWhite"
                : "bg-cDarkBlue text-cWhite hover:bg-cWhite hover:text-cBlack"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;
