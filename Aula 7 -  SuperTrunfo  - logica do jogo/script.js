var carta1 = {
   nome: 'Bulbasauro',
   atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
   }
};

var carta2 = {
    nome: 'Darth Vader',
    atributos: {
        ataque: 9,
        defesa: 10,
        magia: 2,
    },
};

var carta3 = {
    nome: 'shiryu de dragão',
    atributos: {
        ataque: 5,
        defesa: 10,
        magia: 10,
    },
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
   
    
   var numeroCartaJogador = parseInt(Math.random() * cartas.length);
   while (numeroCartaMaquina == numeroCartaJogador){
     numeroCartaJogador = parseInt(Math.random() * cartas.length);
   }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
}


sortearCarta();    