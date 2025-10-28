//NPM:(bliblioteca do node/javascript)
//obs:'Sempre ler documentação de bibliotecas'
// "baixar prompt sync para dar input= acesso a entrada de dados usuarios"

var input = require('prompt-sync')();
const nome = input('digite seu nome:')
const senha = input('digite sua senha:')
console.log(`ola ${nome}`)
console.log(`${nome} acesso liberado`)


//pedir //
var nome1= input('digite seu nome:') 
var idade1=+input('digite sua idade')
console.log(`Olá ${nome1} sua idade é ${idade1} `)
if (idade1 >18)
    console.log(`${idade1>18}, voce é maior de idade! `)
else (idade1 <18)
  console.log(`${idade1<18} vc e menor de idade!`)


    //exercicio 2: add type numero= Number

var n1= Number ( input("digite um numero: "))  //+ substitui o number (n2 mostra isso)
var n2= + ( input("digite outro numero: "))
console.log ("tipo do n1", typeof n1, "tipo do n2", typeof n2 )
var y= n1+n2
var x= n1-n2
var z= n1*n2
var a= n1/n2
console.log(`a soma de: ${n1} + ${n2} é igual a ${y}`)
console.log(`a divisão de: ${n1} + ${n2} é igual a ${x}`)
console.log(`a multiplicação de: ${n1} + ${n2} é igual a ${z}`)
console.log(`a sivisão de ${n1} + ${n2} é igual a ${a}`)





//biblioteca e frameswork tem suas semalhanças e suas distinções.
//symbols

