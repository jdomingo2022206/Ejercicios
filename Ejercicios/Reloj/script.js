document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('es-ES', options);
        timeElement.textContent = now.toLocaleTimeString('es-ES');
    }

    // Actualizar la fecha y la hora cada segundo
    setInterval(updateDateTime, 1000);

    // Llamada inicial para mostrar la fecha y la hora
    updateDateTime();
});
