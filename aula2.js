const numero= 2
//console.log(numero < 5) //é false!

//condicionais:
//if (numero<5){
//    console.log("sim")
//}else{
//     console.log("não");



//montar uma "SOMA" e uma "MULTIPLICAÇÃO" entre 3 numeros (USANDO CONSTANTES)
//TIPOS DE VARIAVEIS: (const, var, let)
const n1= 10
const n2= 10
const n3= 10
const q= n1+n2+n3
const y= n1*n2*n3
console.log (` soma de, ${n1} + ${n2} + ${n3} é igual a ${q}`)
console.log (` multiplicação de ${n1} * ${n2} * ${n3} é igual a ${y}`)




                //exercicios:
//ex:1
var input =require('prompt-sync')();
const nivelAcesso = input("digite qual seu nivel de acesso: ")
if(nivelAcesso != "gerente"){
    console.log("acesso negado")
}else{
    console.log("Olá gerente, seja bem vindo! ")
}

var nome= (input('digite seu nome: '))
    if(nome== "roberto")
        {console.log("Olá roberto")}
    else(nome!="roberto")
        {console.log("nome desconhecido")}

//ex: 4
//valida se o numero do usuario é positivo ou negativo:
const x= Number(input("digite um valor: "))
if(x<0){
console.log("esse numero é negativo! ")
}else{(x>=0)
console.log("esse numero é positivo! ")
}


//ex: 5
// Permitir acesso apenas se o usuario acertar a senha (1569)

//outra forma de sinxtase else:
//else é gnérico, logo não necessita de condição p/ acontecer!
const senha=Number(input("digite sua senha: "))
if(senha==1569){
    console.log("acesso liberado!")
}else{
        console.log("acesso negado!")
}

//aula hoje aprender type Number e (+) 
// ||   ||     ||      condicionais (if e else)
// salveeee deixo aberto, e os guri, apaguei teu codigo não. tmj