var socket = io();
//.on escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexion perdida');
});


//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);

});

//Escuchar informacion
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
})