const express = require('express');
const productController = require('../controllers/productController');
const upload = require('../middleware/upload');

const router = express.Router();

// Create a new product (with image upload)
router.post('/', upload.single('image'), productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a single product by ID (using controller)
router.get('/:id', productController.getProduct);

// Update a product (with optional image upload)
router.put('/:id', upload.single('image'), productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
