const initial = prompt("Enter your initials!");
const score = initial + ": " + localStorage.getItem("score");
let li = document.createElement("li");
li.textContent = score;
document.querySelector(".scoreList").appendChild(li);
