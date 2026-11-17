const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Order = require('../models/Order');

/**
 * Procesa el checkout y simula el pago de los productos del carrito.
 */
const checkout = async (req, res) => {
    try {
        // Recuperar el carrito con los datos de los productos.
        const cart = await Cart.findOne().populate('items.producto');

        // Comprobar que existe un carrito con productos.
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                mensaje: 'El carrito está vacío'
            });
        }

        let total = 0;
        const productosPedido = [];

        // Comprobar el stock y calcular el importe del pedido.
        for (const item of cart.items) {
            const product = item.producto;

            if (!product) {
                return res.status(404).json({
                    mensaje: 'Uno de los productos del carrito ya no existe'
                });
            }

            if (product.stock < item.cantidad) {
                return res.status(400).json({
                    mensaje: `No hay suficiente stock para el producto ${product.nombre}`
                });
            }

            total += product.precio * item.cantidad;

            productosPedido.push({
                producto: product._id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: item.cantidad
            });
        }

        // Redondear el importe a dos decimales.
        total = Math.round(total * 100) / 100;

        // Crear el pedido con el pago simulado.
        const order = new Order({
            productos: productosPedido,
            total,
            estado: 'pagado',
            metodoPago: 'simulado'
        });

        await order.save();

        // Descontar las unidades compradas del stock.
        for (const item of cart.items) {
            await Product.findByIdAndUpdate(
                item.producto._id,
                {
                    $inc: { stock: -item.cantidad }
                }
            );
        }

        // Vaciar el carrito después de completar el pedido.
        cart.items = [];
        await cart.save();

        res.status(200).json({
            mensaje: 'Compra realizada correctamente. Pago simulado.',
            pedido: order
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'No se pudo completar la compra',
            error: error.message
        });
    }
};

module.exports = {
    checkout
};