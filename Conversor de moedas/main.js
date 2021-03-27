let dolarValue = prompt("Qual valor em dolar que você quer converter?");

dolarValue = parseFloat(dolarValue);

let realValue = dolarValue * 5.50;
realValue = realValue.toFixed(2); //Casas decimais

alert(`US ${dolarValue} dolares em reais é R$ ${realValue}`);
