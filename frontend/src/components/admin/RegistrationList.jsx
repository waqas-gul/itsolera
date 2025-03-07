import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom"; // For navigation

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [openDepartment, setOpenDepartment] = useState(null);

  // Check if admin is logged in
  const isAdminLoggedIn = localStorage.getItem("token"); // Adjust based on your auth system

  useEffect(() => {
    if (isAdminLoggedIn) {
      fetchRegistrations();
    }
  }, [isAdminLoggedIn]);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get(
        "http://localhist:8080/api/registrations"
      );
      setRegistrations(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      setRegistrations([]);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhist:8080/api/registrations/${id}`);
        fetchRegistrations();
        Swal.fire({
          title: "Deleted!",
          text: "Registration has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete registration.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  // Categorize registrations by course
  const categorizedRegistrations = {
    "Cyber Security": registrations.filter(
      (reg) => reg.course === "Cyber Security"
    ),
    "Web Development": registrations.filter(
      (reg) => reg.course === "Web Development"
    ),
    "Artificial Intelligence": registrations.filter(
      (reg) => reg.course === "AI"
    ),
  };

  // Redirect to admin login if not authenticated
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin" replace />; // Adjust the path as needed
  }

  return (
    <div className="p-8 w-full sm:max-w-4xl mx-auto my-10 font-inter">
      <h2 className="text-3xl font-bold mb-6 text-center text-cDarkBlue">
        All Registrations
      </h2>

      {registrations.length === 0 ? (
        <p className="text-CPurple text-center">No registrations found.</p>
      ) : (
        Object.entries(categorizedRegistrations).map(([category, items]) => (
          <div
            onClick={() =>
              setOpenDepartment(openDepartment === category ? null : category)
            }
            key={category}
            className="mb-6 border rounded-lg shadow-md overflow-hidden my-8"
          >
            <div className="flex items-center justify-between text-xl bg-gradient-to-r from-cDarkBlue to-CPurple p-4 text-cWhite font-bold cursor-pointer">
              {category}
              <button className="w-full flex justify-between items-center text-cWhite font-medium">
                {openDepartment === category ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openDepartment === category && items.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border-CPurple">
                  <thead>
                    <tr className="bg-cDarkBlue text-cWhite text-left">
                      <th className="p-3 border">Name</th>
                      <th className="p-3 border">Email</th>
                      <th className="p-3 border">Gender</th>
                      <th className="p-3 border">Age</th>
                      <th className="p-3 border">City</th>
                      <th className="p-3 border">Education</th>
                      <th className="p-3 border">Highest Degree</th>
                      <th className="p-3 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((reg) => (
                      <tr
                        key={reg._id}
                        className="border text-center hover:bg-gray-100"
                      >
                        <td className="p-3 border">
                          {reg.firstName} {reg.lastName}
                        </td>
                        <td className="p-3 border">{reg.email}</td>
                        <td className="p-3 border">{reg.gender}</td>
                        <td className="p-3 border">{reg.age}</td>
                        <td className="p-3 border">{reg.city}</td>
                        <td className="p-3 border">{reg.education}</td>
                        <td className="p-3 border">{reg.highestDegree}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleDelete(reg._id)}
                            className="bg-CPurple text-cWhite px-4 py-2 border border-CPurple rounded hover:bg-cWhite hover:text-CPurple"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RegistrationList;
