const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '))
lista= new Array

function nuevoarreglo(num, lista) {
    for (i=1; i<=num; i++){
    {lista.push(i)}
    }
    console.log(lista)
}
console.log(nuevoarreglo(num,lista));