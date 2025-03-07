import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../Loader";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSections, setShowSections] = useState({
    AI: false,
    WebDev: false,
    CyberSec: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("token");
    if (!admin) {
      toast.error("Access denied. Please log in as admin.");
      navigate("/login");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/upload");
      setData(response.data);
    } catch (err) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      toast.success("File uploaded successfully!");
      fetchData();
    } catch (err) {
      toast.error("Failed to upload CSV");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/upload/${id}`);
      toast.success("Data deleted successfully");
      fetchData();
    } catch (err) {
      toast.error("Failed to delete data");
    }
  };

  const toggleSection = (domain) => {
    setShowSections((prev) => ({ ...prev, [domain]: !prev[domain] }));
  };

  const filteredData = {
    AI: data.filter((item) => item.Domain === "Artificial Intelligence"),
    WebDev: data.filter((item) => item.Domain === "Web Development"),
    CyberSec: data.filter((item) => item.Domain === "Cyber Security"),
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-inter">
      <h2 className="text-2xl font-semibold text-cDarkBlue mb-4">Upload CSV</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 border rounded-lg shadow-md "
        />
        <button
          type="submit"
          className="bg-cDarkBlue border border-cDarkBlue text-cWhite px-4 py-2 rounded-lg hover:bg-cWhite hover:text-cDarkBlue transition ease-in-out"
        >
          Upload
        </button>
      </form>

      <h2 className="text-2xl font-semibold text-cDarkBlue mt-6">
        Stored Data
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 ">
          {Object.keys(filteredData).map((key) => (
            <div
              key={key}
              className="mb-6 cursor-pointer"
              onClick={() => toggleSection(key)}
            >
              <div className="flex justify-between items-center bg-gray-200 p-3 rounded-md shadow-md">
                <h3 className="text-lg font-semibold text-CPurple">
                  {key === "AI"
                    ? "Artificial Intelligence"
                    : key === "WebDev"
                    ? "Web Development"
                    : "Cyber Security"}
                </h3>
                <button className=" text-CPurple font-extrabold px-3 text-2xl py-1 rounded-lg hover:bg-gray-600 transition">
                  {showSections[key] ? "-" : "+"}
                </button>
              </div>

              {showSections[key] && (
                <div className="flex overflow-x-auto mt-2 items-center justify-center ">
                  {filteredData[key].length === 0 ? (
                    <p className="text-gray-500 mt-2">No data available</p>
                  ) : (
                    <table className="w-full border border-CPurple  mt-2">
                      <thead>
                        <tr className="bg-cDarkBlue text-cWhite ">
                          <th className="p-2 border">Name</th>
                          <th className="p-2 border">Contact</th>
                          <th className="p-2 border">Reference No</th>
                          <th className="p-2 border">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData[key].map((item) => (
                          <tr key={item._id} className="text-center">
                            <td className="p-2 border">{item.Name}</td>
                            <td className="p-2 border">{item.Contact}</td>
                            <td className="p-2 border">{item.ReferenceNo}</td>
                            <td className="p-2 border">
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-CPurple text-cWhite border border-CPurple px-3 py-1 rounded-lg hover:bg-cWhite hover:text-CPurple transition"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
