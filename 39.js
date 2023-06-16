const prompt=require("prompt-sync")({sigint:true});

class Ficha{
    constructor(n){
        this.nombre = n;
        this.sesiones = [];
        this.numsesiones = 0
    }
    anotar= function(km){
         this.sesiones[this.numsesiones] = km;
         this.numsesiones++;
        }
    media = function(){
         var media = 0;
        
for(let i=0; i< this.sesiones.length;i++){
              media += this.sesiones[i];
             }
         return media/this.numsesiones
       }
}
var fichaPri = new Ficha('Pri');
fichaPri.anotar(8);
fichaPri.anotar(10);
fichaPri.anotar(6);
console.log("Media de kilómetros "+fichaPri.media());