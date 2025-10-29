// Ejercicio 1
const prompt = require("prompt-sync")();

let limite = parseInt(prompt("Ingresa un numero:"));
let contador = 1;

while (contador <= limite) {
    console.log(contador);
    contador++;
}

// Ejercicio 2

let contraseña = "";

while (contraseña !== "1234") {
    contraseña = prompt("Ingresa la contraseña:");
}

console.log("Contraseña correcta");