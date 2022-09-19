var luis = document.querySelector("#luisao");
luis.addEventListener("click", function (){
    var pergunta = prompt("LULU? É você");

    if(pergunta == "não") {
        alert("https://www.youtube.com/watch?v=Gl0-gfzPpho");
    } 
    
    if(pergunta == "sim") {
        alert("Seja bem vindo divindade!!!");
    }
});