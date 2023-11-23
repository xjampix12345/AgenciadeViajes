// cambiarColores.js

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color de los enlaces al azar
function cambiarColoresAleatorios() {
    var enlaces = document.querySelectorAll('.menu-desktop a');

    enlaces.forEach(function(enlace) {
        enlace.style.color = generarColorAleatorio();
    });
}

// Cambiar los colores cada 3000 milisegundos (3 segundos)
setInterval(function() {
    cambiarColoresAleatorios();
}, 1000);