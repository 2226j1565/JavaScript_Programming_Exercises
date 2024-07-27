var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

    return planet;
};

// Create an array of planet objects
var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial"),
    buildPlanet("Mars", 4, "Terrestrial"), // Added planet
    buildPlanet("Saturn", 6, "Gas Giant")   // Added planet
];

// Display each planet's information with visual separation
planets.forEach(function (planet, index) {
    planet.showPlanet();
    if (index < planets.length - 1) {
        console.log('---'); // Visual separator
    }
});
