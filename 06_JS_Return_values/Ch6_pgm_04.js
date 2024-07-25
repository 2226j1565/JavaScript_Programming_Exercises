var number1 = 50;
var number2 = 23;
var sum = add(number1, number2);

console.log('The sum of ' + number1 + ' and ' + number2 + ' is ' + sum);

var sumOfThree = add(add(10, 20), 30);
console.log(sumOfThree); 
var addThree = function (number1, number2, number3) {
    return add(add(number1, number2), number3);
};
var sumThree = addThree(5, 15, 25);
console.log(sumThree); 
