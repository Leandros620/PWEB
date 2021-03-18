const primeiroN = prompt("Favor digitar o primeiro número:")
const segundoN = prompt("Favor digitar o segundo número:")

const soma = parseFloat(primeiroN) + parseFloat(segundoN)
const subtr = parseFloat(primeiroN) - parseFloat(segundoN)
const div= parseFloat(primeiroN) / parseFloat(segundoN)
const resto = parseFloat(primeiroN) % parseFloat(segundoN)

alert("Soma: " + soma + "\n" + "Subtração: " + subtr + "\n" + "Divisão: " + div + "\n" + "Resto Divisão: " + resto)