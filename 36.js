const prompt=require("prompt-sync")({sigint:true});

let dinero = 50; 
let numero = parseInt(prompt("Ingrese el número al que quiere apostar (por defecto 1): ") || 1); 
let apuesta = parseInt(prompt("Ingrese la cantidad que quiere apostar (por defecto 20): ") || 20);
let dado = Math.floor(Math.random() * 6) + 1; 
console.log("El número que ha salido es: ", dado);

if (apuesta > dinero) {
  console.log("No tienes suficiente dinero para apostar esa cantidad.");
} else if (numero === dado) {
  dinero += apuesta * 2;
  console.log("¡Felicidades! Has acertado y has ganado: ", apuesta * 2, "pesos.");
} else {
  dinero -= apuesta;
  console.log("Lo siento, has perdido: ", apuesta, "pesos.");
  console.log("Te queda un total de: ", dinero, "pesos.");
}

if (dinero <= 0) {
  console.log("Lo siento, has perdido el juego.");
} else if (dinero >= 200) {
  console.log("¡Felicidades! Has ganado el juego.");
} else {
  let continuar = prompt("¿Quiere seguir jugando?");
  if (continuar) {
    numero = parseInt(prompt("Ingrese el número al que quiere apostar (por defecto 1):") || 1);
    apuesta = parseInt(prompt("Ingrese la cantidad que quiere apostar (por defecto 20):") || 20);
    dado = Math.floor(Math.random() * 6) + 1;
    console.log("El número que ha salido es:", dado);
  }
}
