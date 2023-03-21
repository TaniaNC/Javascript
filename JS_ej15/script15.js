function calcular(radio){
    
    let circulo = {
        radio : radio.value
    };

    let areaCalculada = area(circulo);

    let perimetroCalculado = perimetro(circulo);

    alert("area " + areaCalculada.toFixed(2) + "/// perimetro " + perimetroCalculado.toFixed(2));

}

var area = (circulo) => {return (Math.PI * circulo.radio**2)};

var perimetro = (circulo) => {return (2 * Math.PI * circulo.radio)};