const formulario = document.querySelector("#formulario");

//// CREAR EVENTO
formulario.addEventListener( "submit", validarFormulario );


/// Mis funciones
function validarFormulario(e) {

    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;

    const respuesta =document.getElementById("respuesta");

    respuesta.textContent = `Hola ${nombre} ${apellido} :)`

}





