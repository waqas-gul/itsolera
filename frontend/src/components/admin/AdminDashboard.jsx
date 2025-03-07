import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import RecentActivityCard from "./components/RecentActivityCard";
import ChartCard from "./components/ChartCard";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 font-inter">
        <h1 className="text-2xl font-bold mb-4">Please login first</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-[100vh] bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <h1 className="text-3xl font-semibold text-cDarkBlue mb-6">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Users" value="1,234" icon="users" />
            <StatCard title="Revenue" value="$12,345" icon="dollar-sign" />
            <StatCard title="Orders" value="56" icon="shopping-cart" />
            <StatCard title="Conversion Rate" value="2.3%" icon="percent" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard />
            <RecentActivityCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
