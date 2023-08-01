let time = 60;
let timer = setInterval(() => {
  console.log("timer");
  time--;
  localStorage.setItem("score", time);
  document.querySelector("#timer").textContent = time;
}, 1000);
