var Aluno01 = {
    RA: '0038489828089',
    Nome: 'José Almeida'
}
console.log(Aluno01);
alert("Nome: " + Aluno01.Nome + "\nRA: " + Aluno01.RA);

  
Aluno01.RA = '0030481833005';
Aluno01.Nome = 'Mario Silva';
console.log(Aluno01);
alert("Nome: " + Aluno01.Nome + "\nRA: " + Aluno01.RA);

Aluno01['RA'] = '0030482046016';
Aluno01['Nome'] = 'Telma Moreira';
console.log(Aluno01);
alert("Nome: " + Aluno01.Nome + "\nRA: " + Aluno01.RA);
