fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];


function getIndexFromName(name)
{
console.log(fruits.indexOf(name));
return fruits.indexOf(name);
}

displayResult(getIndexFromName("Apple"));
