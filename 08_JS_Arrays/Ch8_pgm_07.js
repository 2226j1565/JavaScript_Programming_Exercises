// Initialize the items array
var items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];
items.push("The Eiffel Tower"); 
items[4] = "Machu Picchu";     
items.push("Great Wall of China"); 
var showInfo = function (itemToShow) {
    console.log(itemToShow + " (length: " + itemToShow.length + ")");
};
items.forEach(showInfo);
var totalLetters = function (array) {
    var total = 0;
    array.forEach(function(item) {
        total += item.length;
    });
    return total;
};
var total = totalLetters(items);
console.log("Total number of letters in all items: " + total);
