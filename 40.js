const prompt=require("prompt-sync")({sigint:true});


class Bus{
    constructor( conductor, cap){
        this.conductor = conductor;
        this.capacidad = cap;
        this.pasajeros = 0;
    }
    subir = function(num){
        if (this.pasajeros+num < this.capacidad){
            	this.pasajeros += num;
             }
         else{
            this.pasajeros = this.capacidad
             }
      }
    bajar = function(num){
        if (num <= this.pasajeros){
            	this.pasajeros -= num;
             }
         else{
            this.pasajeros = 0
             }
      }
   
}
class Conductor{
         constructor(nb, lic){
  	  	  	  	 	this.nombre = nb;
  	  	  	  	 	this.licencia = lic;
             	}
}
var cond1 = new Conductor("Pri", 1234);
var linea1 = new Bus(cond1, 40);
console.log("conductor es "+linea1.conductor.nombre);
linea1.subir(30);
console.log("Pasajeros al subir 30:  " + linea1.pasajeros);
linea1.subir(20);
console.log("Pasajeros al subir 20:  "+linea1.pasajeros);
linea1.bajar(30);
console.log("Pasajeros al bajar 30:  "+linea1.pasajeros);