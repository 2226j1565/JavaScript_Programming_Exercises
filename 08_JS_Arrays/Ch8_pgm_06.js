// Initialize the items array and add some items
var items = [];
var item = "The Pyramids";
var removed;
items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");
console.log("Initial items:", items);
removed = items.pop();
console.log(removed + " was removed");
console.log("Items remaining:", items.join(" and "));
items.push("The Eiffel Tower");
console.log("Updated items:", items.join(" and "));
items[2] = "The Taj Mahal";
console.log("Items after updating index 2:", items.join(" and "));
items.push("Machu Picchu", "Great Wall of China");
console.log("Final items:", items.join(" and "));
