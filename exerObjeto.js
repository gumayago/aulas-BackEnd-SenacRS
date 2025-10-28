//criar função de ligar e desligar lampada
//identificar se ela ja esta ligada e/ou apagada
var prompt = require('prompt-sync')();


let objeto={
    nome:"lampada",
    cor: "branca",
    acessa: true,
    acenderLampada: function(){
        if (this.acessa==false){
    return "Acender lampada" 
        }
    else{
        return "ja esta ligada"
    }
},

    apagarLampada: function(){
       if (this.acessa==true){
        return "Apagar lampada"
       }
       else{
        return "ja esta apagada"
       }
    }
}
console.log(objeto);

console.log(objeto.acenderLampada()),
console.log(objeto.apagarLampada())


//1) crie uma função q faça trim trim
let telefone={
    modelo: "celular",
    tocar: false,
    numero: "0800",
    credito: 2,
    ligacao: function(tel)
    {
        if (this.tocar===false) {
            return "trim trim"
        }
        else{
            return "ja esta tocando"
        }
    },

//2) add numero e colocar uma função q mude o numero
// deixando usuario digitar
    trocarNumero: function(MudarTelefone){
    this.numero=MudarTelefone},

//3) cria a função ligar, porem so pode ligar 
//se tiver saldo
ligar: function(){
        if(this.credito>0){
            this.credito--
            return "ligando"
    }
    else{
        return "sem credito"
    }
}

}
// ex 1) telefone tocando:
console.log(telefone);
console.log(telefone.ligacao());
telefone.tocar=true
console.log(telefone.ligacao());

//ex 2 mudar telefone
console.log("numero de telefone: ", telefone.numero );
let numeroTel=(prompt("digite seu novo numero: "))
telefone.trocarNumero(numeroTel)
console.log(telefone.numero);

//ex 3) credito
console.log(telefone.credito);
console.log(telefone.ligar(53984535846));
console.log(telefone.credito);
