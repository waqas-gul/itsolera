const multer = require("multer");
const path = require("path");






// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save images in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        // Remove spaces from filename
        const sanitizedFilename = file.originalname.replace(/\s+/g, "_");
        cb(null, `${Date.now()}-${sanitizedFilename}`);
    },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"), false);
    }
};

// Initialize Multer
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
        files: 8, // Allow up to 8 files
    },
});

module.exports = upload;