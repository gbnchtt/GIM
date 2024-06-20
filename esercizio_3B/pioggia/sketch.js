function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
	stroke(255);
  
	// Creiamo una pioggia più fine e delicata
	for (let i = 0; i < 50; i++) {
	  let lunghezza = random(10, 50); // Lunghezza delle gocce ridotta
	  let gocciax = random(0, width);
	  let gocciay = random(-lunghezza * 5, height); // Partenza più alta delle gocce
	  let spessore = random(0.5, 2); // Spessore delle gocce più sottile
	  strokeWeight(spessore);
	  line(gocciax, gocciay, gocciax, gocciay + lunghezza);
	}
  
	// Aggiungiamo una bassa probabilità di rendere lo sfondo bianco per simulare lampi
	if (random(100) < 0.1) {
	  background(255);
	}
  }
  