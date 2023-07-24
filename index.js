const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Desafio Tres");
});

server.listen(8080, () => {
    console.log("Servidor conectado al Puerto: 8080");
});