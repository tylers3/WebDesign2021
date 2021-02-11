// Let: initialize numbers, names, many things

let player;
let mouseCoords = [];

// gets mouse position when clicked
addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseCoords = [e.clientX, e.clientY];
  if (drawCircle.x > mouseCoords[0] && drawCircle.x + drawCircle.w < mouseCoords){
    console.log("inside")
  }
  // console.log(mouseCoords[0]);
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set choices
let choices = ["rock", "paper", "scissors"];

function randChoice(x) {
  return Math.floor(Math.random() * x);
}

let cpuChoice = randChoice(choices.length);

console.log(choices[cpuChoice]);

if (cpuChoice == 0) {
  drawCircle();
}

if (cpuChoice == 1) {
  drawSquare();
}

if (cpuChoice == 2) {
  drawTriangle1();
  drawTriangle2();
}

function RPS() {
  if (player == "scissors" && cpu == "paper") {
    drawTriangle();
  } else if (player == "rock" && cpu == "scissors") {
    drawCircle();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Init a function to draw a triangle on the canvas
function drawTriangle1() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.fill();
  }
}

// Init a function to draw a triangle on the canvas
function drawTriangle2() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(0, 200);
    ctx.lineTo(200, 200);
    ctx.fill();
  }
}

// Init a function to draw a square on the canvas
function drawSquare() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 200);
    ctx.fill();
  }
}

// Init a funtion to draw a circle on the canvas
// https://www.w3resource.com/javascript-exercises/javascript-drawing-exercise-2.php
function drawCircle() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
    // (x,y,radius,0,2)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }
}
