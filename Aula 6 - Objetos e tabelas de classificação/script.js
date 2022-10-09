var vana = {
    nome:"Vana",
    vitorias:2,
    empates:1,
    derrotas:1,
    pontos: 0

}
var jose = {
    nome:"José",
    vitorias:1,
    empates:1,
    derrotas:2,
    pontos:0


}

function calcularPontos(jogador){
    var pontos = (jogador.vitorias*3)+(jogador.empates)
    return pontos
}

vana.pontos = calcularPontos(vana);
jose.pontos = calcularPontos(jose);


var jogadores = [vana,jose];

function exibeJogadoresNaTela(jogadores){
  var elemento = ""

  for (var i = 0; i < jogadores.length; i++){
    elemento += "<tr><td>"+jogadores[i].nome+"</td>"
    elemento += "<td>"+jogadores[i].vitorias+"</td>"
    elemento += "<td>"+jogadores[i].empates+"</td>"
    elemento += "<td>"+jogadores[i].derrotas+"</td>"
    elemento += "<td>"+jogadores[i].pontos+"</td>"
    elemento += '<td><button onClick="adicionarVitoria()">Vitória</button></td>'
    elemento += '<td><button onClick="adicionarEmpate()">Empate</button></td>'
    elemento +=  '<td><button onClick="adicionarDerrota()">Derrota</button></td>'
    elemento += "</tr>"
  }
  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);
// function adicionarVitoria(){

// }

// function adicionarDerrota(){

// }

// function adicionarEmpate(){

// }