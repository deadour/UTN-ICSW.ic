// app.js

// Función para inicializar el contenido
function inicializarContenido() {
    if (typeof document !== "undefined" && document.querySelector(".content-box")) {
        const contentBox = document.querySelector(".content-box");
        contentBox.innerHTML = `
            <p>Hola, soy Eduardo</p>
            <p>Mi canción favorita es 'Hey Jude'</p>
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
                audio.play().catch(error => console.error("Error al reproducir audio:", error));
            });
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