let listaFilmes = [];

listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY268_CR7,0,182,268_AL_.jpg");

for (i = 0; i < listaFilmes.length; i++) {
    document.write(`<img src= ${listaFilmes[i]} </img> `);
}

// Exibir nome dos filmes embaixo + link
// Exibir um prompt perguntando qual filme exibir