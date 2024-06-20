let angle = 0;
let numLines = 100;
let lineLength = 200;
let lineOffset = 100;
let angleIncrement = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let h = hour() % 12; // Ottieni l'ora in formato 12 ore
  let m = minute();
  let s = second();

  // Calcola le coordinate del centro dell'orologio
  let clockCenterX = 0;
  let clockCenterY = 0;


  strokeCap(SQUARE);
  // Disegna l'illusione ottica al centro dell'orologio
  drawOpticalIllusion(clockCenterX, clockCenterY, numLines, lineLength, lineOffset);

  // Disegna le lancette
  drawHourHand(h % 12, m);
  drawMinuteHand(m);
  drawSecondHand(s);
}

function drawOpticalIllusion(x, y, numLines, lineLength, lineOffset) {
  let space = TWO_PI / numLines;

  for (let i = 0; i < numLines; i++) {
    let startX = x + cos(angle + i * space) * lineOffset;
    let startY = y + sin(angle + i * space) * lineOffset;
    let endX = startX + cos(angle + i * space) * lineLength;
    let endY = startY + sin(angle + i * space) * lineLength;

    stroke(0);
    strokeWeight(2);
    line(startX, startY, endX, endY);
  }

  angle += angleIncrement;
}

function drawHourHand(hour, minute) {
  let angle = map(hour + minute / 60, 0, 12, 0, TWO_PI) - HALF_PI;
  let x = 50 * cos(angle);
  let y = 50 * sin(angle);
  stroke(0);
  strokeWeight(4);
  line(0, 0, x, y);
}

function drawMinuteHand(minute) {
  let angle = map(minute, 0, 60, 0, TWO_PI) - HALF_PI;
  let x = 80 * cos(angle);
  let y = 80 * sin(angle);
  stroke(0);
  strokeWeight(3);
  line(0, 0, x, y);
}

function drawSecondHand(second) {
  let angle = map(second, 0, 60, 0, TWO_PI) - HALF_PI;
  let x = 100 * cos(angle);
  let y = 100 * sin(angle);
  stroke(255, 0, 0); // La seconda mano è in rosso
  strokeWeight(2);
  line(0, 0, x, y);
}
