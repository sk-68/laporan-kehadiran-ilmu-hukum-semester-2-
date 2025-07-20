function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.innerText = now.toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);
updateClock();
