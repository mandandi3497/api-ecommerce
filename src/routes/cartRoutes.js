const express = require('express');

const {
    addToCart,
    getCart
} = require('../controllers/cartController');

// Crear el enrutador del carrito.
const router = express.Router();

// Agregar un producto al carrito.
router.post('/', addToCart);

// Consultar el contenido del carrito.
router.get('/', getCart);

module.exports = router;