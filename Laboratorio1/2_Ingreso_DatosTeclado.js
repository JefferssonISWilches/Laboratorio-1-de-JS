
const prompt = require("prompt-sync")();

// Ejercicio 1
let nacimiento = prompt("¿En que año naciste?");
let edad = 2025 - parseInt(nacimiento);
console.log("Tu edad es:", edad);

//Ejercicio 2: 
let num1 = parseFloat(prompt("Ingresa el primer numero:"));
let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
let suma = num1 + num2;

console.log("La suma es:", suma);
