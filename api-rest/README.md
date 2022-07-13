# Primera api rest sencilla, para poder hacer pruebas como frontend

## vamos a utilizar JSON SERVER

requisitos para hacerlo:

- tener node js instalado

pasos para creación:

1- npm init -y -> instalando los paquetes de node con un YES por defecto.
=====se instalan dependencias básicas===== en un archivo.json

2- Instalamos el paquete que vamos a utilizar, en este caso `JSON SERVER`

```c
npm i json-server -D
```

-D -> como `dependencia de desarrollo`

## debemos saber que:

al tirar simplemente este comando al clonar el repositorio va a instalar todas las `dev-dependencies`

```c
npm install
```

# Objetivo

queremos poder lanzar la api que trabaje contra un archivo `.json` con el que podemos comunicarnos con ella, `sacar datos` y `usarlos`

## En package.json vamos a agregar comandos que van a poder utilizarse en nuestra aplicación, de esta manera:

comando json server que instalamos y le decimos donde tiene que mirar nuestra aplicación.

```c
    "scripts": {
        "servicio": "json-server --watch data.json"
    }
```

## nos falta poner en marcha nuestro servicio:

```c
npm run inicio
```

## Debería lanzarnos lo siguiente

```c
  \{^_^}/ hi!

  Loading data.json
  Done

  Resources
  http://localhost:3000/autores
  http://localhost:3000/movies
  http://localhost:3000/comentarios

  Home
  http://localhost:3000

```

## vemos que en el puerto 3000 tenemos 3 [endpoints] de mi api rest.

# Hagamos pruebas de la api Jugando con los endpoints

```c

========Retiramos la pelicula de "id": 2, "titulo", "postID: 4" 1=========
localhost:3000/movies/1


========Retiramos la pelicula de nombre Naruto=========
localhost:3000/movies/?titulo=Naruto


```

# En el siguiente link podemos ver todo lo que disponemos para acceder a la informaciones

## (repositorio de json server)

- [json-server]("https://typicode/json-server")

# Vimos algo sobre la LECTURA, nos falta ESCRITURA de nuestra api.

Lo podemos testear con `hoppscotch` alternativa a postman

`LLamadas a endpoints rest`

> vamos a realizar llamadas HTTP normales con él

## Vamos a hacer un POST a un endpoint especifico

`POST` `http://localhost:3000/movies`

## Cuerpo de la solicitud

```c
{ "id": 2, "titulo": "Interestellar", "postID: 4"}
```

-> vamos a meter ese contenido en esa URL

## Elegir el puerto en el que queremos corra nuestra api

```c
// comando
"inicio": "json-server" --port 8081 --watch api.json
```

-> correra en el `8081` en vez del `3000`
