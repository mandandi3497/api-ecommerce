const Cart = require('../models/Cart');
const Product = require('../models/Product');

/**
 * Agrega un producto al carrito o actualiza su cantidad.
 */
const addToCart = async (req, res) => {
    try {
        const { productoId, cantidad } = req.body;

        if (!productoId || !Number.isInteger(cantidad) || cantidad < 1) {
            return res.status(400).json({
                mensaje: 'Debes indicar un ID de producto y una cantidad válida'
            });
        }

        const product = await Product.findById(productoId);

        if (!product) {
            return res.status(404).json({
                mensaje: 'El producto no existe'
            });
        }

        let cart = await Cart.findOne();

        if (!cart) {
            cart = new Cart({ items: [] });
        }

        const item = cart.items.find(
            (item) => item.producto.toString() === productoId
        );

        const cantidadTotal = item
            ? item.cantidad + cantidad
            : cantidad;

        if (cantidadTotal > product.stock) {
            return res.status(400).json({
                mensaje: 'No hay suficiente stock disponible'
            });
        }

        if (item) {
            item.cantidad = cantidadTotal;
        } else {
            cart.items.push({
                producto: product._id,
                cantidad
            });
        }

        await cart.save();

        res.status(200).json({
            mensaje: 'Producto agregado al carrito correctamente',
            carrito: cart
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'No se pudo agregar el producto al carrito',
            error: error.message
        });
    }
};

/**
 * Obtiene el contenido del carrito con los datos de los productos.
 */
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne().populate('items.producto');

        if (!cart) {
            return res.status(200).json({
                mensaje: 'El carrito está vacío',
                items: []
            });
        }

        res.status(200).json({
            items: cart.items
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener el carrito',
            error: error.message
        });
    }
};

module.exports = {
    addToCart,
    getCart
};