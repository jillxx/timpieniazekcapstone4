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
var button2;
for (var i = 0; i < products.length; i++) {
	item = document.createElement("p");
	item.innerText = products[i].quantity + products[i].name + products[i].price;
	document.body.appendChild(item);
	button = document.createElement("button");
	button.innerText = "+";
	
	//alert("button about to be created");
	document.body.appendChild(button);
	button = document.createElement("button");
	button.innerText = "-";
	document.body.appendChild(button);
	
};



function addItem(num) {
	alert("CLICKED!");
	
	console.log(num);
	products[num].quantity++;
	console.log(products[num]);
}