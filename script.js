document.addEventListener("DOMContentLoaded", function() {
    var datosItems = document.querySelectorAll('.datos-item');
    var isColor1 = true;

    setInterval(function() {
        datosItems.forEach(function(item) {
            // Cambiar entre dos colores
            if (isColor1) {
                item.style.backgroundColor = '#7ECA9C';
            } else {
                item.style.backgroundColor = '#4E995E';
            }
        });

        // Alternar el estado
        isColor1 = !isColor1;
    }, 3000); // Cambia el color cada 3000 milisegundos (3 segundos)
});
