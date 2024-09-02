/*


let i = 0

while (i < 10){
    console.log("O numero e:", i)
    i++
}
    */
/*
let estomago = 0

while(estomago<100){
    console.log("Quero comer mais coxinhas",estomago)
    estomago = estomago + 1
}
*/

/*
let numero = 10
let soma = 0

while(numero !==0){
    numero = Number(prompt("Digite um numero"))
 soma += numero
 console.log("O numero foi digitado foi:", numero)
 
}
console.log("o valor total foi:",soma)
*/
/*
let c = 1

do{
    console.log("O valor do contador é:", c)
    c ++
}while(c <= 6)

*/

/*
    
let numeros = [14,67,89,15,23]

for(let i = 0; i <5;i++ ){
    const elemento = numeros[i]
    console.log(elemento)
    */
/*
    let numeros = [11,15,18,14,12,13]
    let numeroMaior = numeros[0]

    for(let i = 0;i <6;i++){
        if(numeroMaior<numeros[i]){
            numeroMaior=numeros[i]
        }

    }
        console.log("O maior numero é:", numeroMaior)
    
    
  */

        /*
        let numeros = [11, 15, 18, 14, 12, 13];
        let numeroMaior = numeros[0];
        let somaPares = 0;
        
        for (let i = 0; i < numeros.length; i++) {
            if (numeroMaior < numeros[i]) {
                numeroMaior = numeros[i];
            }
        
            if (numeros[i] % 2 === 0) {
                somaPares += numeros[i];
            }
        }
        
        console.log("O maior número é:", numeroMaior);
        console.log("A soma dos números pares é:", somaPares);
        
 */
        
/*
const numeros = [14,67,89,15,23]

for(let number of numeros){
    console.log(number)
}

*/
/*
const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
let mensagem = '';

for (const palavra of palavras) {
  mensagem += palavra + ' ';
}


mensagem = mensagem.trim();

console.log(mensagem);

*/
/*
let numeros = [11, 15, 18, 14, 12, 13];
        let numeroMaior = numeros[0];
        let somaPares = 0;
        
        for (let numero of numeros) {
            if (numeroMaior < numeros){
                numeroMaior = numeros
            }
        
            if (numeros[i] % 2 === 0) {
                somaPares += numeros[i];
            }
        }
        console.log("A soma dos números pares é:", somaPares);

        */

        function encontrarPalavrasMaisLongas(palavras) {
            let comprimentoMaximo = 0;
            let palavrasMaisLongas = [];
        
        
            for (const palavra of palavras) {
                const comprimentoAtual = palavra.length;
        
                if (comprimentoAtual > comprimentoMaximo) {
                    
                    comprimentoMaximo = comprimentoAtual;
                    palavrasMaisLongas = [palavra];
                } else if (comprimentoAtual === comprimentoMaximo) {
                    
                    palavrasMaisLongas.push(palavra);
                }
            }
        
            return palavrasMaisLongas;
        }
        
        
        const palavras = ["sol", "extraordinário", "longo", "magnífico", "incrível", "extraordinário"];
        const resultado = encontrarPalavrasMaisLongas(palavras);
        console.log(resultado); 