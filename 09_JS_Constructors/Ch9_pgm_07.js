// Define the QuizQuestion constructor function
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};
var question1 = new QuizQuestion("What is the capital of France?", "Paris");
question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon");
question1.showQuestion();
var question2 = new QuizQuestion("What is the largest planet in our solar system?", "Jupiter");
question2.addOption("Earth");
question2.addOption("Mars");
question2.addOption("Jupiter");
question2.addOption("Saturn");
question2.showQuestion();
var question3 = new QuizQuestion("Which element has the chemical symbol 'O'?", "Oxygen");
question3.addOption("Oxygen");
question3.addOption("Gold");
question3.addOption("Silver");
question3.addOption("Iron");
question3.showQuestion();
