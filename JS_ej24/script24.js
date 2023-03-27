const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", calcularRadio);

function calcularRadio(e) {

    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let diametro = document.getElementById("diametro").value;

    let respuesta = document.querySelector("#respuesta");

    respuesta.textContent = `¡Hola ${nombre}! El radio de tu círculo es ${diametro / 2}`; 

}