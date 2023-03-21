//Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
//Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
//y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
//numero de páginas

// var mascota = {
//     apodo : "Chiquito",
//     numeroIdentificatorio : 123412,
//     nacimiento : new Date("08-06-2004")


function ingresarLibro(isbn, titulo, autor, numDePaginas) {

    //   let titulo = prompt("Ingrese titulo:");

    //  let autor = prompt("Ingrese el Autor:");

    //   let numDePaginas = prompt("Ingrese el número de páginas:");

    //  var libro = {
    //      isbn : isbn,
    //     titulo : titulo,
    //   autor : autor,
    //     numDePaginas : numDePaginas
    // };

    var libro = {
        isbn: isbn.value,
        titulo: titulo.value,
        autor: autor.value,
        numDePaginas: numDePaginas.value
    };

    mostrarLibro(libro);
}


function mostrarLibro(libro) {
    console.log(libro);
    alert(`ìsbn ${libro.isbn}`);

}