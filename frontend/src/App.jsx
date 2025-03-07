import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceMainFile from "./components/servicesComponents/ServiceMainFile";
import MainFile from "./components/trainingComponenets/MainFile";
import Loader from "./components/Loader";
// import Services from "./pages/Services";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/OurProducts";

import NewsAndEvents from "./pages/NewsAndEvents";
import BlogSection from "./components/BlogSection/BlogSection";

import Event from "./components/EventComponent/Event";
import Enroll from "./pages/Enroll";
import Signup from "./components/admin/Signup";
import Login from "./components/admin/Login";

import AdminDashboard from "./components/admin/AdminDashboard";
import ProductsCategories from "./components/ProductsCategories";

import Products from "./components/admin/Products";
import Events from "./components/admin/Events";
import RegistrationList from "./components/admin/RegistrationList";
import AddBlog from "./components/admin/AddBlogs";
import FileUpload from "./components/admin/FileUpload";
import VerifyUser from "./components/admin/VerifyUser";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 10 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // 700 milliseconds = 0.7 seconds

    // Cleanup the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/OurProducts" element={<OurProducts />} />

        <Route path="/newsAndEvents" element={<NewsAndEvents />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/blogSection" element={<BlogSection />} />

        <Route path="/ProductsCategories" element={<ProductsCategories />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cyber" element={<ServiceMainFile />} />
        <Route path="/training/ai" element={<MainFile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/verifyUser" element={<VerifyUser />} />

        <Route path="/registrationList" element={<RegistrationList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
