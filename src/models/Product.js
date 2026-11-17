const mongoose = require('mongoose');

// Esquema que define la estructura de los productos.
const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
        default: ''
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0.01, 'El precio debe ser mayor que cero']
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio'],
        min: [0, 'El stock no puede ser negativo'],
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
});

// Crear y exportar el modelo Producto.
const Product = mongoose.model('Product', productSchema);

module.exports = Product;