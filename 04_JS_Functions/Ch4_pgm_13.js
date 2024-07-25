var showPlayerPlace = function (player) {
    console.log(player.name + " is in " + player.place);
};


showPlayerPlace(player1);
showPlayerPlace(player2); 
var showPlayerHealth = function (player) {
    console.log(player.name + " has health " + player.health);
};

showPlayerHealth(player1); 
showPlayerHealth(player2); 
var showPlayerInfo = function (player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerPlace(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
};

showPlayerInfo(player1);
showPlayerInfo(player2);
