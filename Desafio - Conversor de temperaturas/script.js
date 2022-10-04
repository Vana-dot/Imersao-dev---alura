// Pegando os valores selecionados no select

function selectSelecionado(){
    var select = document.getElementById("temperaturas");
    var opcaoValor = select.options[select.selectedIndex].value;
    ConverterTemperaturas(opcaoValor);

}


// Função para converter Celsius para fahrenheit, fahrenheit para kelvius e kelvius para celsius
function ConverterTemperaturas(opcao){
    /* var select = document.getElementById("temperaturas");
    var opcaoValor = select.options[select.selectedIndex].value; */
    console.log(opcao);
    const temperaturaInput = document.querySelector("#temperatura").value;
    var temperaturaConvertido = ((temperaturaInput * 9)/5) + 32;
    var temperaturaConvertidoKel =((temperaturaInput-32)*5)/9 + 273.15;
    var temperaturaConvertidoCelsius = temperaturaInput - 273.15;

    if(document.getElementById("temperaturaConvertida").style.display === "none" && opcao === "celsius"){
        document.getElementById("temperaturaConvertida").style.display = "inline";
         document.getElementById("temperaturaConvertida").innerHTML = temperaturaConvertido.toFixed(2)+ " °F";
    }
    else if(document.getElementById("temperaturaConvertida").style.display === "none" && opcao === "fahrenheit"){
        document.getElementById("temperaturaConvertida").style.display = "inline";
        document.getElementById("temperaturaConvertida").innerHTML = temperaturaConvertidoKel.toFixed(2)+ " °K";
    }

    else if(document.getElementById("temperaturaConvertida").style.display === "none" && opcao === "kelvius"){
        document.getElementById("temperaturaConvertida").style.display = "inline";
        document.getElementById("temperaturaConvertida").innerHTML = temperaturaConvertidoCelsius.toFixed(2)+ " °C";
    }
    
}



//console.log(optionValor)
    