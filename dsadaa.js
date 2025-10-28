
var prompt = require('prompt-sync')();

const totaljantar=(Number(prompt("Valor do jantar: ")))
const validacao= prompt("o atendimento foi bom ou ruim? ")

 if(validacao === "bom" || validacao === "sim"){
        console.log (totaljantar, "valor do jantar",)
        console.log ( "+", totaljantar * 0.10, "valor total do jantar, e a  gorgeta" )
 }
 else{
    console.log(totaljantar);  
 }
