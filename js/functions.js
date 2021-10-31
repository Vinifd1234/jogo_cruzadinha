/* Função para desabilitar os campos filtrados*/
function fnDesabilitarCampos() {
    for (var i = 0; i < campos_filtrados.length; i++) {
        campos_filtrados[i].disabled = true;
    }
}

/* Função para habilitar os campos filtrados*/

function fnHabilitarCampos() {
    if (palavras[0] == false & palavras[1] == false & palavras[2] == false & palavras[3] == false & palavras[4] == false & palavras[5] == false
        & palavras[6] == false & palavras[7] == false & palavras[8] == false & palavras[9] == false & palavras[10] == false & palavras[11] == false
        & palavras[12] == false & palavras[13] == false & palavras[14] == false & palavras[15] == false) {

        for (var i = 0; i < campos_filtrados.length; i++) {
            campos_filtrados[i].disabled = false;
        }
    } else {
        for (var i = 0; i < campos_filtrados.length; i++) {
            campos_filtrados[i].disabled = false;
        }
        if (palavras[0] == true) {
            row15col10.disabled = true;
            row16col10.disabled = true;
            row17col10.disabled = true;
        }

        if (palavras[1] == true) {
            row18col5.disabled = true;
            row18col6.disabled = true;
            row18col7.disabled = true;
        }

        if (palavras[2] == true) {
            row7col7.disabled = true;
            row7col8.disabled = true;
            row7col9.disabled = true;
            row7col10.disabled = true;
            row7col11.disabled = true;
            row7col12.disabled = true;
            row7col13.disabled = true;
            row7col14.disabled = true;
            row7col15.disabled = true;
            row7col16.disabled = true;
            row7col17.disabled = true;
            row7col18.disabled = true;
            row7col19.disabled = true;
        }

        if (palavras[3] == true) {
            row3col5.disabled = true;
            row3col6.disabled = true;
            row3col7.disabled = true;
        }

        if (palavras[4] == true) {
            row5col5.disabled = true;
            row5col6.disabled = true;
            row5col7.disabled = true;
        }

        if (palavras[5] == true) {
            row4col7.disabled = true;
            row4col8.disabled = true;
            row4col9.disabled = true;
            row4col10.disabled = true;
            row4col11.disabled = true;

        }

        if (palavras[6] == true) {
            row4col19.disabled = true;
            row5col19.disabled = true;
            row6col19.disabled = true;
            row7col19.disabled = true;
            row8col19.disabled = true;
        }

        if (palavras[7] == true) {
            row3col7.disabled = true;
            row4col7.disabled = true;
            row5col7.disabled = true;
            row6col7.disabled = true;
            row7col7.disabled = true;
            row8col7.disabled = true;
            row9col7.disabled = true;
            row10col7.disabled = true;
            row11col7.disabled = true;
            row12col7.disabled = true;
            row13col7.disabled = true;
            row14col7.disabled = true;
            row15col7.disabled = true;
            row16col7.disabled = true;
            row17col7.disabled = true;
            row18col7.disabled = true;

        }

        if (palavras[8] == true) {
            row1col6.disabled = true;
            row2col6.disabled = true;
            row3col6.disabled = true;

        }

        if (palavras[9] == true) {
            row11col12.disabled = true;
            row12col12.disabled = true;
        }

        if (palavras[10] == true) {
            row9col7.disabled = true;
            row9col8.disabled = true;
            row9col9.disabled = true;
            row9col10.disabled = true;
            row9col11.disabled = true;
            row9col12.disabled = true;
            row9col13.disabled = true;
            row9col15.disabled = true;
            row9col16.disabled = true;
            row9col17.disabled = true;
        }

        if (palavras[11] == true) {
            row9col7.disabled = true;
            row9col8.disabled = true;
            row9col9.disabled = true;
            row9col10.disabled = true;
            row9col11.disabled = true;
            row9col12.disabled = true;
            row9col13.disabled = true;
            row9col15.disabled = true;
            row9col16.disabled = true;
            row9col17.disabled = true;
        }

        if (palavras[12] == true) {
            row8col6.disabled = true;
            row8col7.disabled = true;

        }

        if (palavras[13] == true) {
            row6col10.disabled = true;
            row7col10.disabled = true;
        }

        if (palavras[14] == true) {
            row11col7.disabled = true;
            row11col8.disabled = true;
            row11col9.disabled = true;
            row11col10.disabled = true;
            row11col11.disabled = true;
            row11col12.disabled = true;
            row11col13.disabled = true;
            row11col14.disabled = true;
            row11col15.disabled = true;
        }

        if (palavras[15] == true) {
            row15col5.disabled = true;
            row15col6.disabled = true;
            row15col7.disabled = true;
            row15col8.disabled = true;
            row15col9.disabled = true;
            row15col10.disabled = true;
            row15col11.disabled = true;
            row15col12.disabled = true;
            row15col13.disabled = true;
        }


    }




}

/* Função para limpar todos os campos */
function fnLimparCampos() {
    for (var i = 0; i < campos_filtrados.length; i++) {

        campos_filtrados[i].value = "";
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

/* A lógica desse cronometro é simples, a partir do valor que estará setada nos minutos em segundos, definidos pela dificuldade.
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

    /* Também é rodado uma função para que todos os campos sejam liberados para o usuários*/
    fnHabilitarCampos()

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
    for (var i = 0; i < campos_filtrados.length; i++) {
        campos_filtrados[i].disabled = true;
    }

}

function fnReiniciar() {
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

    pontos.innerHTML = "";
    pontos_jogador = 0;

    let contador = 0;
    while (contador < palavras.length) {
        palavras[contador] = false;
        contador++;
    }

    fnLimparCampos();
    for (var i = 0; i < campos_filtrados.length; i++) {
        campos_filtrados[i].disabled = true;
    }


}

var palavras = [
    /*cpu: */false,
    /*ula: */false,
    /*registradores: */false,
    /*ram: */false,
    /*rom: */false,
    /*eprom: */false,
    /*flash: */false,
    /*memoria_de_massa: */false,
    /*dma: */false,
    /*cs: */false,
    /*addres_bus: */false,
    /*data_bus: */false,
    /*i5: */false,
    /*i7: */false,
    /*dual_core: */false,
    /*quad_core: */false
]


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

/*Aqui começam as verificações das respostas. 

Por mais extenso que seja, todas seguem a mesma lógica.
Primeiro, é capturado os valores das inputs relacionadas à localização da palavra. 
Segundo, em uma condicional é verificado se os valores digitados pelo usuário bate com a resposta certa.
Caso bata, exibe uma mensagem parabenizando e desabilita o campo.
 
Para exemplificar, comentarei a primeira verificação, porém, essa lógica pode ser aplicada à qualquer das funções de verificação
abaixo
*/
function fnVerificar_cpu() {
    // Primeiro, é capturado os valores relacionados à localização da palavra "CPU" no layout
    //A letra "C" corresponde a input localizada na linha 15, na coluna 10
    //A letra "P" corresponde a input localizada na linha 16, na coluna 10
    //A letra "U" corresponde a input localizada na linha 17, na coluna 10
    letter_row15col10 = row15col10.value;
    letter_row16col10 = row16col10.value;
    letter_row17col10 = row17col10.value;

    // Ao digitar algo em qualquer uma dessas inputs acima, será feita a validação abaixo para averiguar se o usuário acertou a palavra.
    // É feita a conversão para letra maíscula para facilitar a validação, sendo assim, caso o usuário tenha digitado, em ordem, C, P e U
    // Nas inputs corretas, a condição será verdadeira, sendo assim, entrando na estrutura condicionalk.
    if (letter_row15col10.toUpperCase() == "C" & letter_row16col10.toUpperCase() == "P" & letter_row17col10.toUpperCase() == "U") {
        // Após ter acertado, o programa desabilitará os campos correspondentes à palavra acertada.
        alert('Você acertou a palavra: CPU');
        row15col10.disabled = true;
        row16col10.disabled = true;
        row17col10.disabled = true;
        palavras[0] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_ula() {
    letter_row18col5 = row18col5.value;
    letter_row18col6 = row18col6.value;
    letter_row18col7 = row18col7.value;

    if (letter_row18col5.toUpperCase() == "U" & letter_row18col6.toUpperCase() == "L" & letter_row18col7.toUpperCase() == "A") {
        alert("Você acertou a palavra: ULA");
        row18col5.disabled = true;
        row18col6.disabled = true;
        row18col7.disabled = true;
        palavras[1] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_registradores() {
    letter_row7col7 = row7col7.value;
    letter_row7col8 = row7col8.value;
    letter_row7col9 = row7col9.value;
    letter_row7col10 = row7col10.value;
    letter_row7col11 = row7col11.value;
    letter_row7col12 = row7col12.value;
    letter_row7col13 = row7col13.value;
    letter_row7col14 = row7col14.value;
    letter_row7col15 = row7col15.value;
    letter_row7col16 = row7col16.value;
    letter_row7col17 = row7col17.value;
    letter_row7col18 = row7col18.value;
    letter_row7col19 = row7col19.value;

    if (letter_row7col7.toUpperCase() == "R" & letter_row7col8.toUpperCase() == "E" & letter_row7col9.toUpperCase() == "G" & letter_row7col10.toUpperCase() == "I"
        & letter_row7col11.toUpperCase() == "S" & letter_row7col12.toUpperCase() == "T" & letter_row7col13.toUpperCase() == "R" & letter_row7col14.toUpperCase() == "A"
        & letter_row7col15.toUpperCase() == "D" & letter_row7col16.toUpperCase() == "O" & letter_row7col17.toUpperCase() == "R" & letter_row7col18.toUpperCase() == "E" & letter_row7col19.toUpperCase() == "S") {
        alert('Você acertou a palavra: Registradores');
        row7col7.disabled = true;
        row7col8.disabled = true;
        row7col9.disabled = true;
        row7col10.disabled = true;
        row7col11.disabled = true;
        row7col12.disabled = true;
        row7col13.disabled = true;
        row7col14.disabled = true;
        row7col15.disabled = true;
        row7col16.disabled = true;
        row7col17.disabled = true;
        row7col18.disabled = true;
        row7col19.disabled = true;
        palavras[2] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_ram() {
    letter_row3col5 = row3col5.value;
    letter_row3col6 = row3col6.value;
    letter_row3col7 = row3col7.value;
    if (letter_row3col5.toUpperCase() == "R" & letter_row3col6.toUpperCase() == "A" & letter_row3col7.toUpperCase() == "M") {
        alert("Você acertou a palavra: RAM");
        row3col5.disabled = true;
        row3col6.disabled = true;
        row3col7.disabled = true;
        palavras[3] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_rom() {
    letter_row5col5 = row5col5.value;
    letter_row5col6 = row5col6.value;
    letter_row5col7 = row5col7.value;
    if (letter_row5col5.toUpperCase() == "R" & letter_row5col6.toUpperCase() == "O" & letter_row5col7.toUpperCase() == "M") {
        alert("Você acertou a palavra: ROM");
        row5col5.disabled = true;
        row5col6.disabled = true;
        row5col7.disabled = true;
        palavras[4] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_eprom() {
    letter_row4col7 = row4col7.value;
    letter_row4col8 = row4col8.value;
    letter_row4col9 = row4col9.value;
    letter_row4col10 = row4col10.value;
    letter_row4col11 = row4col11.value;

    if (letter_row4col7.toUpperCase() == "E" & letter_row4col8.toUpperCase() == "P" & letter_row4col9.toUpperCase() == "R" &
        letter_row4col10.toUpperCase() == "O" & letter_row4col11.toUpperCase() == "M") {
        row4col7.disabled = true;
        row4col8.disabled = true;
        row4col9.disabled = true;
        row4col10.disabled = true;
        row4col11.disabled = true;
        alert("Você acertou a palavra: Eprom");
        pontos.innerHTML = Number(pontos.innerHTML) + 1;
        pontos_jogador++;
        palavras[5] = true;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_flash() {
    letter_row4col19 = row4col19.value;
    letter_row5col19 = row5col19.value;
    letter_row6col19 = row6col19.value;
    letter_row7col19 = row7col19.value;
    letter_row8col19 = row8col19.value;

    if (letter_row4col19.toUpperCase() == "F" & letter_row5col19.toUpperCase() == "L" & letter_row6col19.toUpperCase() == "A" &
        letter_row7col19.toUpperCase() == "S" & letter_row8col19.toUpperCase() == "H") {
        alert("Você acertou a palavra: Flash");
        row4col19.disabled = true;
        row5col19.disabled = true;
        row6col19.disabled = true;
        row7col19.disabled = true;
        row8col19.disabled = true;
        palavras[6] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_memoria_de_massa() {
    letter_row3col7 = row3col7.value;
    letter_row4col7 = row4col7.value;
    letter_row5col7 = row5col7.value;
    letter_row6col7 = row6col7.value;
    letter_row7col7 = row7col7.value;
    letter_row8col7 = row8col7.value;
    letter_row9col7 = row9col7.value;
    letter_row10col7 = row10col7.value;
    letter_row11col7 = row11col7.value;
    letter_row12col7 = row12col7.value;
    letter_row13col7 = row13col7.value;
    letter_row14col7 = row14col7.value;
    letter_row15col7 = row15col7.value;
    letter_row16col7 = row16col7.value;
    letter_row17col7 = row17col7.value;
    letter_row18col7 = row18col7.value;

    if (letter_row3col7.toUpperCase() == "M" & letter_row4col7.toUpperCase() == "E" & letter_row5col7.toUpperCase() == "M" & letter_row6col7.toUpperCase() == "Ó" & letter_row7col7.toUpperCase() == "R" &
        letter_row8col7.toUpperCase() == "I" & letter_row9col7.toUpperCase() == "A" & letter_row11col7.toUpperCase() == "D" & letter_row12col7.toUpperCase() == "E" & letter_row14col7.toUpperCase() == "M" &
        letter_row15col7.toUpperCase() == "A" & letter_row16col7.toUpperCase() == "S" & letter_row17col7.toUpperCase() == "S" & letter_row18col7.toUpperCase() == "A") {
        alert("Você acertou a palavra: Memória de massa");
        row3col7.disabled = true;
        row4col7.disabled = true;
        row5col7.disabled = true;
        row6col7.disabled = true;
        row7col7.disabled = true;
        row8col7.disabled = true;
        row9col7.disabled = true;
        row10col7.disabled = true;
        row11col7.disabled = true;
        row12col7.disabled = true;
        row13col7.disabled = true;
        row14col7.disabled = true;
        row15col7.disabled = true;
        row16col7.disabled = true;
        row17col7.disabled = true;
        row18col7.disabled = true;
        palavras[7] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}



function fnVerificar_DMA() {

    letter_row1col6 = row1col6.value;
    letter_row2col6 = row2col6.value;
    letter_row3col6 = row3col6.value;
    if (letter_row1col6.toUpperCase() == "D" & letter_row2col6.toUpperCase() == "M" & letter_row3col6.toUpperCase() == "A") {
        alert("Você acertou a primeira palavra: DMA");

        row1col6.disabled = true;
        row2col6.disabled = true;
        row3col6.disabled = true;
        palavras[8] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_cs() {
    letter_row11col12 = row11col12.value;
    letter_row12col12 = row12col12.value;
    if (letter_row11col12.toUpperCase() == "C" & letter_row12col12.toUpperCase() == "S") {
        alert("Você acertou a palavra: CS");
        row11col12.disabled = true;
        row12col12.disabled = true;
        palavras[9] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_address_bus() {
    letter_row9col7 = row9col7.value;
    letter_row9col8 = row9col8.value;
    letter_row9col9 = row9col9.value;
    letter_row9col10 = row9col10.value;
    letter_row9col11 = row9col11.value;
    letter_row9col12 = row9col12.value;
    letter_row9col13 = row9col13.value;
    letter_row9col15 = row9col15.value;
    letter_row9col16 = row9col16.value;
    letter_row9col17 = row9col17.value;

    if (letter_row9col7.toUpperCase() == "A" & letter_row9col8.toUpperCase() == "D" & letter_row9col9.toUpperCase() == "D" & letter_row9col10.toUpperCase() == "R" &
        letter_row9col11.toUpperCase() == "E" & letter_row9col12.toUpperCase() == "S" & letter_row9col13.toUpperCase() == "S" & letter_row9col15.toUpperCase() == "B" &
        letter_row9col16.toUpperCase() == "U" & letter_row9col17.toUpperCase() == "S") {
        alert('Você acertou a palavra: adress bus');
        row9col7.disabled = true;
        row9col8.disabled = true;
        row9col9.disabled = true;
        row9col10.disabled = true;
        row9col11.disabled = true;
        row9col12.disabled = true;
        row9col13.disabled = true;
        row9col15.disabled = true;
        row9col16.disabled = true;
        row9col17.disabled = true;
        palavras[10] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_data_bus() {
    letter_row9col8 = row9col8.value;
    letter_row9col7 = row9col7.value;
    letter_row9col6 = row9col6.value;
    letter_row9col5 = row9col5.value;
    letter_row9col3 = row9col3.value;
    letter_row9col2 = row9col2.value;
    letter_row9col1 = row9col1.value;

    if (letter_row9col8.toUpperCase() == "D" & letter_row9col7.toUpperCase() == "A" & letter_row9col6.toUpperCase() == "T" & letter_row9col5.toUpperCase() == "A" &
        letter_row9col3.toUpperCase() == "B" & letter_row9col2.toUpperCase() == "U" & letter_row9col1.toUpperCase() == "S") {
        alert("Você acertou a palavra: Data bus");
        row9col8.disabled = true;
        row9col7.disabled = true;
        row9col6.disabled = true;
        row9col5.disabled = true;
        row9col3.disabled = true;
        row9col2.disabled = true;
        row9col1.disabled = true;
        palavras[11] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}

function fnVerificar_i5() {
    letter_row8col6 = row8col6.value;
    letter_row8col7 = row8col7.value;

    if (letter_row8col6 == "5" & letter_row8col7.toUpperCase() == "I") {
        alert("Você acertou a palavra: i5");
        row8col6.disabled = true;
        row8col7.disabled = true;
        palavras[12] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }
}


function fnVerificar_i7() {
    letter_row6col10 = row6col10.value;
    letter_row7col10 = row7col10.value;

    if (letter_row6col10 == "7" & letter_row7col10.toUpperCase() == "I") {
        alert("Você acertou a palavra: i7");
        row6col10.disabled = true;
        row7col10.disabled = true;
        palavras[13] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }

}



function fnVerificar_dualcore() {
    letter_row11col7 = row11col7.value;
    letter_row11col8 = row11col8.value;
    letter_row11col9 = row11col9.value;
    letter_row11col10 = row11col10.value;
    letter_row11col11 = row11col11.value;
    letter_row11col12 = row11col12.value;
    letter_row11col13 = row11col13.value;
    letter_row11col14 = row11col14.value;
    letter_row11col15 = row11col15.value;

    if (letter_row11col7.toUpperCase() == "D" & letter_row11col8.toUpperCase() == "U" & letter_row11col9.toUpperCase() == "A" & letter_row11col10.toUpperCase() == "L" &
        letter_row11col12.toUpperCase() == "C" & letter_row11col13.toUpperCase() == "O" & letter_row11col14.toUpperCase() == "R" & letter_row11col15.toUpperCase() == "E") {

        alert("Você acertou a palavra: Dual Core");
        row11col7.disabled = true;
        row11col8.disabled = true;
        row11col9.disabled = true;
        row11col10.disabled = true;
        row11col11.disabled = true;
        row11col12.disabled = true;
        row11col13.disabled = true;
        row11col14.disabled = true;
        row11col15.disabled = true;
        palavras[14] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }

}

function fnVerificar_quadcore() {
    letter_row15col5 = row15col5.value;
    letter_row15col6 = row15col6.value;
    letter_row15col7 = row15col7.value;
    letter_row15col8 = row15col8.value;
    letter_row15col10 = row15col10.value;
    letter_row15col11 = row15col11.value;
    letter_row15col12 = row15col12.value;
    letter_row15col13 = row15col13.value;

    if (letter_row15col5.toUpperCase() == "Q" & letter_row15col6.toUpperCase() == "U" & letter_row15col7.toUpperCase() == "A" & letter_row15col8.toUpperCase() == "D"
        & letter_row15col10.toUpperCase() == "C" & letter_row15col11.toUpperCase() == "O" & letter_row15col12.toUpperCase() == "R" & letter_row15col13.toUpperCase() == "E") {
        alert("Você acertou a palavra: Quad Core");

        row15col5.disabled = true;
        row15col6.disabled = true;
        row15col7.disabled = true;
        row15col8.disabled = true;
        row15col9.disabled = true;
        row15col10.disabled = true;
        row15col11.disabled = true;
        row15col12.disabled = true;
        row15col13.disabled = true;
        palavras[15] = true;
        pontos_jogador++;
        pontos.innerHTML = `Pontos: ${pontos_jogador}`;
    }

}

