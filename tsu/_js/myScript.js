// // Let: initialize numbers, names, many things
// // Numbers or strings
// FIX THE INSIDE/OUTSIDE CONSOLE MESSAGE

// let player;
// let mouseCoords = [];

// // gets mouse position when clicked
// addEventListener('mousedown', mouseClick);

// function mouseClick(e) {
//   console.log(`
//     Screen X/Y: ${e.screenX}, ${e.screenY}
// 	Client X/Y: ${e.clientX}, ${e.clientY}`);
//   mouseCoords = [e.clientX, e.clientY];
//   console.log("circle x is " + drawCircle.x);

//   if (drawCircle.x < mouseCoords[0] && drawCircle.x + drawCircle.w < mouseCoords){
//     console.log("inside")
//   }
// }


// //initializing variables to create a canvas 
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// //set choices
// let choices = ["rock", "paper", "scissors"];

// function randChoice(x) {
//   return Math.floor(Math.random() * x);
// }

// let cpuChoice = randChoice(choices.length);

// console.log(choices[cpuChoice]);

// if (cpuChoice == 0) {
//   drawCircle();
// }

// if (cpuChoice == 1) {
//   drawSquare();
// }

// if (cpuChoice == 2) {
//   drawTriangle1();
//   drawTriangle2();
// }

// function RPS() {
//   if (player == "scissors" && cpu == "paper") {
//     drawTriangle();
//   } else if (player == "rock" && cpu == "scissors") {
//     drawCircle();
//   }
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// // Init a function to draw a triangle on the canvas
// function drawTriangle1() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(0, 0);
//     ctx.lineTo(200, 0);
//     ctx.fill();
//   }
// }

// // Init a function to draw a triangle on the canvas
// function drawTriangle2() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(0, 200);
//     ctx.lineTo(200, 200);
//     ctx.fill();
//   }
// }

// // Init a function to draw a square on the canvas
// function drawSquare() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.lineTo(200, 200);
//     ctx.lineTo(200, 200);
//     ctx.fill();
//   }
// }

// // Init a funtion to draw a circle on the canvas
// // https://www.w3resource.com/javascript-exercises/javascript-drawing-exercise-2.php
// function drawCircle() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
//     // (x,y,radius,0,2)
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#FF0000';
//     ctx.stroke();
//   }
// }

// Mr. Cozort's code
// let's write a program that creates rock paper scissors logic using circle, square, triangle
//global variables

let mouseCoords = [];
let player = {
  name: "",
  choice: "",
}

player.name = prompt("Give me your name...");
alert("Welcome " + player.name + "." + " Would you like to play a game?")

// welcome to objects....
var myCircle = {
  x: 150,
  y: 75,
  r: 50,
};

var mySquare = {
  x: 150,
  y: 75,
  w: 50,
  h: 50,
}

// gets mouse position when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseCoords = [e.clientX, e.clientY];
  console.log("circle x is " + myCircle.x);

  if (myCircle.x - myCircle.r < mouseCoords[0] &&
    mouseCoords[0] < myCircle.x + myCircle.r &&
    myCircle.y - myCircle.r < mouseCoords[1] &&
    mouseCoords[1] < myCircle.y + myCircle.r
  ) {
    player.choice = "rock"
    console.log("inside");

  } else {
    console.log("outside");
  }
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set choices
let choices = ["rock", "paper", "scissors"];

function randChoice(x) {
  return Math.floor(Math.random() * x);
}

let cpuChoice = 0;
// let cpuChoice = randChoice(choices.length);

function cpuChoice() {
  return choices[randChoice(choices.length)];
}
// let cpuChoice = choices[randChoice(choices.length)];

console.log(choices[cpuChoice]);

function winner() {
  if (player.choice == "rock" && cpuChoice() == "scissor") {
    console.log("winner")
  } else {
    console.log("looser")
  }
}

//init a function to draw a triangle on the canvas
function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

function drawSquare() {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}



console.log(myCircle.x);

function drawCircle() {
  //ctx.beginPath();
  ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
  ctx.stroke();
}
drawCircle();

function main() {}

main();