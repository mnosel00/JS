const container = document.getElementById("game-container");
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let holeX = Math.random() * (canvas.width - 50) + 25;
let holeY = Math.random() * (canvas.height - 50) + 25;
let velocityX = 0;
let velocityY = 0;

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(velocityX);
  // console.log(velocityY);

  // Update the ball's position
  ballX += velocityX;
  ballY += velocityY;

  // Keep the ball within the canvas boundaries
  if (ballX < 0 + 25 || ballX > canvas.width - 25) {
    velocityX = -velocityX;
  }
  if (ballY < 0 + 25 || ballY > canvas.height - 25) {
    velocityY = -velocityY;
  }

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the hole
  ctx.beginPath();
  ctx.arc(holeX, holeY, 25, 0, 2 * Math.PI);
  ctx.stroke();

  // Check if the ball is overlapping with the hole
  if (Math.abs(ballX - holeX) < 50 && Math.abs(ballY - holeY) < 50) {
    alert("Kula trafiła do dziury!");
  } else {
    window.requestAnimationFrame(animate);
  }
}

window.requestAnimationFrame(animate);

window.addEventListener("deviceorientation", (e) => {
  velocityX = e.gamma || 0;
  velocityY = 90 - (e.beta || 90);
});
