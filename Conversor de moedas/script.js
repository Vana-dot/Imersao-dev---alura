function Converter(){
    const valorInput = document.querySelector("#valor").value;
    var moedaConvertida = valorInput * 5.21480;
    document.getElementById("valorConvertido").innerHTML = "R$ "+ moedaConvertida.toFixed(2);
}