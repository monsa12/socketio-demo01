const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        //con broadcast se envia a todos los usuaorps contectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio mal'
        //     });

        // }

    });

});