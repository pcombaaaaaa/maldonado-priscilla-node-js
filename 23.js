const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un valor: '))
palabra= 'Valor:'

function arregloDeObjetos(palabra, num) {
    resultado = [];
    for(i = 1; i <= num; i++){
    resultado.push({[palabra]:i});
  }
    return resultado;
}
console.log(arregloDeObjetos(palabra, num));