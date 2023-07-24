const express = require("express");
const puerto = 8080;
const app = express();
app.get("/", (request, response) => {
    let contenido = `<html>
    <body>
    <ul style="color:white; background-color:red; padding:30px;">
        <li><a href="/bienvenidos" style="color:white; text-decoration:none;">Bienvenidos</a></li>
        <li><a href="/usuario" style="color:white; text-decoration:none;">Usuario</a></li>
    

    </body>
    </html>`;
    response.send(contenido);

});

app.get("/bienvenidos", (request, response) => {
    let contenido = `<html>
    <body>
    <h1 style='color:white; background-color:red;text-align:center; padding:25px;'>Trabajo Practico Tres</h1>
    </body>
    </html>`;
    response.send(contenido);
});

app.get("/usuario", (request, response) => {
    const usuario = {nombre:"Martin", apellido:"Pablo", edad:41, correo:"martinboca22@gmail.com"};
    response.send({usuario});

});

app.listen(puerto, () => {
    console.log("Servidor activo: " + puerto);
});