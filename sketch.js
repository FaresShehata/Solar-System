let angle = 0;
let sun;

function setup() {
	createCanvas(600, 600);
	sun = new Planet(75, 0, 0, color(255, 200, 0, 100));
	sun.makeMoons(5);
	sun.moons[0].makeMoons(1);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);

	sun.show();
	sun.orbit();

	angle += 0.02;
}