
function calcular(limite) {

    let lim = parseInt(limite.value);
    let suma = parseInt(0);
    let num = parseInt(prompt("Ingrese un número s" + suma + " l" + lim));

    let flag = true;

    while (suma < lim) {

        if(flag == true){   //// solo entra en la primera suma
            suma = suma + num;
            flag = false;
        }
        num = parseInt(prompt("Siga ingresando s" + suma + " n" + num));

        suma = suma + num;

    }

    alert("Ha superado el límite!");
}

