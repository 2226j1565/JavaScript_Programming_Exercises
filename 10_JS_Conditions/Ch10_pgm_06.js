var getGuesser = function (range, offset) {
   
    offset = Math.max(1, offset);
    
    var secret = Math.floor(Math.random() * range + offset);
  
    return function (userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else if (userNumber > secret) {
            return "Too high!";
        } else {
            return "Too low!";
        }
    };
};

var guess = getGuesser(20, 10);

console.log(guess(15)); 
console.log(guess(25)); 
console.log(guess(10)); 
