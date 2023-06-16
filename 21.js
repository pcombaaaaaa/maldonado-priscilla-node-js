const prompt=require("prompt-sync")({sigint:true});

nombre= prompt('Ingrese un nombre y apellido: ')

function abbrevName(nombre) {
    return nombre.split(' ').map(x => x[0].toUpperCase()).join('.');
}
console.log(abbrevName(nombre));