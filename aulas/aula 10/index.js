
/*
let condicao1 = true

if (condicao1) {
    //ação
    console.log("exibiu condição 1")
}

let condicao2 = false
if(condicao2){
//ação
console.log("exibiu condição 2")
}
*/

/*
const num1 = prompt("insira um numero")
const num2 = prompt("insira um segundo numero")

if(num1===num2){
    console.log("ambos numeros sao iguais, sucesso")

}

const num3 = prompt("insira um numero")
const num4 = prompt("insira um segundo numero")

if(num1!==num2){
    console.log("ambos numeros sao diferentes, sucesso")

}
*/
/*
let condicao = false

if(condicao){
    console.log("entrei no if")
}else{
    console.log("entrei no else")
}

*/
/*
const num1 = prompt("insira um numero")
const num2 = prompt("insira um segundo numero")

if(num1===num2){
    console.log("são numeros iguais")
}else{
    console.log("são numeros diferentes")
}
*/
/*
let condicao1 = false
let condicao2 = false

if(condicao1){
    console.log("condicao1 verdadeira")
}else if(condicao2){
        console.log("condicao2 e verdadiera")
 }else{
    console.log("entrou no else")
 }
*/
/*
const num1 = prompt("insira um numero")
const num2 = prompt("insira um segundo numero")

if(num1===num2){
    console.log("são iguais")
}else if(num1>num2){
console.log("o num1 e maior que o num2")
}else{
  console.log("o num1 e menor que o num2")
}

*/
/*
let  paisDeOrigem = prompt("digite o pais de origem")

switch(paisDeOrigem){
    case "Brasil":
        console.log("brasileiro")
         break
    case "EUA":
        console.log("Norte-Americano")
        break
    case "Inglaterra":
        console.log("Ingles")
        break
    default :
    console.log("nenhuma nacionalidade encontrada")
    
}
*/
/*
const pokemon = prompt("escolha um pokemon inicial")

switch(pokemon){
    case "bulbasaur":
        console.log("bulbasaur tipo (planta e veneno)")
        break
        case "charmander":
            console.log("charmander tipo (fogo)")
            break
        case "squirtle":
            console.log("squirtle tipo (agua)")
            break
            default:
            console.log("nome de pokemon inicial invalido")
}
*/
/*
const Hogwarts = prompt("insira seu nome para saber sua casa em Hogwarts")

switch(Hogwarts){
    case "Hermione":
        console.log("Grifinoria")
        break
    case "Ana":
        console.log("Lufa-lufa")
        break
    case "Luna":
        console.log("Corvinal")
        break
    case "Narcisa":
        console.log("Sonserina")
        break
        default:
            console.log("o nome não e de nenhuma casa")
}
*/
/*
let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2){
    console.log("As duas condições são verdadeiras")
}
else{
    console.log("alguma condição e falsa")
}

if(condicao1 || condicao2){
    console.log("Algumas das condições são verdadeiras")
}
else{
    console.log("todas são falsas")
}

if(!condicao1){
    console.log("a condicao1 e falsa")
}
else{
    console.log("a condicao1 e verdadeira")
}

*/

let idade = Number(prompt("qual sua idade"))
let escola = prompt("voce terminou o ensino medio")
let faculdade = prompt("voce esta cursando outra faculdade")

    switch(idade){
        case "19":
        console.log("voce pode fazer a faculdade")
        break
        default:
            console.log("voce  pode fazer a faculdade")
    }

    switch(escola){
        case "sim":
        console.log("voce pode fazer a faculdade")
        break
     default:
        console.log("voce nao pode fazer a faculdade")
    }
   
    switch(faculdade){
        case "nao":
            console.log("voce pode fazer a faculdade")
            break
            default:
                console.log("voce nao pode fazer a faculdade")
    }
        
