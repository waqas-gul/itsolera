const express = require("express");
const {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventController.js");
const upload = require("../middleware/upload.js"); // Your existing Multer config


const router = express.Router();

// Create a new event
// router.post("/", upload.single("image"), createEvent);
router.post("/", upload.array("images", 8), createEvent); // Allow up to 8 images

// Get all events (with optional filtering and pagination)
router.get("/", getEvents);

// Get a single event by ID
router.get("/:id", getEventById);

// Update an event
// router.put("/:id", upload.single("image"), updateEvent);


router.put("/:id", upload.array("images", 8), updateEvent); // Allow up to 8 images

// Delete an event
router.delete("/:id", deleteEvent);

module.exports = router;
