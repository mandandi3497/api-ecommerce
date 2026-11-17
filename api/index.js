require('dotenv').config();

const app = require('../src/app');
const connectDB = require('../src/config/database');

/**
 * Gestiona las peticiones recibidas en Vercel.
 */
module.exports = async (req, res) => {
    try {
        await connectDB();
        return app(req, res);
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);

        return res.status(500).json({
            mensaje: 'Error al conectar con la base de datos'
        });
    }
};