const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    course: { type: String, required: true },
    education: { type: String, required: true },
    highestDegree: { type: String, required: true }
});

module.exports = mongoose.model('Registration', registrationSchema);