var pontos_jogador = 0;
var entrada = false;
var nome_jogador;

// Armazena todas as inputs em uma variável
var campos = document.getElementsByTagName('input');
// Cria uma lista de elementos vazia para armazenar os campos filtrados (nessa regra de regócio, campos filtrados = campos que não pertencem à classe "disabled")
var campos_filtrados = [];

/* Filtrando o vetor campos, descartando todos os que tiverem "disabled" no nome de sua classe */
//Percorrendo todos os itens do vetores
for (let i = 0; i < campos.length; i++) {
    // Se o campo relacionado tiver a classname diferente de "disabled", adicionar (push) esse campo à lista campos_filtrados
    if (campos[i].className != "disabled") {
        campos_filtrados.push(campos[i]);
    }
}

/* Agrupando em uma lista (boxes) todos os elementos que possuem a classe "box" */
var boxes = document.getElementsByClassName('box');
/* Definindo o 1° elemento da lista boxes com visibilidade: escondida*/
boxes[0].style.visibility = "hidden";
/* Definindo o 2° elemento da lista boxes com visibilidade: escondida*/
boxes[1].style.visibility = "hidden";

/*Atribuindo à div que possui os botões "Iniciar, Pausar e reiniciar" display: none*/
buttons_game.style.display = "none";
// Desabilitando os botões pausar e reiniciar
btn_reiniciar.disabled = true;
btn_pausar.disabled = true;

/*Executando a tela inicial*/
fnEntrada();

// Atribuindo mensagem de "boa sorte" ao usuário
good_luck.innerHTML = `Good luck, ${nome_jogador}`;
