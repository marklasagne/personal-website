/* -----------------------------------------------
MARK LISANTI
CTD ATLS-5660
WEEK 1 ASSIGNMENT
----------------------------------------------- */ 

let circles = [];
let click_instructions = 'Click to change logo.';
let hover_instructions = 'Hover over circle to shake.';
function setup() {
  createCanvas(windowWidth, windowHeight);
  version = 3;
  //img = loadImage('/assets/week_1/logo_3.png');
  for (let i = 0; i < (version); i++) {
    circles.push(new Circle());
  }
};

function draw() {
  // if version 3 or 6, draw animate circle logos
  // else draw third unanimated shaped
  translate(width / 2, height / 2);
  background('#3e3e3e');
  noStroke();
  fill('#CFB87C');
  if(version == 3 || version == 6) {
    drawCircleLogo(version);
  } else {
    circle(0, 105, 110);
    beginShape(TESS);
    vertex(-190, 160);
    vertex(-45, -160);
    vertex(45, -160);
    vertex(190, 160);
    vertex(85, 160);
    vertex(0, -25);
    vertex(-85, 160);
    endShape(CLOSE);
  } 
  text(click_instructions, -50, 0-(height/2)+ 15);
  text(hover_instructions, -66, 0-(height/2)+ 25);
};

function drawCircleLogo(version){
  // draw positions and diameter based on version, 3 or 6
  positions = getVersionPositions(version);
  diameter = getVersionDiameter(version);
  for (let i = 0; i < circles.length; i++){ 
    circles[i].set(positions[i][0], positions[i][1], diameter);
    circles[i].display();
    // if hovering over circle, shake
    // weird hackery cause I translated everything to center in draw
    if(circles[i].hovering(-((width/2) - mouseX),-((height/2) - mouseY)) == true){
      circles[i].shake();
    }
  }
}; 

function mousePressed() {
  // if version 3 then push 3 more circles and change to version 6
  // if version 6 pop 3 and change to version 3
  if(version === 3) {
    version = 6;
    for (let i = 0; i < 3; i++) {
      circles.push(new Circle(diameter));
    }
  } else if(version === 6) {
    version = 1;
    for (let i = 0; i < 3; i++) {
      circles.pop();
    }
  } else {
    version = 3;
  }
};

function getVersionPositions(version){
  // if version 6 return array of coordinates for 6 circles
  // else return arrary of coordinates for 3 circles
  if(version == 6) {
    positions = [[0, -120], [-70, 0], [70, 0], [-140, 120], [0, 120], [140, 120]];
  } else {
    positions =  [[0, -83], [-104, 83], [104, 83]];
  }
  return positions;
};

function getVersionDiameter(version){
  // if version 6 return smaller diamter, 96
  // else return larger diameter, 168
  if(version == 6) {
    diameter = 96;
  } else {
    diameter = 168;
  }
  return diameter;
};

/* -----------------------------------------------
Class for circles
move() can be used to animate/ reposition circles
display() using the variables set from move()
----------------------------------------------- */ 
class Circle {
  set(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
  };
  hovering(x ,y) {
    let d = dist(x, y, this.x, this.y);
    /* console.log('mouse position ' + mouse_x + '-' + mouse_y);
    console.log('circle position ' + this.x + '-' + this.y);
    console.log('distance' + dist(mouseX, mouseY, this.x, this.y))
    console.log(this.diameter/2) */
    if(d < (this.diameter/2)){
      return true;
    } else {
      return false;
    }
  }
  shake() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
    ellipse(this.x, this.y, this.diameter);
  }
  display() {
    ellipse(this.x, this.y, this.diameter);
  }
};








