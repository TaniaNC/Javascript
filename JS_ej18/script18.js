var valores = [true, 5, false, "hola", "adios", 2];

let palabraMax = "";
let num1 = true;
let num2;

filtrar(valores);

function filtrar(valores) {

    for (let i = 0; i < valores.length; i++) {

        if (typeof valores[i] == "string" && valores[i].length > palabraMax.length) {
            palabraMax = valores[i];

        } else if (typeof valores[i] == 'number') {

            if (num1 == true) {
                num1 = valores[i];
            }
            num2 = valores[i];

        } else if (typeof valores[i] == 'boolean') {

            

        }
    }

    let mensaje =
        `SUMA ${num1} + ${num2} = ${num1 + num2}
RESTA ${num1} - ${num2} = ${num1 - num2}
DIVISION ${num1} / ${num2} = ${num1 / num2}
MULTIP ${num1} * ${num2} = ${num1 * num2}
EXPONENTE ${num1} ** ${num2} = ${num1 ** num2}`;

    console.log("LA PALABRA MÁS LARGA " + palabraMax);
    console.log(mensaje);
}








