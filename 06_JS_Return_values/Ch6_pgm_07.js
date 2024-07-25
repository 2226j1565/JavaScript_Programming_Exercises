
var getPlayerName = function (playerName) {
    var prefix = "====";
    var suffix = "====";
    return prefix + " " + playerName + " " + suffix;
};

console.log(getPlayerName("Kiki"));   
console.log(getPlayerName("Mahesha")); 

console.log(""); 


var getPlayerNameWithBorder = function (playerName) {
    var border = "|";
    var borderLine = border + "\n";
    return borderLine + border + " " + playerName + " " + border + "\n" + borderLine;
};

console.log(getPlayerNameWithBorder("Jahver"));
