// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

//a)
// function imprimeNome(nome) {
//     console.log(`Ola, ${nome}!`)
// }

// imprimeNome("Lucas")

//b)
// function tabuada() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i * 6)
//     }
// } 

// tabuada()

//c)
//arrow function imprime nome
const imprimeNome = (nome) => {
    console.log(`Ola, ${nome}!`)
}

imprimeNome("Lucas")

//arrow function tabuada
const emitirTabuada = (tabuada) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${Number(i * tabuada)}`)
    }
}

emitirTabuada(6)
