

let listaFilmes = [];

listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY268_CR7,0,182,268_AL_.jpg");

function myButton() {
    let lista = parseInt(prompt("Escolha: 1 para Sons of Anarchy, 2 para Grimm e 3 para Dexter"));

    if (lista == 1) {
        document.write(`<img src= ${listaFilmes[0]} </img>`);

    } else if (lista == 2) {
        document.write(`<img src=${listaFilmes[1]} </img>`);
    } else if (lista == 3) {
        document.write(`<img src= ${listaFilmes[2]}`);
    } else {
        alert("Por favor, digite um valor válido");
    }
}




