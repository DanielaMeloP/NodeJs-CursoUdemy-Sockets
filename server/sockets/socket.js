
// Se importa io desde server.js
const {io} = require("../server");


// Se sabe información de una conexión.
// client obtiene toda la información de la  conexión.
io.on("connection", (client) => {
    
    console.log("Usuario conectado");
    
    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a la aplicación"
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    // Escuchar el cliente
    client.on("enviarMensaje", (data, callback) => {
        
        console.log(data);

        // Enviara mensaje a todos los usuarios, esto es por la propiedad broadcast
        client.broadcast.emit("enviarMensaje", data);

        /*
        if(mensaje.usuario){
            callback({
                resp: "Todo salio bien c:"
            });
        }else{
            callback({
                resp: "Todo salio mal :c"
            });
        }
        */


    });

});

// http://localhost:3000/socket.io/socket.io.js
// Muetra si esta correctamente el socket io
