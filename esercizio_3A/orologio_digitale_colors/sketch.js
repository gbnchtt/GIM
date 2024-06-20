let textColor;
let particleSystem;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textColor = color(180, 2, 4);
    particleSystem = new ParticleSystem();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(66, 49, 137);

    let s = second();
    let m = minute();
    let h = hour();

    let ora = nf(h, 2) + ":"  + nf(m, 2) + ":"  + nf(s, 2);

    textAlign(CENTER, CENTER);
    textSize(100);

    // Cambio colore testo ogni secondo
    textColor = color(random(255), random(255), random(255));

    fill(textColor);
    text(ora, width / 2, height / 2);

    // Animazioni delle particelle
    particleSystem.update();
    particleSystem.display();
}

function mousePressed() {
    // Aggiunge particelle al clic del mouse
    particleSystem.addParticles(mouseX, mouseY);
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
        this.color = color(random(255), random(255), random(255));
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    display() {
        noStroke();
        fill(this.color, this.alpha);
        ellipse(this.x, this.y, 10);
    }

    isDead() {
        return this.alpha <= 0;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    addParticles(x, y) {
        for (let i = 0; i < 10; i++) {
            let p = new Particle(x, y);
            this.particles.push(p);
        }
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }

    display() {
        for (let p of this.particles) {
            p.display();
        }
    }
}
