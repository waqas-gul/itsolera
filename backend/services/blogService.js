const Blog = require("../models/Blog");

// Add a blog
const addBlog = async (blogData) => {
    const blog = new Blog(blogData);
    return await blog.save();
};

// Get all blogs
const getAllBlogs = async () => {
    return await Blog.find().sort({ createdAt: -1 });
};

// Get a blog by ID
const getBlogById = async (id) => {
    return await Blog.findById(id);
};

// Delete a blog
const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
};

// Update a blog
const updateBlog = async (id, updateData) => {
    return await Blog.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
    addBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    updateBlog
};
