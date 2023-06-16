const prompt=require("prompt-sync")({sigint:true});

productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]

function pluck(array, propiedad) {
    nuevoArray = array.map((a) => a[propiedad]);
    return nuevoArray;
}
console.log(pluck(productos,'name'))