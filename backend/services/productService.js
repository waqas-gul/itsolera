const Product = require('../models/Product');

// Create a new product
const createProduct = async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
};

// Get all products
const getAllProducts = async () => {
    return await Product.find();
};

// Get a product by ID
const getProductById = async (id) => {
    return await Product.findById(id);
};

// Update a product
const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

// Delete a product
const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};



module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};