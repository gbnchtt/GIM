let angle = 0;
let numLines = 100;
let lineLength = 200;
let lineOffset = 100;
let angleIncrement = 0.05;

function windowResized () {

resizeCanvas (windowWidth, windowHeight)

}

function setup() {
createCanvas(windowWidth, windowHeight);
textSize(23); // Ridimensiona il testo
textAlign(CENTER, CENTER);
}

function draw() {
background(255);
let h = hour();
let m = minute();
let s = second();

// Disegna l'orario in verticale, prima ore, poi minuti e infine secondi
fill(0);
let time = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2); // Separazione con "\n"
text(time, width / 2, height / 2);

// Disegna l'illusione ottica
drawOpticalIllusion(width / 2, height / 2, numLines, angle, lineLength, lineOffset);

// Moltiplica le dimensioni dei parametri dell'illusione ottica
lineLength = 200 + sin(frameCount * 0.05) * 100; // Variazione della lunghezza della linea con una funzione sinusoidale
lineOffset = 100 + sin(frameCount * 0.03) * 50; // Variazione dell'offset della linea con un'altra funzione sinusoidale
angleIncrement = 0.05 + sin(frameCount * 0.02) * 0.02; // Variazione dell'incremento dell'angolo con un'altra funzione sinusoidale
angle += angleIncrement;
}

function drawOpticalIllusion(x, y, numLines, angle, lineLength, lineOffset) {
let space = TWO_PI / numLines;

for (let i = 0; i < numLines; i++) {
let startX = x + cos(angle + i * space) * lineOffset;
let startY = y + sin(angle + i * space) * lineOffset;
let endX = startX + cos(angle + i * space) * lineLength;
let endY = startY + sin(angle + i * space) * lineLength;


stroke(0);
strokeWeight(1);
line(startX, startY, endX, endY);

}

}