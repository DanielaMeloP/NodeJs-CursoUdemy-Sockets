const express = require('express');
// Socket IO
const socketIO = require("socket.io");
//Levantara servidor
const http = require("http");

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Se inicializa socketIO  IO = comunicación del backend
module.exports.io = socketIO(server);
require("./sockets/socket");




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});