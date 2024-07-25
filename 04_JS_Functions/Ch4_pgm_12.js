var sale1;
var sale2;
var sale3;
var sale4; 
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 18 }; 

calculateTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function () {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();

sale = sale4;
calculateTax();
displaySale();
var sales = [
    { price: 140, taxRate: 15 },
    { price: 40, taxRate: 10 },
    { price: 120, taxRate: 20 },
    { price: 200, taxRate: 18 }
];

var calculateTax = function (sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

var displaySale = function (sale) {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
};

var processSale = function (sale) {
    calculateTax(sale);
    displaySale(sale);
};

sales.forEach(function(sale) {
    processSale(sale);
});
