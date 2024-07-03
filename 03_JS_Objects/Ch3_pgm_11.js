// Using a property in a calculation

var player1;
player1 = {
    name: "Max",
    score: 0
};
console.log(player1.name + " has scored " + player1.score);
player1.score = player1.score + 50;
console.log(player1.name + " has scored " + player1.score);
player1.score = player1.score * 1.1;
console.log(player1.name + "'s score after 10% increase: " + player1.score);
var player2 = {
    name: "Alice",
    score: 100
};
console.log(player2.name + " has scored " + player2.score);
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);
