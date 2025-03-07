import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const API_URL = "http://62.72.57.47:8080/api/events";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Refs for form inputs
  const typeRef = useRef(null);
  const dateRef = useRef(null);
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);
  const imagesRef = useRef(null); // Ref for multiple images
  const formRef = useRef(null); // Ref for the form section

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
      fetchEvents();
    }
  }, [navigate]);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(response.data.events);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch events",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get data from refs
    const type = typeRef.current.value;
    const date = dateRef.current.value;
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const location = locationRef.current.value;
    const images = Array.from(imagesRef.current.files); // Convert FileList to an array

    // Validate required fields
    if (
      !type ||
      !description ||
      !date ||
      !title ||
      !location ||
      (images.length === 0 && !editEventId)
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required, and at least one image must be uploaded!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const data = new FormData();
    data.append("type", type);
    data.append("date", date);
    data.append("title", title);
    data.append("description", description);
    data.append("location", location);

    // Append all images
    images.forEach((image) => data.append("images", image));

    const url = editEventId ? `${API_URL}/${editEventId}` : API_URL;
    const method = editEventId ? "put" : "post";

    try {
      const token = localStorage.getItem("token");
      await axios[method](url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();

      // Clear form inputs
      typeRef.current.value = "Conference";
      dateRef.current.value = "";
      titleRef.current.value = "";
      locationRef.current.value = "";
      descriptionRef.current.value = "";
      imagesRef.current.value = ""; // Clear file input
      setEditEventId(null);

      // Add/Edit alert without "OK" button (closes automatically)
      Swal.fire({
        title: editEventId ? "Event Updated!" : "Event Added!",
        text: editEventId
          ? "Your event has been updated successfully."
          : "Your event has been added successfully.",
        icon: "success",
        timer: 1500, // Automatically close after 1.5 seconds
        showConfirmButton: false, // Hide the "OK" button
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || err.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (event) => {
    // Set form values using refs
    typeRef.current.value = event.type;
    dateRef.current.value = event.date;
    titleRef.current.value = event.title;
    descriptionRef.current.value = event.description;
    locationRef.current.value = event.location;
    setEditEventId(event._id);

    // Scroll to "Manage Events" heading
    const manageEventsHeading = document.getElementById("manag-events");
    if (manageEventsHeading) {
      manageEventsHeading.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDelete = async (id) => {
    // Delete confirmation alert with "Cancel" and "Sure" buttons
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Sure",
      cancelButtonText: "No Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${API_URL}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchEvents();
        Swal.fire({
          title: "Deleted!",
          text: "Event deleted successfully!",
          icon: "success",
          timer: 1500, // Automatically close after 1.5 seconds
          showConfirmButton: false, // Hide the "OK" button
        });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please login first</h1>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1
        className="text-2xl font-bold mb-6 text-cDarkBlue text-center m-5 font-inter"
        id="manag-events"
      >
        Manage Events
      </h1>
      {/* Form Section */}

      <div ref={formRef} className="flex justify-center font-inter">
        <form
          onSubmit={handleSubmit}
          className="bg-cWhite p-6 rounded-lg shadow-md w-full mx-auto max-w-[700px]"
        >
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-cDarkBlue text-2xl font-bold">
              {editEventId ? "Edit Event" : "Add Event"}
            </h2>

            {/* Type & Date Row */}
            <div className="w-full flex flex-col md:flex-row gap-4">
              <select
                ref={typeRef}
                name="type"
                className="w-[300px] md:w-1/2 p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Workshop">Workshop</option>
                <option value="Conference">Conference</option>
                <option value="Events">Events</option>
                <option value="Moments & Memories">Moments & Memories</option>
                <option value="Team Spotlight">Team Spotlight</option>
              </select>
              <input
                ref={dateRef}
                type="date"
                name="date"
                className="w-[300px] md:w-1/2 p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Title Input */}
            <div className="w-full flex flex-col  gap-4">
              <input
                ref={titleRef}
                type="text"
                name="title"
                placeholder="Event Title"
                className="lg:w-[615px] w-[300px] p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Description Textarea */}
              <textarea
                ref={descriptionRef}
                placeholder="Event Description"
                required
                className="lg:w-[615px] sm:w-[500px] border p-3 border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

            {/* Location & Images Row */}
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <input
                  ref={locationRef}
                  type="text"
                  name="location"
                  placeholder="Event Location"
                  className="w-[300px] p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  ref={imagesRef}
                  type="file"
                  name="images"
                  multiple
                  className="w-[300px] p-3 border border-CPurple bg-cWhite rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={!editEventId}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-CPurple border border-CPurple text-cWhite p-3 hover:text-CPurple rounded hover:bg-cWhite"
            >
              {editEventId ? "Update Event" : "Add Event"}
            </button>
          </div>
        </form>
      </div>

      {/* Events Grid */}

      {events.map((event) => (
        <div
          key={event._id}
          className="bg-cWhite  shadow-lg hover:shadow-2xl my-8 transition duration-300 ease-in-out transform hover:scale-105"
        >
          {" "}
          {/* ............................. */}
          <div className="p-4 sm:p-6 bg-cWhite lg:mx-24 sm:mx-5">
            {/* Heading Section */}
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-cDarkBlue">
                {event.title}
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
                    src={`http://62.72.57.47:8080/${event.images[0]}`}
                    alt="Main Workshop"
                    className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
                  />

                  <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                    <img
                      src={`http://62.72.57.47:8080/${event.images[1]}`}
                      alt="Workshop Image 1"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={`http://62.72.57.47:8080/${event.images[2]}`}
                      alt="Workshop Image 2"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Image with Nested Grid 2 */}
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={`http://62.72.57.47:8080/${event.images[3]}`}
                    alt="Workshop Image 3"
                    className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Image with Nested Grid 3 */}
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={`http://62.72.57.47:8080/${event.images[4]}`}
                    alt="Main Workshop"
                    className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
                  />
                  <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                    <img
                      src={`http://62.72.57.47:8080/${event.images[5]}`}
                      alt="Workshop Image 1"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={`http://62.72.57.47:8080/${event.images[6]}`}
                      alt="Workshop Image 2"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .................................... */}
          {/* Action Buttons */}
          <div className="mt-4 flex justify-center space-x-4 pb-4">
            <button
              onClick={() => handleEdit(event)}
              className="bg-cDarkBlue text-cWhite border border-cDarkBlue hover:bg-cWhite px-4 py-2 rounded-md hover:text-cDarkBlue transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(event._id)}
              className="bg-CPurple text-cWhite px-4 py-2 rounded-md border border-CPurple hover:bg-cWhite hover:text-CPurple transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Events;
