document.addEventListener("DOMContentLoaded", function() {
const fecha = "images/janelafechada.png"
const abre = "images/janelaaberta.png"
const quebra = "images/janelaquebra.png"

const img = document.querySelector(".window-wrapper__img")

img.src = fecha;

img.addEventListener("mouseover", () => {

    img.src = abre
})

img.addEventListener("mouseout", () => {

    img.src = fecha
})

img.addEventListener("click", () => {
    img.src = quebra
})
});