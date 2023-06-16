const prompt=require("prompt-sync")({sigint:true});

segundos= parseInt(prompt('Ingrese los segundos: '))
function toTime(segundos) {
    hora = Math.floor(segundos / 3600);
    hora = (hora < 10)? '0' + hora : hora;
    minuto = Math.floor((segundos / 60) % 60);
    minuto = (minuto < 10)? '0' + minuto : minuto;
    return hora + 'Hora(s) y ' + minuto + 'Minuto(s)';
  }
console.log(toTime(segundos));