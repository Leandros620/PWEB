function valida() {

    var e = document.getElementById("cursos");
    var opc = e.options[e.selectedIndex].text;
    if (opc == "Sistemas Biomédicos") {
        openBiomedicos();
    } else if (opc == "Logística") {
        openLogistica();
    } else  {
        openFabricacao();
    }
}



function openBiomedicos() {
    window.open("bio.html", "testWindow", "width=255, height=160, left=10, top=10");
}

function openFabricacao() {
    window.open("fabr.html", "testWindow", "width=255, height=160, left=10, top=10");
}

function openLogistica() {
    window.open("log.html", "testWindow", "width=255, height=160, left=10, top=10");
}
