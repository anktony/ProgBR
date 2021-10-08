var nomeArray = [1, 2, 3, 4, 5, 6, 7];
 
var dale = 0;


for(var i in nomeArray){
    dale += nomeArray[i];
}

for(var i of nomeArray){console.log(i)};

alert(dale);

