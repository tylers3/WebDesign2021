// Test code
// Var or let also work. Let means it will change, const means it stays constant. 

// let myNum = 6;
// const myName = "Tyler";
// alert(myNum);
// alert(myName);
// myNum = 2003;
// alert(myNum);

// alert("hello world");
// add a canvas to the page

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// let myName = 'Tyler';

// myName = 'John Cena';

// if (myName == 'Jim'){
//   console.log("Hello Jim");
// }

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

// Puts the shapes on the canvas
function main() {
  drawTriangle1();
  drawTriangle2();
  drawSquare();
  drawCircle();
}