//solicitamos paquete de node
const http = require('http');

//host y puerto en el que va a vivir
const host_name = "127.0.0.1";
const port = 3000;

//instanciamos el servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //al terminar la petición dejame este mensaje
    res.end("Servidor creado correctamente");
});

//el servidor nos va a escuchar y le vamos a mandar un par de datos a mostrar
server.listen(port, host_name, () => {
    console.log(`Servidor corriendo en http://${host_name}:${port}/`);

     console.log(`INFO:\nnombre del host: ${host_name}\n puerto:${port}`);
})