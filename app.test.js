// app.test.js
const { calcularSuma } = require("./app.js");

test("calcularSuma 2 + 3 debería ser 5", () => {
    expect(calcularSuma(2, 3)).toBe(5);
});