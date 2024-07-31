const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// GET ALL PRODUCTS
router.get("/", getProducts);

// GET ONE PRODUCT
router.get("/:id", getProduct);

// CREATE ONE PRODUCT
router.post("/", createProduct);

// UPDATE ONE PRODUCT
router.put("/:id", updateProduct);

// DELETE ONE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
