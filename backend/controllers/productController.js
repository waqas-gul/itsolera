const productService = require('../services/productService');
const upload = require('../middleware/upload');


const fs = require('fs');
const path = require('path');



// Get a single product by ID
const getProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err.message });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { category, name, description } = req.body;
        const image = req.file ? req.file.path : ''; // Get the uploaded image path
        const productData = { category, name, image, description };
        const product = await productService.createProduct(productData);
        res.status(201).json(product);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Error creating product', error: err.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, name, description } = req.body;
        const productData = { category, name, description }; // Initialize without image

        // Fetch the existing product to get the old image path
        const existingProduct = await productService.getProductById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // If a new image is uploaded, delete the old image
        if (req.file) {
            productData.image = req.file.path;

            // Check if the existing product has an image and delete it
            if (existingProduct.image) {
                const oldImagePath = path.join(__dirname, '..', existingProduct.image);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error('Error deleting old image:', err);
                    }
                });
            }
        }

        const updatedProduct = await productService.updateProduct(id, productData);
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Error updating product', error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the product has an image and delete it
        if (product.image) {
            const imagePath = path.join(__dirname, '..', product.image);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                }
            });
        }

        await productService.deleteProduct(id);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting product', error: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
};
