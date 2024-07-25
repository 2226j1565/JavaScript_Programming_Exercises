var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};

console.log("$" + totalCost(30, 40, 3, 20)); 

console.log("$" + totalCost(30, 40, 12, 0)); 
