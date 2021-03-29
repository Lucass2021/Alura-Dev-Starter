// Exibir nome dos filmes embaixo + link
// Exibir um prompt perguntando qual filme exibir

//let lista = parseInt(prompt("Escolha: 1 para Sons of Anarchy, 2 para Grimm e 3 para Dexter"));

let listaFilmes = [];

listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY268_CR7,0,182,268_AL_.jpg");

let nomeFilmes = [];

nomeFilmes.push("Sons of Anarchy");
nomeFilmes.push("Grimm");
nomeFilmes.push("Dexter");

for (i = 0; i < listaFilmes.length; i++) {
    document.write(`<img src= ${listaFilmes[i]} </img>`);
}

for (i = 0; i < 1; i++) {
    document.write(`<h2> ${nomeFilmes[0]} </h2>`);
    document.write(`<h2> ${nomeFilmes[1]} </h2>`);
    document.write(`<h2> ${nomeFilmes[2]} </h2>`);
}

