// Write your function here ...
somme=0;
function getBasketContent(){
tab=[3,2,2,1,2];
somme=tab[0]+tab[1]+tab[2]+tab[3]+tab[4];
console.log(somme,"fruits selected")
return tab;
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
