//Contador Simples:

/*

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

*/

//Contador de Pares:


/*
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
*/


//Tabuada:


/*
const numero = parseInt(prompt("Digite um número para ver a tabuada:"));


for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

*/

//Soma de Números:

/*
(function() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));
        
        
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, insira um número válido.");
            i--; // Decrementa o índice para repetir a entrada
        }
    }

    
    alert(`A soma dos números é: ${soma}`);
})();

*/

//Média de Notas:

/*
function calcularMedia() {
    let somaNotas = 0; 

   
    for (let i = 1; i <= 5; i++) {
        
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));

       
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida. Insira um número entre 0 e 10.");
            i--; 
            continue;
        }

        
        somaNotas += nota;
    }

   
    let media = somaNotas / 5;

    
    alert(`A média das notas é ${media.toFixed(2)}`);
}


calcularMedia();

*/

//Jogo da Forca:

/*
const palavras = ['python', 'programacao', 'desenvolvimento', 'computador', 'tecnologia'];


const escolherPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];


let palavraEscolhida = escolherPalavra();
let letrasAdivinhadas = new Set();
let tentativasRestantes = 6;


const exibirPalavra = () => {
    return palavraEscolhida.split('').map(letra => letrasAdivinhadas.has(letra) ? letra : '_').join(' ');
};


const jogoDaForca = () => {
    while (tentativasRestantes > 0) {
        alert(`Palavra: ${exibirPalavra()}`);
        alert(`Tentativas restantes: ${tentativasRestantes}`);
        
        
        const palpite = prompt('Adivinhe uma letra:').toLowerCase();

        if (!palpite || palpite.length !== 1 || !/^[a-z]$/.test(palpite)) {
            alert('Por favor, insira uma única letra.');
            continue;
        }

        if (letrasAdivinhadas.has(palpite)) {
            alert('Você já adivinhou essa letra.');
        } else {
            letrasAdivinhadas.add(palpite);

            if (palavraEscolhida.includes(palpite)) {
                alert('Correto!');
            } else {
                tentativasRestantes--;
                alert('Incorreto!');
            }

            if (!exibirPalavra().includes('_')) {
                alert(`Parabéns! Você adivinhou a palavra: ${palavraEscolhida}`);
                return;
            }
        }

        if (tentativasRestantes === 0) {
            alert(`Você perdeu! A palavra era: ${palavraEscolhida}`);
        }
    }
};


jogoDaForca();

*/





//Validador de CPF:




















// Simulador de Caixa Eletrônico:

/*
const valorSaque = Number(prompt("insira o valor que deseja a sacar"))


const cedulas = [100, 50, 20, 10, 5, 2, 1];


let resultado = [];


let valorRestante = valorSaque;

for (let i = 0; i < cedulas.length; i++) {
    let numCedulas = Math.floor(valorRestante / cedulas[i]);
    if (numCedulas > 0) {
        resultado.push({ valor: cedulas[i], quantidade: numCedulas });
        valorRestante -= numCedulas * cedulas[i];
    }
}


console.log(`Valor do saque: R$ ${valorSaque}`);
for (let i = 0; i < resultado.length; i++) {
    console.log(`Cédulas de R$ ${resultado[i].valor}: ${resultado[i].quantidade}`);
}
*/


// Ordenação de Array:



let numero = prompt("Insira uma lista de números separados por vírgulas:");
if (numero !== null) {
   
    let numbersArray = numero.split(",").map(num => parseFloat(num.trim()));

    numbersArray.sort((a, b) => a - b);

    console.log("Array ordenado:", numbersArray);
}
