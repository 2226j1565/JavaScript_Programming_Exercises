var getGuesser = function () {
    var secret = Math.floor(Math.random() * (50 - 30 + 1) + 30); // Secret number between 30 and 50
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
  };
  
var guess = getGuesser();
console.log(guess(35));
console.log(guess(40)); 
var between = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(between(1, 5));  
console.log(between(100, 200)); 
console.log(between(30, 50)); 
