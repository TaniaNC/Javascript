////  1
mostrarClima(); // debo llamar a la función

function mostrarClima(){ 

    let clima = prompt("¿Cómo está el clima?"); //>>las variables LET solo son accedidas dentro del bloque {}
                                                //  las variables var son globales
    let mensaje =
    `El día de hoy está: ${clima}`;

    alert(mensaje);
}
