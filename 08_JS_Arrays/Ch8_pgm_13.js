var spacer = {
    blank: function () {
      return "";
    },
  
    newLine: function () {
      return "\n";
    },
  
    line: function (length, character) {
      var longString = "****************************************";
      longString += "----------------------------------------";
      longString += "========================================";
      longString += "++++++++++++++++++++++++++++++++++++++++";
      longString += "                                        ";
  
      length = Math.max(0, length);
      length = Math.min(40, length);
      return longString.substr(longString.indexOf(character), length);
    },
  
    wrap: function (text, length, character) {
      var padLength = length - text.length - 3;
      var wrapText = character + " " + text;
      wrapText += spacer.line(padLength, " ");
      wrapText += character;
      return wrapText;
    },
  
    box: function (text, length, character) {
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
    }
};



var getPlayerName = function (player) {
    return player.name;
};

var getPlayerHealth = function (player) {
    return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
    return player.name + " is in " + player.place;
};

var getPlayerItems = function (player) {
    var itemsString = "Items:" + spacer.newLine();
  
    player.items.forEach(function (item, index) {
        itemsString += " " + (index + 1) + ". " + item + spacer.newLine();
    });
  
    return itemsString;
};

var getPlayerInfo = function (player, character) {
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var longest = Math.max(place.length, health.length) + 4;

    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);

    info += spacer.newLine();
    info += "  " + getPlayerItems(player);
    info += spacer.newLine();
    info += spacer.line(longest, character);

    info += spacer.newLine();

    return info;
};

var showPlayerInfo = function (player, character) {
    console.log(getPlayerInfo(player, character));
};


var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: ["a trusty lamp"]
};

showPlayerInfo(player1, "=");

player1.items.push("a rusty key");
showPlayerInfo(player1, "*");
player1.items.push("a magical amulet");
console.log("Added an item.");
showPlayerInfo(player1, "#");

player1.items.pop();
console.log("Removed an item.");
showPlayerInfo(player1, "#");

var showItem = function (player, itemNumber) {
    var index = itemNumber - 1;
    if (index >= 0 && index < player.items.length) {
        console.log("Item " + itemNumber + ": " + player.items[index]);
    } else {
        console.log("Item number " + itemNumber + " does not exist.");
    }
};

showItem(player1, 2);

// 4) Function to add an item
var addItem = function (player, itemTitle) {
    player.items.push(itemTitle);
};

addItem(player1, "a new magic wand");
console.log("Added a new item.");
showPlayerInfo(player1, "@");
