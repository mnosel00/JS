const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let X;
let Y;
const balls = [];

function start() {
  X = document.getElementById("ballsCount").value;
  Y = document.getElementById("distance").value;
  console.log(Y);
  console.log(X);
  // dodaj kulki z losowymi pozycjami i prędkościami
  for (let i = 0; i < X; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    });
  }

  // rysuj kulki co każdą klatkę (60fps)
  function drawFrame() {
    // wyczyść canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // dla każdej kulki
    for (const ball of balls) {
      // zaktualizuj pozycję
      ball.x += ball.dx;
      ball.y += ball.dy;

      // odbij się od krawędzi
      if (ball.x < 0 || ball.x > canvas.width) {
        ball.dx *= -1;
      }
      if (ball.y < 0 || ball.y > canvas.height) {
        ball.dy *= -1;
      }

      // rysuj kulke
      context.beginPath();
      context.arc(ball.x, ball.y, 5, 0, 2 * Math.PI);
      context.fill();
    }

    // rysuj linie pomiędzy kulkami, jeśli odległość jest mniejsza niż Y
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const ball1 = balls[i];
        const ball2 = balls[j];
        const distance = Math.sqrt(
          (ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2
        );
        if (distance < Y * canvas.width) {
          context.beginPath();
          context.moveTo(ball1.x, ball1.y);
          context.lineTo(ball2.x, ball2.y);
          context.stroke();
        }
      }
    }

    // zaplanuj następną klatkę
    requestAnimationFrame(drawFrame);
  }
  drawFrame();
}

function reset() {
  X = document.getElementById("ballsCount").value;
  Y = document.getElementById("distance").value;
  console.log(Y);
  console.log(X);
  balls.length = 0;
  for (let i = 0; i < X; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    });
  }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", reset);
