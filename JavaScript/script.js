
/*

////////////////////////////  VIDEO 7  ////////////////////////////////

var nums = new Array(1,2,3,4,5,6,7,8);  // se declara un Array de forma explicita

var numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,8];

new Set(numeros); //>> no soporta elementos duplicados

var setNumeros = new Set(numeros);

"aaasssdddd".split(""); //>> genera un Array en base a un String: separa letra por letra

new Set("aaasssdddd".split("")); //>>.split(""):sepera letra por letra, Set: no repetidos
//= Set(3) {'a','s','d'}

var mapa = new Map();

mapa.set=(1,"Tania");  //Setear (key, "nombre") key se accede a elementos a modo de indice
 
mapa.set=(2,"Agustin");


////////////////////////////  VIDEO 6  ////////////////////////////

var numeros = [1, 2, 3, 4, 5, 6, 7, 8];

var personas = [
    {
        nombre: "Tania",
        apellido: "Chavez"
    },
    {
        nombre: "Agustin",
        apellido: "Fiorde"
    },
    {
        nombre: "Malena",
        apellido: "Gomez"
    }
];

personas.reverse(); //>> invierte el orden definitivamente

personas.forEach((e) => console.log(e.nombre));

personas.filter(
    function (e) {

        if (e.nombre == "Tania")
            return e;

    }
)

numeros.filter((e) => e % 2 == 0); //>> si son pares muestra la lista, no afecta el array

numeros = numeros.filter((e) => e % 2 == 0); //>> modifica el array a solo num pares

numeros.map((e) => e * 3); // >> multiplica el array, sin afectar el array madre

numeros = numeros.map((e) => e * 3);// >> si modifica el array


////////////////////////////  VIDEO 5  ////////////////////////////
var numeros = [1, 2, 3, 4, 5, 6, 7, 8];

var personas = [
    {
        nombre: "Tania",
        apellido: "Chavez"
    },
    {
        nombre: "Agustin",
        apellido: "Fiorde"
    },
    {
        nombre: "Malena",
        apellido: "Gomez"
    }    
];

console.log(personas[0]);

console.log(personas[ personas.length-1 ]); // para acceder al ultimo objeto de un array

////////////////////////////  VIDEO 4   ////////////////////////////
var persona = {
    apellido: "Chavez",
    nombre: 'Tania',
    nacimiento: new Date("02-27-2002"),
    dni: 11223344,
    mascotas: [
        {
            apodo: "Chiquito",
            numeroIdentificatorio: 123412,
            nacimiento: new Date("08-06-2004")
        }, {
            apodo: "Malva",
            numeroIdentificatorio: 123413,
            nacimiento: new Date("08-18-1986")
        }
    ]
};

class Mascota {
    apodo;
    numeroIdentificatorio;
}

var m = new Mascota();

m.apodo = "Filomena";
m.numeroIdentificatorio = 23322;

console.log(m);

// var mascota = {
//     apodo : "Chiquito",
//     numeroIdentificatorio : 123412,
//     nacimiento : new Date("08-06-2004")
// };

////  VIDEO 3   ////



////////////////////////////  VIDEO 2   ////////////////////////////

var numero = 123;//numer

var flag = true;//boolean

numero = "123"; //>>termina siendo un string, aunque haya empezado como un number

alert("el tipo de dato de var es " + typeof numero);

>>> //    templetes string
  var edad = prompt("Que edad tenes?"); 

  var mensaje = //>> con comillas altGr + }
  `La edad del sujeto es
  ....
  .... $(edad)`;
  
  alert(mensaje);


////////////////////////////  VIDEO 1  ////////////////////////////

console.log("Hola estoy en la consola");

alert("Hola, soy un alert");

var edad = prompt("Que edad tenes?", 29);

alert("Tu edad es " + edad);
*/