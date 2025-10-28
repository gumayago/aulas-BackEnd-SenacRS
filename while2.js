var prompt = require('prompt-sync')()

//fluxograma são importantes para (visualizar) na hora de fazer um projeto!
//calculadora infinita (para segunda feira)


console.log("Calculadora:")
let n1= ""
let n2= ""
let escolha= ""

while(true){ //(true(torna infinito s/ n tiuver break!))
console.log("Digite: (SAIR) para sair");

     n1= (Number(prompt("Digite um numero: ")))
     n2= (Number(prompt("Digite um numero: ")))
    escolha= (prompt("escolha entre(+,-,*,/): "))


        if (escolha == "+"){
            console.log(`A soma de ${n1} e ${n2} ${n1+n2}`);  
            continue
        }

        else if (escolha == "-"){
            console.log(`Subtração: ${n1-n2}`); 
            continue   
        }

        else if (escolha == "*"){
            console.log(`Multiplicação: ${n1*n2}`);  
            continue
        }

        else if (escolha == "/"){
                if(n2==0){
                    console.log("Operação incorreta!")
                break
                }
                
            else 
                {
                    console.log(`DIvisão: ${n1/n2}`)
                continue
                }            

        }

        else{
            console.log("operação incorreta, reinicie a calculadora!")
            break
        }

}