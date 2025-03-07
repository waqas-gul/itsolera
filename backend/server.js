// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationsRouter = require('./routes/registrations');
const blogRoutes = require("./routes/blogRoutes");
const dotenv = require("dotenv");
const uploadRoutes = require("./routes/uploadRoutes");

dotenv.config();
const PORT = process.env.PORT || 5000;


const app = express();

const productRoutes = require('./routes/productRoutes');
const path = require('path');
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(cors()); // If API is used from frontend
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(bodyParser.json());





// Database connection
connectDB();

//auth Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


//events Routes
app.use("/api/events", eventRoutes);


// Routes
app.use("/api/blogs", blogRoutes);

app.use("/api/upload", uploadRoutes);

// Routes
app.use('/api/registrations', registrationsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});