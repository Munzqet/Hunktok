const questions = [
  {
    question: "Quanto fa 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Qual è la capitale dell'Italia?",
    options: ["Roma", "Milano", "Firenze", "Napoli"],
    answer: "Roma"
  },
  {
    question: "Quale pianeta è più vicino al Sole?",
    options: ["Terra", "Venere", "Mercurio", "Marte"],
    answer: "Mercurio"
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    alert("Risposta corretta!");
  } else {
    alert("Risposta sbagliata. La risposta corretta è: " + currentQuestion.answer);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    alert("Hai completato il quiz!");
    currentQuestionIndex = 0; // Reset del quiz dopo l'ultima domanda
  }
  loadQuestion();
}

// Carica la prima domanda all'avvio
loadQuestion();
