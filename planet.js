class Planet {

  constructor(r, d, o, c) {
    this.radius = r;
    this.distance = d;
    this.angle = random(TWO_PI);
    this.moons = [];
    this.orbitSpeed = o;
    this.color = c;
  }

  makeMoons(num) {
    for (let i = 0; i < num; i++) {
      const r = this.radius * random(0.2, 0.5);
      const d = random(this.radius * 1.5, this.radius * 4);
      const o = random(0.01, 0.05);
      const c = color(255, 100);
      this.moons.push(new Planet(r, d, o, c));
    }
  }

  orbit() {
    this.angle += this.orbitSpeed;
    if (this.moons.length > 0) {
      for (let moon of this.moons) moon.orbit();
    }
  }

  show() {
    push();
    rotate(this.angle);
    translate(this.distance, 0);

    fill(this.color);
    ellipse(0, 0, this.radius * 2);

    if (this.moons.length > 0) {
      for (let moon of this.moons) moon.show();
    }
    pop();
  }
}