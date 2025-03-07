const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Contact: { type: String, required: true },
    ReferenceNo: { type: String, required: true },
    Domain: { type: String, required: true }
});

module.exports = mongoose.model("File", fileSchema);
