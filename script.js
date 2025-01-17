const questions = [
    { question: "What is 2 + 2?", options: ["1", "2", "3", "4"], correct: "D" },
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], correct: "A" }
];

let currentQuestionIndex = 0;
let timeLeft = 60;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        alert("Test Complete!");
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("optionA").nextElementSibling.textContent = questionData.options[0];
    document.getElementById("optionB").nextElementSibling.textContent = questionData.options[1];
    document.getElementById("optionC").nextElementSibling.textContent = questionData.options[2];
    document.getElementById("optionD").nextElementSibling.textContent = questionData.options[3];
    timeLeft = 60;
}

function startTimer() {
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up for this question!");
            nextQuestion();
        } else {
            document.getElementById("timer").textContent = `${timeLeft} seconds left`;
            timeLeft--;
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

loadQuestion();
startTimer();
