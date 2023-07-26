// to do - get page to go to next page.
const startBtn = document.querySelector("#startBtn");
const questionText = document.querySelector("#questionText");
const choicesList = document.querySelector("#choicesList");
const choiceBtn = document.querySelector("#choiceBtn");
const nextBtn = document.querySelector("#nextBtn");

// Questions array
var questions = [
  {
    title: "What is JavaScript?",
    choices: [
      "A new scripting language used for styling HTML elements.",
      "An awesome cross-platform, object-oriented scripting language.",
      "A markup language used for creating structure for a webpage.",
    ],
    answer: "An awesome cross-platform, object-oriented scripting language.",
  },
  {
    title: "What is a function?",
    choices: [
      "The front-end side of an application.",
      "The mechanism in which the code is interpreted.",
      "A statement that performs a task or calculates a value, taking an input and returning an output.",
    ],
    answer:
      "A statement that performs a task or calculates a value, taking an input and returning an output.",
  },
  {
    title: "Is either a true or false value.",
    choices: ["Boolean", "String", "Flex"],
    answer: "Boolean",
  },
  {
    title: "Is an array",
    choices: [
      "A data structure consisting of multiple values in a single variable.",
      "The first value in a collection of data.",
      "a way in which we can manipulate a function",
    ],
    answer:
      "A data structure consisting of multiple values in a single variable.",
  },
  {
    title: "A library...",
    choices: [
      "Is a place where we can borrow books from.",
      "Provides reusable functions, classes, and modules.",
      "a function that is associated with an object or class.",
    ],
    answer: "Provides reusable functions, classes, and modules.",
  },
];

let currentQuestionIndex = 0;

// current question function
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.title;
  choicesList.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = choice;
    choicesList.appendChild(listItem);
  });
}

// there was no more start button at questions page.
if (document.getElementById("startBtn")) {
  // Event listener for the Start button
  startBtn.addEventListener("click", function () {
    console.log("startBtn clicked, redirecting to questions.html");
    // Redirect to the questions.html page when the quiz starts
    window.location.href = "questions.html";
  });
}

// If on questions.html, display the questions
if (window.location.href.includes("questions.html")) {
  displayQuestion();

  // Event listener for the Next Question button
  nextBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      // Display the next question if there are more questions
      displayQuestion(currentQuestionIndex);
    } else {
      // Handle the end of the questions (you can redirect to the next page or show a message)
      alert("End of questions");
      // Redirect back to the main page (you can change this to wherever you want to redirect after the quiz)
      window.location.href = "index.html";
    }
  });
}

//api fetch for inserting array??
