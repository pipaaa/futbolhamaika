let intentos = 5;

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('nombre-jugador').value.toLowerCase();

    // Aquí deberías tener una lista de jugadores vascos
    const respuestaCorrecta = 'nombre_del_jugador'; // Reemplazar con el nombre real del jugador

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById('mensaje-resultado').textContent = '¡Correcto! Has adivinado al jugador.';
    } else {
        intentos--;
        document.getElementById('intentos-restantes').textContent = `Intentos restantes: ${intentos}`;

        if (intentos === 0) {
            document.getElementById('mensaje-resultado').textContent = '¡Agotaste tus intentos! Vuelve a intentarlo en 1 hora.';
            document.getElementById('nombre-jugador').disabled = true; // Deshabilita la entrada después de perder
        } else {
            document.getElementById('mensaje-resultado').textContent = 'Incorrecto. Sigue intentando.';
        }
    }
}
