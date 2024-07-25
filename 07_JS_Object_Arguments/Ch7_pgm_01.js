// Define planet objects
var planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

var planet2 = {
    name: "Saturn",
    position: 6,
    type: "Gas Giant",
    radius: 58232,
    sizeRank: 2
};

var getPlanetInfo = function (planet) {
    return planet.name +
           "\nPosition: " + planet.position +
           "\nType: " + planet.type +
           "\nRadius: " + planet.radius + " km" +
           "\nSize Rank: " + planet.sizeRank;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
