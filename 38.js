const prompt=require("prompt-sync")({sigint:true});

function esPalindromo(text) {
    const invertido = text.split("").reverse().join("");
    if (text === invertido) {
      console.log("es palindromo");
    } else {
      console.log("no es palindromo");
    }; 
  };

console.log(esPalindromo('hola'));