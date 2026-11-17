# API de Tienda Online (E-commerce)

## 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para gestionar una tienda online mediante Node.js, Express y MongoDB.

La API permite crear y consultar productos, añadir productos a un carrito de compra y realizar pedidos mediante un proceso de pago simulado.

## 2. Tecnologías utilizadas

- Node.js: entorno de ejecución de JavaScript.
- Express: framework para crear la API REST.
- MongoDB Atlas: base de datos en la nube.
- Mongoose: conexión y gestión de los datos de MongoDB.
- dotenv: gestión de variables de entorno.
- Jest: pruebas automatizadas.
- Supertest: pruebas de los endpoints HTTP.
- Postman: comprobación manual de los endpoints.
- Vercel: plataforma de despliegue.

## 3. Funcionalidades

- Crear productos.
- Consultar los productos disponibles.
- Añadir productos al carrito.
- Consultar el contenido del carrito.
- Comprobar que existe stock suficiente.
- Realizar una compra mediante un pago simulado.
- Registrar el pedido y actualizar el stock.
- Vaciar el carrito después de completar la compra.

## 4. Estructura del proyecto

api-ecommerce/
│
├── api/
│ └── index.js
│
├── src/
│ ├── config/
│ │ └── database.js
│ ├── models/
│ │ ├── Product.js
│ │ ├── Cart.js
│ │ └── Order.js
│ ├── controllers/
│ │ ├── productController.js
│ │ ├── cartController.js
│ │ └── checkoutController.js
│ ├── routes/
│ │ ├── productRoutes.js
│ │ ├── cartRoutes.js
│ │ └── checkoutRoutes.js
│ └── app.js
│
├── tests/
│ └── api.test.js
│
├── postman/
│ └── API E-commerce.postman_collection.json
│
├── diagrama-api-ecommerce.drawio.pdf
├── server.js
├── vercel.json
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md

## 5. Instalación y configuración

Es necesario tener instalado Node.js.

1. Descargar o clonar el proyecto.
2. Abrir una terminal en la carpeta principal.
3. Instalar las dependencias:

npm install

4. Crear un archivo `.env` a partir de `.env.example`.
5. Configurar las variables de entorno con los datos de conexión de MongoDB Atlas.

Variables necesarias:

PORT=3000
MONGODB_URI=tu_uri_de_mongodb

No se deben compartir las credenciales reales de la base de datos.

## 6. Ejecución del proyecto

Para iniciar el servidor:

npm start

La API estará disponible localmente en:

`http://localhost:3000`

## 7. Endpoints de la API

### 7.1. Crear un producto

**Método:** POST

**Ruta:** `/products`

Permite registrar un nuevo producto.

Ejemplo del cuerpo de la petición:

{
"nombre": "Ratón inalámbrico Logitech",
"descripcion": "Ratón inalámbrico para ordenador",
"precio": 29.99,
"stock": 15
}

### 7.2. Consultar productos

**Método:** GET

**Ruta:** `/products`

Devuelve los productos que tienen stock disponible.

### 7.3. Añadir un producto al carrito

**Método:** POST

**Ruta:** `/cart`

Ejemplo del cuerpo de la petición:

{
"productoId": "ID_DEL_PRODUCTO",
"cantidad": 2
}

Comprueba que el producto existe y que hay stock suficiente antes de añadirlo.

### 7.4. Consultar el carrito

**Método:** GET

**Ruta:** `/cart`

Muestra los productos y las cantidades que contiene el carrito.

### 7.5. Realizar una compra

**Método:** POST

**Ruta:** `/checkout`

Comprueba el contenido del carrito y el stock disponible, calcula el importe total, registra el pedido y simula el pago.

Después de completar la compra, actualiza el stock y vacía el carrito.

El sistema utiliza un pago simulado y no realiza transacciones económicas reales.

## 8. Pruebas automatizadas

El proyecto utiliza Jest y Supertest para comprobar el funcionamiento de la API.

Para ejecutar las pruebas:

npm test

Las pruebas comprueban:

- La creación de productos.
- La incorporación de productos al carrito.
- El rechazo de una compra cuando el carrito está vacío.

## 9. Pruebas con Postman

En la carpeta `postman` se incluye la colección `API E-commerce.postman_collection.json`.

Esta colección contiene las cinco peticiones necesarias para comprobar el funcionamiento de la API y realizar el proceso de compra.

Para utilizarla, hay que importar el archivo desde Postman.

## 10. Despliegue

La API está desplegada correctamente en Vercel y funciona en producción.

**URL pública:**

https://api-ecommerce-virid.vercel.app

Se han comprobado los cinco endpoints de la API y su conexión con MongoDB Atlas.

## 11. Diagramas

Se incluye un documento PDF con dos diagramas:

- Diagrama de flujo: representa el funcionamiento de la tienda online, desde la consulta de productos hasta la confirmación de la compra.
- Diagrama de componentes: muestra la estructura de la API y la relación entre el cliente, Express, los modelos, MongoDB Atlas, las pruebas automatizadas y el despliegue en Vercel.
