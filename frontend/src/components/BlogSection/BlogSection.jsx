import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import blogsection from "../../assets/images/blogs/blogSection.jpg";
import Loader from "../Loader";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]); // Store fetched blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [filter, setFilter] = useState("All Blogs");

  // Map button labels to blog categories
  const categoryMap = {
    "All Blogs": "All",
    "Artificial Intelligence": "AI",
    "Web Development": "Web Development",
    "Cyber Security": "Cyber Security",
    "Digital Marketing": "Digital Marketing",
  };

  // Fetch blogs from API using Axios
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://62.72.57.47:8080/api/blogs"); // Replace with your actual API
        setBlogs(response.data); // Set blog data
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs =
    filter === "All Blogs"
      ? blogs
      : blogs.filter((blog) => blog.category === categoryMap[filter]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="relative lg:h-[80vh] h-[60vh] font-inter text-center text-white bg-cover bg-center  lg:opacity-100 sm:opacity-15"
            style={{ backgroundImage: `url(${blogsection})` }}
          >
            <div flex>
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-cWhite text-cWhite text-left lg:ml-24 ml-8 lg:pt-32 pt-44 font-bold z-10 sm:text-cBlack">
                ITSOLERA BLOGS
              </h1>
              <div className=" lg:w-[700px] w-auto ">
                <p className="relative text-lg  sm:text-xl lg:text-left  lg:ml-24 mx-4 sm:text-justify lg:text-cWhite text-cWhite mt-2 z-10 sm:text-cBlack">
                  Our company shares updates, achievements, and new projects. We
                  also post ideas, insights, and random thoughts on industry
                  trends, innovation, and daily work experiences. Stay connected
                  for news, announcements, and behind-the-scenes stories.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-6 text-center">
            <div className="flex justify-center">
              <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sm:flex-wrap sm:justify-center w-full px-2">
                {[
                  "All Blogs",
                  "Artificial Intelligence",
                  "Web Development",
                  "Cyber Security",
                  "Digital Marketing",
                ].map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm sm:text-base border flex-shrink-0 ${
                      filter === category
                        ? "border-CPurple text-CPurple bg-transparent"
                        : "bg-cDarkBlue text-cgray hover:bg-cWhite hover:text-cBlack"
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Blog Grid */}
          <div className="container mx-auto px-6 py-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-CPurple"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image with opacity change on small devices */}
                  <img
                    src={`http://62.72.57.47:8080${blog.image}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover opacity-100 sm:opacity-80 md:opacity-100"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-cDarkBlue">
                      {blog.title}
                    </h2>
                    <p className="text-CPurple mt-2">{blog.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogSection;
