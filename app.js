const express = require("express");
const puerto = 8080;
const app = express();
app.get("/trabajo", (request, response) => {
    response.send("Trabajo Tres");
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
})