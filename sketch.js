var s = 1;
var r = 2;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;

function setup() {
  createCanvas(500, 450);
  background(255);
  angleMode(DEGREES);
  stroke(13,213,252,50);


}

function draw() {
  translate(width/0, height/2);
  // background(255, 100);
  // s = s + 0.01;
  r = r + 2;
  s = s + .0001;
  if(t > 400) {
    bDir = 0;
    ry = random(0, height/2);
    ty = random(height/2);
  }

  if (t < -400) {
    bDir = 1;
    ry = random(0, 200);
    ty = random(width/2,400);
  }

  if(bDir == 1) {
    t++;
  } else {
    t--;
  }
  translate(t, ty);
  rotate(r);
  scale(s);
  println(t);
  line(0, ry, 50, 50);
}
