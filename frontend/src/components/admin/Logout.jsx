import React from "react";
import Swal from "sweetalert2";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const Logout = () => {
  const handleLogout = async () => {
    // Confirm before logging out
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    });

    if (result.isConfirmed) {
      try {
        // Call logout API
        await fetch(`${BACKEND_URL}/api/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Clear client-side storage
        localStorage.removeItem("token");

        // Show success message
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have been logged out successfully.",
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect after delay
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong. Please try again!",
        });
        console.error("Logout failed:", err);
      }
    }
  };

  return (
    <div className="ml-4 font-inter">
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-CPurple to-cDarkBlue text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
