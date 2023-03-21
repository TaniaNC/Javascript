// var mascota = {
//     apodo : "Chiquito",
//     numeroIdentificatorio : 123412,
//     nacimiento : new Date("08-06-2004")

//Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
//'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

function mostarPersona(nombre, edad, sexo, peso, altura){

    let persona = {
        nombre : nombre.value,
        edad : edad.value,
        sexo : sexo.value,
        peso : peso.value,
        altura : altura.value
    };

    let mensaje = ///traer un atributo por atributo >> persona.nombre...

    alert(mensaje);
    console.log(persona);

}