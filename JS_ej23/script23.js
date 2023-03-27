
function resaltarTexto(parrafo) {

    let parrafoHtml = parrafo.innerHTML; //>> traigo el contenido del parrafo a un let
    
    // .innerHTML nos permite hacer lo mismo que el .textContent, pero interpretando el
    //código HTML indicado y renderizando sus elementos 
    //ej permite >> `<u> palabra </u>`-> para usar más adelantes

    let arr = parrafoHtml.split(""); //>> transformo el parrafo el array por " "

    arr.forEach(palabra => { //>> recorro un forEach palabra por palabra
        if (palabra.length > 8) {
            parrafoHtml = parrafoHtml.split(palabra).join(`<mark>${palabra}</mark>`)
        }
    });

    const respuesta = document.getElementById("respuesta");// igual que en el ejercicio 22

    respuesta.innerHTML = parrafoHtml;
    //transformo respuesta en innerHtml para que acepte join(`<mark>${palabra}</mark>`)
    // lo igualo a la variable de la linea 16


}


/*






for (let index = 0; index < arr.length; index++) {
        
    if(arr[index].length > 8){
        console.log(arr[index]);
    } 
    
}

for (let index = 0; index < arrFinal.length; index++) {
    
    for (let index = 0; index < arr.length; index++) {
        
        if(arrFinal[index] == arr[index] ){
            arrFinal[index].css("bacbackground-color","yellow");
        }
        
    }
    
}

for (let index = 0; index < arrFinal.length; index++) {
    console.log(arrFinal[index]);
    
}


*/