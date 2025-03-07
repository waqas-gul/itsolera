const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }, // Store the image path
    description: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);