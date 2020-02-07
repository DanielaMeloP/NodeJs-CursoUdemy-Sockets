var socket = io();

// Escucha conexiones
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("No hay conexión con el servidor");
});


// emit para enviar información al servidor
// on para escuchar información del servidor

// Enviar información
socket.emit("enviarMensaje", {
    usuario: "Daniela",
    mensaje: "Hola mundo",
}, function (resp) {
    // console.log("Se disparo callback");
    console.log("Respuesta servidor: ", resp);
} );

// Escuchar información
socket.on("enviarMensaje", function(mensaje){
    console.log("Servidor: " , mensaje);
});
