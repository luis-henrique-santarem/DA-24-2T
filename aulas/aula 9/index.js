//let array
/*
console.log("a. ", array)

array = null

console.log("b.  ", array)

array = [3,4,5,6,7,8,9,10,11,12,13]

console.log("c.  ", array.lenght)

let i = 0
console.log("d.  ", array[i])

array[i+1] = 19

console.log("e.  ", array)

const valor = array [i+6]

console.log("f.  ", valor)

*/

/* 1.console.log("a")
se o array não foi definido ainda, pode resultar em um erro ou em um valor undefined

2.null
a variavel array e definifa como null

3.console.log("b")
se a variavel foi corretamnete definida como null, este comando ira exibir null

4.array(3,4,5,6,7,8,9,10,11,12,13)
esta tentando definir array como uma lista de valores.

5.array.lenght
ele exibira o comprimento do array
 
6.let = i
declara a variavel i com valor 0

7.console.log("d")
exibe o valor da array na posição i que e 0. portanto, se o array foi corretamente defenido exibira 3

8.array[i+1]
aqui o codigo esta tentando alterar o valor do elemento na posição i_1 para 19 se o array foi defenido corretamente

9.console.log("e")
exibe o array apos modificação

10.cons valor

declara constante valor e a inicializa com o valor do array na posição i+6, portanto o valor sera o valor na posição 6 que e 9

11.console.log("f")

exibe o valor do cost valor.

*/
/*
const frase = prompt("digite uma frase")
console.log(frase.toUpperCase().replaceAll("a","i"), frase.length)
*/
/*
Entrada do Usuário:

O usuário digita 'subi num ônibus em Marrocos'.
Conversão para Maiúsculas:

A string convertida para maiúsculas será 'SUBI NUM ÔNIBUS EM MARROCOS'.
Substituição de "A" por "I":

A string após substituir todas as ocorrências de "A" por "I" será 'SUBI NUM ÔNIBUS EM MIRROCOS'.
Comprimento da String Original:

O comprimento da string original 'subi num ônibus em Marrocos?' é 27.
*/
/*
const nome = prompt("digite seu nome")
const email = prompt("digite seu email")

const frase = ["o email" + email "foi cadastrado com sucesso. seja bem vindo(a)" + nome]

console.log("o email", email, "foi cadastrado com sucesso. seja bem-vindo(a)", nome,)
*/

/*
const comidasPreferidas = ["pizza","lasanha","arroz","feijão","shawarma"]

console.log(comidasPreferidas)

console.log(comidasPreferidas)[0]
console.log(comidasPreferidas)[1]
console.log(comidasPreferidas)[2]
console.log(comidasPreferidas)[3]
console.log(comidasPreferidas)[4]

const pergunta = prompt("qual sua comida preferida")

console.log(comidasPreferidas)[1] = pergunta

*/

listaDeTarefas = []

pergunta1 = prompt("insira uma tarefa que não cumpriu")
pergunta2 = prompt("insira uma segunda tarefa que nao cumpriu")
pergunta3 = prompt("insira uma terceira tarefa que não cumpriu")

listaDeTarefas.push(pergunta1,pergunta2,pergunta3);

console.log(listaDeTarefas);
let tarefaRealizada = prompt("insira o indice da tarefa que voçe ja realizou?")
listaDeTarefas.splice(tarefaRealizada,1)
console.log(listaDeTarefas);