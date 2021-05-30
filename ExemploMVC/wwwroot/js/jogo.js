
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogar(jogador) {

    valor = valorAleatorio();
    valorAnterior = document.getElementById("jogador" + jogador).innerHTML;
    soma = parseInt(valorAnterior) + parseInt(valor);
    var cartas = document.getElementById("cartas" + jogador);

    $(cartas).attr("src", '/images/' + valor + '.png');
    document.getElementById("jogador" + jogador).innerHTML = parseInt(valorAnterior) + parseInt(valor);

    btn_jogar = document.getElementById("btn_jogador_" + jogador);

    if (soma > 21) {
        parar(jogador);
        //console.log('Jogador'+jogador+' : '+soma);
    }
}


function parar(jogador) {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    if (jogador == '1') {
        $(btn_jogador1).attr('disabled', 'disabled');
        $(btn_parar1).attr('disabled', 'disabled');
        $(btn_jogador2).removeAttr('disabled');
        $(btn_parar2).removeAttr('disabled');
    } else {
        $(btn_jogador2).attr('disabled', 'disabled');
        $(btn_parar2).attr('disabled', 'disabled');
        // $(btn_jogador1).removeAttr('disabled');
        // $(btn_parar1).removeAttr('disabled');
    }

    var pts_jogador1 = parseInt(document.getElementById("jogador1").innerHTML);
    var pts_jogador2 = parseInt(document.getElementById("jogador2").innerHTML);
    //console.log(pts_jogador1 +' x ' + pts_jogador2);
    if ((pts_jogador1 > 0) && (pts_jogador2 > 0)) {
        //iniciaram o jogo e ja tem pontos
        if ((pts_jogador1 <= 21) && (pts_jogador2 > 21)) {
            //jogador 1 fez 21 e ganhou
            //console.log('1 - jogador 1 fez abaixo de 21 e ganhou');
            definirVitoria('1')
        } else if ((pts_jogador2 <= 21) && (pts_jogador1 > 21)) {
            //jogador 2 fez 21 e ganhou
            //console.log('2-jogador 2 fez abaixo de 21 e ganhou');
            definirVitoria('2');
        } else if ((pts_jogador1 == 21) && (pts_jogador2 == 21)) {
            //empate em 21 pontos
            //console.log('3-empate em 21 pontos');
            definirVitoria('0');
        } else if ((pts_jogador1 > 21) && (pts_jogador1 < pts_jogador2)) {
            //jogador 1 ganhou apesar de fazer mais do que 21
            //console.log('4-jogador 1 ganhou apesar de fazer mais do que 21');
            definirVitoria('1');
        } else if ((pts_jogador1 > 21) && (pts_jogador1 = pts_jogador2)) {
            //jogador 2 ganhou apesar de fazer mais do que 21
            definirVitoria('0');
        } else if (((pts_jogador1 > 21) && (pts_jogador2 > 21)) && (pts_jogador1 == pts_jogador2)) {
            //empate acima de 21 pontos
            //console.log('5-empate em 21 pontos');
            definirVitoria('0');
        } else if ((pts_jogador2 <= 21) && (pts_jogador1 <= 21)) {
            if (pts_jogador1 == pts_jogador2) {
                //empate abaixo de 21
                //console.log('6-ambos abaixo de 21 empate');
                definirVitoria('0');
            } else if ((pts_jogador1 > pts_jogador2)) {
                //jogador 1 fez abaixo de 21 e ganhou
                //console.log('7-ambos abaixo de 21 e jogador 1 ganhou');
                definirVitoria('1');
            } else if ((pts_jogador1 < pts_jogador2)) {
                //jogador 2 fez abaixo de 21 e ganhou
                //console.log('8-ambos abaixo de 21 e jogador 2 ganhou');
                definirVitoria('0');
            } else {
                //console.log('11-hein');

            }
        } else {
            //console.log('9-ops...');
        }
    } else {
        //console.log('j1: '+pts_jogador1);
        //console.log('j2: '+pts_jogador2);
        //console.log('0-Todos jogadores precisam jogar ao menos uma carta');
    }

}

function definirVitoria(jogador) {
    if (jogador == '0') {
        //empate
        document.getElementById("resultado").innerHTML = '<< empate >>';
        document.getElementById("cartas1").style.border = '3px  solid #ffd700';
        document.getElementById("cartas2").style.border = '3px  solid #ffd700';

        total = document.getElementById("placar_jogador1").innerHTML;
        document.getElementById("placar_jogador1").innerHTML = parseInt(total) + 1;
        total = document.getElementById("placar_jogador2").innerHTML;
        document.getElementById("placar_jogador2").innerHTML = parseInt(total) + 1;

    } else {
        nome_jogador1 = document.getElementById("nome_jogador1").innerHTML;
        nome_jogador2 = document.getElementById("nome_jogador2").innerHTML;
        if (jogador == '1') {
            texto = '<< ' + nome_jogador1 +' venceu';
            //console.log (texto);
        } else if (jogador == '2') {
            texto = nome_jogador2 + ' venceu >>';
            //console.log (texto);
        }
        total = document.getElementById("placar_jogador" + jogador).innerHTML;
        document.getElementById("placar_jogador" + jogador).innerHTML = parseInt(total) + 1;

        document.getElementById("resultado").innerHTML = texto;
        document.getElementById("cartas" + jogador).style.border = '3px  solid #ffd700';
    }
}
function iniciar() {
    if (document.getElementById("btn_iniciar").innerHTML == 'Reiniciar jogo') {
        if (!confirm("Existe um jogo em andamento. Deseja reiniciar ?")) {
            return false;
        }

    }
    $('#btn_reiniciar').removeAttr('disabled');

    document.getElementById("btn_iniciar").innerHTML = 'Reiniciar jogo';
    var nome_jogador1 = prompt("Digite o nome do jogador 1:", "Jogador 1");
    var nome_jogador2 = prompt("Digite o nome do jogador 2:", "Jogador 2");

    document.getElementById("nome_jogador1").innerHTML = nome_jogador1;
    document.getElementById("nome_jogador2").innerHTML = nome_jogador2;

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    document.getElementById("jogador2").innerHTML = '0';

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
    document.getElementById("jogador1").innerHTML = '0';

    document.getElementById("resultado").innerHTML = '';
    document.getElementById("cartas1").style.border = 'none';
    document.getElementById("cartas2").style.border = 'none';

    document.getElementById("placar_jogador1").innerHTML = '0';
    document.getElementById("placar_jogador2").innerHTML = '0';
}
function iniciarPartida() {
    document.getElementById("btn_iniciar").innerHTML = 'Reiniciar Jogo';

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    document.getElementById("jogador2").innerHTML = '0';

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
    document.getElementById("jogador1").innerHTML = '0';

    document.getElementById("resultado").innerHTML = '';
    document.getElementById("cartas1").style.border = 'none';
    document.getElementById("cartas2").style.border = 'none';

    document.getElementById("cartas1").src = "/images/0.png";
    document.getElementById("cartas2").src = "/images/0.png";
}