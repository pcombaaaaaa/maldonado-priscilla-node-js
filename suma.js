const prompt=require("prompt-sync")({sigint:true});
       
n1 = parseInt(prompt('Ingresar primer numero : '))
n2 = parseInt(prompt('Ingresar segundo numero : '))

vsuma = n1 + n2
console.log('La suma es '+vsuma)