var carta1 = {
    nome: 'Bulbasauro',
    imagem:"https://static.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest?cb=20151224122219&path-prefix=pt-br",
    atributos: {
     ataque: 7,
     defesa: 8,
     magia: 6,
    }
 };
 
 var carta2 = {
     nome: 'Darth Vader',
     imagem: "https://images2.alphacoders.com/591/thumb-1920-59190.jpg",
     atributos: {
         ataque: 9,
         defesa: 10,
         magia: 2,
     },
 };
 
 var carta3 = {
     nome: 'Shiryu de dragão',
     imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
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
     
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaMaquina == numeroCartaJogador){
      numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }
     cartaJogador = cartas[numeroCartaJogador];
     console.log(cartaJogador);
 
     document.getElementById("btnSortear").disabled = true;
     document.getElementById("btnJogar").disabled = false;
     
     exibirCartaJogador();
 }

 
 function obtemAtributoSelecionado(){
     var radioAtributos = document.getElementsByName("atributo");
 
     for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
             return radioAtributos[i].value;
        }
     }
     
 
 
 
 }
 
 function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
 
    if(valorCartaJogador > valorCartaMaquina){
       htmlResultado = "<p class='resultado-final'> Você venceu </p>";
    }else if(valorCartaMaquina > valorCartaJogador){
       htmlResultado = "<p class='resultado-final'> Perdeu </p>";
    } else{
      htmlResultado  = "<p class='resultado-final'> Empatou!</p>";
    }
   
    elementoResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
 }

 function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div  id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo'  value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

     var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

     divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
 }


 function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div  id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p name='atributo'  value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

     var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

     divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
 }
