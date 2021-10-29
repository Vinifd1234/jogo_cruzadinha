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

    row8col19.addEventListener('keyup', function (){
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


    /*Aqui começam as verificações das respostas. 

    Por mais extenso que seja, todas seguem a mesma lógica.
    Primeiro, é capturado os valores das inputs relacionadas à localização da palavra. 
    Segundo, em uma condicional é verificado se os valores digitados pelo usuário bate com a resposta certa.
    Caso bata, exibe uma mensagem parabenizando e desabilita o campo.
    
    Para exemplificar, comentarei a primeira verificação, porém, essa lógica pode ser aplicada à qualquer das funções de verificação
    abaixo
    */

    function fnVerificar_DMA() {
    // Primeiro, é capturado os valores relacionados à localização da palavra "DMA" no layout
    //A letra "D" corresponde a input localizada na linha 1, na coluna 6
    //A letra "M" corresponde a input localizada na linha 2, na coluna 6
    //A letra "A" corresponde a input localizada na linha 3, na coluna 6
        letter_row1col6 = row1col6.value;
        letter_row2col6 = row2col6.value;
        letter_row3col6 = row3col6.value;

        // Ao digitar algo em qualquer uma dessas inputs acima, será feita a validação abaixo para averiguar se o usuário acertou a palavra.
        // É feita a conversão para letra maíscula para facilitar a validação, sendo assim, caso o usuário tenha digitado, em ordem, D, M e A
        // Nas inputs corretas, a condição será verdadeira, sendo assim, entrando na estrutura condicionalk.
        if (letter_row1col6.toUpperCase() == "D" & letter_row2col6.toUpperCase() == "M" & letter_row3col6.toUpperCase() == "A") {
            alert("Você acertou a primeira palavra: DMA");
            // Após ter acertado, o programa desabilitará os campos correspondentes à palavra acertada.
            row1col6.disabled = true;
            row2col6.disabled = true;
            row3col6.disabled = true;
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
            pontos.innerHTML = Number(pontos.innerHTML) + 1;
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



    }

    function fnVerificar_eprom() {
        letter_row4col7 = row4col7.value;
        letter_row4col8 = row4col8.value;
        letter_row4col9 = row4col9.value;
        letter_row4col10 = row4col10.value;
        letter_row4col11 = row4col11.value;

        if (letter_row4col7.toUpperCase() == "E" & letter_row4col8.toUpperCase() == "P" & letter_row4col9.toUpperCase() == "R" &
            letter_row4col10.toUpperCase() == "O" & letter_row4col11.toUpperCase() == "M") {
            alert("Você acertou a palavra: Eprom");
            pontos.innerHTML = Number(pontos.innerHTML) + 1;
            row4col7.disabled = true;
            row4col8.disabled = true;
            row4col9.disabled = true;
            row4col10.disabled = true;
            row4col11.disabled = true;
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
        }

    }

    function fnVerificar_i7() {
        letter_row6col10 = row6col10.value;
        letter_row7col10 = row7col10.value;

        if (letter_row6col10 == "7" & letter_row7col10.toUpperCase() == "I") {
            alert("Você acertou a palavra: i7");
            row6col10.disabled = true;
            row7col10.disabled = true;
        }

    }

    function fnVerificar_i5() {
        letter_row8col6 = row8col6.value;
        letter_row8col7 = row8col7.value;

        if (letter_row8col6 == "5" & letter_row8col7.toUpperCase() == "I") {
            alert("Você acertou a palavra: i5");
            row8col6.disabled = true;
            row8col7.disabled = true;

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
        }

    }

    function fnVerificar_cpu() {
        letter_row15col10 = row15col10.value;
        letter_row16col10 = row16col10.value;
        letter_row17col10 = row17col10.value;

        if (letter_row15col10.toUpperCase() == "C" & letter_row16col10.toUpperCase() == "P" & letter_row17col10.toUpperCase() == "U") {
            alert('Você acertou a palavra: CPU');
            row15col10.disabled = true;
            row16col10.disabled = true;
            row17col10.disabled = true;
        }
    }

    function fnVerificar_cs() {
        letter_row11col12 = row11col12.value;
        letter_row12col12 = row12col12.value;
        if (letter_row11col12.toUpperCase() == "C" & letter_row12col12.toUpperCase() == "S") {
            alert("Você acertou a palavra: CS");
            row11col12.disabled = true;
            row12col12.disabled = true;
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
        }
    }