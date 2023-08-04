const initial = prompt("Enter your initials!");
const score = initial + ": " + localStorage.getItem("score");
let li = document.createElement("li");
li.textContent = score;
document.querySelector(".scoreList").appendChild(li);
const goBackBtn = document.querySelector("#goBackBtn");

if (document.getElementById("goBackBtn")) {
  // Event listener for the goBackBtn
  goBackBtn.addEventListener("click", function () {
    console.log("redirecting to index.html");
    // Redirect to the questions.html page when the quiz starts
    window.location.href = "index.html";
  });
}
