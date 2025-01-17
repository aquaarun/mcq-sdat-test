let questions = [];

// Fetch questions from JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        loadQuestion();
    });

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

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});
