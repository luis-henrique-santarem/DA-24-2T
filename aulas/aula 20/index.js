// não fiz a 19 porque era a parte de fazer o jogo, e eu não consegui fazer


/*
let matriz = [
    [1,2,3],
    [4,5,6]
]

console.log(matriz[0][1])
console.log(matriz[1][0])
console.log(matriz[1][2])


let matriz2 = [
[10,20,30],
[40,50,60],
[70,80,90]
]
  
let matriz3 = []

matriz3[0] = [1,2,3]
matriz3[1] = [4,5,6]
matriz3[2] = [7,8,9]

console.log(matriz2[0][1])//valor 20
console.log(matriz2[2][1])//valor 80
console.log(matriz2[1][0])//valor 40


//exercicio 1
//a)
let matriz = []

matriz[0] = [0,0,0]
matriz[1] = [0,0,0]
matriz[2] = [0,0,0]

//b)

matriz[1][2] = 1

console.log(matriz[0][0],matriz[0][1],matriz[0][2])
console.log(matriz[1][0],matriz[1][1],matriz[1][2])
console.log(matriz[2][0],matriz[2][1],matriz[2][2])


//acesando elementos de uma matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
    }
}

//soma de elementos da matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
        soma += matriz[i][j]
    }
}
console.log(soma)


//alterar um valor especifico

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        matriz[i][j]*=2
        console.log(matriz[i][j])

    }
}

//exercicio 2

let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function somaMatriz(matriz) {
    let soma = 0; 
    for (let i = 0; i < matriz.length; i++) { 
        for (let j = 0; j < matriz[i].length; j++) { 
            soma += matriz[i][j]; 
        }
    }
    return soma; 
}
let resultado = somaMatriz(matriz);
console.log("Soma dos elementos da matriz:", resultado); 
*/


//exercicio 3


let tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function posicionarNavios(numNavios) {
    let naviosPosicionados = 0;
    while (naviosPosicionados < numNavios) {
        let linha = Math.floor(Math.random() * 10);
        let coluna = Math.floor(Math.random() * 10);
        
        if (tabuleiro[linha][coluna] === 0) {
            tabuleiro[linha][coluna] = 1; 
            naviosPosicionados++;
        }
    }
}

function exibirTabuleiro() {
    console.log("Tabuleiro:");
    tabuleiro.forEach(linha => {
        console.log(linha.map(celula => {
            if (celula === 0) return "~"; 
            if (celula === 1) return "N"; 
            if (celula === 2) return "X"; 
            if (celula === 3) return "O"; 
        }).join(" "));
    });
}


function atacar(linha, coluna) {
    if (tabuleiro[linha][coluna] === 1) {
        tabuleiro[linha][coluna] = 2; 
        alert("Acertou um navio!");
        return true; 
    } else if (tabuleiro[linha][coluna] === 0) {
        tabuleiro[linha][coluna] = 3; 
        alert("Água!");
        return false;
    } else {
        alert("Você já atacou essa posição!");
        return null; 
    }
}


function contarNaviosRestantes() {
    return tabuleiro.flat().filter(celula => celula === 1).length;
}


function jogar() {
    const numNavios = 20; 
    posicionarNavios(numNavios);
    let naviosRestantes = numNavios;

    while (naviosRestantes > 0) {
        exibirTabuleiro();

        let linha = Number(prompt("Digite a linha (0-9):"));
        let coluna = Number(prompt("Digite a coluna (0-9):"));

        
        if (isNaN(linha) || isNaN(coluna) || linha < 0 || linha > 9 || coluna < 0 || coluna > 9) {
            alert("Entrada inválida! Tente novamente.");
            continue;
        }

        const resultado = atacar(linha, coluna);
        
        if (resultado === true) {
            naviosRestantes = contarNaviosRestantes();
            alert(`Navios restantes: ${naviosRestantes}`);
        }
    }
   alert("Você afundou todos os navios! Parabéns!");
}


jogar();
