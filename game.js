function setup(){
	createCanvas(800,800);
	background(200, 100, 25);
}

let x = 100;
let y = 100;
let speed = 5;

function smiley(x, y) {
    push();
    fill("yellow");
    circle(x, y, 100);
    pop();

    push();
    circle(x - 25, y - 20, 25);
    circle(x + 25, y - 20, 25);
    arc(x, y + 15, 50, 50, 0, PI, CHORD);
    pop();

    push();
    fill("black");
    circle(x - 25, y - 20, 15);
    circle(x + 25, y - 20, 15);
    pop();
}
	

function draw(){
	background(200, 100, 25);
	smiley(x, y);

	x = x + speed;

	if(x === 100 || x === 300){
		speed *= -1;
	}
}