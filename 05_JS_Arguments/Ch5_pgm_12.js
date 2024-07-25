var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace);
};


showPlayerPlace(player1.name, player1.place);  
showPlayerPlace(player2.name, player2.place);  
showPlayerPlace(player1.name.substring(0, 2), player1.place);  
showPlayerPlace(player1.name.substring(0, 3), player1.place); 
showPlayerPlace(player1.name.substring(0, 4), player1.place);  
showPlayerPlace(player2.name.substring(0, 2), player2.place);  
showPlayerPlace(player2.name.substring(0, 3), player2.place); 
showPlayerPlace(player2.name.substring(0, 4), player2.place);  
showPlayerPlace(player1.name.substring(1, 2), player1.place);  
showPlayerPlace(player1.name.substring(1, 3), player1.place);  
showPlayerPlace(player1.name.substring(1, 4), player1.place);  

showPlayerPlace(player2.name.substring(1, 2), player2.place);  
showPlayerPlace(player2.name.substring(1, 3), player2.place);  
showPlayerPlace(player2.name.substring(1, 4), player2.place); 


