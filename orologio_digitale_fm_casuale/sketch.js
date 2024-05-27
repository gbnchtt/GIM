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
let displayedPhrases = [];

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
    let index = int(random(motivationalPhrases.length));
    let newPhrase = motivationalPhrases.splice(index, 1)[0]; // Rimuove la frase selezionata dall'array
    let xPos = random(width);
    let yPos = random(height);
    displayedPhrases.push({phrase: newPhrase, x: xPos, y: yPos});
    if (motivationalPhrases.length === 0) {
      motivationalPhrases = displayedPhrases.map(phrase => phrase.phrase);
      displayedPhrases = [];
    }
  }

  // Testo dell'ora al centro
  textAlign(CENTER, CENTER);
  textSize(200);
  fill(156, 156, 156);
  const ora = h + ":" + m + ":" + s;
  text(ora, width / 2, height / 2);

  // Testo delle frasi motivazionali
  textSize(20);
  fill(255);
  for (let i = 0; i < displayedPhrases.length; i++) {
    text(displayedPhrases[i].phrase, displayedPhrases[i].x, displayedPhrases[i].y);
  }
}
