const categories = {
  macchinisti: [
    {
      question: "Quanto fa 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Quale è il segnale di inizio pista limitata?",
      options: ["SAL", "SL", "SLF", "SSL"],
      answer: "SAL"
    }
  ],
  capitreno: [
    {
      question: "Qual è la capitale dell'Italia?",
      options: ["Roma", "Milano", "Firenze", "Napoli"],
      answer: "Roma"
    },
    {
      question: "Qual è la velocità massima del treno ad alta velocità?",
      options: ["200 km/h", "250 km/h", "300 km/h", "350 km/h"],
      answer: "350 km/h"
    }
  ],
  "dirigenti-movimento": [
    {
      question: "Quale pianeta è più vicino al Sole?",
      options: ["Terra", "Venere", "Mercurio", "Marte"],
      answer: "Mercurio"
    },
    {
      question: "Cosa significa l'acronimo TIR?",
      options: ["Trasporto Intermodale Routier", "Trans International Routier", "Transport International Routier", "Trasporto Internazionale Routier"],
      answer: "Transport International Routier"
    }
  ]
};

let currentQuestionIndex = 0;
let currentCategory = "macchinisti";

function loadQuestion() {
  const currentQuestion = categories[currentCategory][currentQuestionIndex];
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
  const currentQuestion = categories[currentCategory][currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    alert("Risposta corretta!");
  } else {
    alert("Risposta sbagliata. La risposta corretta è: " + currentQuestion.answer);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= categories[currentCategory].length) {
    alert("Hai completato il quiz!");
    currentQuestionIndex = 0; // Reset del quiz dopo l'ultima domanda
  }
  loadQuestion();
}

function changeCategory() {
  currentCategory = document.getElementById("category-select").value;
  currentQuestionIndex = 0; // Reset dell'indice della domanda quando si cambia categoria
  loadQuestion();
}

// Carica la prima domanda all'avvio
loadQuestion();
