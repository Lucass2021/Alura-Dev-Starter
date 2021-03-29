function adicionarFilme() {
    let campoFilme = document.getElementById("filme");
    let filmeFavorito = campoFilme.value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesnaTela(filmeFavorito);
    } else {
        alert("Imagem invalida");
    }
}

function listarFilmesnaTela(filmeFavorito) {
    let listaFilmes = document.getElementById("listaFilmes");
    let elementoFilme = (`<img src= ${filmeFavorito} </img>`);
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

//40,30