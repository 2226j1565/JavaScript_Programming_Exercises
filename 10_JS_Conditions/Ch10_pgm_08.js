// Enhanced public interface with additional methods
var getGame = function () {
    var spacer = {
    };

    var Player = function (name, health) {
        var newLine = spacer.newLine();
        var items = [];
        var place = null;

        var getNameInfo = function () {
            return name;
        };

        var getHealthInfo = function () {
            return "(" + health + ")";
        };

        var getItemsInfo = function () {
            var itemsString = "Items:" + newLine;
            items.forEach(function (item) {
                itemsString += "   - " + item + newLine;
            });
            return itemsString;
        };

        var getTitleInfo = function () {
            return getNameInfo() + " " + getHealthInfo();
        };

        var getInfo = function () {
            var info = spacer.box(getTitleInfo(), 40, "*");
            info += "  " + getItemsInfo();
            info += spacer.line(40, "*");
            info += newLine;
            return info;
        };

        this.addItem = function (item) {
            items.push(item);
        };

        this.dropItem = function (item) {
            var index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                return item;
            } else {
                return "*** Item not found in inventory ***";
            }
        };

        this.setPlace = function (destination) {
            place = destination;
        };

        this.getPlace = function () {
            return place;
        };

        this.showInfo = function (character) {
            console.log(getInfo(character));
        };

        this.getItems = function () {
            return items;
        };
    };

    var Place = function (title, description) {
        var newLine = spacer.newLine();
        var items = [];
        var exits = {};

        var getItemsInfo = function () {
            var itemsString = "Items: " + newLine;
            items.forEach(function (item) {
                itemsString += "   - " + item;
                itemsString += newLine;
            });
            return itemsString;
        };

        var getExitsInfo = function () {
            var exitsString = "Exits from " + title;
            exitsString += ":" + newLine;

            Object.keys(exits).forEach(function (key) {
                exitsString += "   - " + key;
                exitsString += newLine;
            });

            return exitsString;
        };

        var getTitleInfo = function () {
            return spacer.box(title, title.length + 4, "=");
        };

        var getInfo = function () {
            var infoString = getTitleInfo();
            infoString += description;
            infoString += newLine + newLine;
            infoString += getItemsInfo() + newLine;
            infoString += getExitsInfo();
            infoString += spacer.line(40, "=") + newLine;
            return infoString;
        };

        this.showInfo = function () {
            console.log(getInfo());
        };

        this.addItem = function (item) {
            items.push(item);
        };

        this.addExit = function (direction, exit) {
            exits[direction] = exit;
        };

        this.getExit = function (direction) {
            return exits[direction];
        };

        this.getLastItem = function () {
            return items.pop();
        };
    };

    var render = function () {
        console.clear();
        player.getPlace().showInfo();
        player.showInfo();
    };

    var kitchen = new Place(
        "The Kitchen",
        "You are in a kitchen. There is a disturbing smell."
    );
    var library = new Place(
        "The Old Library",
        "You are in a library. Dusty books line the walls."
    );
    var garden = new Place(
        "The Kitchen Garden",
        "You are in a small, walled garden."
    );
    var cupboard = new Place(
        "The Kitchen Cupboard",
        "You are in a cupboard. It's surprisingly roomy."
    );

    kitchen.addItem("a piece of cheese");
    library.addItem("a rusty key");
    cupboard.addItem("a tin of spam");

    kitchen.addExit("south", library);
    kitchen.addExit("west", garden);
    kitchen.addExit("east", cupboard);

    library.addExit("north", kitchen);
    garden.addExit("east", kitchen);
    cupboard.addExit("west", kitchen);

    var player = new Player("Kandra", 50);
    player.addItem("The Sword of Doom");
    player.setPlace(kitchen);

    render();

    return {
        go: function (direction) {
            var place = player.getPlace();
            var destination = place.getExit(direction);

            if (destination !== undefined) {
                player.setPlace(destination);
                render();
                return "";
            } else {
                return "*** There is no exit in that direction ***";
            }
        },

        get: function () {
            var place = player.getPlace();
            var item = place.getLastItem();

            if (item !== undefined) {
                player.addItem(item);
                render();
                return "";
            } else {
                return "*** There is no item to get ***";
            }
        },

        drop: function (item) {
            var droppedItem = player.dropItem(item);
            if (droppedItem !== undefined) {
                player.getPlace().addItem(droppedItem);
                render();
                return "";
            } else {
                return "*** Item not found in inventory ***";
            }
        },

        look: function () {
            var place = player.getPlace();
            return place.getInfo();
        },

        inventory: function () {
            var items = player.getItems();
            if (items.length > 0) {
                return "Your inventory:" + spacer.newLine() + items.map(function (item) {
                    return "   - " + item;
                }).join(spacer.newLine());
            } else {
                return "*** Your inventory is empty ***";
            }
        }
    };
};

var game = getGame();
