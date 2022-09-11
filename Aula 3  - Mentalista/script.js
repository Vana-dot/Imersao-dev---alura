var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto)
function Chutar(){
    var chute = document.getElementById("valor").value;
    var maiorMenor = (numeroSecreto > chute ? "maior" : "menor");
    if (chute == numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Você acertou";
    }
    else if(chute > 10 || chute < 0){
        document.getElementById("resultado").innerHTML = "Número invalido, entre com número de 0 a 10";

    } else {
        document.getElementById("resultado").innerHTML = "Você errou número secreto "+maiorMenor+" que chute";
    }
}