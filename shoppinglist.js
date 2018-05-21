var products = [
	{name : "Shampoo", price : 11.99},
	{name : "Conditioner", price : 14.99},
	{name : "Hair Wax", price : 28.99},
	{name : "Hair Spray", price : 8.99},
	{name : "Hot Oil Treatment", price : 45.99},
	{name : "Hair Dye", price : 19.99}
];

//var products = ["Shampoo", "Conditioner", "Hair Wax", "Hair Spray", "Hot Oil Treatment", "Hair Dye"];
//var prices = [11.99, 14.99, 28.99, 8.99, 45.99, 19.99];
// var item;
// var button;
// var button2;
// for (var i = 0; i < products.length; i++) {
// 	item = document.createElement("p");
// 	item.innerText = products[i].quantity + products[i].name + products[i].price;
// 	document.body.appendChild(item);
// 	button = document.createElement("button");
// 	button.innerText = "+";
//
// 	//alert("button about to be created");
// 	document.body.appendChild(button);
// 	button = document.createElement("button");
// 	button.innerText = "-";
// 	document.body.appendChild(button);
//
// };
var cart = [];

function addItem(num) {
	alert("CLICKED!");
  cart.push(products[num]);
	products[num].quantity++;
	console.log(cart);
}

function checkOut(){
	var totalPrice = 0;
	for (var i = 0; i < cart.length; i++) {
		var item = document.createElement("p");
 		item.innerText = cart[i].name + cart[i].price;
  	document.body.appendChild(item);
		totalPrice += cart[i].price;

	}
	var displayTotal = document.createElement("p");
	displayTotal.innerText = "Total Price: "+ totalPrice;
	document.body.appendChild(displayTotal);
}
