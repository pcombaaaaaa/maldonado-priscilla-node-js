const prompt=require("prompt-sync")({sigint:true});
//corregir
num1= parseInt(prompt('Ingrese el primer numero: '))
num2= parseInt(prompt('Ingrese el segundo numero: '))
num3= parseInt(prompt('Ingrese el tercer numero: '))

function OperadoresLogicos(num1, num2, num3) {
  if (num1 >= num2 || num1 >= num3 || num1 >= 0) {
    return "El primer numero es mayor y positivo"
  } else if (num3 > num1 && num3 > num2) {
      suma=num3 + 1;
      return suma  
  } else if (num1 < 0 || num2 < 0 || num3 < 0 ) {
      return "Hay negativos"
  } else if (num1 === 0 || num2 === 0 || num3 === 0 ) {
      return "Error"
  } else {
      return false
  }
}
console.log(OperadoresLogicos(num1, num2, num3));