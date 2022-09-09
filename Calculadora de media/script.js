/* var nota1 = 6
var nota2 = 9
var nota3 = 9 
var nota4 = 10

var media = (nota1+nota2+nota3+nota4) /4

console.log(media) */

/* function media (n1,n2,n3,n4){
    var me =(n1+n2+n3+n4)/4;
    console.log(me);
}
media(10,5,10,5)

 */

function notaFinal(){
    const notas = document.querySelectorAll("#nota");
    var valores = [].map.call(notas, function (input) {
        return input.value;
      });

      var valoresInt = [];
      var soma = 0;

      for (var i = 0; i < valores.length; i++){
         valoresInt.push(parseFloat(valores[i]));
         soma += valoresInt[i]/4;
      }
     
    document.getElementById("media").innerHTML = "Sua nota final  = "+ soma.toFixed(2);
}
   /*  console.log(soma); */
   
    
  

/* var nota1 = 6.5233
var nota2 = 9.5633
var nota3 = 9.855
var nota4 = 10.202

var notaFinal =(nota1 + nota2 + nota3 + nota4) /4

console.log(notaFinal.toFixed(0)) */