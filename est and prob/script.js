const media = 10.658;
const n = 1000;

xi0 = 0; 
var xi = 1.5;
var fi = [11, 47, 87, 134, 200, 198, 164, 102, 48, 6, 3];

var somatoria = 0;

function Media(){
    for(var i = 0; i<fi.length; i++){
        
    }
}

function DesvioPadrao(){

    for(var i = 0; i < 11; i++){
        
        somatoria += ((xi-media) * (xi - media)) * fi[i];
        xi += 2;
    }

    var variancia = somatoria / (n - 1);
    var desvioPadrao = Math.sqrt(variancia);

    console.log("Variância: " + variancia);
    console.log("Desvio Padrão: " + desvioPadrao);

return desvioPadrao
}

function CoeVarPearson(){
    var pearson = (DesvioPadrao()/media)*100;

    console.log("Coeficiente de Pearson: " + pearson);
   return pearson;
}

