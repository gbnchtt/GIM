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

  // Draw the optical illusion
  drawOpticalIllusion(0, 0, numLines, lineLength, lineOffset);

  // Draw clock hands
  drawSecondHand();
  drawMinuteHand();
  drawHourHand();

  // Update optical illusion parameters
  lineLength = 200 + sin(frameCount * 0.05) * 100; // Vary line length with a sine function
  lineOffset = 100 + sin(frameCount * 0.03) * 50; // Vary line offset with a different sine function
  angleIncrement = 0.05 + sin(frameCount * 0.02) * 0.02; // Vary angle increment with another sine function
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

function drawSecondHand() {
  let s = second();
  let angle = map(s, 0, 60, 0, TWO_PI) - HALF_PI;
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 80 * cos(angle), 80 * sin(angle));
}

function drawMinuteHand() {
  let m = minute();
  let angle = map(m, 0, 60, 0, TWO_PI) - HALF_PI;
  stroke(0);
  strokeWeight(3);
  line(0, 0, 60 * cos(angle), 60 * sin(angle));
}

function drawHourHand() {
  let h = hour() % 12;
  let m = minute();
  let angle = map(h + m / 60, 0, 12, 0, TWO_PI) - HALF_PI;
  stroke(0);
  strokeWeight(4);
  line(0, 0, 40 * cos(angle), 40 * sin(angle));
}
