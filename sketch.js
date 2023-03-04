const speed = 5, size = 250;

let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  rose(5, size, true);
  angle += speed;
}

function rose(petals, size, withCircle) {
  translate(width / 2, height / 2);
  noFill();

  angleMode(DEGREES);
  stroke(255, 0, 0);
  strokeWeight(2);

  if (withCircle) {
    ellipse(0, 0, 2 * size);
  }

  beginShape();
  for (let i = 0; i < angle; i += 1) {
    const r = sin(i * petals);
    const x = r * cos(i);
    const y = r * sin(i);
    vertex(x * size, y * size);
  }
  endShape();
}