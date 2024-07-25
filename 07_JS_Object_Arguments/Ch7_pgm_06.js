
var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};
for (var i = -20; i <= 60; i += 10) {
    console.log(line(i));
}

var spaces = function (numSpaces) {
    numSpaces = Math.max(0, numSpaces);
    numSpaces = Math.min(40, numSpaces);
    return " ".repeat(numSpaces); 
};

// Testing the spaces function
console.log("'" + spaces(10) + "'");
console.log("'" + spaces(30) + "'");
console.log("'" + spaces(50) + "'");

var emptyBox = function (width) {
    var border = line(width); 
    var spaceLine = "=" + spaces(width - 2) + "="; 

    console.log(border);
    for (var i = 0; i < 3; i++) {
        console.log(spaceLine);
    }
    console.log(border);
};

emptyBox(12);
