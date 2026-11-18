# API de Tienda Online (E-commerce)

## 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para gestionar una tienda online mediante Node.js, Express y MongoDB.

La API permite crear y consultar productos, añadir productos a un carrito de compra y realizar pedidos mediante un proceso de pago simulado.

El objetivo es desarrollar las principales funcionalidades de una tienda online y comprobar su funcionamiento mediante pruebas automatizadas con Jest y peticiones realizadas desde Postman.

## 2. Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** framework para desarrollar la API REST.
- **MongoDB Atlas:** base de datos en la nube.
- **Mongoose:** herramienta para trabajar con MongoDB.
- **dotenv:** gestión de variables de entorno.
- **Jest:** ejecución de pruebas automatizadas.
- **Supertest:** realización de peticiones HTTP durante las pruebas.
- **Postman:** realización de peticiones y comprobación automática de respuestas.
- **GitHub:** almacenamiento y control de versiones del proyecto.
- **Vercel:** despliegue de la API.

## 3. Funcionalidades principales

La API dispone de las siguientes funcionalidades:

- Crear productos con nombre, descripción, precio y stock.
- Consultar los productos disponibles.
- Añadir productos al carrito indicando la cantidad.
- Consultar el contenido del carrito.
- Realizar una compra mediante un proceso de pago simulado.
- Comprobar que existe stock suficiente antes de completar la compra.
- Registrar el pedido realizado.
- Actualizar el stock de los productos después de la compra.
- Vaciar el carrito una vez finalizado el pedido.

## 4. Estructura del proyecto

La organización de los archivos es la siguiente:

api-ecommerce/
│
├── api/
│ └── index.js
│
├── src/
│ ├── config/
│ │ └── database.js
│ │
│ ├── controllers/
│ │ ├── cartController.js
│ │ ├── checkoutController.js
│ │ └── productController.js
│ │
│ ├── models/
│ │ ├── Cart.js
│ │ ├── Order.js
│ │ └── Product.js
│ │
│ ├── routes/
│ │ ├── cartRoutes.js
│ │ ├── checkoutRoutes.js
│ │ └── productRoutes.js
│ │
│ └── app.js
│
├── tests/
│ └── api.test.js
│
├── postman/
│ └── API E-commerce.postman_collection.json
│
├── .env.example
├── .gitignore
├── diagrama-api-ecommerce.drawio.pdf
├── Documento_Entrega_API_Ecommerce.odt
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── vercel.json

## 5. Instalación y configuración

Para ejecutar el proyecto en local es necesario tener instalado Node.js y disponer de una base de datos MongoDB.

Primero, se descargan las dependencias del proyecto:

npm install

Después, se crea un archivo `.env` en la raíz del proyecto con la configuración de la conexión a MongoDB:

MONGODB_URI=tu_url_de_conexion_a_mongodb
PORT=3000

La URL de conexión debe sustituirse por la correspondiente a la base de datos de MongoDB Atlas.

El archivo `.env` contiene información privada y no debe subirse a GitHub.

## 6. Ejecución del proyecto

Para iniciar el servidor en local se utiliza:

npm start
