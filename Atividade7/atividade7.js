var n1 = prompt('Inserir primeiro número:');
var n2 = prompt('Inserir o segundo número:');
var n3 = prompt('Inserir o terceiro número:');

maiorNum(n1, n2, n3);

function maiorNum(n1, n2, n3) {
  var arrayNum = [n1, n2, n3];

  arrayNum.sort((a, b) => a - b);

  alert(arrayNum[arrayNum.length - 1]);
}
