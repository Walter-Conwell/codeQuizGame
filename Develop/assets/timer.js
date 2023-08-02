let time = 60;
let timer = setInterval(() => {
  console.log("timer");
  time--;
  localStorage.setItem("score", time);
  document.querySelector("#timer").textContent = time;
  if (time <= 0) {
    clearInterval(timer);
    alert("Time's up!");
    window.location.href = "highscores.html";
  }
}, 1000);
