let operation = parseInt(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir"));

let value1 = parseInt(prompt("Digite o primeiro valor"));
let value2 = parseInt(prompt("Digite o segunda valor"));

let sum = value1 + value2;
let sub = value1 - value2;
let times = value1 * value2;
let division = value1 / value2;

if (operation === 1) {
    document.write(`<h2>${value1} + ${value2} = ${sum} </h2> `);
} else if (operation === 2) {
    document.write(`<h2> ${value1} - ${value2} = ${sub} </h2> `);
} else if (operation === 3) {
    document.write(`<h2> ${value1} X ${value2} = ${times} </h2> `);
} else if (operation === 4) {
    document.write(` <h2> ${value1} / ${value2} = ${division}`);
} else {
    document.write(`<h2> <span style="font-size: 10px"> Digite um valor de 1 a 4 </span></h2> `);
}







