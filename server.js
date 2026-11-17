const dotenv = require('dotenv');
const app = require('./src/app');
const connectDB = require('./src/config/database');

// Cargar las variables de entorno.
dotenv.config();

// Iniciar la aplicación después de conectar con MongoDB.
const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Servidor funcionando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar el servidor:', error.message);
        process.exit(1);
    }
};

startServer();