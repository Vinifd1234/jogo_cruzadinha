
/*Executando a tela inicial*/
fnEntrada();

/* A função de iniciar o cronometro chama a função do cronometro, desabilita os botões "iniciar", "reiniciar e os botões de dificuldade", assim 
como exibe as dicas das palavras*/
function fnIniciar() {
    cronometro();
    fnBtnIniciar(0);
    fnBtnPausar(1);
    fnBtnReiniciar(0);
    fnBtnsDificuldade(0);
    fnDicas(1);
    fnHabilitarCampos();
    fnEspacos();
}


/* A função de pausa, pausará o cronometro, utilizando um metódo (clearTimeout), e também habilita os botões reiniciar e iniciar, assim como
esconcendo as dicas das palavras */
function fnPausar() {
    clearTimeout(relogio);
    fnBtnReiniciar(1);
    fnBtnPausar(0);
    fnBtnIniciar(1);
    fnDicas(0);
    fnDesabilitarCampos();
}

function fnReiniciar() {

    fnBtnsDificuldade(1);
    buttons_game.style.display = "none";
    fnBtnReiniciar(0);
    fnBtnPausar(0);
    fnBtnIniciar(1);
    fnDicas(0);

    //Além de zerar o cronometro
    clock.innerHTML = "00:00";
    minutos = Number(clock.innerHTML.substring(0, 2));
    segundos = Number(clock.innerHTML.substring(3));

    // Zerando a pontuação
    pontos.innerHTML = "";
    pontos_jogador = 0;

    /* Zerando as respostas do usuário */
    let contador = 0;
    while (contador < palavras.length) {
        palavras[contador] = false;
        contador++;
    }

    fnLimparCampos();
    fnDesabilitarCampos();
    fnEspacos();
}


