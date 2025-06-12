// app.js

// Función para inicializar el contenido
function inicializarContenido() {
    if (typeof document !== "undefined" && document.querySelector(".content-box")) {
        const contentBox = document.querySelector(".content-box");
        contentBox.innerHTML = `
            <p>Hola, soy Eduardo</p>
            <p>Mi canción favorita es 'Hey Jued'</p>
        `;
    } else {
        console.warn("El elemento .content-box no está disponible.");
    }
}

// Función para reproducir el audio en loop
function reproducirAudio() {
    if (typeof document !== "undefined") {
        const audio = new Audio("src/heyjude.mp3");
        audio.loop = true;
        const playButton = document.getElementById("playButton");
        if (playButton) {
            playButton.addEventListener("click", () => {
                if (audio.paused) {
                    audio.play()
                        .then(() => console.log("Reproducción iniciada"))
                        .catch(error => console.error("Error al reproducir audio:", error));
                } else {
                    audio.pause();
                    console.log("Reproducción pausada");
                }
            });
        } else {
            console.warn("El botón playButton no está disponible.");
        }
    }
}

// Exportamos funciones para pruebas
if (typeof module !== "undefined") {
    module.exports = { inicializarContenido, reproducirAudio };
}

// Inicializamos solo en el navegador, pero solo si el DOM está listo
if (typeof document !== "undefined" && document.readyState === "complete") {
    inicializarContenido();
    reproducirAudio();
} else if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
        inicializarContenido();
        reproducirAudio();
    });
}