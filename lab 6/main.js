const container = document.getElementById("game-container");
const canvas = document.getElementById("game-canvas");
const scoreTable = document.getElementById("score-table");

const ctx = canvas.getContext("2d");

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let holeX = Math.random() * (canvas.width - 50) + 25;
let holeY = Math.random() * (canvas.height - 50) + 25;
let velocityX = 0;
let velocityY = 0;

let score = 0;
let runNumber = 0;
let intervalId;

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
    score++;
    holeX = Math.random() * (canvas.width - 50) + 25;
    holeY = Math.random() * (canvas.height - 50) + 25;
  }

  // Request animation frame
  window.requestAnimationFrame(animate);
}

// Start the animation
window.requestAnimationFrame(animate);

// Add the deviceorientation event listener
window.addEventListener("deviceorientation", (e) => {
  velocityX = e.gamma || 0;
  velocityY = 90 - (e.beta || 90);
});

// Start the interval to check the score every minute
intervalId = setInterval(() => {
  const date = new Date();
  // Create a new row
  const row = document.createElement("tr");

  // Create and append the run number cell
  const runNumberCell = document.createElement("td");
  runNumberCell.innerHTML = ++runNumber;
  row.appendChild(runNumberCell);

  // Create and append the time cell
  const timeCell = document.createElement("td");
  timeCell.innerHTML = date.toLocaleTimeString();
  row.appendChild(timeCell);

  // Create and append the score cell
  const scoreCell = document.createElement("td");
  scoreCell.innerHTML = score;
  row.appendChild(scoreCell);
  scoreTable.appendChild(row);

  // Append the row to the table
  document.getElementById("score-table").appendChild(row);

  score = 0;
}, 10000);
