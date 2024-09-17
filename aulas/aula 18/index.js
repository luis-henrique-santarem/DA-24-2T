//exercicio de fixação

//exercicio de fixação 1
/*
const filme = {
    nome: "Auto da Compadecida",
    ano: 200,
    elenco:[ 
        "Matheus Nachtergaele","Selton Mello",'Denise Fraga',"Virginia Cavendish"
    ],
    transmissoesHoje:[
    {canal: "telecine", horario: "21h"},
    {canal: "Canal Brasil", horario: "19h"},
    {canal: "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.lenght - 1])
console.log(filme.transmissoesHoje[2])

o console ira imrpimir

Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }

que são partes do codigo
*/

//exercicio de fixação 2
/*
const cachorro = {
    nome: "juca",
    idaed: 3,
    raça: "SRD"
}
const gato = {...cachorro, nome: "juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a","o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a)
{ nome: 'juca', idade: 3, raça: 'SRD' }
{ nome: 'juba', idade: 3, raça: 'SRD' }
{ nome: 'jubo', idade: 3, raça: 'SRD' }



b)O operador ...  copia as propriedades de um objeto para um novo objeto.

*/


//exercicio de fixação 3
/*
function minhaFuncao(objeto, propriedades){
    return objeto[propriedades]
}

const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
false
undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
false: A propriedade "backender" existe no objeto e seu valor é false.
undefined: A propriedade "altura" não existe no objeto.

*/

//Exercícios de escrita de código 1
/*
const pessoa = {
    nome: "Lucas Gabriel",
    apelidos: ["Mestre", "Prof", "Lu"]
};


function imprimirMensagem(pessoa) {
    const nome = pessoa.nome
    const apelidos = pessoa.apelidos

    console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelidos}`);
}


imprimirMensagem(pessoa);
*/

//Exercícios de escrita de código 1 continuação
/*
const pessoa = {
    nome: "Lucas Gabriel",
    apelidos: ["Mestre", "Prof", "Lu"]
};

function imprimirMensagem(pessoa) {
    const nome = pessoa.nome;
    const apelidos = pessoa.apelidos;

    let mensagem = `Eu sou ${nome}, mas pode me chamar de:`;
    for (let i = 0; i < apelidos.length; i++) {
        mensagem += ` ${apelidos[i]}`;
        if (i < apelidos.length - 1) {
            mensagem += ',';
        }
    }

    console.log(mensagem);
}


const novaPessoa = {
    ...pessoa,
    apelidos: ["Luca", "Gabi", "Lukinhas"]
};


imprimirMensagem(novaPessoa);

*/

//Exercícios de escrita de código 2

/*
const pessoa1 = {
    nome: 'Alice',
    idade: 30,
    profissao: 'Engenheira'
  };
  
  const pessoa2 = {
    nome: 'Bob',
    idade: 25,
    profissao: 'Designer'
  };
  
  function processarPessoa(pessoa) {
    return [
      pessoa.nome,                         
      pessoa.nome.length,                  
      pessoa.idade,                       
      pessoa.profissao,                    
      pessoa.profissao.length              
    ];
  }
  
  const resultado1 = processarPessoa(pessoa1);
  const resultado2 = processarPessoa(pessoa2);
  
  console.log(resultado1); 
  console.log(resultado2); 

*/

//Exercícios de escrita de código 3
/*
let carrinho = [];

const fruta1 = {
  nome: 'Maçã',
  disponibilidade: true
};

const fruta2 = {
  nome: 'Banana',
  disponibilidade: true
};

const fruta3 = {
  nome: 'Laranja',
  disponibilidade: true
};


function adicionarAoCarrinho(fruta) {
  carrinho.push(fruta);
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);


console.log(carrinho);
*/

//desafio 1
/*
function obterInformacoesUsuario() {
    
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Qual é a sua idade?");
    const profissao = prompt("Qual é a sua profissão?");
  
    const usuario = {
      nome: nome,
      idade: idade,
      profissao: profissao
    };
  
    console.log(usuario);
  
    console.log("Tipo do objeto:", typeof usuario);
  }
  
  obterInformacoesUsuario();
  */
/*
  function compararFilmes(filme1, filme2) {
    const { ano: ano1, nome: nome1 } = filme1;
    const { ano: ano2, nome: nome2 } = filme2;

    if (ano1 < ano2) {
        return `${nome1} foi lançado antes de ${nome2}.`;
    } else if (ano1 > ano2) {
        return `${nome2} foi lançado antes de ${nome1}.`;
    } else {
        return `${nome1} e ${nome2} foram lançados no mesmo ano.`;
    }
}

const filmeA = { ano: 1994, nome: "Pulp Fiction" };
const filmeB = { ano: 1999, nome: "Matrix" };

console.log(compararFilmes(filmeA, filmeB));

*/



// Define a estrutura de um personagem

// Array para armazenar os personagens
const personagens = [];

// Função para criar e adicionar um novo personagem
function cadastrarPersonagem() {
    const nome = prompt('Digite o nome do personagem:');
    const classe = prompt('Digite a classe do personagem:');
    const nivel = parseInt(prompt('Digite o nível do personagem:'), 10);
    const hp = parseInt(prompt('Digite os pontos de vida (HP) do personagem:'), 10);
    const habilidades = prompt('Digite as habilidades do personagem (separadas por vírgula):').split(',').map(habilidade => habilidade.trim());

    // Criar objeto do personagem
    const personagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        historicoAcoes: []
    };

    // Adicionar personagem ao array
    personagens.push(personagem);
    alert('Personagem cadastrado com sucesso.');
}

// Função para buscar um personagem por nome
function buscarPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            return personagens[i];
        }
    }
    return null;
}

// Função para excluir um personagem
function excluirPersonagem() {
    const nome = prompt('Digite o nome do personagem a ser excluído:');
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            // Remover o personagem
            for (let j = i; j < personagens.length - 1; j++) {
                personagens[j] = personagens[j + 1];
            }
            personagens.length--; // Reduzir o tamanho do array
            alert('Personagem excluído com sucesso.');
            return;
        }
    }
    alert('Personagem não encontrado.');
}

// Função para listar todos os personagens
function listarPersonagens() {
    const nomes = [];
    for (let i = 0; i < personagens.length; i++) {
        nomes.push(personagens[i].nome);
    }

    // Ordenar os nomes manualmente (algoritmo de bolha)
    for (let i = 0; i < nomes.length - 1; i++) {
        for (let j = i + 1; j < nomes.length; j++) {
            if (nomes[i] > nomes[j]) {
                const temp = nomes[i];
                nomes[i] = nomes[j];
                nomes[j] = temp;
            }
        }
    }

    alert('Personagens cadastrados: ' + nomes.join(', '));
}

// Função para verificar o status de um personagem
function statusPersonagem() {
    const nome = prompt('Digite o nome do personagem para verificar o status:');
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        alert('Status do Personagem:\n' +
              'Nome: ' + personagem.nome + '\n' +
              'Classe: ' + personagem.classe + '\n' +
              'Nível: ' + personagem.nivel + '\n' +
              'HP: ' + personagem.hp + '\n' +
              'Habilidades: ' + personagem.habilidades.join(', ') + '\n' +
              'Histórico de Ações: ' + personagem.historicoAcoes.join(', '));
    } else {
        alert('Personagem não encontrado.');
    }
}

// Função para realizar uma ação com um personagem
function realizarAcao() {
    const nome = prompt('Digite o nome do personagem para realizar uma ação:');
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        const acao = prompt('Digite a ação a ser realizada:');
        personagem.historicoAcoes[personagem.historicoAcoes.length] = acao;
        alert(personagem.nome + ' realizou a ação: ' + acao);
    } else {
        alert('Personagem não encontrado.');
    }
}

// Função principal do menu
function menu() {
    while (true) {
        const escolha = prompt(
            'Escolha uma opção:\n' +
            '1. Cadastrar Personagem\n' +
            '2. Buscar Personagem\n' +
            '3. Excluir Personagem\n' +
            '4. Listar Todos os Personagens\n' +
            '5. Verificar Status do Personagem\n' +
            '6. Realizar Ação\n' +
            '7. Sair'
        );

        if (escolha === '1') {
            cadastrarPersonagem();
        } else if (escolha === '2') {
            const nome = prompt('Digite o nome do personagem para buscar:');
            const personagem = buscarPersonagem(nome);
            if (personagem) {
                alert('Personagem encontrado: ' + JSON.stringify(personagem, null, 2));
            } else {
                alert('Personagem não encontrado.');
            }
        } else if (escolha === '3') {
            excluirPersonagem();
        } else if (escolha === '4') {
            listarPersonagens();
        } else if (escolha === '5') {
            statusPersonagem();
        } else if (escolha === '6') {
            realizarAcao();
        } else if (escolha === '7') {
            alert('Saindo...');
            break;
        } else {
            alert('Escolha inválida. Tente novamente.');
        }
    }
}

// Inicia o menu principal
menu();
