// Ejercicio 1
const prompt = require("prompt-sync")();

let edad = parseInt(prompt("¿Cual es tu edad?"));

if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}

// Ejercicio 2

let numero = parseInt(prompt("Ingresa un numero:"));

if (numero > 0) {
    console.log("Es numero es positivo");
} else if (numero < 0) {
    console.log("Es numero es negativo");
} else {
    console.log("Es cero");
}