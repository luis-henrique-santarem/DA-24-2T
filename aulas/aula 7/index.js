


/*
const primeiroValor = true
const segundoValor = true

const resultado = primeiroValor && segundoValor

console.log(resultado)

*/
/* exercicios
const primeiroValor = true
const segundoValor = false
const terceiroValor = true

const resultado = primeiroValor && segundoValor

console.log(resultado)

const resultado1 = segundoValor && terceiroValor

console.log(resultado1)

const resultado2 = primeiroValor && terceiroValor

console.log(resultado2)

const resultado3 = primeiroValor && segundoValor && terceiroValor

console.log(resultado3)
*/
/* ele so fica falso se tiver dois falso o resto ele vai dar true usando o ||
const primeiroValor = false
const segundoValor = false

const resultado = primeiroValor || segundoValor

console.log(resultado)

*/
/*
const primeiroValor = true
const segundoValor = false
const terceiroValor = true

const resultado = primeiroValor || segundoValor

console.log(resultado)

const resultado1 = segundoValor || terceiroValor

console.log(resultado1)

const resultado2 = primeiroValor || terceiroValor

console.log(resultado2)

const resultado3 = primeiroValor || segundoValor || terceiroValor

console.log(resultado3)

*/

/* ele troca se o resultado e positivo ele vira negativo e ao contrario tambem
const primeiroValor = true

const resultado = !primeiroValor

console.log(resultado)

*/
/*
const nome = prompt("Qual seu nome?")

console.log("Nome:",nome)

const dataDeNascimento = prompt("Qual seu ano de nascimento?")

const anoAtual = prompt("Qual o ano atual?")


const idade = anoAtual - dataDeNascimento

console.log("Idade:", idade)

const maiorDeIdade = idade >=18

console.log(" É maior de idade:", maiorDeIdade)

const diferençaAnos = 2050 - anoAtual

console.log("idade em 2050:", idade + diferençaAnos)

*/
/* exercicio 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // 'bool1' é true e o 'bool2' e falsse então bool1 && bool2 e false
console.log("a. ", resultado) // impressão "a. false"

resultado = bool1 && bool2 && bool3 // bool1 && bool2 é false, e bool3 é igual a bool2 (que é false), então false && false é false.
console.log("b. ", resultado) // impressão "b. false"

resultado = !resultado && (bool1 || bool2) // resultado é false, e bool1 || bool2 é true (porque bool1 é true).false && truw w false
console.log("c. ",resultado) // impressão "c. false"

console.log("d. ", typeof resultado) // resultado é false, que é do tipo boolean. 
// impressão "d. boolean"

*/

// exercicio 2
/*
let primeiroNumero = prompt("digite um numero!")
let segundoNumero = prompt ("digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

parseFloat(primeiroNumero) + parseFloat (segundoNumero);
*/

/* Se o código não está funcionando como esperado, um problema comum é que as entradas do prompt são tratadas como strings. Portanto, mesmo depois de usar parseFloat(), se uma entrada não for um número válido, a conversão resultará em NaN (Not-a-Number).

Sugiro que adicione uma verificação para garantir que as entradas sejam números válidos antes de realizar a soma. Aqui está uma forma de fazer isso:

*/
/*
let primeiroNumero = prompt("Digite um número!");
let segundoNumero = prompt("Digite outro número!");

// Convertendo as entradas para números
primeiroNumero = parseFloat(primeiroNumero);
segundoNumero = parseFloat(segundoNumero);

// Verificando se ambos são números
if (!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
  // Calculando a soma
  const soma = primeiroNumero + segundoNumero;
  // Exibindo o resultado
  console.log(soma);
} else 
  console.log("Por favor, insira números válidos.");
*/
//Isso garantirá que apenas números válidos sejam somados e exibidos. Se a entrada não for um número, o código exibirá uma mensagem de erro.

// exercicio de escrita 1


/*
// Pergunta a idade do usuário
let idadeUsuario = parseInt(prompt("Qual é a sua idade?"));

// Pergunta a idade do melhor amigo ou amiga
let idadeAmigo = parseInt(prompt("Qual é a idade do seu melhor amigo ou amiga?"));

// Verifica se a idade do usuário é maior que a do amigo
const idadeMaior = idadeUsuario > idadeAmigo;

// Imprime a resposta se a idade do usuário é maior
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior);

// Calcula e imprime a diferença de idade
const diferencaIdade = idadeUsuario - idadeAmigo;
console.log("Diferença de idade:", diferencaIdade);

*/

// exercicio de escrita 2

/*
// a) Solicitar ao usuário que insira um número par
numero = prompt("Por favor, insira um número par: ")
// b) Imprimir o resto da divisão desse número por 2
resto = numero % 2
console.log("O resto da divisão do número por 2 é:", resto)
// c) Teste do programa
//  Para números pares, o resto da divisão por 2 será sempre 0.
// d) O que acontece se o usuário inserir um número ímpar
//  Se o usuário inserir um número ímpar, o resto da divisão por 2 será sempre 1.
*/

// exercicio de escrita 3

/*
// Pergunta ao usuário sua idade em anos
let idadeEmAnos = prompt("Digite sua idade em anos:");

// Converte a entrada para um número
idadeEmAnos = parseInt(idadeEmAnos);

// Calcula a idade em meses, dias e horas
let idadeEmMeses = idadeEmAnos * 12;
let idadeEmDias = idadeEmAnos * 365; // Aproximação simples, não considerando anos bissextos
let idadeEmHoras = idadeEmDias * 24;

// Imprime os resultados no console
console.log("Sua idade em meses é: " + idadeEmMeses);
console.log("Sua idade em dias é: " + idadeEmDias);
console.log("Sua idade em horas é: " + idadeEmHoras);
*/

// exercicio de escrita 4

/*
numero1 = prompt("Digite o primeiro número: ")
numero2 = prompt("Digite o segundo número: ")

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)

console.log("O primeiro número é igual ao segundo?", numero1 == numero2)

    console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 == 0)

    console.log("O primeiro número é divisível pelo segundo? Não é possível dividir por zero.")
 
    console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 == 0)
e
    console.log("O segundo número é divisível pelo primeiro? Não é possível dividir por zero.")

    Explicação:
Entrada de Dados: Solicita dois números do usuário.
Comparação: Verifica se o primeiro número é maior, igual, ou se há divisibilidade entre os números.
Divisão por Zero: Verifica se o divisor é zero antes de realizar a operação de divisibilidade para evitar erros.

    */

//desafio

