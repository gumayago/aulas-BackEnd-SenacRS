var prompt = require('prompt-sync')();

//normalizadores:

console.log("Math.ceil", Math.ceil(3.14));  //arredonda p/ cima
console.log("Math.floor", Math.floor(3.14));  //arredonda p/ baixo
console.log("math.round", Math.round(8.5)); //arredonda 8.5 pra cima. abaixo disso, arredonda pra baixo.
const valor= 8.3
console.log("valor",valor.toFixed(2)); //2 casa depois da virgula
//math.pow (ele pede 2 valores 2,3)
console.log("math.pow", Math.pow(4,2)); //elevado ao expoente, (4**2)
//math.sqrt
console.log("math.sqrt", Math.sqrt(25)); //  raiz quadrada

//.toLocaleLowerCase serve p/ tornar tudo minusculo 
//.trim elimina os espaços antes e depois da palavra
const cor=(prompt("Digite uma cor: ")).toLocaleLowerCase().trim()
if (cor=="azul") 
    {
        console.log("Azul!!");
    }
else
    {
        console.log("é isso....");
    }
// sorteia um numero entre 0 e 1
console.log("math.random", Math.random());

    






