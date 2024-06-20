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
}
