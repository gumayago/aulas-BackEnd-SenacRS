var prompt = require('prompt-sync')();

//Conceitos estudados ate então:
// var prompt = require('prompt-sync')(); sempre utilizado 

// funções= function+nome (var1, var2) {; return} ; log("Nome(n1,n2)) serve para reutilizar outras vezes o codigo.
//principal função de uma função é ter uma função (Fazer algo!);
//função normalmente são utilizadas para fazer o processamento de algo, e retornar um resultado.
//sendo possivel declara-lá e usar a qualquer momento no seu código!

//vetores são "listas", (é declarada igual a uma var, porém no plural e com chaves, para guardar os "itens=(var's")

//acumuladores (soma= soma + i) 

//Loop's= 
// while, serão loops infinitos enquanto for (true) e não houver acumulador =c++,
// for (i=n; i<n; n++)

//Conceitos estudados ate então: 
//prompt-sync //enrada usuarios
//const, let, var.
//condicionais: if, else if, else 
//(==),  (!=)  (===)
// sobreposição de operadores matematicos.
//types: Number (+), String (texto)
//operadores logicos (valor)
//   || ou // && e


                    // trabalho//
    //● 1 Peça ao usuário um número de horas e converta esse valor para segundos.
    //  Exiba oresultado no final. 
    // //Se o número de horas inserido for negativo,
    //  mostre umamensagem de erro.


const hora= Number(prompt ("diga-me um horário: ")) 
const seg= (hora *(60 * 60))

if ( hora >=0){
    console.log( seg, "em segundos");}

else { (hora <0)
    console.log("horário invalido");}



//● 2 Peça ao usuário para inserir a largura e a altura de um retângulo.
//  Calcule a área e exiba o resultado.
//  Se a largura ou a altura for menor ou igual a zero,
//  exiba a mensagem: "Os valores devem ser positivos.".

let altura= Number(prompt("Digite altura: " ))
let largura= Number(prompt("digite a largura: "))
 
if (altura>=0 && largura >=0){
    console.log("area= ", ( altura * largura));}

    else{
        console.log( "Os valores devem ser positivos.");
    }

        

//● 3 Peça ao usuário uma temperatura em Fahrenheit 
//  converta-a para Celsius.
// Se o valor inserido for muito extremo (maior que 1000 ou menor que -1000), exiba umalerta de "Valor irreal!".

const F= Number(prompt("Digite um valor em Fahrenheit: "))
const C=  (( F-32)/1.8)

    if ( C <= 1000 ||C <=-1000)
        console.log(C);
    else{
        console.log(" valor invalido!");}


// 4 Peça ao usuário para inserir dois números é um símbolo de operação (+, -, *, /).
//Realize o cálculo correspondente e mostre o resultado.

const n1=Number(prompt("Digite um numero: "))
const n2= Number(prompt("Digite outro numero: "))
const sinal=(prompt("Digite um dos sinais ( +, -,*,/ )"))
const r1= (n1+n2)
const r2= (n1- n2)
const r3=(n1*n2)
const r4=(n1/n2)

if (sinal === "+"){
    console.log( r1)
}
else if ( sinal == "-"){
    console.log(r2)
}
else if (sinal === "*"){
    console.log(r3)
}
else if (sinal === "/"){
        console.log(r4)
}
else{ 
            console.log( n2/0, "INVALIDO");
            
}

//Peça ao usuário um valor em reais e a cotação atual do dólar.
// Calcule o valor correspondente em dólares 
// e exiba o resultado. 
// Se o valor da cotação for menor ou igual a zero, mostre a mensagem: "Cotação inválida!".
const reais= Number(prompt("Digite o valor em Reais: "))
const cotacao= Number(prompt("Digite a cotação do Dolar hoje: "))
const dolar= (reais / cotacao)

 if (dolar >=0){
       console.log( dolar); }
else if (dolar == 0 || dolar < 0);{ //ERRADO///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        console.log("Cotação inválida!");}
    

//● Peça o valor total de um jantar.
//  Em seguida, pergunte se o atendimento foi "bom" ou"ruim". 
//Se a resposta for "bom", adicione 10% sobre o valor do jantar como gorjeta.
//No final, exiba o valor total da conta (jantar + gorjeta, se houver).
const totaljantar=(Number(Prompt("Valor do jantar: ")))
const validacao= (Prompt("o atendimento foi bom ou ruim? "))

 if(validacao === "bom" || validacao === "sim"){
        console.log (totaljantar, "valor do jantar",)
        console.log ( "+", totaljantar * 0.10, "valor total do jantar, e a  gorgeta" )
 }
 else{
    console.log(totaljantar);  
 }


 //Peça ao usuário para inserir duas notas (de 0 a 10)
 //  e calcule a média.
 //  Com base na média, exiba a situação do aluno:
//○ Média maior ou igual a 9: "Excelente!".
//○ Média maior ou igual a 6: "Aprovado!".
//○ Média menor que 6: "Reprovado!".

const numeroValor= (Number(prompt(" dsadasdas")))
const numeroValor2= (Number(prompt(" dsadasdas")))
const calculo= (numeroValor + numeroValor2 / 2)
        if ( calculo >= 9)
            console.log("excelte");
        else if ( calculo >= 6)
            console.log("aprovado");
        else
            console.log("reprovado");

//● Peça ao usuário sua idade
//  e se possui autorização dos pais (respondendo com"sim" ou "não").
//  O acesso é permitido apenas para maiores de 18 anos ou paramenores com autorização.
// Exiba uma mensagem informando se o acesso foi"Permitido" ou "Negado".

const idade= (Number(prompt("idade")))
const permitido= (prompt(""))
if (idade>= 18)
    console.log("acesso permitido");
else if ( idade >=18 && permitido === "sim") {
    console.log( "acesso permitido");
}
else {
    console.log("Negado");   
}

//Alerta de Temperatura
//● Peça a temperatura ambiente em graus Celsius. 
// Exiba uma das seguintes mensagens de acordo com a temperatura:
// ○ Abaixo de 10°C: "Muito frio!"
//○ Entre 10°C e 25°C (inclusive): "Clima agradável."
//○ Acima de 25°C: "Muito calor!"
let temperatura= (prompt("qual a temperatura: "))
if (temperatura<=0){
    console.log("Muito frio!");
    
}
if (temperatura >=10 && temperatura <=25 ){
    console.log("Clima agradável.");
    
}
else{
    console.log("Muito calor!");
    
}

//● Peça um nome de usuário e uma senha. 
// O acesso só será permitido se o nome de usuário for "admin" e a senha for "1234".
//  Caso contrário, exiba uma mensagem de falha no login.
const user= (prompt("digite  o nome"))
const senha= (Number("senha"))

if (user === "adm" && senha ==="1234")
    console.log("Acesso Liberado");
else 
    console.log("Falha no login");

//● Peça o valor total de uma compra 
// e pergunte se o cliente é membro VIP(respondendo "sim" ou "não"). 
// Conceda um desconto com base nas seguintes regras:

// Se o cliente for VIP e a compra for maior que R$ 500,00, aplique 15% dedesconto.

//○ Se o cliente for VIP (e a compra não for maior que R$ 500,00), aplique 5% dedesconto.

//○ Clientes não-VIP não recebem desconto.

//● No final, exiba o valor total a ser pago.
    
    const valorfinal= (Number(prompt("valor compra: ")))
    const vip= (Number(prompt("voce é cliente VIP: ")))
    const desc15=(500 - 0.15)
    const desc10=(500 - 0.5)
    
    if(valorfinal>=500 &&vip === "sim"){
        console.log(desc15, "desconto");
        console.log("valor final:" )
        
    }
    else if(valorfinal<= 500 && vip  === "sim"){
        console.log( desc10, "desconto")
        console.log("valor final:" )
        
    }
    else (vip === "não"); { /// so retirar enunciado!////////////////////////////////////////////////////////////////////////////////////////////
        console.log( "0 desconto")
        console.log("valor final:" )}
    

//Peça ao usuário o valor da base 
// e da altura de um triângulo.
// Calcule 
// e exiba a área.
//Se a base ou a altura for um valor negativo ou zero, exiba a mensagem: "Valores inválidos!".
const base=(Number(prompt("base")))
const altura1=(Number(prompt("altura")))
const result=(base*altura1)

if(resultado >=0){
    console.log(result);
}
else{
    console.log("valores invalidos");
}

//Peça três notas de um aluno (de 0 a 10)
// e calcule a média final. 
// Com base na média, exiba a situação do aluno:
//○ Média abaixo de 5: "Reprovado"
//○ Média entre 5 e 7 (inclusive): "Recuperação"
//○ Média acima de 7: "Aprovado"
const prova1=(Number(prompt("Nota prova1")))
const prova2=(Number(prompt("Nota prova2")))
const prova3=(Number(prompt("Nota prova3")))
const valorProva= (prova1+prova2+prova3/3)

 if(valorProva > 7){
    console.log("Aprovado!");  
 }
else if(valorProva <=7 || valorProva >=5 ){
    console.log("Recuperação!");    
 }
 else{
    console.log("Reprovado!");
    
 }
//Peça ao usuário para informar a voltagem (em Volts) e a frequência (em Hertz) de um equipamento.
// O padrão seguro é uma voltagem de 127V ou 220V 
// e uma frequência de 60Hz.
//  Se os valores estiverem dentro do padrão, 
// exiba "Equipamento operando em condições seguras.". 
// Caso contrário, 
// exiba "Alerta: Valores fora do padrão de operação!".
const volts = (prompt("''''dsddad"))
const frequenceia= (prompt("sdsadsadsadad"))
if ( voltz === "127" && frequencia ==="60")
    console.log("Equipamento operando em condições seguras.");
    
else if ( voltz === "220" && frequencia ==="60"){
    console.log("Equipamento operando em condições seguras.");}
else{
    console.log("Alerta: Valores fora do padrão de operação!");    
}

// Peça a idade de uma pessoa. 
// Com base na idade, classifique-a em uma das seguintes faixas etárias 
// e exiba a classificação:
//○ 0 a 12 anos: "Criança"
//○ 13 a 17 anos: "Adolescente"
//○ 18 a 59 anos: "Adulto"
//○ 60 anos ou mais: "Idoso"

const idadeidade= (Number(prompt("qual a sua idade: ")))
if (idadeidade <=12){
    console.log("criança")}
else if (idadeidade >=13 || idadeidade <=17 ){
    console.log("adolescente")}
    else if (idadeidade >=18 || idadeidade <=59 ){
    console.log("adulto")}
else {
    console.log("idoso");    
}
    
