# ID for Ideas | Idea 5 - API para Inmobiliaria Bonpland

## Objetivo
El usuario final debe poder acceder a un listado de inmuebles y poder utilizar filtros para
encontrar el inmueble deseado en caso de que exista. En caso de encontrarlo, poder
contactar a la inmobiliaria conociendo l a referencia del inmueble para ser más
específico.

## Requisitos BackEnd
Ver un listado del total de los inmuebles con los filtros necesarios para poder ver
especificando: cantidad de ambientes, país ciudad, metros cuadrados m ínimos y
máximos, rango de precio, y tipo de contratación (alquiler o compra).

Se debe poder acceder al detalle de cada inmueble y poder acceder a un link para
contactar a la inmobiliaria enviando el código de referencia de ese inmueble en
particular.

La inmobiliaria debe contar con un panel privado para poder gestionar el listado de inmuebles para hacer la carga, edición y eliminación de cada uno.

Los inmuebles pueden estar en diferentes estados como "disponibles", "reservado",
"alquilado" o "vendido".

## ¿Qué dependencias se utilizaron?

### Production:

- Express
- Mongoose
- Helmet
- Morgan
- Cors
- JsonWebToken
- DotEnv

### Development:

- Nodemon

## Archivos Requeridos

Crear un archivo '.env' en la raiz del repositorio que contenga las siguientes variables:

```
NODE_ENV= < development || production >
PORT= < puerto >

SECRET= < palabra clave para uso de tokens >

USER= < nombre de usuario administrador >
PASSWORD= < password del usuario administrador >

DATABASE_URL= <URL a base de datos Mongo (ej: mongodb://localhost:27017/Inmobiliaria-Bonpland-Dev)>
```

## Scripts disponibles

En este proyecto, se puede utilizar:

### `npm run server`

Corre la API para ambiente de desarrollo, actualizandose cuando se aplican cambios.

### `npm start`

Corre la API para ambiente de producción, donde no se actualiza si se aplican cambios.

## Pasos para clonar repositorio

Abrir terminal e ingresar

```
$ cd <directorio donde se quiere clonar>

$ git clone https://github.com/liisandrob/idforideas-api-inmobiliaria-bonpland/

$ npm i

$ npm run server
```