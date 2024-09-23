//Trabalho 2, Luis Henrique

// Array para armazenar personagens
const personagens = [];
/*
 Função para cadastrar um novo personagem.
 Solicita informações ao usuário e cria um novo personagem.
 */
function cadastrarPersonagem() {
    // Solicita o nome do personagem
    const nome = prompt('Escolha um personagem:Frodo,Gandalf,Legolas,Gimli e Aragorn');
    // Solicita a classe do personagem
    const classe = prompt('Digite a classe do personagem:Mago,Hobbit,Elfo,Anão e Humano');
    // Solicita o nível do personagem e converte para número
    const nivel = Number(prompt('Digite o nível do personagem:'), 10);
    // Solicita os pontos de vida (HP) do personagem e converte para número
    const hp = Number(prompt('Digite os pontos de vida (HP) do personagem:'), 10);
    // Solicita a habilidade do personagem
    const habilidade = prompt('digite sua habilidade')
     // Cria um objeto para o personagem com os dados informados
    const personagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidade: habilidade,
        historicoAcoes: [] // Inicializa um array para histórico de ações
    };
    // Adiciona o personagem ao array de personagens
    personagens.push(personagem);
    // Exibe uma mensagem de sucesso
    alert('Personagem cadastrado com sucesso;).');
}

function buscarPersonagem(nome) {
    // Itera pelo array de personagens para encontrar o personagem correspondente
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            return personagens[i]; // Retorna o personagem encontrado
        }
    }
    return null; // Retorna null se não encontrar
}
/*
 Função para excluir um personagem.
 Solicita o nome do personagem e o remove do array, se encontrado.
 */
function excluirPersonagem() {
        // Solicita o nome do personagem a ser excluído
    const nome = prompt('Digite o nome do personagem a ser excluído:');
    // Encontra o índice do personagem no array
    const index = personagens.findIndex(p => p.nome === nome);
    // Verifica se o personagem foi encontrado
    if (index !== -1) {
         // Remove o personagem do array
        personagens.splice(index, 1);
        // Exibe uma mensagem de sucesso
        alert('Personagem excluído com sucesso;).');
    } else {
        // Mensagem caso o personagem não seja encontrado
        alert('Personagem não encontrado;).');
    }
}
/*
 Função para listar todos os personagens cadastrados.
 Exibe os nomes dos personagens em um alerta.
 */
function listarPersonagens() {
    // Inicializa uma string para a lista de personagens
    let lista = 'Personagens cadastrados;): ';
    // Itera pelo array e adiciona os nomes à lista
    for (let i = 0; i < personagens.length; i++) {
        lista += personagens[i].nome;
        if (i < personagens.length - 1) {
            lista += ', ';// Adiciona vírgula entre os nomes
        }
    }
    // Exibe a lista de personagens ou uma mensagem se não houver nenhum
    alert(lista);
}
/*
 Função para verificar o status de um personagem.
 Solicita o nome do personagem e exibe suas informações.
 */
function statusPersonagem() {
    // Solicita o nome do personagem para verificar o status
    const nome = prompt('Digite o nome do personagem para verificar o status:');
    // Busca o personagem pelo nome
    const personagem = buscarPersonagem(nome);
     // Verifica se o personagem foi encontrado
    if (personagem) {
        // Exibe as informações do personagem
        alert('Nome: ' + personagem.nome + ', Classe: ' + personagem.classe + ', Nível: ' + personagem.nivel + ', HP: ' + personagem.hp + ', Poder: ' + personagem.habilidade);
    } else {
        // Mensagem caso o personagem não seja encontrado
        alert('Personagem não encontrado;).');
    }
}
/*
 Função para realizar uma ação com um personagem.
 Adiciona a ação ao histórico do personagem.
 */
function realizarAcao() {
    // Solicita o nome do personagem para realizar uma ação
    const nome = prompt('Digite o nome do personagem para realizar uma ação:');
    // Busca o personagem pelo nome
    const personagem = buscarPersonagem(nome);
    // Verifica se o personagem foi encontrado

    if (personagem) {
        // Solicita a descrição da ação
        const acao = prompt('Digite a ação a ser realizada:');
         // Adiciona a ação ao histórico do personagem
        personagem.historicoAcoes.push(acao);
        // Exibe a ação realizada
        alert(personagem.nome + ' realizou a ação: ' + acao);
    } else {
        // Mensagem caso o personagem não seja encontrado
        alert('Personagem não encontrado;).');
    }
}
/*
 Função para registrar a derrota de um inimigo por um personagem.
 Adiciona a ação ao histórico do personagem.
 */
function derrotarInimigo() {
    // Solicita o nome do personagem que derrotou o inimigo
    const nome = prompt('Digite o nome do personagem que derrotou o inimigo:');
    // Busca o personagem pelo nome
    const personagem = buscarPersonagem(nome);
    // Verifica se o personagem foi encontrado
    if (personagem) {
        // Solicita o nome do inimigo derrotado
        const inimigo = prompt('Digite o nome do inimigo que foi derrotado:');
        // Cria a ação de derrota
        const acao = `${personagem.nome} aniquilou ${inimigo} com sua habilidade: ${personagem.habilidade}`;
        // Adiciona a ação ao histórico do personagem
        personagem.historicoAcoes.push(acao);
        // Exibe a ação realizada
        alert(acao);
    } else {
        // Mensagem caso o personagem não seja encontrado
        alert('Personagem não encontrado;).');
    }
}
/*
 Função que exibe o menu de opções para o usuário.
 Permite ao usuário interagir com o sistema.
 */
function menu() {
    // Loop que exibe o menu até que o usuário escolha sair
    while (true) {
         // Exibe as opções do menu e solicita a escolha do usuário
        const escolha = prompt(
            'Escolha uma opção: \n 1. Cadastrar Personagem \n2.  Buscar Personagem \n3. Excluir Personagem \n4. Listar Todos os Personagens \n5. Verificar Status do Personagem \n6. Realizar Ação \n7. Derrotar Inimigo \n8. Sair'
        );
          // Verifica a escolha do usuário e chama a função correspondente
        if (escolha === '1') {
            cadastrarPersonagem(); // Cadastra um novo personagem
        } else if (escolha === '2') {
            const nome = prompt('Digite o nome do personagem para buscar:');
            const personagem = buscarPersonagem(nome);
            // Exibe se o personagem foi encontrado ou não
            if (personagem) {
                alert('Personagem encontrado: ' + personagem.nome);
            } else {
                alert('Personagem não encontrado;).');
            }
        } else if (escolha === '3') {
            excluirPersonagem(); // Exclui um personagem
        } else if (escolha === '4') {
            listarPersonagens(); // Lista todos os personagens
        } else if (escolha === '5') {
            statusPersonagem(); // Verifica o status de um personagem
        } else if (escolha === '6') {
            realizarAcao();  // Realiza uma ação com um personagem
        } else if (escolha === '7') {
            derrotarInimigo();  // Registra a derrota de um inimigo
        } else if (escolha === '8') {
            // Mensagem de saída e quebra o loop
            alert('Saindo...');
            break;
        } else {
            //// Mensagem de erro para escolha inválida
            alert('Escolha inválida. Tente novamente;).');
        }
    }
}

//Inicia o menu

menu();

//Tambem não consegui fazer um sistema de ataque legal, voçê so escreve a ação do personagem e deu, não consegui botar a ação que ele fez nos status dele. 
//O Arthur tambem me deu umas ideias mostrando como ele fez o codigo dele, e acabei tentando usar algumas coisas.
//Usei findIndex usei esse para achar os personagens no array como eu vi no video,e usei o splice para remover personagem do array.
