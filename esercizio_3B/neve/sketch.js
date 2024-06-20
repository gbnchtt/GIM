function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
	noStroke();
  
	// Creiamo un effetto di neve
	for (let i = 0; i < 100; i++) {
	  let diametro = random(2, 8); // Dimensione dei fiocchi di neve
	  let fioccox = random(0, width);
	  let fioccoy = random(0, height); // Partenza alta dei fiocchi di neve
	  fill(255, 200); // Colore bianco leggermente trasparente
	  ellipse(fioccox, fioccoy, diametro, diametro);
	}
  }
  