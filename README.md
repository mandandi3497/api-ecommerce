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
- **Postman:** comprobación manual de los endpoints.
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

Si la conexión con MongoDB se establece correctamente, la API queda disponible en:

http://localhost:3000

## 7. Endpoints de la API

La API cuenta con los siguientes endpoints:

| Método | Endpoint    | Descripción                                   |
| ------ | ----------- | --------------------------------------------- |
| POST   | `/products` | Crear un producto.                            |
| GET    | `/products` | Consultar los productos disponibles.          |
| POST   | `/cart`     | Añadir un producto al carrito.                |
| GET    | `/cart`     | Consultar el contenido del carrito.           |
| POST   | `/checkout` | Realizar la compra mediante un pago simulado. |

### Ejemplo de creación de producto

Petición:

POST /products

Cuerpo JSON:

{
"nombre": "Teclado inalámbrico Logitech",
"descripcion": "Teclado inalámbrico para ordenador",
"precio": 39.99,
"stock": 10
}

### Ejemplo de añadir un producto al carrito

Petición:

POST /cart

Cuerpo JSON:

{
"productoId": "ID_DEL_PRODUCTO",
"cantidad": 2
}

El identificador debe corresponder a un producto existente en la base de datos.

### Ejemplo de realizar una compra

Petición:

POST /checkout

La compra se realiza utilizando los productos que se encuentran en el carrito. El sistema calcula el importe total, comprueba el stock, registra el pedido y actualiza el carrito.

El pago es simulado y no se realiza ningún cobro real.

## 8. Pruebas automatizadas con Jest

El proyecto incluye pruebas automatizadas desarrolladas con Jest y Supertest.

Para ejecutarlas se utiliza:

npm test

Las cuatro pruebas comprueban:

1. La creación de productos correctamente.
2. La incorporación de productos al carrito.
3. El rechazo del checkout cuando el carrito está vacío.
4. La finalización correcta del checkout y el registro del pedido.

**Resultado de las pruebas:**

- 1 suite de pruebas superada.
- 4 pruebas superadas.
- 0 pruebas fallidas.

Todas las pruebas se han ejecutado correctamente.

## 9. Pruebas con Postman

Se incluye una colección de Postman llamada `API E-commerce`, situada en la carpeta `postman`.

La colección contiene las cinco peticiones principales de la API:

1. Crear producto.
2. Listar productos.
3. Agregar producto al carrito.
4. Consultar carrito.
5. Realizar checkout.

Se ha comprobado el funcionamiento de todas las peticiones en local, verificando también que la compra se registra correctamente y que el carrito queda vacío después de finalizar el pedido.

## 10. Despliegue

El proyecto está almacenado en GitHub y desplegado en Vercel.

**Repositorio de GitHub:**

https://github.com/mandandi3497/api-ecommerce

**API desplegada en Vercel:**

https://api-ecommerce-virid.vercel.app

La aplicación utiliza MongoDB Atlas para almacenar los productos, el carrito y los pedidos.

Se han comprobado los cinco endpoints en el entorno desplegado y se ha verificado su conexión con la base de datos.

## 11. Diagramas

El proyecto incluye un documento PDF llamado `diagrama-api-ecommerce.drawio.pdf` con dos diagramas:

- **Diagrama de flujo:** representa el proceso de consulta de productos, selección, gestión del carrito y realización de la compra.
- **Diagrama de componentes:** muestra la relación entre el cliente, la API REST, las rutas, los controladores, los modelos y MongoDB Atlas.

Estos diagramas permiten comprender tanto el funcionamiento del proceso de compra como la organización general de la aplicación.

---

**Proyecto:** API de Tienda Online (E-commerce)  
**Tecnologías principales:** Node.js, Express y MongoDB.  
**Despliegue:** Vercel.
