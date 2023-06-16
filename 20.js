const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '))
function sumattion(num){
    suma= 0
    for (i=1; i<=num; i++) {
        suma += i;
    }
    return suma; 
}
console.log(sumattion(num));