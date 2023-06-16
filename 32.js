const prompt=require("prompt-sync")({sigint:true});

let letra = '';
do {
  letra = prompt('Por favor ingrese la letra "F" en mayúscula:');
} while (letra !== 'F');

console.log('¡Lo lograste!');