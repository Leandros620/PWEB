// Exercicio 1
function Retang (x, y) {
  this.b = x;
  this.alt = y;
  this.calcularArea = function () {
    return this.b * this.alt;
  }
}

const retangulo = new Retang(2, 3);

console.log(retangulo.calcularArea());

// Exercicio 2
function Conta (nome, banco, conta, saldo) {
  this.nome = nome;
  this.banco = banco;
  this.conta = conta;
  this.saldo = saldo;
}

function Corrente (nome, banco, conta, saldo, saldoEspec) {
  Conta.call(this, nome, banco, conta, saldo);
  this.saldoEspec = saldoEspec;
  this.setsaldoEspec = function (saldoNovo) {
    return this.saldoEspec = saldoNovo;
  }
  this.getSaldoEspec = function () {
    return this.saldoEspec;
  }
}

function Poupanca (nome, banco, conta, saldo, jr, dtVenc) {
  Conta.call(this, nome, banco, conta, saldo);
  this.jr = jr;
  this.dtVenc = dtVenc;
  this.setPoupanca = function(jr, dtVenc) {
    this.jr = jr;
    this.dtVenc = dtVenc;
  }
  this.getPoupanca = function () {
    return `juros : ${this.jr} 
  data vencimento : ${this.dtVenc}`
  }
}


const Alex = new Poupanca('Alex', 'Bradesco', 19098, 2500.98, 4.5, "08/21");

Alex.setPoupanca(4.5, "08/21");
console.log(Alex.getPoupanca());
