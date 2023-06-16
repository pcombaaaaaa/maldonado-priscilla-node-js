const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '))

function contarHasta(num){
    var i = 0;
    do {
      i = i + 1;
      console.log(i);
    } while (i < num);
}
console.log(contarHasta(num));