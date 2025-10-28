// aula sobre:
//  O q são funções & O q são objetos 

var prompt = require('prompt-sync')();


//function saudarAluno (nome){ //function declaração da função  () parametros=dados recebidos/informação de entrada
//    console.log("Olá, "+ nome +"!"); //corpo o que a função deve fazer
//    return "saudação enviada";  
//}
//saudarAluno("ana")  //chamada

//function somar (n1,n2) {
//    return n1+n2
//}
//const soma= somar(3,1)
//console.log(soma);
//console.log(somar(3,1));


//fazer 1 função q entregue o dobro do numero
//function dobrar (n3){
 //   return n3*2
//}
//console.log(dobrar(10));

// exercicio:
//ex1 some 4 numeros
n1=2
function calcular(n1,n2,n3,n4,) {
    return n1+n2+n3+n4
}
console.log(calcular(n1,2,2,2));

//ex2 mostre um numero par
function par(n1) {
    return n1%2==0
}
const par1= par (n1)
    if (par1 == true){
console.log(n1, "é par!");
}
else{
    console.log(n1, "é impar!");
}
// 3calcule a amedia de 3 numeros
const azul=2
const verde=4
const amarelo=6
function media (azul,verde,amarelo){
    return (azul+verde+amarelo)/3
}
console.log("media ", media (azul,verde,amarelo));

//ex4 celsius=fahrenheit
let numero=+(prompt("digite um numero: "))

function fahrenheit (numero){
    console.log(numero, "celsius");
    
    return (numero*1.8)+32
}
console.log(fahrenheit(numero), " graus emfahrenheit");

