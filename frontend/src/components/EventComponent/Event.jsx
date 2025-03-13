import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import AboutEventsImage from "../../assets/images/AboutNewsImage/AboutEvents.svg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Event = () => {
  const { id } = useParams(); // Get event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Event not found!");
        setLoading(false);
      });
  }, [id]); // Fetch data when ID changes

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <div className="relative w-full h-[400px] font-inter sm:h-[500px] lg:h-[600px] bg-gray-800 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${AboutEventsImage})`,
          }}
          aria-label="Event background image" // Accessibility enhancement
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 text-cWhite text-center px-4 top-32 sm:px-8 lg:px-16 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            About Our Events
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-cWhite">
            Stay tuned for the latest updates and happenings.
          </p>
        </div>

        {/* Optional Overlay Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      </div>

      <div className="p-4 sm:p-6 bg-cWhite lg:mx-24 sm:mx-5">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-cDarkBlue">
            Hands-On Workshop on Cybersecurity
          </h1>
          <div className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
            <div className="flex justify-center items-center space-x-1">
              <SlCalender className="text-CPurple text-lg" />
              <span className="font-semibold">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex justify-center items-center space-x-1 mt-1">
              <CiLocationOn className="text-CPurple text-lg" />
              <span className="font-semibold text-center">
                {event.location}
              </span>
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="mt-6">
          <h2 className="text-lg sm:text-xl font-bold mx-4 sm:mx-8 lg:mx-16 text-cBlack">
            Event Description
          </h2>
          <p className="text-cBlack mt-2 text-justify text-sm sm:text-base mx-4 sm:mx-8 lg:mx-16">
            {event.description}
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="container mx-auto p-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image with Nested Grid 1 */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={`${BACKEND_URL}/${event.images[0]}`}
                alt="Main Workshop"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                <img
                  src={`${BACKEND_URL}/${event.images[1]}`}
                  alt="Workshop Image 1"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <img
                  src={`${BACKEND_URL}/${event.images[2]}`}
                  alt="Workshop Image 2"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Image with Nested Grid 2 */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={`${BACKEND_URL}/${event.images[3]}`}
                alt="Workshop Image 3"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Image with Nested Grid 3 */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={`${BACKEND_URL}/${event.images[4]}`}
                alt="Main Workshop"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                <img
                  src={`${BACKEND_URL}/${event.images[5]}`}
                  alt="Workshop Image 1"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <img
                  src={`${BACKEND_URL}/${event.images[6]}`}
                  alt="Workshop Image 2"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
