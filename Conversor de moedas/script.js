function Converter(){
    const valorInput = document.querySelector(".valor").value;
    var moedaConvertida = valorInput * 5.21480;
    var moedaEmBitcon = valorInput * 0.000047;
    document.getElementById("valorConvertido").innerHTML = "R$ "+ moedaConvertida.toFixed(2) +"<br>"+ "Em Bitcon " + moedaEmBitcon;

}
    

function ConverterReal(){
    const valorInputReal = document.querySelector(".valorReal").value;
    var moedaConvertidaReal = valorInputReal / 5.21480;
    var moedaEmBitconReal = valorInputReal * 0.0000091;
    document.getElementById("valorConvertidoReal").innerHTML = "R$ "+ moedaConvertidaReal.toFixed(2) +"<br>"+ "Em Bitcon " + moedaEmBitconReal;
    


}

