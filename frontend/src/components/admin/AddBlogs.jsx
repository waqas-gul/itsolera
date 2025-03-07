import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [editBlogId, setEditBlogId] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem("token"); // Assuming adminToken is stored
    if (!isAdmin) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      fetchBlogs();
    }
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://62.72.57.47:8080/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      setError("Failed to fetch blogs");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title || !formData.description || !formData.category) {
      setError("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    if (formData.image) data.append("image", formData.image);

    try {
      if (editBlogId) {
        await axios.put(
          `http://62.72.57.47:8080/api/blogs/${editBlogId}`,
          data
        );
      } else {
        await axios.post("http://62.72.57.47:8080/api/blogs", data);
      }

      setFormData({ title: "", description: "", category: "", image: null });
      setEditBlogId(null);
      setExistingImage("");
      fetchBlogs();
      Swal.fire("Success", "Blog saved successfully!", "success");
    } catch (error) {
      setError("Failed to save blog");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://62.72.57.47:8080/api/blogs/${id}`);
          fetchBlogs();
          Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        } catch (error) {
          setError("Failed to delete blog");
        }
      }
    });
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      category: blog.category,
      image: null,
    });
    setEditBlogId(blog._id);
    setExistingImage(blog.image);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-inter">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg my-8  border-gray-200">
        <h2 className="text-center text-2xl sm:text-3xl text-cDarkBlue font-bold pb-6 sm:pb-8">
          Add and Edit Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-500 bg-red-100 p-3 rounded-lg font-medium">
              {error}
            </div>
          )}

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Blog Title */}
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-cDarkBlue rounded-lg focus:ring-2 focus:ring-cDarkBlue shadow-sm"
              required
            />

            {/* Category Selection */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-cDarkBlue rounded-lg focus:ring-2 focus:ring-cDarkBlue shadow-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Web Development">Web Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>

            {/* Blog Description */}
            <textarea
              name="description"
              placeholder="Blog Description"
              value={formData.description}
              onChange={handleChange}
              className="col-span-1 sm:col-span-2 w-full p-3 border border-collapse rounded-lg focus:ring-2 focus:ring-cDarkBlue shadow-sm h-32"
              required
            />

            {/* Image Upload */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full sm:w-auto p-3 border border-cDarkBlue rounded-lg focus:ring-2 focus:ring-cDarkBlue shadow-sm"
                accept="image/*"
              />
              {existingImage && (
                <img
                  src={`http://62.72.57.47:8080/${existingImage}`}
                  alt="Current"
                  className="w-24 h-24 rounded-lg object-cover border border-cDarkBlue shadow-md"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-CPurple to-cDarkBlue text-cWhite font-semibold p-3 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
          >
            {editBlogId ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            {/* Blog Image */}
            {blog.image && (
              <img
                src={`http://62.72.57.47:8080${blog.image}`}
                alt={blog.title}
                className="w-full h-56 object-cover p-4"
              />
            )}

            {/* Blog Content */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 text-cDarkBlue">
                {blog.title}
              </h3>
              <p className="text-cDarkBlue mb-4 line-clamp-3">
                {blog.description}
              </p>

              {/* Category Badge */}
              <span className="inline-block bg-gray-200 px-3 py-1 text-sm rounded-full text-CPurple font-medium">
                {blog.category}
              </span>

              {/* Buttons */}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-cDarkBlue text-cWhite border border-cDarkBlue hover:bg-cWhite hover:text-cDarkBlue  px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-CPurple border border-CPurple  text-cWhite hover:bg-cWhite hover:text-CPurple px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;
