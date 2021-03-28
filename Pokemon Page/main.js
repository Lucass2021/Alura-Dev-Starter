/*função quando clicar nesse botão, abre prompt perguntando
quem é esse pokemon, if for certo muda imagem, se for errado mostra alert errado

outro modão para mudar pokemons
*/

let btn = document.getElementById("btn");
let char = document.getElementById("char");
let bulb = document.getElementById("bulb");

function myButton() {
    let pokemon = prompt("Quem é esse Pokemon?");
    if (pokemon == "charmander" || pokemon == "Charmander") {
        char.src = "./assets/charmander.png";
    } else {
        alert("Tente novamente");
    }
}


function changePokemon() {
    if (document.getElementById('btn-2').click === true) {
        char.src = "./assets/BulbasaurDark.png";
    } else {
        char.src = "./assets/BulbasaurDark.png";
    }

    function myButton2() {
        let pokemon = prompt("Quem é esse Pokemon?");
        if (pokemon == "Bulbasaur" || pokemon == "bulbasaur" || pokemon == "bulbasauro" || pokemon == "bulbassauro" || pokemon == "Bulbasauro" || pokemon == "Bulbassauro") {
            char.src = "./assets/Bulbasaur.png";
        } else {
            alert("Tente novamente2");
        }
    }

}
