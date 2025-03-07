import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://62.72.57.47:8080/api/events"; // Adjust based on your backend

const UpdateEvent = () => {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: "",
    date: "",
    title: "",
    location: "",
    image: null,
  });

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      setForm({
        type: data.type,
        date: data.date,
        title: data.title,
        location: data.location,
        image: data.image,
      });
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      await axios.put(`${API_URL}/${id}`, formData);
      navigate("/events"); // Redirect back to events list
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10 font-inter">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Update Event
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Event Title"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Event Location"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            {form.image && typeof form.image === "string" ? (
              <div className="mb-4">
                <img
                  src={form.image} // If it's a URL, use it directly
                  alt="Previous Event Image"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            ) : (
              form.image && (
                <div className="mb-4">
                  <img
                    src={URL.createObjectURL(form.image)} // If it's a file, use createObjectURL
                    alt="Selected Event Image"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              )
            )}
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
