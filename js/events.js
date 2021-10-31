/*Definição das váriaveis.

    Essas variáveis estão de acordo com a linha (row) e coluna (col) respectiva no layout.
    Por exemplo, a váriavel "letter_row1col6 armazenará o conteúdo (letra) da input que se localiza
    na 1° linha, na 6° coluna."
    
    Organizado em ordem crescente, por row (começa na row 1 e vai até a última row)*/

var letter_row1col6;

var letter_row2col6;

var letter_row3col5;
var letter_row3col6;
var letter_row3col7;

var letter_row4col7;
var letter_row4col8;
var letter_row4col9;
var letter_row4col10;
var letter_row4col11;
var letter_row4col19;

var letter_row5col5;
var letter_row5col6;
var letter_row5col7;
var letter_row5col19;

var letter_row6col6;
var letter_row6col9;
var letter_row6col19;

var letter_row7col7;
var letter_row7col8;
var letter_row7col9;
var letter_row7col10;
var letter_row7col11
var letter_row7col12;
var letter_row7col13;
var letter_row7col14;
var letter_row7col15;
var letter_row7col16;
var letter_row7col17;
var letter_row7col18;
var letter_row7col19;

var letter_row8col6;
var letter_row8col7;
var letter_row8col19;

var letter_row9col1;
var letter_row9col2;
var letter_row9col3;
var letter_row9col4;
var letter_row9col5;
var letter_row9col6;
var letter_row9col7;
var letter_row9col8;
var letter_row9col9;
var letter_row9col10;
var letter_row9col11;
var letter_row9col12;
var letter_row9col13;
var letter_row9col14;
var letter_row9col15;
var letter_row9col16;
var letter_row9col17;

var letter_row10col7;

var letter_row11col7;
var letter_row11col8;
var letter_row11col9;
var letter_row11col10;
var letter_row11col11;
var letter_row11col12;
var letter_row11col13;
var letter_row11col14;
var letter_row11col15;

var letter_row12col7;
var letter_row12col12;

var letter_row13col7;

var letter_row14col7;

var letter_row15col5;
var letter_row15col6;
var letter_row15col7;
var letter_row15col8;
var letter_row15col9;

var letter_row16col7;
var letter_row16col10;

var letter_row17col7;
var letter_row17col10;

var letter_row18col5;
var letter_row18col6;
var letter_row18col7;



/* Adição dos eventos aos elementos via JavaScript.
A função "addEventListener" adiciona um evento a um elemento HTML, no caso desse exemplo,
será adicionado à cada input o evento 'keyup' (após a tecla digitada "subir"), e logo após, uma função é executada.
No caso, após o evento disparar, a função chamará a função de validação. */


/* Verificações da palavra "DMA"*/

row1col6.addEventListener('keyup', function () {
    fnVerificar_DMA();
});

row2col6.addEventListener('keyup', function () {
    fnVerificar_DMA();
});

row3col6.addEventListener('keyup', function () {
    fnVerificar_DMA();
});

/* Verificações da palavra "RAM"*/

row3col5.addEventListener('keyup', function () {
    fnVerificar_ram();
});
row3col6.addEventListener('keyup', function () {
    fnVerificar_ram();
});
row3col7.addEventListener('keyup', function () {
    fnVerificar_ram();
});


/* Verificações palavra: "Memória de massa"*/
row3col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row4col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row5col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row6col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row7col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row8col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row9col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});


row11col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row12col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});


row14col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row15col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row16col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row17col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

row18col7.addEventListener('keyup', function () {
    fnVerificar_memoria_de_massa()
});

/*Verificações da palavra: "Flash"*/

row4col19.addEventListener('keyup', function () {
    fnVerificar_flash();
});

row5col19.addEventListener('keyup', function () {
    fnVerificar_flash();
});

row6col19.addEventListener('keyup', function () {
    fnVerificar_flash();
});

row7col19.addEventListener('keyup', function () {
    fnVerificar_flash();
});

row8col19.addEventListener('keyup', function () {
    fnVerificar_flash();
});

/* Verificaçoes da palavra: "ROM" */


row5col5.addEventListener('keyup', function () {
    fnVerificar_rom();
});
row5col6.addEventListener('keyup', function () {
    fnVerificar_rom();
});
row5col7.addEventListener('keyup', function () {
    fnVerificar_rom();
});


/* Verificações da palavra: "i7"*/

row6col10.addEventListener('keyup', function () {
    fnVerificar_i7();
});



row7col10.addEventListener('keyup', function () {
    fnVerificar_i7();
});

/* Verificações da palavra: "Registradores"*/

row7col7.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col8.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col9.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col10.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col11.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col12.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col13.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col14.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col15.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col16.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col17.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col18.addEventListener('keyup', function () {
    fnVerificar_registradores();
});

row7col19.addEventListener('keyup', function () {
    fnVerificar_registradores();
});




/* Verificações da palavra i5 */
row8col6.addEventListener('keyup', function () {
    fnVerificar_i5();
});

row8col7.addEventListener('keyup', function () {
    fnVerificar_i5();
});


/* Verificações da palavra: "Address bus"*/

row9col7.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col8.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col9.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col10.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col11.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col12.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col13.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col15.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col16.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});


row9col17.addEventListener('keyup', function () {
    fnVerificar_address_bus();
});

/*Verificações da palavra: data bus*/

row9col8.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col7.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col6.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col5.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col3.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col2.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});

row9col1.addEventListener('keyup', function () {
    fnVerificar_data_bus();
});


/* Verificações da palavra: "Dual core"*/
row11col7.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col8.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col9.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col10.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col12.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col13.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col14.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

row11col15.addEventListener('keyup', function () {
    fnVerificar_dualcore();
});

/* Verificações da palavra: "CS"*/

row11col12.addEventListener('keyup', function () {
    fnVerificar_cs();
});

row12col12.addEventListener('keyup', function () {
    fnVerificar_cs();
});

/* Verificações da palavra: "Quad Core"*/

row15col5.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col6.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col7.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col8.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col10.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col11.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col12.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

row15col13.addEventListener('keyup', function () {
    fnVerificar_quadcore();
});

/* Verificaçoes da palavra: "CPU"*/

row15col10.addEventListener('keyup', function () {
    fnVerificar_cpu();
});

row16col10.addEventListener('keyup', function () {
    fnVerificar_cpu();
});

row17col10.addEventListener('keyup', function () {
    fnVerificar_cpu();
});

/* Atribuições de ventos da palavra: "ULA" */

row18col5.addEventListener('keyup', function () {
    fnVerificar_ula();
});

row18col6.addEventListener('keyup', function () {
    fnVerificar_ula();

});

row18col7.addEventListener('keyup', function () {
    fnVerificar_ula();

});

/* Atribuições de ventos da palavra: "eprom" */

row4col7.addEventListener('keyup', function () {
    fnVerificar_eprom();
});

row4col8.addEventListener('keyup', function () {
    fnVerificar_eprom();
});

row4col9.addEventListener('keyup', function () {
    fnVerificar_eprom();
});

row4col10.addEventListener('keyup', function () {
    fnVerificar_eprom();
});

row4col11.addEventListener('keyup', function () {
    fnVerificar_eprom();
});



