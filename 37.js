const prompt=require("prompt-sync")({sigint:true});

cadena= prompt('Ingrese una cadena: ')

function recibir(cadena) {
    var resultado = "La cadena \""+cadena+"\" ";
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    } 
    return resultado;
  }
console.log(recibir(cadena));