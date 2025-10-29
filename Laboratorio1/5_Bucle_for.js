// Ejercicio 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 1

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresa un numero para ver su tabla:"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}