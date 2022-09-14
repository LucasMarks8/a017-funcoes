// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado.
//Invoque a função e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima se ele é par ou não

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela contendo apenas letras maiúsculas.

//a)
const numeros = (num1, num2) => {
    return num1 + num2

}

console.log(numeros(10, 30))

//b)
const numerosComparados = (num1, num2) => {
    return num1 >= num2

}

console.log(numerosComparados(10, 30))

//c)
const numeroPar = (num1) => {
    return num1 % 2 === 0

}

console.log(numeroPar(10))

//d)
const mensagem = (texto) => {
    console.log(texto)
}

mensagem("paralelepipedo".length)
mensagem("paralelepipedo".toUpperCase())
