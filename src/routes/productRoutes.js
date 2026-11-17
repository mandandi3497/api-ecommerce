const express = require("express");

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

// Crear el enrutador de productos.
const router = express.Router();

// Crear un producto.
router.post("/", createProduct);

// Obtener los productos disponibles.
router.get("/", getProducts);

module.exports = router;
