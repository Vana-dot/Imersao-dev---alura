//Uma lista com todos os filmes preferidos
/* var filmes = ["Yesteday ","365 DNI","Homem-Aranha: Sem Volta para Casa"];

// Criando um for que vai percorrer todos elementos dessa lista e colocar em uma lista
for (var i = 0; i < filmes.length; i++) {
    var element = filmes[i];
    document.write("<ul> <li>"+i+" - "+element+"</li> </ul>");
}

 */

//Imagens dos filmes listados na lista anteriormente
var imagensFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg", "https://br.web.img2.acsta.net/pictures/22/08/16/23/17/2934353.jpg","https://midias.correiobraziliense.com.br/_midias/jpg/2022/08/22/homem_aranha_the_more_fun_stuff-26280289.jpg"]

for (let i = 0; i < imagensFilmes.length; i++) {
    document.write("<img src= "+imagensFilmes[i]+">");
    
}
