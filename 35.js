const prompt=require("prompt-sync")({sigint:true});

var paises = [
    {nombre: "argentina", continente: "sudamerica",  poblacion: 40000000},
    {nombre: "brasil", continente: "sudamerica", poblacion: 300000000},
    {nombre: "venezuela", continente: "sudamerica", poblacion: 25000000},
    {nombre: "chile", continente: "sudamerica", poblacion: 10000000},
    {nombre: "australia", continente: "oceania", poblacion: 18000000},
    {nombre: "nueva zelanda", continente: "oceania", poblacion: 8000000},
    {nombre: "china", continente: "asia", poblacion: 1000000000},
    {nombre: "tailandia", continente: "asia", poblacion: 32000000},
    {nombre: "vietnam", continente: "asia", poblacion: 23000000},
    {nombre: "españa", continente: "europa", poblacion: 29000000},
    {nombre: "alemania", continente: "europa", poblacion: 33000000},
    {nombre: "francia", continente: "europa", poblacion: 65000000},
    {nombre: "portugal", continente: "europa", poblacion: 4000000},
    {nombre: "grecia", continente: "europa", poblacion: 12000000},
  ];

function doubleFilter(paises, continente, poblacion) {
    let nombres = [];
    let poblacionTotal = 0;
    
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].continente === continente && paises[i].poblacion >= poblacion) {
        nombres.push(paises[i].nombre);
        poblacionTotal += paises[i].poblacion;
      }
    }
    
    return { nombres: nombres, "poblacion total": poblacionTotal };
  }
console.log(doubleFilter(paises, 'sudamerica', 30000000));