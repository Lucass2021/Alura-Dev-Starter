/*botão clique aquis
prompt adivinhe o numero de
resultado no h2 */

function myButton() {

    let sorteio = parseInt(Math.random() * 11)
    let tentativas = 3

    while (tentativas > 0) {
        var number = parseInt(prompt("Digite um número entre 0 e 10"))

        if (sorteio == number) {
            alert(`Acertou Miseravi! O número era ${sorteio} `);
            break;
        } else if (number > sorteio) {
            alert(`O número secreto é menor que ${number}`)
            tentativas = tentativas - 1
        } else if (number < sorteio) {
            alert(`O numero secreto é maior que ${number}`)
            tentativas = tentativas - 1
        }
    }

    if (number != sorteio) {
        alert(` Suas tentativas acabaram. O número secreto era ${sorteio} `)
    }

}