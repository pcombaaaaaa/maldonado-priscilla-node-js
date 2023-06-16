const prompt=require("prompt-sync")({sigint:true});

edad = parseInt(prompt('Ingrese una edad: '))

if (edad < 13) console.log('Es un niño') 
if (edad >=13 && edad <=17) console.log('Es un adolescente')
if (edad >=18 && edad <=110) console.log('Es un adulto')
if (edad >110) console.log('No es una edad valida')
