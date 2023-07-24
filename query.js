const express = require("express");
const puerto = 8080;
const app = express();
const query = [
    {id:1, nombre:"Martin", edad:41, genero:"M"},
    {id:2, nombre:"Pablo", edad:50, genero:"M"},
    {id:3, nombre:"Melisa", edad:42, genero:"F"},
    {id:4, nombre:"Delia", edad:72, genero:"F"},
    {id:5, nombre:"Chucho", edad:14, genero:"M"},
];

app.get("/", (request, response) => {
    const {genero} = request.query;
    const queryFiltrados = (genero == "M") || (genero == "F") ? query.filter(item => item.genero == genero.toUpperCase()) : query;
    query;
    response.send({queryFiltrados});
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});