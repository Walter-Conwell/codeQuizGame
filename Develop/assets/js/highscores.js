// variables are declared
const initial = prompt("Enter your initials!");
// the initials input is concatenated along with the score (taken from local storage), and displayed on screen.
const score = initial + ": " + localStorage.getItem("score");
let li = document.createElement("li");
li.textContent = score;
//  the ".scoreList" is appended to the dom to be displayed
document.querySelector(".scoreList").appendChild(li);

// takes user back to the starting screen when pressed.
const goBackBtn = document.querySelector("#goBackBtn");

if (document.getElementById("goBackBtn")) {
  // Event listener for the goBackBtn
  goBackBtn.addEventListener("click", function () {
    console.log("redirecting to index.html");
    // Redirect to the questions.html page when the quiz starts
    window.location.href = "index.html";
  });
}
