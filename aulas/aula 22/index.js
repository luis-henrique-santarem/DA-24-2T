//1. Erro Lógico Simples
/*
let numeros = [1,2,3,4,5];
let soma = 0 // a escrita certa seria let soma = 0

for(let i = 0; i < numeros.length; i++){
    soma  += numeros[i];

}
console.log(soma)
//o erro  está na linha 3, pois não foi declarado o valor inicial da variável soma. O


//Teste de Mesa
function fatorial (n){
    let resultado = 1;
    for (let i = n; i > 0; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5));


Iteração|	    i	     |        resultado
1	    |       5	     |           1
2	    |       4	     |           5
3	    |       3	     |           20
4	    |       2	     |           60
5	    |       1	     |          120


Iteração 1:  resultado = 1 * 5 = 5
Iteração 2:  resultado = 5 * 4 = 20
Iteração 3:  resultado = 20 * 3 = 60
Iteração 4:  resultado = 60 * 2 = 120
Iteração 5:  resultado = 120 * 1 = 120



//Depuração com console.log()
let numeros  = [1,2,3,4,5];

let soma = 0;
for (let i = 0; i < numeros.length; i++){
    console.log(`i: ${i}, numeros[i]: ${numeros[i]}, soma antes ${soma}`)
    soma += numeros[i];
    console.log(`soma depois ${soma}`);
}

console.log(`resultado final: ${soma}`);



//exercicio 3. Soma de Pares
let numeros  = [1,2,3,4,5];
let somaPares = 0;

for(let i  = 0; i < numeros.length; i++){
    console.log(`Verificando número: ${numeros[i]}`); // Verificando cada número
    if(numeros[i] % 2 == 0){
        console.log(`Número par encontrado: ${numeros[i]}`); // Quando um número par é encontrado
        somaPares += numeros[i];
    }
}

console.log(`Soma dos números pares: ${somaPares}`);

*/

//3. Algoritmo com Vários Bugs


function jogoPontuacao(jogadas){
    let pontuacao = 0;

    for (let i = 0; i < jogadas.length; i++){
        console.log(`Jogada: ${jogadas[i]}`);
        if (jogadas[i] === "ganhou"){
            pontuacao += 3;
            console.log(`Pontuação atual (ganhou): ${pontuacao}`);
        } else if  (jogadas[i] === "empatou"){
            pontuacao += 1;
            console.log(`Pontuação atual (empatou): ${pontuacao}`);
        } else if  (jogadas[i] === "perdeu"){
            pontuacao -= 1;
            console.log(`Pontuação atual (perdeu): ${pontuacao}`);
        }


    }
   return pontuacao;
}

let resultadoFinal = jogoPontuacao(["ganhou","empatou","perdeu","ganhou"]);
console.log(`Pontuação final: ${resultadoFinal}`);




    