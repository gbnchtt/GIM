let posizioneX, posizioneY;
let velX, velY;
let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  posizioneX = width / 2;
  posizioneY = height / 2;

  velX = 20;
  velY = 3;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Aggiungi la posizione corrente alla scia
  trail.push({
    x: posizioneX,
    y: posizioneY
  });

  // Limita la lunghezza della scia
  if (trail.length > 50) {
    trail.splice(0, 1);
  }

  // Aggiorna la posizione della stella
  posizioneX += velX;
  posizioneY += velY;

  // Rimbalza sugli angoli
  if (posizioneX >= width || posizioneX < 0) {
    velX = -velX;
  }

  if (posizioneY >= height || posizioneY < 0) {
    velY = -velY;
  }

  // Disegna lo sfondo
  background(37,40,80);

  // Disegna la scia di stelle
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 150, 50);
    fill(255, transparency);
    noStroke();
    let starSize = map(i, 0, trail.length, 10, 2); // Dimensioni decrescenti delle stelle
    drawStar(trail[i].x, trail[i].y, starSize, starSize * 2, 5);
  }

  // Disegna la stella principale
  drawStar(posizioneX, posizioneY, 20, 40, 5);
}

// Funzione per disegnare una stella
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
