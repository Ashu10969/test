const questions = [
    { english: "apple", japanese: "りんご" },
    { english: "dog", japanese: "犬" },
    { english: "cat", japanese: "猫" },
    { english: "book", japanese: "本" },
    { english: "school", japanese: "学校" },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = `What is the Japanese meaning of '${question.english}'?`;
        document.getElementById('answer').value = '';
    } else {
        showResult();
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].japanese;

    if (userAnswer === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert(`Wrong! The correct answer is '${correctAnswer}'.`);
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').textContent = `You scored ${score} out of ${questions.length}!`;
}

// Initialize the first question
loadQuestion();

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}
