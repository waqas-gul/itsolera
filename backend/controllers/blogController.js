const fs = require('fs');
const path = require('path');
const BlogService = require("../services/blogService");
const { validationResult } = require("express-validator");

class BlogController {
    // Create Blog
    static async addBlog(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const blogData = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
            };

            if (req.file) {
                blogData.image = `/uploads/${req.file.filename}`;
            }

            const newBlog = await BlogService.addBlog(blogData);
            res.status(201).json(newBlog);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get All Blogs
    static async getAllBlogs(req, res) {
        try {
            const blogs = await BlogService.getAllBlogs();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get Single Blog
    static async getBlogById(req, res) {
        try {
            const blog = await BlogService.getBlogById(req.params.id);
            if (!blog) {
                return res.status(404).json({ message: "Blog not found" });
            }
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update Blog
    static async updateBlog(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const existingBlog = await BlogService.getBlogById(req.params.id);
            if (!existingBlog) {
                return res.status(404).json({ message: "Blog not found" });
            }

            const updateData = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                image: existingBlog.image,
            };

            if (req.file) {
                // Delete old image asynchronously
                if (existingBlog.image) {
                    const oldImagePath = path.join(__dirname, '..', existingBlog.image);
                    fs.unlink(oldImagePath, (err) => {
                        if (err) console.error('Error deleting old image:', err);
                    });
                }
                updateData.image = `/uploads/${req.file.filename}`;
            }

            const updatedBlog = await BlogService.updateBlog(req.params.id, updateData);
            res.status(200).json(updatedBlog);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete Blog
    static async deleteBlog(req, res) {
        try {
            const blog = await BlogService.getBlogById(req.params.id);
            if (!blog) {
                return res.status(404).json({ message: "Blog not found" });
            }

            // Delete the image file asynchronously
            if (blog.image) {
                const imagePath = path.join(__dirname, '..', blog.image);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error('Error deleting image:', err);
                });
            }

            await BlogService.deleteBlog(req.params.id);
            res.status(200).json({ message: "Blog deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BlogController;