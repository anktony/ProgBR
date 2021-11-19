// const limiteMinimo = 0.5;
// const amplitude = 2;
// const frequenciaSimples = [11, 47, 87, 134, 200, 198, 164, 102, 48, 6, 3]

const limiteMinimo = 20;
const amplitude = 5;
const frequenciaSimples = [10, 15, 20, 18, 4];
const mediana = 32.25;

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
    classes.forEach((item) => console.log(item));
}

function Calcularxi(classes){

    var amplitude = classes[0][1] - classes[0][0]
    var xi = [];
    
    for(var i = 0; i< classes.length; i++){
        xi[i] = classes[i][0]+ amplitude/2
    }

    return xi;
}

function Mostrarxi(xi){
    xi.forEach((item)=> console.log(item));
}

function CalcularMedia(xi, fi){
    var soma = 0;

    for(var i = 0; i<xi.length; i++){
        soma += xi[i] * fi[i];
    }

    return (soma/n);
}

function CalcularVariancia(xi, fi, media){
    var somatoria = 0;

    for(var i = 0; i < fi.length; i++){
        somatoria += ((xi[i]-media) * (xi[i] - media)) * fi[i];
    }

    var variancia = somatoria / (n - 1);
    // var desvioPadrao = Math.sqrt(variancia);

    return variancia;

}

function CalcularDesvioPadrao(variancia){
    return Math.sqrt(variancia);
}

function CalcularCVP(desvioPadrao, media){
    return desvioPadrao/media*100;
}

function CalcularModaCzuber(classes, fi, amplitude){
    var indiceClasseModal = 0;
    var frequenciaClasseModal=fi[0];
    var limiteInferiorModal =classes[0][0];

    for(var i = 0; i < fi.length; i++){
    
        if(fi[i] > frequenciaClasseModal){
            indiceClasseModal = i;
            frequenciaClasseModal = fi[i];
        } 
    }

    limiteInferiorModal = classes[indiceClasseModal][0];
    frequenciaClasseAnterior = fi[indiceClasseModal-1];
    frequenciaClassePosterior = fi[indiceClasseModal+1];

    // console.log(indiceClasseModal);
    // console.log(frequenciaClasseModal);
    // console.log(limiteInferiorModal);
    // console.log(frequenciaClasseAnterior)
    // console.log(frequenciaClassePosterior)

    return limiteInferiorModal + amplitude * ((frequenciaClasseModal-frequenciaClasseAnterior)/( (frequenciaClasseModal-frequenciaClasseAnterior)+(frequenciaClasseModal-frequenciaClassePosterior)))

    }

function CalcularElementoI(i, n, I){
        return (i*n)/I
    }
    
function CalcularDesvioMedio(xi,fi, n, MeMd){
    var soma = 0;
    var temp=0;
    for(var i = 0; i < xi.length; i++){
        temp = xi[i] > MeMd ? xi[i] - MeMd : MeMd - xi[i];
        console.log(temp*fi[i]);
        soma += temp * fi[i];
        console.log(soma);
    }

    //console.log(soma)		
    return soma/n;
}

function CalcularEnviesamento1(media, moda, S){
	return (media-moda)/S;
}

function CalcularEnviesamento2(media, mediana, S){
	return (3*(media-mediana))/S;
}

function CalcularMediana(){}

function CalcularQuartil(){}

function CalcularDecil(){}

function CalcularCentil(){}






var n = Calcularn(frequenciaSimples);
var classes = CalcularClasses(limiteMinimo, amplitude, frequenciaSimples);
var xi = Calcularxi(classes);
var media = CalcularMedia(xi, frequenciaSimples);
var variancia = CalcularVariancia(xi, frequenciaSimples, media);
var desvioPadrao = CalcularDesvioPadrao(variancia);
var cvp = CalcularCVP(desvioPadrao, media);
var czuber = CalcularModaCzuber(classes, frequenciaSimples, amplitude);
var desvioMedioMedia = CalcularDesvioMedio(xi, frequenciaSimples, n, media);
var desvioMedioMediana = CalcularDesvioMedio(xi, frequenciaSimples, n, mediana);
var e1 = CalcularEnviesamento1(media, czuber, desvioPadrao);
var e2 = CalcularEnviesamento2(media, mediana, desvioPadrao);

var EQi = CalcularElementoI(2, n, 4);
var EDi = CalcularElementoI(7, n, 10);
var ECi = CalcularElementoI(43, n, 100);



