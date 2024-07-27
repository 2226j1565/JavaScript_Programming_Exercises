// Define the Planet constructor function
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };
    this.showMoons = function () {
        if (this.moons.length > 0) {
            this.moons.forEach(function(moon, index) {
                console.log("(" + index + ") " + moon);
            });
        } else {
            console.log("No moons.");
        }
    };
    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Index out of range";
        }
    };
};
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); 

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Nereid"); 

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("None"); 
[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
    console.log(); 
});
console.log("Moon at index 1 of Jupiter: " + planet1.getMoon(1)); 
console.log("Moon at index 2 of Neptune: " + planet2.getMoon(2)); 
console.log("Moon at index 0 of Mercury: " + planet3.getMoon(0)); 
console.log("Moon at index 1 of Mercury: " + planet3.getMoon(1)); 
