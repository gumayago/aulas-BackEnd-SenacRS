var prompt = require('prompt-sync')()


// Aula sobre loops (while, for, Do While)

//let valor= 6
//while(valor!=5){
  //  console.log("Bom dia! "); 
    //valor=(prompt (" Digite o numero *5* para encerrar o loop ! "))}


//Exercicio (while)
// faça sistema dizer "javaScript", enquanto 
// o usuario não digitar um valor negativo

let digite=(prompt("digite um valor: "))

while(digite >=0){
    console.log("JavaScirpt")
    digite = (Number("digite outro valor; "))
}

    //    if (digite>0){
      //       console.log("Valor invalido! ");
     //   }
//
 //        else{
 //            console.log("loop encerrado");  
 //       }





//exercicio while:
//pergunnta a senha, ate o usuario acertar, ("escolha a senha" )

//let senha= (prompt("digite a senha: "))

    //while (senha != "1999") {  // while, enquanto n acontecer, rode o q esta dentro: {}
    //        console.log("senha incorreta!");

  //          senha=(prompt("digite sua senha: "))
    
//}
//console.log("senha correta!")

// exercicio: valide a senha e o email.
let email= (prompt("digite seu email: "))
let senha1=(prompt("Digite sua senha: "))

while (email != "gmail" || senha1 != "123"){
    
        if (email != "gmail" || senha1 != "123"){
          console.log("usuario não cadastrado");
         email=(prompt("digite seu email: "))
         senha1=(prompt("digite sua senha: "))
        }

        else if (email === "gmail" || senha1 !="123"){
               if (email === "gmail"){
              console.log("senha invalida!");
                senha1=(prompt("digite sua senha: "))
              }
        
    senha1=(prompt("digite sua senha: "))  
            console.log('senha incorreta');   
        }    
    }  
console.log("Acesso liberado!");