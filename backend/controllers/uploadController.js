const Data = require("../models/File");
const csv = require("csv-parser");
const multer = require("multer");
const fs = require("fs");

// Multer Storage Configuration
const upload = multer({ dest: "uploads/" });

// Upload CSV and Save Data
const uploadCSV = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const results = [];

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", (row) => {


            results.push({
                Name: row["Name"] || "Unknown", // Default values for missing fields
                Contact: row["Contact"] || "N/A",
                ReferenceNo: row["Reference No"] || "N/A",
                Domain: row["Domain"] || "N/A"
            });
        })
        .on("end", async () => {
            try {


                if (results.length === 0) {
                    return res.status(400).json({ message: "No valid data found in CSV" });
                }

                const insertedData = await Data.insertMany(results);


                fs.unlinkSync(req.file.path);
                res.json({ message: "Data uploaded successfully", data: insertedData });
            } catch (error) {
                console.error("Error inserting data:", error);
                res.status(500).json({ message: "Error inserting data", error });
            }
        });
};


// Get All Data
const getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};

// Update Data
const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await Data.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ message: "Error updating data", error });
    }
};

// Delete Data
const deleteData = async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id);
        res.json({ message: "Data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting data", error });
    }
};


// Verify User by Reference Number
const verifyUser = async (req, res) => {
    try {
        const { referenceNo } = req.query;
        const user = await Data.findOne({ ReferenceNo: referenceNo });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to verify user" });
    }
};



module.exports = { uploadCSV, getAllData, updateData, deleteData, verifyUser, upload };