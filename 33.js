const prompt=require("prompt-sync")({sigint:true});

let repetir;

do {
  const num1 = parseInt(prompt("Ingrese un número:"));
  const num2 = parseInt(prompt("Ingrese otro número:"));
  const suma = num1 + num2;

  console.log(`La suma de los números es: `+suma);

  do {
    repetir = prompt("¿Quieres repetir la operación? (SI/NO): ").toUpperCase();
  } while (repetir !== "SI" && repetir !== "NO");

} while (repetir === "SI");