
/*
function imprimirOlaMundo(){
    console.log("ola mundo!")
}

imprimirOlaMundo()

*/


//exercicios 

//1
/*
function saudacao() {
    console.log("Bem-vindo Turma 24-2T!");
  }
  
  saudacao();
  */

  //2
/*
  function soma(num1, num2){
    const resultado = num1 + num2
    console.log(resultado)
  }
  soma(2, 3)
*/


//3

/*
function dobrar(numero){
    const dobro = numero * 2
    console.log("o dobro de", numero, "e", dobro) 

}
dobrar(5)

*/

//exercicios parte 2

//1

/*
function saudacao(nome) {
    console.log(`Olá ${nome}`);
}


saudacao('Ana');
saudacao('Pedro');
saudacao('Maria');
*/

//2
/*
function imprimirSoma(num1, num2) {
    const soma = num1 + num2;
    console.log(`A soma é ${soma}`);
}

imprimirSoma(5, 7);
*/


//exemplo
/*
function calcularArea(altura, larguta){
    const area = altura + larguta
    return area
}

    const areaCalculada = calcularArea(2, 1)
    console.log(calcularArea(2,3))

*/

//exercicios parte 3

//1

/*
function somar(numero1, numero2) {
    return numero1 + numero2;
}


let resultado = somar(5, 3);


console.log(resultado);

*/

//2
/*
function processArray(arr) {
    if (arr.length === 0) {
        
    }
    
    const firstNumber = arr[0];
    const lastNumber = arr[arr.length - 1];
    
    const result = [firstNumber / 2, lastNumber / 2];
    
    return result;
}
const numbers = [10, 20, 30, 40];
const newArray = processArray(numbers);
console.log(newArray); 

*/


//exemplo1

/*
const calcularArea = function(altura, largura){
    const area = altura + largura
    return area
}
const areaCalculada = calcularArea(2, 3)

//exemplo2

const calculaArea = (altura, larguta) =>{
    const area = altura + largura
    return area
    
    }
const areaCalculada = calculaArea(2, 3)



*/


//exercicios parte 3

//1
/*
const soma = (num1, num2) => num1 + num2;


const resultado = soma(2, 3);
console.log(resultado); 
*/

//2
/*
const dobrar = (numero) => {
    const dobro = numero * 2;
    console.log(`O dobro de ${numero} é ${dobro}`);
    return dobro;
};


const resultado = dobrar(5);
console.log(`O resultado retornado é ${resultado}`);
*/

//exercicio do monstro

function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) {
    if (temPeleGelada && brilhaAoSol && temSedeDeSangue) {
        return "Vampiro";
    } else if (transformaComLuaCheia && !temPeleGelada && !brilhaAoSol && !temSedeDeSangue) {
        return "Lobisomem";
    } else {
        return "Humano";
    }
}


console.log(determinaMonstro(true, false, true, true)); 
console.log(determinaMonstro(false, true, false, false)); 
console.log(determinaMonstro(false, false, false, false)); 
