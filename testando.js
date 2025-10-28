
var prompt = require('prompt-sync')();



//11 - Descobrindo o dia da semana
//Crie um programa que solicite ao usuário que digite um
//número de 0 a 6 usando o prompt-sync.
//Cada número representa um dia da semana, sendo:
//● 0 → Domingo
//● 1 → Segunda-feira
//● 2 → Terça-feira
//● 3 → Quarta-feira
//● 4 → Quinta-feira
//● 5 → Sexta-feira
//● 6 → Sábado

let n0_6=(Number(prompt("Digite um numero de '0' á '6': ")))

    if(n0_6===0){
        console.log("0 → Domingo");
    }
    else if (n0_6=== 1){
        console.log("1 → Segunda-feira");
    }
    else if(n0_6=== 2){
        console.log("2 → Terça-feira");
    }
     else if(n0_6=== 3){
        console.log("3 → Quarta-feira");
     }
      else if(n0_6=== 4){
        console.log("4 → Quinta-feira");
      }
    else if(n0_6=== 5){
        console.log("5 → Sexta-feira");
    }
    else if(n0_6=== 6){
    console.log("6 → Sábado");
    }
    else{
    console.log("numero não inexistente!");
    }
        
        
        
    


