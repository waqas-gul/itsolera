const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Conference", "Events", "Workshop", "Moments & Memories", "Team Spotlight"],
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {  // ✅ Added description field here
            type: String,
            required: true, // Make it required
            trim: true,

            maxlength: 1000, // Prevent excessively long descriptions
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        images: {
            type: [String], // Array of image URLs or file paths
            required: false, // Set to false if images are optional
            validate: {
                validator: function (images) {
                    // Validate that no more than 8 images are uploaded
                    return images.length <= 8;
                },
                message: "You can upload a maximum of 8 images per event.",
            },
        },
    },
    {
        timestamps: true, // Automatically creates createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("Event", eventSchema);
