let alunos= ["cristiano","lobato","rafael","marcus"]
console.log(alunos);

//remove o ultimo elemento do vetor:
console.log("==POP==");
alunos.pop()
console.log(alunos);

//remove o primeiro elemento do nosso vetor:
console.log("==SHIFT");
alunos.shift()
console.log(alunos);

//add algo ao final do vetor:
console.log("==push==");
alunos.push("yago")
console.log(alunos);

//add algo ao inicio do vetor:
console.log("==unshift==");
alunos.unshift("luiz")
console.log(alunos);



                    // exercicios:
//1. Crie um array com 5 números inteiros e exiba no console
console.log("==EX1==");
let numeroS= [1,2,3,4,5] //vetor == "lista"
console.log(numeroS); //mostrar vetor

//2. Acesse o terceiro elemento do array e o exiba no console:
console.log("==EX2==");
numeroS= [1,2,3,4,5] //vetor == "lista"
 console.log(numeroS); //mostrar vetor
console.log(numeroS[2]); //mostrar o 3 elemento do vetor

//3. Altere o valor do segundo elemento para 10
console.log("==EX3==");
numeroS= [1,2,3,4,5] //vetor == "lista"
console.log(numeroS); //mostrar o vetor
numeroS[1]=10 //substituir valor 
console.log(numeroS);

//4. Adicione um novo elemento no final do array
console.log("==Ex4==");
numeroS= [1,2,3,4,5]
console.log(numeroS);
numeroS.pop()
console.log(numeroS);

//5. Remova o primeiro elemento do array
console.log("==Ex5==");
numeroS=[1,2,3,4,5]
console.log(numeroS);
numeroS.shift
console.log(numeroS)

//6.Imprima os elementos de um array usando um loop while
console.log("==ex6==");
numeroS //chamei a variavel declarada anteriormente
numeroS.length //descobri o tamanho total
let i=0  //contador
while(i<numeroS.length){
    console.log(numeroS [i])
    i++
}

//7.Acrescente elementos na array até o usuário escrever fim
var prompt = require('prompt-sync')(); //entrada usuario
let item= ""//chamei a var declarada anteriormente
let itens= []  //new variavel

//while(true)
//{
// item= (prompt("gostaria de adicionar um numero a lista? se não digite fim!" ))
//        if (item=== "fim"){
//            break
//        }
//        else
//        {
//            itens.push(item)
//            console.log(itens);
//        } 
//}

//8.Acrescente elementos na array até o a array ficar com 10 elementos
let n1= ""
let num=[]
    for (let i=0; i<10;i++) 
    {
        n1=(prompt("digite numeros a sua lista: "))
        num.push(n1)
        console.log(num);
        
    }










