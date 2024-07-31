const Product = require("../models/product.model.js");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE PRODUCT
const getProduct = async (req, res) => {
  try {
    const { id } = req.params; //get id by url
    const product = await Product.findById(id); //get product by id
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE ONE PRODUCT
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE ONE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body); //find product by id and update
    if (!product) {
      return res.status(404).json({ message: "Product Not Found!" }); //if product did not exist then respond not found
    }
    const updatedProduct = await Product.findById(id); //recheck from the database
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE ONE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body); //find product by id and delete
    if (!product) {
      return res.status(404).json({ message: "Product Not Found!" }); //if product did not exist then respond not found
    }
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
