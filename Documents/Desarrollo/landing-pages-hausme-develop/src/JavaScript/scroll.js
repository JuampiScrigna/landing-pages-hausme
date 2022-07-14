const wassap = document.getElementById("wapp2")

let ubicacion = window.pageYOffset;

window.addEventListener("scroll", () => {
    let desplazamiento = window.pageYOffset
    if (ubicacion >= desplazamiento) {
        wassap.style.right = "-500px"
    }
    else {
        wassap.style.right = "20px"
    }
    return ubicacion = desplazamiento;

})
