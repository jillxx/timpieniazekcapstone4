var products = [
	{name : "Shampoo", price : 11.99, quantity : 0},
	{name : "Conditioner", price : 14.99, quantity : 0},
	{name : "Hair Wax", price : 28.99, quantity : 0},
	{name : "Hair Spray", price : 8.99, quantity : 0},
	{name : "Hot Oil Treatment", price : 45.99, quantity : 0},
	{name : "Hair Dye", price : 19.99, quantity : 0}
];

//var products = ["Shampoo", "Conditioner", "Hair Wax", "Hair Spray", "Hot Oil Treatment", "Hair Dye"];
//var prices = [11.99, 14.99, 28.99, 8.99, 45.99, 19.99];
var item;
var button;
var
for (var i = 0; i < products.length; i++) {
	item = document.createElement("p");
	item.innerText = products[i].quantity + products[i].name + products[i].price;
	document.body.appendChild(item);
	button = document.createElement("button");
	button.innerText = "+";
	button.addEventListener("click", addItem());
	alert("button about to be created");
	document.body.appendChild(button);
	
};



function addItem() {
	alert("CLICKED!");
	// products[i].quantity.value++;
	// console.log(products[i].quantity.value);
}