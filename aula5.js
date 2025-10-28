//exercicios :

var prompt = require('prompt-sync')()
//for (let i=0; i<5; i++){
//    console.log("bom dia")   
//}

//mostrar todos os valores pares de 1 a 100:
//for (let i=0; i<101; i+=2){
//    console.log(i)   
//}
//for (let index = 0; index < array.length; index++){
//}

//simuldaor de idade ao longo dos anos:
//const ano=+(prompt("ano q vc nasceu: "))
//for (let i=ano; i<=2025; i++){
 //console.log(`Em ${i} sua idade é: ${i-ano},`)

//}


//EXPLICAÇÂO DE ACUMULADORES:
//acumuladores parecidos com contadores:

//let soma=0
//for(let i=1; i<=50; i++){
//    console.log(`i= ${i}`);
//    soma=soma+i //  I= vai subir de 1->50; SOMA= vai ser a soma dos valores soma+i (soma vale 0 e i vale 1),
//    console.log(`soma= ${soma}`);   
//}

//some valores (acumuladores)
//de 10 a 100 subindo de em 5
//let somar=0
//for (let i=10; i<=100; i+=5){
//    console.log(`soma= soma:${somar} + i:${i}`);
//  
//    somar=somar+i
//
//    console.log(`soma: ${somar}`);
//}


//somar todos valores pares de 0 a 200 (usando acumuladores)
//let soma=0
//
//for(let i=0; i<=200; i+=2){
//    if(i % 2 == 0){
//        soma=soma+i
//    }
//console.log("soma dos numeros pares: ", soma);
//}


// escolher a tabuada, e mostrar ela:
//exemplo de saida: (tabuada do 5)
//while(true){
//let tabuada= (Number(prompt("Digite um valor  e veja a tabuada:")))
//    for (i=1; i<=10; i++){
//        tabuada
//        mult=i*tabuada
//        console.log(`${i} X ${tabuada} = ${mult}`);
//  }
//}


//explicação de cada vetor.---
//vetores:
let array= [1,9,3,10,98]
let name=["lobato", "roger","amanda", "junior"]

//explicação de cada um:
// .length= mostra o tamanho do vetor (lista)
console.log('array.length: ', array.length);
// .sort= organiza por ordem alfabetica
console.log(name);
console.log( 'Array.sort', name.sort());
// .reverse= inverte os valores dentro do vetor
console.log( 'array.reverse: ', array.reverse());
// .indexOf entrega o endereço da variavel dentro do vetor(lita)
console.log('array.indexOf: ', name.indexOf("amanda") );
// .includes para identificar se existe a var que vc tem duvida
console.log('array.includes: ', name.includes('amanda'));
// .filtrar todos <10
const filtro= array.filter(elemento=>elemento>10)
console.log(filtro);
const filtro2= array.filter(numero=>numero<10)
console.log(filtro2);

//exericios:
//criar array c 5 num e imprimir a  soma de todos eles
let numeros4=[2,4,6,8,10]
let soma=0
console.log(numeros4);

for(let i=0; i<numeros4.length; i++);{
    soma= soma + numeros4[i]
}
console.log(soma);

//ex 2
//nomes2=["yago", "yan", "petalla", "natalia", "maria"]


// 
//




