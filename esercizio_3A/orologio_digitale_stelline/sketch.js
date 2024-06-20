let stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
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

	let txt = hour() + ":" + minute() + ":" + s;

	textAlign(CENTER, CENTER);

	textSize(40);
	fill(180, 2, 4);

	const ora = h + ":" + m + ":" + s;
	text(ora, width / 2, height / 2);

	// Mostra stelline
	for (let i = 0; i < stars.length; i++) {
		stars[i].display();
		stars[i].update();
	}

	// Rimuove le stelline che escono dalla finestra
	for (let i = stars.length - 1; i >= 0; i--) {
		if (stars[i].y > height) {
			stars.splice(i, 1);
		}
	}
}

function mouseMoved() {
	// Aggiunge una nuova stellina
	let newStar = new Star(mouseX, mouseY);
	stars.push(newStar);
}

class Star {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = random(1, 5);
		this.speed = random(1, 3);
	}

	display() {
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.size, this.size);
	}

	update() {
		this.y += this.speed;
	}
}
