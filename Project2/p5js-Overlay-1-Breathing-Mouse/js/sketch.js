document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let r = 2;
let speed = 0.15;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
  noStroke();
  fill(0);
  stroke(255)
}

function draw() {
  clear()
  r += speed;
  if (r > 30){
  speed = -speed; 
  } else if (r < 2){ 
    speed = -speed; 
  }
  
  circle(mouseX,mouseY,r);
  
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
}