const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '));

function esPrimo(num) {
    let i = 1;
    while (num % ++i != 0);
    return num == i;
  }
console.log(esPrimo(num));