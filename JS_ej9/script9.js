//   Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
//   espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
//   funcionamiento de la función Substring().

function separarFrase(frase) {

    let fr = frase.value;
    let caracter;
    let cambiado = " ";

    for (let i = 0; i < fr.length; i++) {

        caracter = fr.substring(i, (i + 1));

        cambiado = cambiado + caracter + " ";

    }

    alert(cambiado);
}


