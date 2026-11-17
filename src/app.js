const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

// Crear la aplicación Express.
const app = express();

// Permitir recibir datos en formato JSON.
app.use(express.json());

// Ruta principal para comprobar que la API funciona.
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'Bienvenido a la API de nuestra tienda online'
    });
});

// Rutas para gestionar los productos.
app.use('/products', productRoutes);

// Rutas para gestionar el carrito.
app.use('/cart', cartRoutes);

// Rutas para procesar las compras.
app.use('/checkout', checkoutRoutes);

module.exports = app;