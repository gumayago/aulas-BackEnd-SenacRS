//introdução a objetos, o que são, o que fazem, do que se alimentam "rsrsrs"

// const carro="fiat"  VARIAVEL
// const carro= [pegeout, fiat, renault ]   vetor(lista)
// const carro={marca, modelo, ano }  objeto (um objeto, diversas infomações sobre o mesmo)

// const carro={
// marca: "fiat",
// modelo: "Uno",
// ano: "2012",
// cor:"azul"
// }
// console.log(carro);
// console.log(carro.ano);

// criar o objeto aluno!
// const aluno={
//     nome: "yago de lima",
//     idade: "25",
//     cpf: "148.244.290-96",
//     numeroCadastro: "1234-25",
//     curso: "redes"
// }

// console.log(aluno);
// aluno.curso="T.I"        //inserir um novo dado (valor)
// aluno.nome="carlos"
// console.log(aluno);


//criar objeto de um cachorro
// let cachorro={
//     nome: "Rex",
//     raça: "pastor alemão",
//     tamanho: "1.50",
//     peso: "20kg",
//     temFome: false,
// }
//console.log(cachorro);
//cachorro.temFome=true
//console.log(cachorro);

let cachorro={
    nome: "Rex",
    raça: "pastor alemão",
    tamanho: "1.50",
    idade: 10,
    latindo: false,
    temFome: false,
    validarFelicidade: function (){
        if(this.temFome ===false){
            this.latindo=false
            return "o cachorro esta alegre!"
            }
        else{ 
            this.latindo=true
            return "o cachorro esta triste!"
            }
        },

    cachorroLatindo: function(){
        return false
    },

     validarIdade: function(){
         if   (this.idade<5){
            return `${this.nome} filhote`
        }
        else if (this.idade<=10){
            return `${this.nome} Adulto`
        }
        else{
            return `${this.nome} idoso`
        }
     },
//criar uma função que aumente a idade do cachorro
aumentarIdade: function(){
        return this.idade++
}
}


console.log(cachorro);
console.log(cachorro.validarFelicidade());
console.log(cachorro.validarIdade()); 

console.log(cachorro);
cachorro.aumentarIdade()
cachorro.aumentarIdade()
cachorro.aumentarIdade()
console.log(cachorro);
console.log(cachorro.validarIdade()); 





