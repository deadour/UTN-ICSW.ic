function suma(a, b) {
    return a + b;
}

// Esto le dice a las pruebas: "Podés usar la función suma"
if (typeof module !== "undefined") {
    module.exports = { suma };
}

// Esto cambia el mensaje en la página, pero solo si estamos en un navegador
if (typeof document !== "undefined") {
    let pedacitoDePapel = document.getElementById("resultado");
    pedacitoDePapel.innerText = "La suma de 2 + 3 es: " + suma(2, 3);
}