const nmAluno = prompt("Digite o nome do aluno:")

const n1 = prompt("Digite o valor da primeira nota:")
const n2 = prompt("Digite o valor da segunda nota:")
const n3 = prompt("Digite o valor da terceira nota:")

const md= (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3

alert("O aluno " + nmAluno + " obteve a média " + md)