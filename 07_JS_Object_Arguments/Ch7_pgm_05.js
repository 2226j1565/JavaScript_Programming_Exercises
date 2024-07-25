var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest of the three numbers");
};


showSmaller(12, 3);           
showSmaller(-10, 3);          

showLarger(12, 3);           
showLarger(-10, 3);          

showSmallest(5, 8, 3);       
showSmallest(-1, -7, 0);     
showSmallest(10, 10, 10);    
