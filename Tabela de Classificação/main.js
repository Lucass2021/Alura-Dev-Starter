let paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0,
}

let rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0,
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

let jogadores = [rafa, paulo];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
    let html = "";
    for (i = 0; i < jogadores.length; i++) {
        html += `<td> ${jogadores[i].nome} </td>`;
        html += `<td> ${jogadores[i].vitorias} </td>`;
        html += `<td> ${jogadores[i].empates} </td>`;
        html += `<td> ${jogadores[i].derrotas} </td>`;
        html += `<<td> ${jogadores[i].pontos} </td> `;
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    let tabela = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    let jogador = jogadores[1];
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {

}
function adicionarDerrota(i) {

}

