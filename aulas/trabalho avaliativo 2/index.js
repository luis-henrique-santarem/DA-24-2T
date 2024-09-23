//Trabalho 2,  eu


const personagens = [];

function cadastrarPersonagem() {
    const nome = prompt('Escolha um personagem:Frodo,Gandalf,Legolas,Gimli e Aragorn');
    const classe = prompt('Digite a classe do personagem:Mago,Hobbit,Elfo,Anão e humano');
    const nivel = Number(prompt('Digite o nível do personagem:'), 10);
    const hp = Number(prompt('Digite os pontos de vida (HP) do personagem:'), 10);
    const poder = prompt('digite seu poder')
    const personagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        poder: poder,
        historicoAcoes: []
    };

    personagens.push(personagem);
    alert('Personagem cadastrado com sucesso;).');
}

function buscarPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            return personagens[i];
        }
    }
    return null;
}

function excluirPersonagem() {
    const nome = prompt('Digite o nome do personagem a ser excluído:');
    const index = personagens.findIndex(p => p.nome === nome);
    if (index !== -1) {
        personagens.splice(index, 1);
        alert('Personagem excluído com sucesso;).');
    } else {
        alert('Personagem não encontrado;).');
    }
}

function listarPersonagens() {
    let lista = 'Personagens cadastrados;): ';
    for (let i = 0; i < personagens.length; i++) {
        lista += personagens[i].nome;
        if (i < personagens.length - 1) {
            lista += ', ';
        }
    }
    alert(lista);
}

function statusPersonagem() {
    const nome = prompt('Digite o nome do personagem para verificar o status:');
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        alert('Nome: ' + personagem.nome + ', Classe: ' + personagem.classe + ', Nível: ' + personagem.nivel + ', HP: ' + personagem.hp + ', Poder: ' + personagem.poder);
    } else {
        alert('Personagem não encontrado;).');
    }
}

function realizarAcao() {
    const nome = prompt('Digite o nome do personagem para realizar uma ação:');
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        const acao = prompt('Digite a ação a ser realizada:');
        personagem.historicoAcoes.push(acao);
        alert(personagem.nome + ' realizou a ação: ' + acao);
    } else {
        alert('Personagem não encontrado;).');
    }
}

function derrotarInimigo() {
    const nome = prompt('Digite o nome do personagem que derrotou o inimigo:');
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        const inimigo = prompt('Digite o nome do inimigo que foi derrotado:');
        const acao = `${personagem.nome} derrotou ${inimigo}`;
        personagem.historicoAcoes.push(acao);
        alert(acao);
    } else {
        alert('Personagem não encontrado;).');
    }
}

function menu() {
    while (true) {
        const escolha = prompt(
            'Escolha uma opção: 1. Cadastrar Personagem 2. Buscar Personagem 3. Excluir Personagem 4. Listar Todos os Personagens 5. Verificar Status do Personagem 6. Realizar Ação 7. Derrotar Inimigo 8. Sair'
        );

        if (escolha === '1') {
            cadastrarPersonagem();
        } else if (escolha === '2') {
            const nome = prompt('Digite o nome do personagem para buscar:');
            const personagem = buscarPersonagem(nome);
            if (personagem) {
                alert('Personagem encontrado: ' + personagem.nome);
            } else {
                alert('Personagem não encontrado;).');
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
            derrotarInimigo(); 
        } else if (escolha === '8') {
            alert('Saindo...');
            break;
        } else {
            alert('Escolha inválida. Tente novamente;).');
        }
    }
}

menu();


//Olhei alguns videos para ver não sei se fico certo, fiquei um pouco encomodado com a caixa de mensagem com a escrita tudo junto so que não sei fazer ela ficar bonitinha.
//Tambem não consegui fazer um sistema de ataque legal, voçê so escreve a ação do personagem e deu, não consegui botar a ação que ele fez nos status dele. 
//O Arthur tambem me deu umas ideias mostrando como ele fez o codigo dele, e acabei tentando usar algumas coisas.
//Usei findIndex usei esse para achar os personagens no array como eu vi no video,e usei o splice para remover personagem do array.
