const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Abacus :)");
});

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

http.createServer(app).listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`);
});