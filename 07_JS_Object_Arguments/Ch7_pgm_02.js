
var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.diameter = 2 * r;          // Add diameter property
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("Diameter = " + planet.diameter + " km"); // Display diameter
    console.log("Surface area = " + planet.area + " square km");
    console.log("Volume = " + planet.volume + " cubic km");
};

calculateSizes(planet1);
displaySizes(planet1);
