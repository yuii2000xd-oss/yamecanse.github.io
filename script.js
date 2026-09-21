const inicio = document.getElementById("inicio");
const avion = document.getElementById("avion");

const hojaSeccion = document.getElementById("hojaSeccion");
const hoja = document.getElementById("hoja");

const cartaSeccion = document.getElementById("cartaSeccion");

const pagina1 = document.getElementById("pagina1");
const pagina2 = document.getElementById("pagina2");
const pagina3 = document.getElementById("pagina3");

const siguiente1 = document.getElementById("siguiente1");
const siguiente2 = document.getElementById("siguiente2");

const volver2 = document.getElementById("volver2");
const volver3 = document.getElementById("volver3");

const cerrarCarta = document.getElementById("cerrarCarta");


// =================================
// CUANDO EL AVIÓN CHOCA
// =================================

avion.addEventListener("animationend", function () {

    // Ocultamos el avión
    avion.style.display = "none";
    document.querySelector(".imagen-impacto").style.display = "none";
    // Esperamos 1 segundo después del choque
    setTimeout(function () {

        // Ocultamos la escena del avión
        inicio.classList.add("oculto");

        // Mostramos la escena de la hoja
        hojaSeccion.classList.remove("oculto");
        
    }, 6000);

});


// =================================
// AL HACER CLIC EN LA HOJA
// =================================

hoja.addEventListener("click", function () {

    // Ocultar hoja
    hojaSeccion.classList.add("oculto");

    // Mostrar carta
    cartaSeccion.classList.remove("oculto");

    // Empezar en página 1
    pagina1.classList.remove("oculto");
    pagina2.classList.add("oculto");
    pagina3.classList.add("oculto");

});


// =================================
// PÁGINA 1 → PÁGINA 2
// =================================

siguiente1.addEventListener("click", function () {

    pagina1.classList.add("oculto");
    pagina2.classList.remove("oculto");

});


// =================================
// PÁGINA 2 → PÁGINA 3
// =================================

siguiente2.addEventListener("click", function () {

    pagina2.classList.add("oculto");
    pagina3.classList.remove("oculto");

});


// =================================
// VOLVER A PÁGINA 1
// =================================

volver2.addEventListener("click", function () {

    pagina2.classList.add("oculto");
    pagina1.classList.remove("oculto");

});


// =================================
// VOLVER A PÁGINA 2
// =================================

volver3.addEventListener("click", function () {

    pagina3.classList.add("oculto");
    pagina2.classList.remove("oculto");

});


// =================================
// CERRAR CARTA
// =================================

cerrarCarta.addEventListener("click", function () {

    cartaSeccion.classList.add("oculto");

    final.classList.remove("oculto");

});





