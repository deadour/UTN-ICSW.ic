// app.js

// Función para calcular la suma de dos números
function calcularSuma(a, b) {
    return a + b;
}

// Exportamos la función para las pruebas
if (typeof module !== "undefined") {
    module.exports = { calcularSuma };
}

// Manipulamos el DOM si estamos en un navegador
if (typeof document !== "undefined") {
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerText = `El resultado de sumar 2 + 3 es: ${calcularSuma(2, 3)}`;
}