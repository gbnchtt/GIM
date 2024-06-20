let blocks = [];
let numBlocks = 6; // HH:MM:SS
let colors = ['#000000', '#FFFFFF'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(80);
    textAlign(CENTER, CENTER);

    // Initialize blocks array with alternating colors
    for (let i = 0; i < numBlocks; i++) {
        blocks.push({
            color: colors[i % colors.length],
            x: (i * width) / numBlocks + width / (numBlocks * 2),
            y: height / 2,
            size: 0,
            maxSize: 100,
            growing: true
        });
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    // Get current time
    let s = nf(second(), 2);
    let m = nf(minute(), 2);
    let h = nf(hour(), 2);
    let timeString = h + m + s;

    // Display time with brutalist blocks
    for (let i = 0; i < numBlocks; i++) {
        let char = timeString.charAt(i);
        drawBlock(blocks[i], char);
    }
}

function drawBlock(block, digit) {
    // Display the block
    fill(block.color);
    noStroke();
    rectMode(CENTER);
    rect(block.x, block.y, block.maxSize, block.maxSize);

    // Display the digit in the center of the block
    fill(block.color === '#000000' ? '#FFFFFF' : '#000000');
    text(digit, block.x, block.y);

    // Animate the block (pulsating effect)
    if (block.growing) {
        block.maxSize += 1;
        if (block.maxSize > 120) {
            block.growing = false;
        }
    } else {
        block.maxSize -= 1;
        if (block.maxSize < 80) {
            block.growing = true;
        }
    }
}

function changeColors() {
    for (let i = 0; i < numBlocks; i++) {
        blocks[i].color = random(colors);
    }
}

setInterval(changeColors, 1000); // Change colors every second
