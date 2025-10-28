var prompt = require('prompt-sync')(); //chamar saída

function somar(numero1,numero2) {
    return numero1 + numero2
}
somar(6,5)

//função para validar numeros negativos

function negativo(n1) {
    return (n1<0)  
}

let questao=(Number(prompt("Digite um numero: ")))
console.log(negativo(questao));

//outra forma de escrever e usar esta mesma  função:

function negativo(n1) {
     if(n1<0) {
        return `${n1} numero negativo!`
     }
    else{
        return "este numero não é negaitvo";  
    }
}
negativo(questao)

//=========================================================================================================================

//pedir 3 valores, e a função deve retornar o numero maior!

function valores(n1,n2,n3){
 if (n1>n2 && n1>n3) {
    return `${n1} este numero é o maior dentre os digitados!`
 }
else if (n2>n1 && n2>n3) {
    return `${n2} este numero é o maior dentre os digitados!`
}
 else
    return `${n3} este numero é o maior dentre os digitados!`
}

let x=(Number(prompt("digite um valor: ")))
let y=(Number(prompt("digite um valor: ")))
let z=(Number(prompt("digite um valor: ")))
console.log(valores(x,y,z));


//obs
//principal função de uma função é ter uma função (Fazer algo!);
//função normalmente são utilizadas para fazer o processamento de algo, e retornar um resultado.
//sendo possivel declara-lá e usar a qualquer momento no seu código!







//=====================================================================================================
//logica de valores = &&  (E)
                            //O numero tem que ser v em ambos os lados para cair dentro
// idade=18                      ^
//      idade>12                &&              idade<50
//          V                                      V
//     idade 18 é maior q 12                        idade 18 é menor q 50 

//=====================================================================================================
//logica de valores = || (ou)
                            //O numero idade=4 é verdade em um dos lados logo cair dentro (por isso da conufão/ERRO!)
// idade= 4                      ^
//      idade>12                ||             idade<50
//          V                                      V
//     idade= 4 é maior q 12                        idade 4 é menor q 50 