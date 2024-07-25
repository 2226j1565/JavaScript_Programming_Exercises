var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra", "Lena", "Marek" ];
showArguments = function (item, index, wholeArray) {
 
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
