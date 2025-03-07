import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const VerifyUser = () => {
  const [referenceNo, setReferenceNo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckUser = async () => {
    if (!referenceNo) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Missing Reference Number",
        text: "Please enter a Reference Number.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhist:8080/api/upload/verify?referenceNo=${referenceNo}`
      );

      setLoading(false);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "✅ Verification Successful",
          html: `
            <div class="text-left">
              <p><strong>Name:</strong> ${response.data.Name}</p>
              <p><strong>Contact:</strong> ${response.data.Contact}</p>
              <p><strong>Domain:</strong> ${response.data.Domain}</p>
              <p><strong>Reference No:</strong> ${response.data.ReferenceNo}</p>
            </div>`,
          confirmButtonColor: "#3085d6",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "❌ User Not Found",
          text: "Please check the Reference Number.",
        });
      }
    } catch (err) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "⚠️ Error",
        text: "Error fetching data or there is no Reference Number. Please try again.",
      });
    }
  };

  return (
    <div className="font-inter flex flex-col items-center justify-center h-[70vh] bg-gradient-to-r from-cDarkBlue to-CPurple p-6 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg  bg-cWhite  bg-gradient-to-r from-CPurple to-cDarkBlue ">
        <h2 className="text-3xl font-bold text-cWhite mb-6 text-center  ">
          Verify User
        </h2>

        <input
          type="text"
          placeholder="Enter Reference No"
          value={referenceNo}
          onChange={(e) => setReferenceNo(e.target.value)}
          className="w-[300px] p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleCheckUser}
          className="w-full bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite shadow-2xl hover:opacity-60 text-lg px-4 py-3 mt-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Checking...
            </span>
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </div>
  );
};

export default VerifyUser;
