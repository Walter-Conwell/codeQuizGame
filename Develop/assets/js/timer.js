// timer starts at 60 seconds
let time = 60;
let timer = setInterval(() => {
  console.log("timer");
  time--;
  localStorage.setItem("score", time);
  document.querySelector("#timer").textContent = time;
  // conditional function. when the timer reaches zero, the user is prompted with an alert, and brought to highscores.html.
  if (time <= 0) {
    clearInterval(timer);
    alert("Time's up!");
    window.location.href = "highscores.html";
  }
}, 1000);
