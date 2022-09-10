function ConverterTemperaturas(){
    const temperaturaInput = document.querySelector("#temperatura").value;
    var temperaturaConvertido = ((temperaturaInput * 9)/5) + 32;

    if (document.getElementById("temperaturaConvertida").style.display === "none"){
        document.getElementById("temperaturaConvertida").style.display = "inline";
         document.getElementById("temperaturaConvertida").innerHTML = temperaturaConvertido.toFixed(2)+ " °F";
    }
    else{
        document.getElementById("temperaturaConvertida").style.display = "none";
    }
         

}
    