//1 -Desafio do Laboratório Maluco – Versão Litros
//O professor Dr. Medidas está preparando um experimento científico e precisa converter suas anotações de medidas.
//Ele registrou alguns valores em metros e litros, mas o sistema do laboratório só aceita centímetros e mililitros.
//Crie uma função chamada converterMedidas(metros, litros) que:
//● Receba dois valores numéricos — um em metros e outro em litros;
//● Converta os metros em centímetros (1 metro = 100 cm);
//● Converta os litros em mililitros (1 litro = 1000 ml);
//● Retorne uma string formatada no seguinte formato:
//"X metros equivalem a Y cm e Z litros equivalem a W ml."

var prompt = require('prompt-sync')();
 
function centimetros(metros) {
    conversao= (metros*100)
    return conversao
 }
function mililitros(litros) {
    conversao= (litros*1000)
    return conversao    
}
let quantidade=(Number(prompt("Digite a quantidade que deseja converter: ")))
let parametro=(prompt("Digite a unidade de medida que deseja converter: "))

    if(parametro==="litros"){
    console.log(mililitros(quantidade));
    }
    else {
    console.log(centimetros(quantidade));
    }
//ou tbm pode ser feita asssim...

var prompt = require('prompt-sync')();
 
function conversaoUnidade(quantidade, unidade ) {
    
    if(unidade==="metros"){
     let conversao = (quantidade*100)
    return conversao 
    }
    else if(unidade==="litros"){  
    let conversao2 = (quantidade*1000)
    return conversao2
    }
    else{
        return "Unidade não reconhecida. Use um desses: (metros) ou (litros)."
    }
}

    quantidade=(Number(prompt("Digite a quantidade que deseja converter: ")))
    parametro=(prompt("Digite a unidade de medida que deseja converter: "))
    console.log(conversaoUnidade(quantidade,parametro));

//2 - Desafio do Cardápio Interativo
//Um restaurante quer automatizar o atendimento.
//  O cliente escolhe um número de pedido
//  e o sistema retorna o prato e o preço.
//Crie uma função escolherPedido(numeroPedido) que:
//● Receba um número como parâmetro;
//● De acordo com o número, retorne o prato e o valor;
//● Se o número não estiver no cardápio, retorne "Pedido inválido".

//Exemplo de cardápio dentro da função:
//Número Prato Valor
//1 Hambúrguer 15.0
//2 Pizza 25.0
//3 Salada 12.0
//4 Refrigerante 5.0


function escolha(numero) {
    if (numero===1) {
        return console.log("Hambúrguer 15.0");
    }
    else if (numero===2){
        return console.log("Pizza 25.0");
    }
    else if (numero===3){
        return console.log("Salada 12.0");
    }
    else if (numero===4){
        return console.log("Refrigerante 5.0");
    }
    else{
        return("Numero invalido, tente estes aqui (1, 2, 3, 4)")
    }
}
console.log("digite um desses numeros para fazer seu pedido: /1 Hambúrguer, 2 Pizza, 3 Salada, 4 Refrigerante");
perdido=(Number(prompt("Digite o numero do pedido: ")))
console.log(escolha(perdido));



//3 - Desafio da Loja de Brinquedos
//Uma loja de brinquedos quer calcular rapidamente o valor total de uma compra.
//Crie uma função calcularCompra(numeroProduto, quantidade) que:
//● Receba dois parâmetros:
//1. numeroProduto → o código do brinquedo escolhido;
//2. quantidade → quantos brinquedos o cliente quer comprar;
//● De acordo com o número do produto, retorne o nome do brinquedo e o preço unitário;
//● Calcule o valor total multiplicando o preço unitário pela quantidade;
//● Se o código do produto for inválido, retorne "Produto não encontrado".

//Exemplo de produtos na função:

//Número Brinquedo Valor unitário
//1 Carrinho 30.0
//2 Boneca 45.0
//3 Quebra-cabeça

//25.0

//4 Bola 15.0

function calcularCompra(numeroProduto, quantidade){
    let quantidade=(numeroProduto*quantidade)
    if
}
let x=(Number(prompt("calcularCompra(numeroProduto, quantidade)")))




//4 - Desafio da Cafeteria Gourmet
//Uma cafeteria quer automatizar os pedidos online. Cada cliente escolhe o café, quantidade
//e se quer um extra de chantilly ou shot de sabor (custa +R$3 por unidade). Além disso,
//existe desconto para pedidos grandes.
//Crie uma função fazerPedido(numeroCafe, quantidade, extra) que:
//● Receba três parâmetros:
//1. numeroCafe → código do café;
//2. quantidade → número de cafés;
//3. extra → booleano (true ou false) indicando se quer o extra especial;
//● De acordo com o número do produto, obtenha nome e preço unitário:

//Número Café Valor unitário
//1 Espresso 8.0
//2 Cappuccino

//12.00

//3 Latte 10.89
//4 Mocha 14.50
//Ex:
//fazerPedido(2, 3, true)
// "Você pediu 3 Cappuccino (extra: sim). Valor total: R$45.00"
//fazerPedido(1, 6, false)
// "Você pediu 6 Espresso (extra: não). Valor total: R$43.20" // com 10% de desconto