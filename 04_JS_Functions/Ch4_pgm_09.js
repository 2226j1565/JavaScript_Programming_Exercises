var showMovieInfo;

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
showMovieInfo();
var movie;
var showMovieInfo;

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
showMovieInfo();
var movie = {};
var showMovieInfo;

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
showMovieInfo();
var movie = {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Ellen Page", "Tom Hardy"],
    directors: ["Christopher Nolan"]
};
var showMovieInfo;

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors.join(", "));
    console.log("Directors: " + movie.directors.join(", "));
    console.log("------------------------------");
};
showMovieInfo();
