var s;
var scl = 20;

var food;
//vytvoreni canvasu a spusteni procesu
function setup() {
  createCanvas(1200, 900);
  s = new Snake();
  frameRate(10);
  pickLocation();

}
//funkce na random lokaci (food)
function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

//vykresleni jidla a pozadi
function draw() {
  background(0, 50, 0, 170);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}




//funkce na zaznamenani stisku klaves
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}