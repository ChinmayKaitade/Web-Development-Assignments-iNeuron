// Define your questions and answers here
const questions = [
  {
    question: "What is capital of India?",
    options: ["Mumbai", "Delhi", "Pune", "Nagpur"],
    correctAnswer: 1, // Index of the correct option
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["3", "8", "6", "4"],
    correctAnswer: 2, // Index of the correct option
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 2, // Index of the correct option
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
    correctAnswer: 2, // Index of the correct option
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Hg", "Pb"],
    correctAnswer: 0, // Index of the correct option
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1, // Index of the correct option
  },
  {
    question: "What is the largest?",
    options: ["Pacific", "Arctic", "Atlantic", "Indian"],
    correctAnswer: 0, // Index of the correct option
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Korea", "Japan", "Vietnam"],
    correctAnswer: 2, // Index of the correct option
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 1, // Index of the correct option
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["0°F", "32°F", "100°F", "212°F"],
    correctAnswer: 1, // Index of the correct option
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score");
const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const scoreboard = document.querySelector(".scoreboard");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");

// Get the "Start Quiz" button and quiz container elements
const startQuizButton = document.getElementById("start-quiz-button");
const quizContainer = document.querySelector(".quiz-container");

// Add an event listener to start the quiz when the button is clicked
startQuizButton.addEventListener("click", () => {
  // Hide the start button container
  startQuizButton.parentElement.style.display = "none";
  // Show the quiz container
  quizContainer.style.display = "block";
  // Start the quiz
  loadQuestion();
});

// Initially disable the "Next" button
nextButton.disabled = true;

// Variable to track whether an option has been clicked
let optionClicked = false;

function loadQuestion() {
  if (currentQuestion < questions.length) {
    questionCounter.textContent = `Question ${currentQuestion + 1}/${
      questions.length
    }`;
    questionText.textContent = questions[currentQuestion].question;

    options.forEach((option, index) => {
      option.textContent = questions[currentQuestion].options[index];
      option.style.backgroundColor = "white"; // Reset option background color
      option.style.pointerEvents = "auto"; // Re-enable click events
      option.onclick = function () {
        handleOptionClick(index);
      };
    });

    // Re-enable the "Next" button only if an option has been clicked
    nextButton.disabled = !optionClicked;
  } else {
    showScoreboard();
  }
}

function handleOptionClick(selectedOptionIndex) {
  const correctAnswerIndex = questions[currentQuestion].correctAnswer;

  // Remove click event listeners from all options to prevent multiple clicks
  options.forEach((option) => {
    option.style.pointerEvents = "none";
    option.onclick = null;
  });

  if (selectedOptionIndex === correctAnswerIndex) {
    options[selectedOptionIndex].style.backgroundColor = "green";
    score++;
    scoreCounter.textContent = `Score: ${score}`;
  } else {
    options[selectedOptionIndex].style.backgroundColor = "red";
    options[correctAnswerIndex].style.backgroundColor = "light-green";
  }

  optionClicked = true; // Mark an option as clicked
  nextButton.disabled = false;
}

function showScoreboard() {
  scoreboard.style.display = "block";
  finalScore.textContent = score;
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  optionClicked = false; // Reset optionClicked flag
  nextButton.disabled = true;
  loadQuestion();
});

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreboard.style.display = "none";
  loadQuestion();
  scoreCounter.textContent = "Score: 0";
  optionClicked = false; // Reset optionClicked flag
});

// Initialize the quiz
loadQuestion();
