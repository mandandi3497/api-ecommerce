const express = require('express');
const { checkout } = require('../controllers/checkoutController');

// Crear el enrutador del checkout.
const router = express.Router();

// Procesar la compra y simular el pago.
router.post('/', checkout);

module.exports = router;