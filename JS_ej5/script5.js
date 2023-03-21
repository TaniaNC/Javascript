
function calcular(operacion, num1, num2) {


    let mensaje;

    switch (operacion.value.toUpperCase()) {
        case "S":
            mensaje = `SUMA
                ${num1.value} + ${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}`;//concatena no suma
            break;
        case "R":
            mensaje = `RESTA
                ${num1.value} - ${num2.value} = ${num1.value - num2.value}`;
            break;
        case "M":
            mensaje = `MULTIPLICACIÓN
                ${num1.value} * ${num2.value} = ${num1.value * num2.value}`;
            break;
        case "D":
            mensaje = `DIVISÓN
                ${num1.value} / ${num2.value} = ${num1.value / num2.value}`;
            break;
    }

    alert(mensaje);
}
