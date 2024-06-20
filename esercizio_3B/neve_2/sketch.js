let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  // Aggiungi nuovi fiocchi di neve ad intervalli casuali
  if (random(1) < 0.1) {
    snowflakes.push(new Snowflake());
  }

  // Mostra e muovi ogni fiocco di neve
  for (let flake of snowflakes) {
    flake.update();
    flake.display();
  }

  // Rimuovi fiocchi di neve fuori schermo
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    if (snowflakes[i].y > height + 10) {
      snowflakes.splice(i, 1);
    }
  }
}

class Snowflake {
  constructor() {
    this.x = random(width); // Posizione x casuale
    this.y = random(-50, -10); // Partenza alta dei fiocchi di neve
    this.diameter = random(2, 8); // Dimensione dei fiocchi di neve
    this.speed = random(1, 3); // Velocità di caduta dei fiocchi di neve
  }

  // Aggiorna la posizione del fiocco di neve
  update() {
    this.y += this.speed;
  }

  // Mostra il fiocco di neve
  display() {
    fill(255, 200); // Colore bianco leggermente trasparente
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
