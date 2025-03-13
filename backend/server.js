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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
connectDB();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Auth Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Events Routes
app.use("/api/events", eventRoutes);

// Blog Routes
app.use("/api/blogs", blogRoutes);

// Upload Routes
app.use("/api/upload", uploadRoutes);

// Registration Routes
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
