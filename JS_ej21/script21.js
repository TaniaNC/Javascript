//Escribir un programa para obtener un array de las propiedades de un objeto Persona.
//Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.



let nombre = "Malena";
let edad = 18;
let sexo ="F";
let peso = 80;
let altura = 1.61;




let personas = [];

let cantidadPersonas = prompt("Ingrese cantidad personas:");

for (let index = 0; index < cantidadPersonas; index++) {
    nombre = prompt("n");
    edad = prompt("e");
    sexo = prompt("s");
    peso = prompt("p");
    altura = prompt("a");

    personas.push(mostarPersona(nombre, edad, sexo, peso, altura));

}

console.log(personas);


function mostarPersona(nombre, edad, sexo, peso, altura){

    let persona = {
        nombre : nombre,
        edad : edad,
        sexo : sexo,
        peso : peso,
        altura : altura
    };

    console.log(persona);

    return persona;

}



