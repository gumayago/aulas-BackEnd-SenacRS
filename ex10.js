// Fazer um sistema que peça ao usuario 2 valores
// e peça qual operação ele deseja realizar
// porem o sistema so deve parar se o usuario
// digitar uma operação errada.

// Refatorar esse código usando funções



var prompt = require('prompt-sync')();

//variaveis
let n1 = ""
let n2 = ""
let operacao=""

//o problema de escrever o codigo desse modo, é que as funções foram declaradas dentro do loop, e com isso ela so existe la.
//loop
while(true){
    // perguntas p/ entrada de dados (n1, n2, e operação)
     n1= (Number(prompt("Digite um valor: ")))
     n2= (Number(prompt("Digite outro valor: ")))
    operacao = prompt("Escolha uma operação + - / *: ")

            if(operacao == "+")
            {
                function somar (n1,n2){
                        return n1+n2
                     }
                console.log(`a soma de ${n1} e ${n2} é igual a ${somar(n1,n2)}`);
                continue
            }
            else if(operacao == "-")
            {
                function subtrair (n1,n2){
                return n1-n2
                    }
                console.log(`Subtração de ${n1} menos ${ n2} é igual a ${subtrair(n1,n2)}`);
                continue
            }

            else if(operacao == "*")
            {
                function multiplicacao(n1,n2){
                    return n1*n2
                    }
                
                console.log(`Multiplicação de  ${n1} e ${n2} é igual a ${multiplicacao(n1,n2)} `);
                continue
            }
        
             else if(operacao == "/"){
                // Encerrar o programa caso seja divisão por 0
                    if(n2 == 0){
                    console.log("Operação Incorreta");
                    break            
                }
                else
                {
                    function divisao(n1,n2){
                    return n1/n2
                    }
                    console.log(`Divisão: ${n1} e  ${n2} é igual a ${divisao(n1,n2)}`);
                    continue
                }
             }
            else{
                console.log("Operação Incorreta");
                break
            }
}

//vc pode chamar uma função de outro arquivo, colocando no inicio (export)
// para chamar vc da crl+epaço na variavel.