
var rectangles = [
    { length: 5, width: 10 },
    { length: 7, width: 3 },
    { length: 9, width: 6 }
];

var assignArea = function (rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};

var showInfo = function (rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
    console.log("----------"); 
};    

rectangles.forEach(function (rectangle) {
    assignArea(rectangle); 
    showInfo(rectangle);  
});
