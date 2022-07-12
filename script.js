// const imagem = document.querySelector("#ImagemDoProjeto");
const titulo = document.querySelector("#tituloDoProjeto");
const legenda = document.querySelector("#textoDoProjeto");
const link = document.querySelector("#linkDoProjeto", "#imagemDoProjeto");
let botao = document.querySelector("#proximo");

botao.addEventListener("click", () => {
    if (botao.value == "um") {
        // imagem.src = "./public/img/images.png";
        titulo.innerText = "Catalogo de Filmes";
        legenda.innerText = "Um simples Catalogo de Filmes";
        link.innerHTML = '<a href="https://m2catalogo.herokuapp.com/" target="_blank"><img src="./public/img/images.png" alt="icone filmes" /></a>';
    
        botao.value = "dois";
    }else if(botao.value == 'dois') {
        // imagem.src = "./public/img/anya.jpg";
        titulo.innerText = "Jogo do Humor";
        legenda.innerText = "Uma aplicação simples para treinar Javascript";
        link.innerHTML = '<a href="https://thiagojesu.github.io/modulo-2/" target="_blank"><img src="./public/img/anya.jpg" alt="icone anya" /></a>';
        botao.value = "tres";
    }else{
        // imagem.src = "./public/img/pokemon-logo.png";
        titulo.innerText = "Pokedex";
        legenda.innerText = "Uma simples pokedex para treinar banco de dados";
        link.innerHTML = '<a href="https://m2pokedex.herokuapp.com/" target="_blank"><img src="./public/img/pokemon-logo.png" alt="icone filmes" /></a>';
        botao.value = "um";
    }
});