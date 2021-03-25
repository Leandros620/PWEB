var player =  prompt("Escolher uma opção: \n\n[1] Pedra\n\n[2] Tesoura\n\n[3] Papel");

var imgJokenpoJog = "images/jokenpo" + player + ".png";

var imgJog = document.querySelectorAll("img")[0];

imgJog.setAttribute("src", imgJokenpoJog);

var pc = Math.floor(Math.random() * 3 ) +1;

var imgJokenpoPc = "images/jokenpo" + pc + ".png";

var imgPc = document.querySelectorAll("img")[1];

imgPc.setAttribute("src", imgJokenpoPc);

    if (player == 1) {
       if (pc == 1) {document.querySelector("h1").innerHTML = "Empate !";}
       if (pc == 2) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
       if (pc == 3) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
    }

    if (player == 2) {
        if (pc == 1) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
        if (pc == 2) {document.querySelector("h1").innerHTML = "Empate !";}
        if (pc == 3) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
     }

     if (player == 3) {
        if (pc == 1) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
        if (pc == 2) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
        if (pc == 3) {document.querySelector("h1").innerHTML = "Empate !";}
     }

     if (document.querySelector("h1").innerHTML == "Você ganhou ! :)") {
         document.querySelector("h1").style.color = "darkred";
     } else if (document.querySelector("h1").innerHTML == "Computador ganhou ! :(") {
        document.querySelector("h1").style.color = "yellow";
     }