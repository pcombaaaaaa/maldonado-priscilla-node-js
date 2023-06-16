const prompt=require("prompt-sync")({sigint:true});

inicio= parseInt(prompt('Ingrese un numero de inicio: '));
final= parseInt(prompt('Ingrese un numero final: '));
sumador= parseInt(prompt('Ingrese un sumador: '));
lista= new Array

function rango (inicio, final, sumador, lista) {
    for (i=inicio; i<=final; i+=sumador){
        {lista.push(i)}
    }
    console.log(lista)
}
console.log(rango(inicio, final, sumador, lista));