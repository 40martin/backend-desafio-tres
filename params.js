const express = require("express");
const puerto = 8080;
const app = express();
app.get("/parametro/:nombre", (request, response) => {
    let nombre = request.params.nombre;
    response.send("Trabajos, " + nombre);
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
})