const prompt=require("prompt-sync")({sigint:true});

var color= prompt('Ingrese el color que desee: ')

switch (color) {
    case 'azul':
        console.log('Blue');
        break;
    case 'rojo':
        console.log('Red');
        break;
    case 'verde':
        console.log('Green');
        break;
    case 'naranja':
        console.log('Orange');
        break;
    case 'amarillo':
        console.log('Yellow');
        break;
    default:
        console.log('Lo siento, ese color no esta disponible');
}