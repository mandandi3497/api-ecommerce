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

## 7. Endpoints de la API

La API dispone de los siguientes endpoints:

| Método | Endpoint    | Descripción                                   |
| ------ | ----------- | --------------------------------------------- |
| POST   | `/products` | Crear un producto.                            |
| GET    | `/products` | Consultar todos los productos.                |
| POST   | `/cart`     | Añadir un producto al carrito.                |
| GET    | `/cart`     | Consultar el contenido del carrito.           |
| POST   | `/checkout` | Realizar la compra mediante un pago simulado. |

### Ejemplos de uso

**Crear un producto — POST /products**

{
"nombre": "Teclado inalámbrico Logitech",
"descripcion": "Teclado inalámbrico para ordenador",
"precio": 39.99,
"stock": 10
}

**Añadir un producto al carrito — POST /cart**

{
"productoId": "ID_DEL_PRODUCTO",
"cantidad": 2
}

**Realizar la compra — POST /checkout**

El endpoint procesa los productos del carrito, comprueba el stock, calcula el importe total y registra el pedido. El pago es simulado.

## 8. Pruebas automatizadas con Jest

El proyecto utiliza Jest y Supertest para comprobar el funcionamiento de la API.

Se han implementado cuatro pruebas automatizadas:

- Crear un producto correctamente.
- Añadir un producto al carrito.
- Rechazar una compra cuando el carrito está vacío.
- Realizar una compra correctamente, registrar el pedido y vaciar el carrito.

Para ejecutar las pruebas:

npm test

**Resultado:** las cuatro pruebas se ejecutan correctamente.

## 9. Pruebas con Postman

Se incluye una colección de Postman en la carpeta `postman`, con el archivo `API E-commerce.postman_collection.json`.

La colección contiene cinco peticiones para probar el funcionamiento de todos los endpoints:

1. Crear producto.
2. Listar productos.
3. Agregar producto al carrito.
4. Consultar carrito.
5. Realizar checkout.

Cada petición incorpora pruebas automáticas para comprobar el estado de la respuesta y los datos devueltos.

La colección incluye un total de 15 comprobaciones automáticas. También guarda automáticamente el identificador del producto creado para utilizarlo en la petición de añadir al carrito.

Las cinco peticiones se han probado correctamente.

## 10. Despliegue y repositorio

El proyecto está publicado en GitHub y desplegado en Vercel.

- **Repositorio de GitHub:** https://github.com/mandandi3497/api-ecommerce
- **API desplegada en Vercel:** https://api-ecommerce-virid.vercel.app
- **Base de datos:** MongoDB Atlas.

La variable de entorno `MONGODB_URI` se configura en Vercel para establecer la conexión con MongoDB Atlas.

## 11. Diagramas

Se incluye el archivo `diagrama-api-ecommerce.drawio.pdf`, que contiene dos diagramas:

- **Diagrama de flujo:** representa el proceso de consulta de productos, gestión del carrito y realización de la compra.
- **Diagrama de componentes:** representa la organización de la API y la relación entre sus principales componentes, controladores, modelos, rutas y base de datos.
