
function separar(frase) {
    let fr = frase.value;

    let arr = fr.split(" ");

    let palabraLarga = "";

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > palabraLarga.length) {
            palabraLarga = arr[i];
        }

    }

    alert(
    `  PALABRA MÁS LARGA 
    >>  ${palabraLarga}  <<`);


}