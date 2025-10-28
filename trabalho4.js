var prompt = require('prompt-sync')();

//1 - Tabuada de um número 
// Peça ao usuário para inserir um número
//  e exiba a tabuada desse número de 1 a 10, 
// utilizando FOR.

let tabuada= ""
 tabuada= (Number(prompt("Digite um numero, e veja a tabuada: "))) //se for dentro do for ele repete a pergunta
for (let i=1; i<=10 ; i++) {
    const calculo= (tabuada*i)
    console.log(calculo);
}
//======================================================================

//2 - Peça ao usuário para inserir um número N
//  e repita a mensagem 'Olá!' N vezes.
let digiteNumero=(prompt("digite um numero: "))

for (let i=0; i<5; i++) {                                                                // contador deve ser declarado dentro do loop
   console.log(digiteNumero);    
}
//ou dessa forma:

digiteNumero=(prompt("digite um numero: "))                                             //pode chamar a variavel em outro momento
let contador= ""                                                                        //contador no while deve ser declarado como variavel fora,e chamar dentro para rodar ate alcancar a condição exigida "(contador <5)"" 

while (contador<5) {
contador++
console.log(digiteNumero); 
}
//=======================================================================
//3 - Subindo uma escada
//Imagine que você está subindo uma escada.
//  Cada degrau tem uma altura fixa de 30 cm. 
// Escreva um programa que solicite ao usuário inserir a altura total da escada em centímetros
//  e calcule quantos degraus são necessários para alcançar o topo.

console.log("veja quantos degraus serão necessários para alcançar o topo!");
digiteDegraus=(Number(prompt("insira a altura total da altura da escada em (cm): ")))
const total= (digiteDegraus/30)
console.log("serão necessarios", total,"degruas para alcançar o topo!");

//====================================================================================
//4 - Array de números
//Crie um array com 5 números inteiros e exiba no console.

const nums=[2,4,6,8,9]                           //vetores são listas.
console.log(nums);

//=======================================================================================
//5 - O fim da array
// Acrescente elementos na array até o usuário escrever fim.

let comprar=""        //var
let listaCompra=[]    //vetor(lista)

while (true) {
    console.log("digite 'fim' para finalizar:");
comprar=(prompt("digite sua lista de compras: ")) 


    if(comprar == "fim"){
        break
    }
    else{
      listaCompra.push(comprar);
      console.log(listaCompra);
      
        
    }
}
console.log("lista completa:");
console.log(listaCompra);

//========================================================================================

//6 - Array de 10 elementos
//Acrescente elementos na array até o a array ficar com 10
//elementos. (usando for e novamente com o ).
let listaNumeros=[]                                                  //vetores são listas, serão declarados assim como variaveis, porem sempre no plural, mostrando ideia de quantidade

    for (let i= 0; i< 10; i++) {
        numeros=(Number(prompt("digite numeros para a lista: ")))
        listaNumeros.push(numeros)                                      //vetor [], tomar cuidado com os vetor.alguma coisa, essa é a maior função do vetor!
        console.log(listaNumeros); 
    }

//ou

let contado=1                   //DUVIDA; POSSO CHAMAR O MESMO CONTADOR DECLARADO ANTERIORMENTE EM OUTRO EXERICIO, PARA REUTILIZAR A MESMA VAR MENOS ESPAÇO OU DEVO DECLARAR CADA VEZ PARA NÃO DAR ERRO NO CODIGO
let listaNumeross=[]

    while(contador <=10){
        contado++
        numeros=(Number(prompt("digite numeros para a lista: ")))
        listaNumeross.push(numeros)                                      
        console.log(listaNumeross)

    }

//    7 - Somando valores de um vetor
//Crie um vetor com 5 números e mostre no console a soma
//total desses valores.
//7 - Somando valores de um vetor
//Crie um vetor com 5 números e mostre no console a soma
//total desses valores.

let listaNum=[5,6,7,8,9]
console.log(listaNum[0]+listaNum[4]);

//ou

listaNum=[5,6,7,8,9]
let num1=listaNum[0]
let num2=listaNum[4]
console.log(num1+num2);

//============================================================================================================

//  8 - Cotagem de pares
//Escolha a tabuada de um número 
// e faça contagem de elementos pares presentes na tabuada.

let tabuada1=(Number(prompt("digite um numero, e veja a tabuada: ")))
let pares=[]
let impares=[]

    for (let i = 0; i <= 10; i++) {
    console.log("tabuada do:", tabuada1, "x", i, "=", tabuada1*i);
       
            if(tabuada1*i % 2 ==0){                                                 //No if vc poem sempre a condição q deve ser alcançada dentro if(condição) {o que deve acontecer}
                pares.push(tabuada1*i)
            }

            else{
                impares.push(tabuada1*i)    
            } 
    }
    console.log("os numeros pares dessa tabuada são: ", pares )
    console.log("os numeros pares dessa tabuada são: ", impares )

//=======================================================================================================================

//9 - Adicionando e removendo elementos
//Peça ao usuário para inserir um número
//  e exiba a tabuada desse número de 1 a 10, utilizando while.
const xnumeros=(Number(prompt("Digite um numero e veja a tabuada c/ while: ")))
let conta=""
while(conta<=10){
    conta++
    console.log(`tabuada do ${xnumeros} X ${conta} = ${xnumeros*conta}`);
}

//======================================================================================================================

//      10 - Vetor de cores
//Crie um vetor com 3 cores.
//Depois:
//● Adicione uma cor no final com push();
//● Remova a primeira com shift();
//● Exiba o vetor final no console.

let cores=["verde", "amarelo", "vermelho",];
//              0       1           2
console.log(cores);

cores.push("azul")
console.log(cores);

cores.shift(3)
console.log(cores);

//===============================================================================================================

//      10 - Vetor de cores
//Crie um vetor com 3 cores.
//Depois:
//● Adicione uma cor no final com push();
//● Remova a primeira com shift();
//● Exiba o vetor final no console.

let cores1=["verde", "amarelo", "vermelho",];
//              0       1           2
console.log("lista de cores: ", cores1);

cores.push("azul")          //add algo no final da lista
console.log("add algo na lista: ",cores1);

cores.shift()               //tira o primeiro da lista
console.log("tira o primeiro: ", cores1);

cores.pop()                 // tira o ultimo da lista
console.log("tira ultimo:",cores1);

//=====================================================================================================================

//11 - Descobrindo o dia da semana
//Crie um programa que solicite ao usuário que digite um
//número de 0 a 6 usando o prompt-sync.
//Cada número representa um dia da semana, sendo:
//● 0 → Domingo
//● 1 → Segunda-feira
//● 2 → Terça-feira
//● 3 → Quarta-feira
//● 4 → Quinta-feira
//● 5 → Sexta-feira
//● 6 → Sábado

let n0_6=(Number(prompt("Digite um numero de '0' á '6': ")))

    if(n0_6===0){
        console.log("0 → Domingo");
    }
    else if (n0_6=== 1){
        console.log("1 → Segunda-feira");
    }
    else if(n0_6=== 2){
        console.log("2 → Terça-feira");
    }
     else if(n0_6=== 3){
        console.log("3 → Quarta-feira");
     }
      else if(n0_6=== 4){
        console.log("4 → Quinta-feira");
      }
    else if(n0_6=== 5){
        console.log("5 → Sexta-feira");
    }
    else if(n0_6=== 6){
    console.log("6 → Sábado");
    }
    else{
    console.log("numero não inexistente!");
    }
       //12 - Classificando Infrações de trânsito 
// por excesso (ou falta) de velocidade
//Crie um programa que solicite ao usuário:
//1.A velocidade máxima permitida na via
//2.A velocidade registrada do condutor
//Com base nos dados informados,o programa deve analisar e
//classificar a situação conforme as seguintes regras:
//Excesso de velocidade:

//● Se a velocidade do condutor for até 20% acima da
//permitida → Infração leve
//● Se for entre 20% e 50% acima da permitida →
//Infração grave
//● Se for acima de 50% da velocidade permitida →
//Infração muito grave

//Velocidade abaixo do permitido:
//Se a velocidade do condutor for menor que a metade da
//velocidade permitida → Infração muito leve (por dirigir
//devagar demais).
//Caso nenhuma dessas condições seja atendida, o programa
//deve informar que a velocidade está dentro do limite
//permitido.

let velocidadePista= (Number(prompt("A velocidade máxima permitida na via: ")))
let velocidadeRegistrada=(Number(prompt("Qual a velocidade registrada do condutor: ")))
let velocidadeMinima=velocidadePista/2

      if (velocidadeRegistrada<=(velocidadeMinima)){
         console.log("→ Infração leve!");
         console.log("velocidade abaixo da permitida");
      }

      else if(velocidadeRegistrada > velocidadeMinima && velocidadeRegistrada < (velocidadePista*0.20)+velocidadePista)
         console.log("→ Velocidade permitida!");
         
      else if (velocidadeRegistrada===((velocidadePista*0.20)+velocidadePista)){
         console.log((velocidadePista*0.20)+velocidadePista);
         console.log("→ Infração leve!");
         }
      else if (velocidadeRegistrada>=((velocidadePista*0.20)+velocidadePista) && velocidadeRegistrada<=((velocidadePista*0.50)+velocidadePista)){
         console.log("→ Infração grave!");
         }

         else{
            console.log("→ Infração muito grave!");
         }


//13 - Calculando o valor abastecido no posto de gasolina
//Crie um programa que simule o funcionamento de um postode gasolina.
 // O programa deve solicitar ao usuário:
// O tipo de combustível que deseja abastecer 
// (G para Gasolina ou 
// A para Álcool)
// A quantidade de litros que deseja colocar
//Considere os seguintes preços:
//Gasolina: R$ 5,89 por litro
//Álcool: R$ 4,39 por litro
//O programa deve calcular e exibir o valor total a ser pago.
//⛽ Desafio extra:
//Se o usuário abastecer mais de 20 litros, aplique um
//desconto de 5% sobre o valor total.

let TipoCombustivel=(prompt("Qual combustivel vc deseja abastecer: (G) gasolina ou (A) alcool: "))
let litros=(Number(prompt("Quantidade que vc deseja abastecer: ")))

   if (TipoCombustivel==="g" && litros<20){
         console.log( litros ,"L de gasolina, valor a ser pago R$:", (5.89*litros) );  
   }

   else if (TipoCombustivel==="a" && litros<20){
         console.log(litros, "L de alcool, valor a ser pago R$", (4.39*litros));
   }
   else if (TipoCombustivel==="g" && litros>20) {
      console.log("Parabens, vc ganhou", ((5.89*litros)-0.05),"desconto"); 
   }
      else if (TipoCombustivel==="a" && litros>20) {
      console.log("Parabens, vc ganhou",((4.39*litros)-0.05),"desconto");
   }
   else{
      console.log("operação invalida!");
      
  }

  //             Funções

//Exercício 1 – 
// Soma de dois números
//Crie uma função chamada soma 
// que receba dois números
//  como parâmetros 
// e retorne a soma deles.
// Em seguida, mostre o resultado no console.

function somar(n1, n2) {
   let soma=(n1+n2);
   return soma
}

   x=(Number(prompt("Digite um numero: ")))
   y=(Number(prompt("Digite um numero: ")))
console.log(somar(x,y));

// Exercício 2 – Cálculo do IMC
//Crie uma função calcularIMC(peso, altura) 
// que retorne o valor do IMC.
// Depois, crie outra função lassificarIMC(imc)
//  que retorne uma mensagem com a
//classificação:
//● Abaixo do peso
//● Peso normal
//● Sobrepeso
//● Obesidade

function classificarIMC(peso, altura){
  imc=(peso/(altura*altura))
    return imc
}

let peso=(Number(prompt("Digite seu peso: ")))
let altura=(Number(prompt("Digite sua altura")))
console.log(classificarIMC(peso,altura));

//==============================================================================================================================================

//Exercício 3 – Conversor de temperatura
//Crie duas funções:
//● celsiusParaFahrenheit(c)
//● fahrenheitParaCelsius(f)
//Cada uma deve converter o valor informado
//  e retornar o resultado.
//Exiba exemplos no console.
  
function celsiusParaFahrenheit(c) {
     f=((c*1.8)+32)
    return f
}
function fahrenheitParaCelsius(f) {
    c=(1.8*(f-32))
    return c
}

while (true){
    let graus=(Number(prompt("Digite os graus: ")))   
    let escolha=(prompt("Digite se a temperatura esta em: (c) ou (f): "))
    console.log("escolha",escolha);
    
            
        if (escolha==="f" || escolha==="F"){
            console.log(fahrenheitParaCelsius(graus)); 
        }

        else if(escolha==="c" || escolha==="C" ){
            //console.log('Entrei!!! no c');  sempre dar  console.log("verificar se esta fucnionando!"); 

           console.log(celsiusParaFahrenheit(graus));  
        }

        else{
            break
        }
}

//=======================================================================================================================================

//Exercício 4 – Conversor de temperatura
//Crie uma função gerarMensagem(nome, hora) 
// que retorne uma saudação de acordo com o horário:
//● Antes das 12h → “Bom dia”
//● Entre 12h e 18h → “Boa tarde”
//● Após 18h → “Boa noite”

function gerarMensagem(nome, hora){
   
   if(hora<12){
      return ("saudação ", nome, " Bom dia");
   }

   else if (hora>=12 && hora<18){ 
      return ("saudação ", nome, " Boa tarde")
   }

   else if (hora>18){ 
      return("saudação ", nome, "Boa noite");
   }
   else {
      return("caracter invalidos");
      
   }
}

for (let i= 0; i<5; i++) {
nome=prompt("digite seu nome: ") //pergunta nome
hora=(Number(prompt("Digite a hora: "))) //pergunta hora
 let status= gerarMensagem(nome,hora) //chamar função
 console.log(status);
}
//========================================================================================================================================



//(Desafio) 1. Economia para uma compra
//Você está planejando economizar dinheiro para comprar um
//item especial. O objetivo é somar
//quantias de dinheiro até que o total economizado
//ultrapasse 100 REAIS. Cada vez que o usuário
//adiciona uma quantia, o programa deve informar o valor
//acumulado até o momento.

function economizar(valor, dinheiro) {
    calculo=((valor+dinheiro)===100)
    return calculo
}

let dinheiro1=""
let valores=[]

    dinheiro1=(Number(prompt("digite o valor que vc deseja guardar: ")))
                
            if (valores.length()<=100 ) {
                    console.log(valores.length(),"valor ainda nao alcançado!");
            }
            else{
                console.log("valor alcançado!");  
            }
    

//(Desafio) 2. Comendo frutas
//Você está em um pomar e acabou de colher 50 FRUTAS.
//Agora, você vai começar a comer elas.
//Escreva um programa que, a cada iteração, solicite ao
//usuário informar quantas frutas ele comeu e
//exiba quantas frutas restam na cesta após cada consumo,
//até que todas as frutas tenham sido
//consumidas.



//(Desafio) 3. Média das notas dos alunos
//Você é um professor e deseja calcular a média das notas
//dos seus alunos. Escreva um programa
//que solicite ao usuário inserir as notas dos alunos
//repetidamente e calcule a média das notas. O
//programa deve continuar pedindo notas até que o usuário
//insira um valor negativo, indicando o fim
//da entrada das notas.
