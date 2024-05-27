let lastMinute = -1;
let motivationalPhrases = [
  "Believe in yourself!",
  "You can achieve anything!",
  "Stay positive and work hard!",
  "Success is the best revenge.",
  "Every day is a second chance.",
  "Never give up on your dreams!",
  "The best is yet to come.",
  "Stay focused and never give up.",
  "You are stronger than you think.",
  "Dream big and dare to fail."
];
let currentPhrase = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(1); // Aggiorna l'animazione ogni secondo
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(66, 49, 137);

  let s = second();
  if (s < 10) {
    s = "0" + s;
  }

  let m = minute();
  if (m < 10) {
    m = "0" + m;
  }

  let h = hour();
  if (h < 10) {
    h = "0" + h;
  }

  // Aggiorna la frase motivazionale se il minuto è cambiato
  if (minute() != lastMinute) {
    lastMinute = minute();
    currentPhrase = motivationalPhrases[int(random(motivationalPhrases.length))];
  }

  // Testo dell'ora al centro
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(180, 2, 4);
  const ora = h + ":" + m + ":" + s;
  text(ora, width / 2, height / 2);

  // Testo della frase motivazionale
  textSize(20);
  fill(255);
  text(currentPhrase, width / 2, height / 2 + 50);
}
