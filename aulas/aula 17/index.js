
//exemplo
/*
const professor = {
    nome: 'Lucas',
    idade: 32,
    altura: 1.75,
    email: "lucas@gmail.com",
    tarefas: ['Dar aula','Responder duvidas'],
    contarPiadas:function(){
        console.log("É pa vê ou pa comê?")
    }
}

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = 'leo'
professor["email"] = 'leo@gmail.com'

console.log(professor.nome);
console.log(professor.email)
*/


//exercicio 1
/*
const filme = {
    direção: 'Michael Bay',
    nome: 'Transformers',
    anoDeLançamento: 2007,
    elenco: ['Megan Fox','Shia LaBeouf','Rachael Taylor','Josh Duhamel' ],
    assistiu: 'Eu ja assisti'
}
console.log(filme.direção)
console.log(filme.nome)
console.log(filme["anoDeLançamento"])
console.log(filme["elenco"])
console.log(filme["assistiu"])
*/


//exercicio 2
/*
const pessoa = {
    nome: 'Luis',
    idade: 19,
    generoMusical: 'Rock',

}
console.log("O nome da pessoa é",pessoa.nome, "ele tem", pessoa.idade, "anos e gosta muito de",pessoa.generoMusical)
*/

//exemplo
/*
const donoDoPet ={
    nome: "Luis",
    idade: 19,
    pet :{
        nome: "eevee",
        raca: "siamês",
        idade: 1

    } 
    
}

console.log(donoDoPet.pet.nome)
*/
// exemplo de achar a palavra dentro do array
/*
const curso = {
    nome: "Noturno Frontend",
    linguagens:["JS","CSS","HTML"]
}
console.log(curso.linguagens[0])
*/


//array de objetos [{}]
/*
const professores = [
 {nome:'lucas',idade:32,modulo:1},
 {nome:'leo',idade:29, modulo:2},
 {nome:'mika',idade:29,modulo:3}
]
console.log(professores[0].nome)
*/

//adicionar propriedades
/*
const curso ={
    nome:"frontend",
    linguagens:['JS','CSS','HTML']
}
console.log(curso.linguagens[0])
curso.numeroEstudantes = 50
curso ['numeroProfessores'] = 10

console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)
*/

/*
const filme = {
    direção: 'Michael Bay',
    nome: 'Transformers',
    anoDeLançamento: 2007,
    elenco: [
        { nome: 'Megan Fox', personagem: 'Mikaela Banes' },
        { nome: 'Shia LaBeouf', personagem: 'Sam Witwicky' },
        { nome: 'Rachael Taylor', personagem: 'Alice' },
        { nome: 'Josh Duhamel', personagem: 'Lieutenant Colonel William Lennox' }
    ],
    assistiu: 'Eu ja assisti'
};

filme.elenco[0].nome = "Xuxa";
console.log(filme.direção);
console.log(filme.nome);
console.log(filme["anoDeLançamento"]);
console.log(filme["elenco"]);
console.log(filme["assistiu"]);
*/



//espalhando ou spread ...
/*
const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
}

const novoUsuario = {
    ...usuario,
nome: 'Lucas',
idade: 32
}
console.log(novoUsuario)

const nomeProfs = ['lucas','leo','mika']

const novaListaProfs = [...nomeProfs]

console.log("o nome do prof e:",novaListaProfs[0])

*/

//exercicio 4
/*
const pessoa = {
    nome: 'Luis',
    idade: 19,
};

const comidasPreferidas = ['Pizza', 'Xis', 'Shawarma'];
const amigo = {
    nome: 'Gabriel',
    idade: 19
};

const novaPessoa = {
    ...pessoa,
    comidasPreferidas: comidasPreferidas,
    amigo: amigo
};

const comidasFormatadas = novaPessoa.comidasPreferidas

const mensagem = `O nome da pessoa é ${novaPessoa.nome}, e suas comidas preferidas são ${comidasFormatadas}. Seu melhor amigo se chama ${novaPessoa.amigo.nome} e tem ${novaPessoa.amigo.idade} anos.`;

console.log(mensagem);
*/


// Array inicial de personagens
const personagens = [
    {
        nome: 'Goku',
        idade: 45,
        estilo: 'Saiyajin',
        poderes: ['Kamehameha', 'Voar', 'Super Sayajin']
    },
    {
        nome: 'Vegeta',
        idade: 46,
        estilo: 'Saiyajin',
        poderes: ['Final Flash', 'Big Bang Attack', 'Voar']
    },
    {
        nome: 'Piccolo',
        idade: 50,
        estilo: 'Namekuseijin',
        poderes: ['Makankosappo', 'Voar', 'Regeneração']
    }
];


function adicionarPersonagem(personagem) {
    if (!personagem.nome || !personagem.idade || !personagem.estilo || !personagem.poderes) {
        console.log('Todos os campos (nome, idade, estilo e poderes) são obrigatórios.');
        return;
    }

    personagens.push({
        nome: personagem.nome,
        idade: personagem.idade,
        estilo: personagem.estilo,
        poderes: personagem.poderes
    });

    console.log(`Personagem ${personagem.nome} adicionado com sucesso!`);
}


function buscarPersonagem(nome) {
    const personagem = personagens.find(p => p.nome === nome);
    
    if (personagem) {
        return personagem;
    } else {
        return `Personagem com o nome ${nome} não encontrado.`;
    }
}


function listarPersonagens() {
    if (personagens.length === 0) {
        console.log('Nenhum personagem encontrado.');
        return;
    }

    personagens.forEach(p => {
        console.log(`Nome: ${p.nome}`);
        console.log(`Idade: ${p.idade}`);
        console.log(`Estilo: ${p.estilo}`);
        console.log(`Poderes: ${p.poderes.join(', ')}`);
        
    });
}


adicionarPersonagem({
    nome: 'Trunks',
    idade: 24,
    estilo: 'Saiyajin',
    poderes: ['Sword Slash', 'Burning Attack']
});

console.log(buscarPersonagem('Vegeta'));
console.log(buscarPersonagem('Gohan'));

listarPersonagens();

