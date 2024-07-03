// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2 = {
  title: "The Dark Knight",
  actors: "Christian Bale, Heath Ledger",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

var blogPost = {
  title: "Introduction to JavaScript",
  author: "John Doe",
  content: "JavaScript is a programming language...",
  published: "July 1, 2024"
};

console.log("Blog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.published);
console.log("------------------------------");
console.log("Content:");
console.log(blogPost.content);
console.log("------------------------------");
