const express = require("express");
const puerto = 8080;
const app = express();
const trabajos = [
    {id:1, nombre:"Martin Pablo", edad:41},
    {id:2, nombre:"Nata", edad:80},
    {id:3, nombre:"tita", edad:96}
];

app.get("/", (request, response) => {
    response.send({trabajos});
});

app.get("/:idUsuario", (request, response) => {
    const id = Number(request.params.idUsuario);
    const trabajo = trabajos.find(item => item.id === id);
    const trabajoFiltro = trabajo ? trabajo : "Error No existe el ID del trabajo";
    response.send({trabajo:trabajoFiltro});
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});