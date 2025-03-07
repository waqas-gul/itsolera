const express = require("express");
const BlogController = require("../controllers/blogController");
const upload = require("../middleware/upload");
const { body } = require("express-validator");

const router = express.Router();

// Create Blog
router.post(
    "/",
    upload.single("image"),
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("category").notEmpty().withMessage("Category is required"),
    ],
    BlogController.addBlog
);

// Get All Blogs
router.get("/", BlogController.getAllBlogs);

// Get Single Blog
router.get("/:id", BlogController.getBlogById);

// Update Blog
router.put(
    "/:id",
    upload.single("image"),
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("category").notEmpty().withMessage("Category is required"),
    ],
    BlogController.updateBlog
);

// Delete Blog
router.delete("/:id", BlogController.deleteBlog);

module.exports = router;