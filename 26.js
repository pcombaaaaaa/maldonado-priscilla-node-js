const prompt=require("prompt-sync")({sigint:true});

var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10}, { nombre: "DELL notbook", precio: 4000, articulos:30 }, {nombre:"Auriculares Sony", precio: 1500, articulos:15}, {nombre:"Monitor Philips", precio:12000, articulos:20}, {nombre:"Teclado logitech", precio: 3000, articulos:5}] 

function totalDeArticulos(productos) {
    const secciones = {};
    for (const producto of productos) {
      if (secciones[producto.nombre]) {
        secciones[producto.nombre] += producto.precio * producto.articulos;
      } else {
        secciones[producto.nombre] = producto.precio * producto.articulos;
      }
    }
    const resultado = [];
    for (const nombreProducto in secciones) {
      resultado.push({
        [nombreProducto]: secciones[nombreProducto]
      });
    }
    return resultado;
  }
console.log(totalDeArticulos(ecommerce));  