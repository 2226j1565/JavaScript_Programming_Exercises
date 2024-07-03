// Concatenating string properties

var book1;
var book2;
book1 = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien"
};
book2 = {
    title: "Northern Lights",
    author: "Philip Pullman"
};
console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);
var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
};
console.log(book3.title + " by " + book3.author);
book3.publishedYear = 1960;
console.log(book3.title + " by " + book3.author + ", published in " + book3.publishedYear);
