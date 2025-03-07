// config/db.js
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;