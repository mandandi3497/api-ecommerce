const mongoose = require('mongoose');

// Esquema que define los productos incluidos en el carrito.
const cartItemSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: [1, 'La cantidad debe ser como mínimo 1']
    }
});

// Esquema que define la estructura del carrito.
const cartSchema = new mongoose.Schema({
    items: {
        type: [cartItemSchema],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});

// Crear y exportar el modelo Carrito.
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;