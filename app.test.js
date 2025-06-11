// app.test.js
const { inicializarContenido } = require("./app.js");

describe("Pruebas para las funciones de contenido", () => {
    beforeEach(() => {
        // Limpia el DOM y crea el elemento necesario
        document.body.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'content-box';
        document.body.appendChild(div);
    });

    test("inicializarContenido debería existir como función", () => {
        expect(typeof inicializarContenido).toBe("function");
    });

    test("inicializarContenido debería mostrar el texto correcto", () => {
        inicializarContenido();
        const contentBox = document.querySelector(".content-box");
        expect(contentBox).toBeTruthy(); // Verifica que el elemento exista
        expect(contentBox.innerHTML).toContain("Hola, soy Eduardo");
        expect(contentBox.innerHTML).toContain("Mi canción favorita es 'Hey Jude'");
    });
});