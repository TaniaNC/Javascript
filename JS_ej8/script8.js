
//  Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
//  programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
//  todos ellos.

function ingresarNum(){

    let num = 0;
    let max = parseInt(0);
    let min = parseInt(0);
    let suma = parseInt(0);
    let cant = parseInt(0);

    let flag = true;

    do{
        num = parseInt(prompt("Ingrese un número:"));

        cant++;
        suma = suma + num;

        if(num > max){
            max = num;
        }

        if(flag == true){
            flag = false;
            min = num; 
        }

        if(num < min && num != 0 ){
            min = num;
        }

    }while (num != 0);

let mensaje = ` ¡PRESIONASTE CERO!
        maximo   = ${max} 
        minimo   = ${min}
        promedio ${suma} / ${cant-1} = ${suma / (cant-1)}`;

alert(mensaje);
}
