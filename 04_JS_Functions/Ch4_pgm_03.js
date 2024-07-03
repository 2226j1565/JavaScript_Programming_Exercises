// Adding tax to find the total cost

var sale1;
var sale2;
var sale3;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

console.log("price = $" + sale1.price);
console.log("tax @ " + sale1.taxRate + "% = $" + sale1.tax);
console.log("total cost = $" + sale1.total);

console.log("price = $" + sale2.price);
console.log("tax @ " + sale2.taxRate + "% = $" + sale2.tax);
console.log("total cost = $" + sale2.total);

console.log("price = $" + sale3.price);
console.log("tax @ " + sale3.taxRate + "% = $" + sale3.tax);
console.log("total cost = $" + sale3.total);

var sale1, sale2, sale3, sale4;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 8 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax;


console.log("Sale 1:");
console.log("Price = $" + sale1.price);
console.log("Tax @ " + sale1.taxRate + "% = $" + sale1.tax);
console.log("Total cost = $" + sale1.total);
console.log("------------------------------");


console.log("Sale 2:");
console.log("Price = $" + sale2.price);
console.log("Tax @ " + sale2.taxRate + "% = $" + sale2.tax);
console.log("Total cost = $" + sale2.total);
console.log("------------------------------");


console.log("Sale 3:");
console.log("Price = $" + sale3.price);
console.log("Tax @ " + sale3.taxRate + "% = $" + sale3.tax);
console.log("Total cost = $" + sale3.total);
console.log("------------------------------");


console.log("Sale 4:");
console.log("Price = $" + sale4.price);
console.log("Tax @ " + sale4.taxRate + "% = $" + sale4.tax);
console.log("Total cost = $" + sale4.total);
console.log("------------------------------");
