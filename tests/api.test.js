const request = require('supertest');

// Simular el modelo de productos.
jest.mock('../src/models/Product', () => {
    return class Product {
        constructor(data) {
            Object.assign(this, data);
        }

        save() {
            return Promise.resolve({
                ...this,
                _id: 'producto123'
            });
        }

        static findById() {
            return Promise.resolve({
                _id: 'producto123',
                nombre: 'Portátil HP',
                precio: 599.99,
                stock: 10
            });
        }

        static findByIdAndUpdate() {
            return Promise.resolve({});
        }
    };
});

// Simular el modelo del carrito.
jest.mock('../src/models/Cart', () => {
    return class Cart {
        constructor(data) {
            this.items = data.items || [];
        }

        save() {
            return Promise.resolve(this);
        }

        static findOne() {
            const query = Promise.resolve(null);

            query.populate = () => Promise.resolve(null);

            return query;
        }
    };
});

// Simular el modelo de pedidos.
jest.mock('../src/models/Order', () => {
    return class Order {
        constructor(data) {
            Object.assign(this, data);
        }

        save() {
            return Promise.resolve({
                ...this,
                _id: 'pedido123'
            });
        }
    };
});

const app = require('../src/app');

describe('Pruebas de la API de la tienda online', () => {

    test('Debe crear un producto correctamente', async () => {
        const response = await request(app)
            .post('/products')
            .send({
                nombre: 'Portátil HP',
                descripcion: 'Portátil para uso personal',
                precio: 599.99,
                stock: 10
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.mensaje).toBe('Producto creado correctamente');
        expect(response.body.producto.nombre).toBe('Portátil HP');
    });

    test('Debe agregar un producto al carrito', async () => {
        const response = await request(app)
            .post('/cart')
            .send({
                productoId: 'producto123',
                cantidad: 2
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.mensaje).toBe(
            'Producto agregado al carrito correctamente'
        );
        expect(response.body.carrito.items).toHaveLength(1);
        expect(response.body.carrito.items[0].cantidad).toBe(2);
    });

    test('Debe rechazar el checkout si el carrito está vacío', async () => {
        const response = await request(app)
            .post('/checkout');

        expect(response.statusCode).toBe(400);
        expect(response.body.mensaje).toBe('El carrito está vacío');
    });

});