const mongoose = require('mongoose');

// Reutilizar la conexión para evitar conexiones innecesarias.
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}

/**
 * Establece y reutiliza la conexión con MongoDB Atlas.
 */
const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI)
            .then(connection => connection)
            .catch(error => {
                cached.promise = null;
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
        console.log('Conexión con MongoDB establecida correctamente.');
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        throw error;
    }
};

module.exports = connectDB;