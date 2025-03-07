const Event = require("../models/Event");
const fs = require("fs");
const path = require("path");

// Function to delete image files
const deleteImageFiles = (imagePaths) => {
    if (imagePaths && imagePaths.length > 0) {
        imagePaths.forEach((imagePath) => {
            const filePath = path.join(__dirname, "..", imagePath);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error("Error deleting image:", err);
                }
            });
        });
    }
};

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { type, date, title, description, location } = req.body;

        // Check if files are uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "At least one image is required!" });
        }

        // Extract image paths
        const images = req.files.map((file) => file.path.replace(/\\/g, "/"));

        // Validate required fields
        if (!type || !date || !title || !description || !location) {
            // Delete uploaded images if validation fails
            deleteImageFiles(images);
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newEvent = new Event({ type, date, title, description, location, images });
        await newEvent.save();
        res.status(201).json({ message: "Event created successfully!", event: newEvent });
    } catch (err) {
        // Delete uploaded images if an error occurs
        if (req.files && req.files.length > 0) {
            const images = req.files.map((file) => file.path.replace(/\\/g, "/"));
            deleteImageFiles(images);
        }
        res.status(500).json({ message: "Server error while creating event", error: err.message });
    }
};

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const { type, page = 1, limit = 4 } = req.query;
        const query = type && type !== "All" ? { type } : {};

        const [events, total] = await Promise.all([
            Event.find(query)
                .skip((page - 1) * limit)
                .limit(parseInt(limit))
                .sort({ date: -1 }),
            Event.countDocuments(query),
        ]);

        res.json({
            events,
            totalPages: Math.ceil(total / limit),
            currentPage: parseInt(page),
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching events", error: err.message });
    }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: "Error fetching event", error: err.message });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    try {
        const { type, date, title, description, location } = req.body;
        const updateData = { type, date, title, description, location };

        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        // If new images are uploaded, delete old images and update with new ones
        if (req.files && req.files.length > 0) {
            // Delete old images
            if (event.images && event.images.length > 0) {
                deleteImageFiles(event.images);
            }

            // Add new images
            updateData.images = req.files.map((file) => file.path.replace(/\\/g, "/"));
        } else {
            // Keep old images if not updating
            updateData.images = event.images;
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });

        res.json({ message: "Event updated successfully!", event: updatedEvent });
    } catch (err) {
        res.status(500).json({ message: "Error updating event", error: err.message });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        // Delete all event images from the folder
        if (event.images && event.images.length > 0) {
            deleteImageFiles(event.images);
        }

        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting event", error: err.message });
    }
};
