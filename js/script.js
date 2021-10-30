
var entrada = false;
var nome_jogador;

// Armazena todas as inputs em uma variável
var campos = document.getElementsByTagName('input');
// Cria uma lista de elementos vazia para armazenar os campos filtrados (nessa regra de regócio, campos filtrados = campos que não pertencem à classe "disabled")
var campos_filtrados = [];

/* Filtrando o vetor campos, descartando todos os que tiverem "disabled" no nome de sua classe */ 
//Percorrendo todos os itens do vetores
for(let i = 0; i < campos.length; i++){
    // Se o campo relacionado tiver a classname diferente de "disabled", adicionar (push) esse campo à lista campos_filtrados
    if(campos[i].className != "disabled"){
        campos_filtrados.push(campos[i]);
    }
}

/* Função para desabilitar os campos filtrados*/ 
function fnDesabilitarCampos(){
    for(var i = 0; i < campos_filtrados.length; i++){
        campos_filtrados[i].disabled = true;
    }
}

/* Função para habilitar os campos filtrados*/ 

function fnHabilitarCampos(){
    for(var i = 0; i < campos_filtrados.length; i++){
        campos_filtrados[i].disabled = false;
    }
}

/*
Obriga o usuário à colocar qualquer nome.
À pricípio, é criada uma variável com valor falsa, logo após é iniciado um
laço de repetição while, onde a condição à ser verificada é se a negação da variavel "entrada" é verdadeira.
Se entrada = false, logo !entrada = true, sendo assim, o while é executado 
A execução do while é composta por uma captura de dado, o nome do usuário. 

Caso o nome digitado pelo usuário seja diferente (!=) de "", ou seja, vazio, ou nome diferente
de nulo, há uma reatribuição 
na variável entrada para true. Ao voltar à condição do while: entrada = true, logo !entrada = false, sendo assim
o bloco while não é mais executado.

Caso o usuário não digite um nome, ou seja nome = "" ou null, a variável entrada continua false e consequentemente
o while será executado até o usuário digitar algo.
*/
function fnEntrada() {
    while (!entrada) {
        nome_jogador = prompt('Digite seu nome: ');

        if (nome_jogador != "" & nome_jogador != null) {
            entrada = true;
            fnDesabilitarCampos();
        }
    }
}

/*Executando a tela inicial*/
fnEntrada();

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
// Atribuindo mensagem de "boa sorte" ao usuário
good_luck.innerHTML = `Good luck, ${nome_jogador}`;





// Criação da lista das dicas, cada posição é a dica de respectiva dificuldade, ou seja, o primeiro item da dica do CPU, será equivalente a dica caso o usuário
// escolha a dificuldade fácil, a 2 caso escolha médio e a 3 caso escolha dificil
var cpu = ["Definição 1", "Definição 2", "Definição 3"];
var ula = ["Definição 1", "Definição 2", "Definição 3"];
var registradores = ["Definição 1", "Definição 2", "Definição 3"];
var RAM = ["Definição 1", "Definição 2", "Definição 3"];
var ROM = ["Definição 1", "Definição 2", "Definição 3"];
var Eprom = ["Definição 1", "Definição 2", "Definição 3"];
var Flash = ["Definição 1", "Definição 2", "Definição 3"];
var memoria_de_massa = ["Definição 1", "Definição 2", "Definição 3"];
var dma = ["Definição 1", "Definição 2", "Definição 3"];
var cs = ["Definição 1", "Definição 2", "Definição 3"];
var addres_bus = ["Definição 1", "Definição 2", "Definição 3"];
var data_bus = ["Definição 1", "Definição 2", "Definição 3"];
var i5 = ["Definição 1", "Definição 2", "Definição 3"];
var i7 = ["Definição 1", "Definição 2", "Definição 3"];
var dual_core = ["Definição 1", "Definição 2", "Definição 3"];
var quad_core = ["Definição 1", "Definição 2", "Definição 3"];




/* Aqui começa o cronometro */ 

var relogio;
var segundos;
var minutos;


function cronometro() {
    /* Caso a variável "segundos" e a "minutos" sejam menores que 10, concatenar elas com um 0 à esquerda,
    visto que são números inteiros, e números inteiros não possuem 0 à esquerda naturalmente*/
    if (segundos < 10) {
        if (minutos < 10) {
            clock.innerHTML = `0${minutos}:0${segundos}`;
            // Caso não sejam, não concatenar com 0
        } else {
            clock.innerHTML = `${minutos}:0${segundos}`;
        }
    } else {
        if (minutos < 10) {
            clock.innerHTML = `0${minutos}:${segundos}`;
        } else {
            clock.innerHTML = `${minutos}:${segundos}`;
        }
    }

    // o setTimeout executa uma função depois de um determinado tempo, dado em milissegundos
    relogio = setTimeout(function () {
        // Caso a variável segundos e a minutos sejam iguais à 0, pause o cronometro e de um alert, pois significa que o tempo acabou.
        if (segundos == 0 & minutos == 0) {
            alert('Tempo acabou!!!');
            fnPausar();
            // Se não, perguntar se segundos é menor do que 1, ou seja, 0 ou menor
        } else {
            if (segundos < 1) {
                // caso seja, voltar aos 60 segundos e diminuir 1 minuto.
                segundos = 60;
                minutos--;
            }
            // Diminui 1 segundo
            segundos--;
            // Executa de novo
            cronometro();
        }
    }, 1000);
}

/* A lógica desse cronometro é simples, a partir do valor que estará setada nos miinutos em segundos, definidos pela dificuldade.
A partir disso, a cada 1 segundo, o valor da variavel de segundos decai em 1 unidade, quando chegar em 0, após 60 vezes ou 30 vezes, é decrementado
1 unidade, isso até ambas variaveis valerem 0 e aí emitir o alerta que o tempo acabou e posteriormente ativar a função de pausa do cronometro  */


/* A função de iniciar o cronometro chama a função do cronometro, desabilita os botões "iniciar", "reiniciar e os botões de dificuldade", assim 
como exibe as dicas das palavras*/
function fnIniciar() {
    cronometro();
    btn_iniciar.disabled = true;
    btn_pausar.disabled = false;
    btn_reiniciar.disabled = true;
    btn_dificuldade1.disabled = true;
    btn_dificuldade2.disabled = true;
    btn_dificuldade3.disabled = true;

    boxes[0].style.visibility = "";
    boxes[1].style.visibility = "";

    
    
    /* Também é rodado um laço de repetição para que todos os campos sejam liberados para o usuários*/
    for(var i = 0; i < campos_filtrados.length; i++){
        campos_filtrados[i].disabled = false;
    }
}


/* A função de pausa, pausará o cronometro, utilizando um metódo (clearTimeout), e também habilita os botões reiniciar e iniciar, assim como
esconcendo as dicas das palavras */
function fnPausar() {
    clearTimeout(relogio);
    btn_reiniciar.disabled = false;
    btn_pausar.disabled = true;
    btn_iniciar.disabled = false;

    boxes[0].style.visibility = "hidden";
    boxes[1].style.visibility = "hidden";
    
    /* Também é rodado um laço de repetição para que todos os campos sejam liberados para o usuários*/
    for(var i = 0; i < campos_filtrados.length; i++){
        campos_filtrados[i].disabled = true;
    }

}

function fnReiniciar(){
    /* A função reiniciar habilita todas as configurações de inicio de página supracitadas */
    btn_dificuldade1.disabled = false;
    btn_dificuldade2.disabled = false;
    btn_dificuldade3.disabled = false;

    buttons_game.style.display = "none";
    btn_reiniciar.disabled = true;
    btn_pausar.disabled = true;

    //Além de zerar o cronometro
    clock.innerHTML = "00:00";

    boxes[0].style.visibility = "hidden";
    boxes[1].style.visibility = "hidden";

    minutos = Number(clock.innerHTML.substring(0, 2));
    segundos = Number(clock.innerHTML.substring(3));

    for(var i = 0; i < campos_filtrados.length; i++){
        campos_filtrados[i].disabled = true;
    }
}


/* A função de dificuldade espera um parametro definindo a dificuldade, para que assim sejam setados o tempos e as dicas respectivos */
function fnDificuldade(dificuldade) {
    // Faz aparecer a div de botões
    buttons_game.style.display = "flex";
    //Se o usuário clicou na dificuldade "facil", então o tempo será de 10 minutos e as dicas serão o primeiro item de cada lista (das dicas)
    if (dificuldade == 1) {
        clock.innerHTML = "10:00";
        minutos = Number(clock.innerHTML.substring(0, 2));
        segundos = Number(clock.innerHTML.substring(3));

        item1.innerHTML = cpu[0];
        item2.innerHTML = ula[0];
        item3.innerHTML = registradores[0];
        item4.innerHTML = RAM[0];
        item5.innerHTML = ROM[0];
        item6.innerHTML = Eprom[0];
        item7.innerHTML = Flash[0];
        item8.innerHTML = memoria_de_massa[0];
        item9.innerHTML = dma[0];
        item10.innerHTML = cs[0];
        item11.innerHTML = addres_bus[0];
        item12.innerHTML = data_bus[0];
        item13.innerHTML = i5[0];
        item14.innerHTML = i7[0];
        item15.innerHTML = dual_core[0];
        item16.innerHTML = quad_core[0];

    } //Se o usuário clicou na dificuldade "média", então o tempo será de 07 minutos e meio e as dicas serão o segundo item de cada lista (das dicas)
    else if (dificuldade == 2) {
        clock.innerHTML = "07:30";
        minutos = Number(clock.innerHTML.substring(0, 2));
        segundos = Number(clock.innerHTML.substring(3));
        item1.innerHTML = cpu[1];
        item2.innerHTML = ula[1];
        item3.innerHTML = registradores[1];
        item4.innerHTML = RAM[1];
        item5.innerHTML = ROM[1];
        item6.innerHTML = Eprom[1];
        item7.innerHTML = Flash[1];
        item8.innerHTML = memoria_de_massa[1];
        item9.innerHTML = dma[1];
        item10.innerHTML = cs[1];
        item11.innerHTML = addres_bus[1];
        item12.innerHTML = data_bus[1];
        item13.innerHTML = i5[1];
        item14.innerHTML = i7[1];
        item15.innerHTML = dual_core[1];
        item16.innerHTML = quad_core[1];
    } // Se o usuário não escolheu nem a fácil, nem a média, então terá escolhido a dificil, logo terá 5 minutos para resolver e as dicas correspondentes ao terceiro item de cada lista (das dicas)
     else {
        clock.innerHTML = "05:00";
        minutos = Number(clock.innerHTML.substring(0, 2));
        segundos = Number(clock.innerHTML.substring(3));
        item1.innerHTML = cpu[2];
        item2.innerHTML = ula[2];
        item3.innerHTML = registradores[2];
        item4.innerHTML = RAM[2];
        item5.innerHTML = ROM[2];
        item6.innerHTML = Eprom[2];
        item7.innerHTML = Flash[2];
        item8.innerHTML = memoria_de_massa[2];
        item9.innerHTML = dma[2];
        item10.innerHTML = cs[2];
        item11.innerHTML = addres_bus[2];
        item12.innerHTML = data_bus[2];
        item13.innerHTML = i5[2];
        item14.innerHTML = i7[2];
        item15.innerHTML = dual_core[2];
        item16.innerHTML = quad_core[2];
    }
}

