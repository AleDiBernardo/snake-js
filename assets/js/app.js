const square = document.querySelector(".square");

document.addEventListener("keydown", function (e) {
  console.log(square.offsetLeft, "left");
  console.log(square.offsetTop, "top");

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

  // se il quadrato esce dal bordo sinistro riappare dal lato opposto
  if (square.offsetLeft < 0) {
    square.style.left = window.innerWidth + "px";
  }

  // se lo square supera la larghezza della schermata (lato destro) riappare dal lato opposto
  if (square.offsetLeft > window.innerWidth) {
    square.style.left = "0";
  }

  // se il quadrato esce dal bordo superiore riappare dal lato opposto
  if (square.offsetTop < 0) {
    square.style.top = window.innerHeight + "px";

  }

  // se lo square supera l'altezza della schermata (lato inferiore) riappare dal lato opposto
  if (square.offsetTop > window.innerHeight) {
    square.style.top = "0";
  }
});
