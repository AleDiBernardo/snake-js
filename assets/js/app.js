const square = document.querySelector(".square");

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowDown") {
    square.style.top = square.offsetTop + 50 + "px";
  }

  if (e.code === "ArrowUp") {
    square.style.top = square.offsetTop - 50 + "px";
  }

  if (e.code === "ArrowRight") {
    square.style.left = square.offsetLeft + 50 + "px";
  }

  if (e.code === "ArrowLeft") {
    square.style.left = square.offsetLeft - 50 + "px";
  }
});
