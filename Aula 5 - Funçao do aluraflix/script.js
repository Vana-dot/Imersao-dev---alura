/* var filmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg", "https://br.web.img2.acsta.net/pictures/22/08/16/23/17/2934353.jpg","https://midias.correiobraziliense.com.br/_midias/jpg/2022/08/22/homem_aranha_the_more_fun_stuff-26280289.jpg"]

for (let i = 0; i < filmes.length; i++) {
    document.write("<img src= "+filmes[i]+">");
    
}
 */

function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")){
       listarFilmesNaTela(filmeFavorito);
    }else{
        console.error("Endereço invalido")
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme){
    var elementoFilmeFavorito = "<img src="+filme+">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;

}

