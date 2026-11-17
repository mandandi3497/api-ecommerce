const mongoose = require('mongoose');

// Esquema que define los productos incluidos en un pedido.
const orderItemSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1
    }
});

// Esquema que define la estructura de los pedidos.
const orderSchema = new mongoose.Schema({
    productos: {
        type: [orderItemSchema],
        required: true
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    estado: {
        type: String,
        enum: ['pagado'],
        default: 'pagado'
    },
    metodoPago: {
        type: String,
        default: 'simulado'
    }
}, {
    timestamps: true,
    versionKey: false
});

// Crear y exportar el modelo Pedido.
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;