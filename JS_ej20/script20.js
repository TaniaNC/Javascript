// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].

let matriz = [[3], [6], [9], [12], [15]];
let vector = [];
vector.length = 5;

for (let index = 0; index < vector.length; index++) {
    vector [index] = parseInt(matriz[index][0]) + 3;
}

console.log(vector);

