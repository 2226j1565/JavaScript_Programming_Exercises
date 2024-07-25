var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
};

var quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
};

var quizQuestion3 = {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
};
var showQuizQuestion = function (quiz) {
    console.log("Question: " + quiz.question);
    console.log("Options:");
    for (var i = 0; i < quiz.options.length; i++) {
        console.log("(" + (i + 1) + ") " + quiz.options[i]);
    }
    console.log("Answer: " + quiz.answer);
    console.log("------------------------------");
};

showQuizQuestion(quizQuestion1);

showQuizQuestion(quizQuestion2);

showQuizQuestion(quizQuestion3);
