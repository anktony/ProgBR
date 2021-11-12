const limiteMinimo = 0.5;
const amplitude = 2;
const frequenciaSimples = [11, 47, 87, 134, 200, 198, 164, 102, 48, 6, 3]

function Calcularn(fi){
    var n = 0;
    for(var i = 0; i < fi.length ; i++){
        n += fi[i];
    }

    return n;
}

function CalcularClasses(l0, c0, fi){
      var classes = [];

    for( var i = 0; i<fi.length; i++){
       classes[i] = [l0, l0 + c0]

       l0 += c0;
    }

    return classes;
}

function MostrarClasses(classes){
    classes.forEach((item) => console.log(item))  
}

function Calcularxi(classes){

    var amplitude = classes[0][1] - classes[0][0]
    var xi = [];
    
    for(var i = 0; i< classes.length; i++){
        xi[i] = classes[i][0]+ amplitude/2
    }

    return xi;
}

function CalcularMedia(xi, fi){
    var soma = 0;

    for(var i = 0; i<xi.length; i++){
        soma += xi[i] * fi[i];
    }

    return (soma/n);
}




var n = Calcularn(frequenciaSimples);
var classes = CalcularClasses(limiteMinimo, amplitude, frequenciaSimples);
var xi = Calcularxi(classes);
var media = CalcularMedia(xi , frequenciaSimples);