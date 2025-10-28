var prompt = require('prompt-sync')()

// contadores: (var= var+ X "X=contador")

//toda vez que o loop while acontece a variavel substtui o valor, fora do loop 
//let contador= 4
//while (contador <5) {
    //contador =  contador * 2
    //console.log("contador", contador); //forma simples de "PRINT"
  //  console.log(`contador ${contador}`)
//}
//console.log("dessa forma vc torna finito");


//EXERCICIO 
// Montar um programa q mostre de 1 a 10

//let numer= 0
//while (numer < 10) {
    //numer= numer+1
     //   numer++
   // console.log(numer);
//}

//mostrar quantidade de tentativas q usuario tem ate acertar senha
let senh= (prompt("Digite a senha: "))
let tentativas=0 //ou i
while(senh != "ds2"|| tentativas===3){
    console.log ("senha invalida!",);
    tentativas++   
   senh=(prompt("Digite a senha novamente: "))
}
 console.log("Senha correta!", tentativas, " tentativas");



//calculadora infinita (para segunda feira)
let n1= ""
let n2= ""
let escolha= ""

while(true){
    let n1= (Number(prompt("Digite um numero: ")))
    let n2= (Number(prompt("Digite um numero: ")))
    let escolha= (prompt("escolha entre(+,-,*,/): "))

    if (escolha=="+"){
        console.log(`A soma de ${n1} e ${n2} ${n1+n2}`);  
        continue
    }

    else if (escolha=="-"){
        console.log(`Subtração: ${n1-n2}`); 
        continue   
    }

    else if (escolha=="*"){
        console.log(`Multiplicação: ${n1*n2}`);  
        continue
    }

    else if (escolha=="/"){
        console.log(`divisão: ${n1/n2}`);   
        continue
    }
    else{
        break
    }
}