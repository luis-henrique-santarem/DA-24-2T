/*
const texto1 = "ola mundo"
const texto2 = "ola mundo"
const texto3 = "ola mundo"

let nome = "luis"
let cor = "roxo"
// exemplo de concatenação
const frase = " o meu nome e: " + nome + " e minha cor favorita e: " + cor + ""

console.log(frase)

//exemplo de template
*/

/*
const nome = "luis"
const idade = "19"

const frase = `meu nome e:` ${nome}  `e minha idade e:` ${idade} anos` // não deu muito certo
*/

/*
// propriedade lenght
const nome = "Luis Hernique"
console.log(nome.length)


// toLocaleLowerCase()
console.log(nome.toLocaleLowerCase())


// toUpperCase()
console.log(nome.toUpperCase())
*/

/*
// trim()
const email = " lushenriquepedroso@gmail.com "
console.log(email.trim())
*/

/*
const frase = "hoje comi cenoura"
console.log(frase.includes("cenoura"))// true
console.log(frase.includes("batata"))// false
*/
/*
const frase = " hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura","batata")
console.log(novaFrase)
*/


// exercicio 1
/*
let frase = prompt("escreva uma frase que tenha a letra O")


console.log(frase.toLocaleUpperCase())

const novaFrase = frase.replaceAll("o","i")
console.log(novaFrase)

console.log(frase.length)
*/

//arrays comceça em zero


/*
const frutas = ["abacate","banana","tomate","milho","uva","morango"]

const fruta = frutas[4]

console.log(fruta)
*/

/*
const cachorros = ["Pomerânia","Shih Tzu","Pug","Golden Retriever","Pastor Alemão"]

const cachorro = Number(prompt ("insira um numero de 0 a 4"))

console.log(cachorros[cachorro])
*/

/*
const pokemon = ["bulbasauro","squirtle","chamander","pikachu"]
console.log(pokemon.length)
*/


/*
const seriesBoas = ["Vikings","The Big Bang Theory"]

console.log(seriesBoas.includes("Vikings"))
console.log(seriesBoas.includes("Game of thrones"))
*/

/*
const numeros = [1,2,3]

numeros.push(4)

console.log(numeros)


numeros.push(5,6,7,8)

console.log(numeros)
*/

/*
const meusPeixes = ["palhaço","mandarim","esturjão"]

meusPeixes.pop()

console.log(meusPeixes)
*/
/*
const letras = ["A","B","C","D","E","F","G","H"]

letras.splice(2,1)

console.log(letras)

letras.splice(5,2)

console.log(letras)
*/
//exercicio

const numeros = [1,2,3,4,5,6]

console.log(numeros.length)

numeros.push(7)

console.log(numeros)

numeros.splice(3,2)

console.log(numeros)

console.log(numeros.length)