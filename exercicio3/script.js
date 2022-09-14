// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações
// básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, imprima no console o resultado das operações

const soma = (num1, num2) => {
    return num1 + num2
}

//console.log(soma(5, 4))

const subtracao = (num1, num2) => {
    return num1 - num2
}

//console.log(subtracao(20, 4))

const multiplicacao = (num1, num2) => {
    return num1 * num2
}

//console.log(multiplicacao(5, 4))

const divisao = (num1, num2) => {
    return num1 / num2
}

//console.log(divisao(50, 5))

let num1 = Number(prompt("Insira o primeiro número"))
let num2 = Number(prompt("Insira o segundo número"))

console.log(soma(num1, num2))
console.log(subtracao(num1, num2))
console.log(multiplicacao(num1, num2))
console.log(divisao(num1, num2))
