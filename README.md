# Descripcion

### Esta arquitectura permite conectarse a una base de datos no relacional basada en MongoDB.
### El backend fue desarrollado en typescript y luego compilado a javascript.
### Inicialmente mongodb.js contiene el codigo referente al enlace con la base de datos con una referencia al archivo .env que contiene la ruta de la base de datos para que pueda ser conectado. El archivo authMiddleware.js actua como verificador en el backend antes de permitir el paso a datos invalidos que no serian admitidos en la base de datos. Esta barrera permite no sobrecargar de interacciones a la base de datos asi como reducir tiempo de respuesta.
### Los archivos auth.controller.js y product.controller.js sirven para crear y validar que sean correctamente escritas las funciones que permiten registrarse e ingresar en el primero y las que permiten ejectutar las funciones de CRUD en el segundo.
### Tanto product.model.js como user.model.js delimitan los campos que la base de datos puede admitir para ser rellenados.
### Los archivos authRouter.js y productsRouter.js indican los metodos de CRUD, las funciones y las rutas que se usaran para cada peticion segun sea de usuarios o de productos.
### El archivo index.js implementa de manera ordenada todas las funciones encotradas en los demas archivos y abre la conexion al servidor.

# Peticiones CURL
## Obtener productos

```sh
curl http://localhost:50000/products
```
## Obtener producto especifico
```sh
curl "http://localhost:50000/products?name=televisor&price=5000"
```
## Agregar producto

```sh
curl -X POST http://localhost:50000/products -H "Content-Type: application/json" -d '{
  "name": "Par de medias 2",
  "price": 50,
  "stock": 0,
  "category": "Ropa",
  "description": "Medias de algodón unisex."
}'
```

## Modificar producto
```sh
curl -X PATCH http://localhost:50000/products/695d9fa29f59ec384ab62f3e -H "Content-Type: application/json" -d '{
  "price": 70,
  "stock": 55
}'

```
## Borrar producto
```sh
curl -X DELETE http://localhost:50000/products/695d9fa29f59ec384ab62f3e

```
