const Product = require('../models/Product');

/**
 * Crea un nuevo producto en la tienda.
 */
const createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock } = req.body;

        const product = new Product({
            nombre,
            descripcion,
            precio,
            stock
        });

        const savedProduct = await product.save();

        res.status(201).json({
            mensaje: 'Producto creado correctamente',
            producto: savedProduct
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'No se pudo crear el producto',
            error: error.message
        });
    }
};

/**
 * Obtiene todos los productos disponibles en la tienda.
 */
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({
            stock: { $gt: 0 }
        });

        res.status(200).json({
            total: products.length,
            productos: products
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los productos',
            error: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProducts
};