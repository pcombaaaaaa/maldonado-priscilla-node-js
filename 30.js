const prompt=require("prompt-sync")({sigint:true});

let total = 0;
let numero;

do {
  numero = parseInt(prompt("Ingresa un número (Ingrese 0 para terminar): "));
  total += numero;
} while (numero !== 0);

console.log(`La suma de los números ingresados es `+total);