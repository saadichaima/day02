fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function  getFruitNameFromIndex(index){
if (index== -1){
return fruits[fruits.lenth -1];
}
else if (index> fruits.length ){
return null ;
}else {fruits[index]}

}
let result = getFruitNameFromIndex(7)
displayResult(result)
