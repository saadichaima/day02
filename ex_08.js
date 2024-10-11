fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"]

function getFruitNameFromIndex(index){
if (index== -1){
return fruits[fruits.length -1];
}
else if (index> fruits.length ){
return null ;
} else {return fruits[index];}
}

function getIndexFromName(name)
{
console.log(fruits.indexOf(name));
return fruits.indexOf(name);
}

function getFruit(parameter){
if (typeof parameter =="number"){
return getFruitNameFromIndex(parameter);
}
if(typeof parameter=="string"){
return getIndexFromName(parameter);
}
}

let result = getFruit(1)
displayResult(result)
