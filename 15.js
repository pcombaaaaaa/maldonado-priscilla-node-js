const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Introduzca un numero: '))
div= parseInt(prompt('Introduzca un divisor: '))
lista= new Array
function divisores(num, div, lista) {
    for (let i = 1; i <= num; i++){
        if (i % div == 0) {lista.push(i);}  
    }
    console.log(lista)
  }
console.log(divisores(num, div, lista));