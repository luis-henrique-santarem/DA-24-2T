
/*
Luis Hnerique Pedroso Santarem


OBS: Não consegui fazer tudo o que o senhor queria, porque não tenho Pc em casa então tive que fazer tudo correndo pra entregar hoje,
 espero que goste de como ficou, e também espero que eu não rode nessa matéria kkkk, muito obrigado sor, desde já desejo um feliz dia do professor, 
 espero que você goste do bulbasaur e o snorlax que eu desenhei na cartinha pro senhor.
*/
let inventario = new Array(10).fill(null); 

let inimigos = [
    { tipo: "zumbi", vida: 50, dano: 10 }, 
    { tipo: "boss", vida: 150, dano: 20 } 
];

let vidaJogador = 100; 

function adicionarItem(item) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i] === null) {
            inventario[i] = item;
            alert("Item adicionado: " + item);
            return;
        }
    }
    alert("Inventário cheio! Descarte um item.");
}

function removerItem(index) {
    if (index >= 0 && index < inventario.length) {
        if (inventario[index] !== null) {
            inventario[index] = null;
            alert("Item removido.");
        } else {
            alert("Slot vazio.");
        }
    } else {
        alert("Índice inválido.");
    }
}

function mostrarInventario() {
    let items = "Inventário:\n";
    for (let i = 0; i < inventario.length; i++) {
        items += `${i}: ${inventario[i] !== null ? inventario[i] : "vazio"}\n`;
    }
    alert(items);
}

function atacar(inimigoIndex, dano) {
    let inimigo = inimigos[inimigoIndex];
    if (inimigo) {
        inimigo.vida -= dano;
        alert(inimigo.tipo + " sofreu " + dano + " de dano.");
        if (inimigo.vida <= 0) {
            alert(inimigo.tipo + " foi eliminado!");
            inimigos.splice(inimigoIndex, 1);
        } else {
            
            vidaJogador -= inimigo.dano;
            alert("O " + inimigo.tipo + " atacou! Você sofreu " + inimigo.dano + " de dano. Vida restante: " + vidaJogador);
            if (vidaJogador <= 0) {
                alert("Você foi derrotado!");
                
            }
        }
    } else {
        alert("Inimigo não encontrado.");
    }
}

function mostrarInimigos() {
    let infoInimigos = "Inimigos:\n";
    for (let i = 0; i < inimigos.length; i++) {
        infoInimigos += `${i}: ${inimigos[i].tipo} – Vida: ${inimigos[i].vida}\n`;
    }
    alert(infoInimigos);
}

function salvarJogo() {
    
    alert("Jogo salvo!");
}

function carregarJogo() {
    
    alert("Jogo carregado!");
}

function curar(quantidade) {
    if (quantidade > 0) {
        vidaJogador += quantidade;
        alert("Você curou " + quantidade + " de vida. Vida atual: " + vidaJogador);
    } else {
        alert("A quantidade de cura deve ser maior que zero.");
    }
}

function menuPrincipal() {
    while (true) {
        let escolha = prompt("Escolha uma opção:\n1. Adicionar item\n2. Remover item\n3. Mostrar inventário\n4. Atacar inimigo\n5. Mostrar inimigos\n6. Salvar jogo\n7. Carregar jogo\n8. Curar\n0. Sair");

        if (escolha === "0") {
            alert("Saindo do jogo...");
            break;
        }

        switch (escolha) {
            case "1":
                let item = prompt("Digite o nome do item:");
                if (item) {
                    adicionarItem(item);
                } else {
                    alert("Nome do item não pode ser vazio.");
                }
                break;
            case "2":
                let indexRemover = Number(prompt("Digite o índice do item a remover (0-9):"));
                if (indexRemover >= 0) {
                    removerItem(indexRemover);
                } else {
                    alert("Índice inválido.");
                }
                break;
            case "3":
                mostrarInventario();
                break;
            case "4":
                let inimigoIndex = Number(prompt("Digite o índice do inimigo a atacar (0 ou 1):"));
                if (inimigoIndex >= 0) {
                    let dano = Number(prompt("Digite o dano a ser causado:"));
                    if (dano > 0) {
                        atacar(inimigoIndex, dano);
                    } else {
                        alert("Dano deve ser maior que zero.");
                    }
                } else {
                    alert("Índice inválido.");
                }
                break;
            case "5":
                mostrarInimigos();
                break;
            case "6":
                salvarJogo();
                break;
            case "7":
                carregarJogo();
                break;
            case "8":
                let quantidadeCura = Number(prompt("Digite a quantidade de vida para curar:"));
                curar(quantidadeCura);
                break;
            default:
                alert("Opção inválida.");
        }
    }
}


menuPrincipal();

 
/*
              RELATORIO FINAL 

1. Justificativa da escolha das estruturas de dados

Optou-se por *matrizes (arrays)* para o inventário devido ao seu tamanho fixo (10 itens), o que permite acesso rápido e fácil gerenciamento de itens.
 Cada slot é diretamente acessível, facilitando operações de adição e remoção. Para os *inimigos, utilizou-se uma **lista de objetos*, 
 que possibilita armazenar múltiplos atributos (tipo, vida, dano) e simplifica a iteração e manipulação durante o combate.

 2. Descrição dos algoritmos implementados e das entradas/saídas testadas

  -*Adicionar Item*: Adiciona um item ao inventário.
  - *Entrada*: Nome do item (string).
  - *Saída*: Mensagem de sucesso ou erro (inventário cheio).

-*Remover Item*: Remove um item de um índice especificado.
  - *Entrada*: Índice (número).
  - *Saída*: Mensagem de sucesso ou erro (índice inválido).

-*Mostrar Inventário*: Exibe todos os itens.
  - *Entrada*: Nenhuma.
  - *Saída*: Lista dos itens no inventário.

-*Atacar Inimigo*: Causa dano ao inimigo e recebe contra-ataque.
  - *Entrada*: Índice do inimigo e dano (número).
  - *Saída*: Mensagens sobre dano causado e vida restante.

-*Mostrar Inimigos*: Exibe os inimigos ativos.
  - *Entrada*: Nenhuma.
  - *Saída*: Lista dos inimigos e suas vidas.

-*Curar*:  Recupera vida do jogador.
Entrada: Quantidade de vida a ser curada.
Saída: Mensagem sobre a cura realizada.

3.Prints dos resultados dos testes.
Testes Realizados:


Adicionando e removendo itens do inventário.
Atacando inimigos e verificando a atualização das vidas.
Usando a cura e observando as mudanças na vida do jogador.
Exibindo listas de inimigos e itens no inventário.

Ao adicionar itens, mensagens de sucesso apareciam, e ao tentar adicionar quando o inventário estava cheio, uma mensagem de erro era mostrada.
Ao remover itens, o slot correspondente se tornava "vazio", e ao tentar remover de um slot vazio, uma mensagem de erro era exibida.
Ao atacar, o dano era corretamente subtraído da vida do inimigo, e as mensagens indicavam se o inimigo foi derrotado ou se ele atacou o jogador.
A cura corretamente aumentava a vida do jogador, com a confirmação da quantidade curada.

4. Reflexão sobre melhorias possíveis

Poderia adicionar uma função de missões
Poderia adicionar um sistema de levels
Poderia fazer um sistema de juntar item como as ervas, não sei se tem como fazer, mas seria muit legal

Consideraçãoes finais:

Olhei alguns vídeos para tentar diminuir o código,
 não me diverti tanto fazendo porque fiquei ansioso por estar em recuperação mas pra alguém que até um pouco tempo atrás não sabia ligar direito um computador tá bom kkkk,
  novamente espero que goste do trabalho e um ótimo final de semana e também um ótimo feriado.

  */
