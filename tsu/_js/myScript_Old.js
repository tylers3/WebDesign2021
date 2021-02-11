// Mr. Cozort's code 
// Let: initialize numbers, names, many things
let player;
let mouseCoords = [];

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseCoords = [e.clientX, e.clientY];
  getRandomInt 
  console.log(mouseCoords);
  player = mouseCoords[0];
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let randNum = Math.random();

console.log(randNum);

if (true) {
  alert("hello world...");
  if (randNum > mouseCoords) {
    alert("Winner winner, chicken dinner!!!");
  }
}

let drawTri = true;
let drawCir = false;

let player = prompt("rock paper or scissors");
let cpu = "paper";

// this function tests whether the player won the round
// this requires an entry from the player
// function RPS() {
//   if (player == "scissors" && cpu == "paper") {
//     drawTriangle();
//   } else if (player == "rock" && cpu == "scissors") {
//     drawCircle();
//   }
// }

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

function drawCircle() {
  //ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
d = new Date();

function main() {
  RPS();

}

// // Var or let also work. Let means it will change, const means it stays constant. 

// // let myNum = 6;
// // const myName = "Tyler";
// // alert(myNum);
// // alert(myName);
// // myNum = 2003;
// // alert(myNum);

// // alert("hello world");
// // add a canvas to the page

// // const canvas = document.getElementById('canvas');
// // const ctx = canvas.getContext('2d');

// // ctx.fillStyle = 'green';
// // ctx.fillRect(10, 10, 150, 100);

// // let myName = 'Tyler';

// // myName = 'John Cena';

// // if (myName == 'Jim'){
// //   console.log("Hello Jim");
// // }

// // let myNum=10
// // if (true){
// //   alert ("hello world");
// //   if (myNum>8){
// //     alert(":(")
// //   }
// // }

// // // p{
// //   color:red
// // }

// let drawTri = false;
// let drawCir = true;
// let drawSqu = false;

// let myNumber = math.random();

// console.log(myNumber)

// if (true){
//   alert ("sup");
//   if (myNumber > 0.5){
//     alert("WINNNNNEEEERRRR")
//   }
// }

// // Init a function to draw a triangle on the canvas
// // function drawTriangle1() {
//   if (drawTri=true){
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(0, 0);
//     ctx.lineTo(200, 0);
//     ctx.fill();
//   }
// } else{
//   alert ("nothing")
// }

// // Init a function to draw a triangle on the canvas
// // function drawTriangle2() {
// if (drawCir=true){  
// var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(0, 200);
//     ctx.lineTo(200, 200);
//     ctx.fill();
//   }
// } else{
//   alert("nothing")
// }

// // Init a function to draw a square on the canvas
// // function drawSquare() {
// if (drawSqu=true){
// var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.lineTo(200, 200);
//     ctx.lineTo(200, 200);
//     ctx.fill();
//   }
// } else (
//   alert("nothing")
// )

// // Init a funtion to draw a circle on the canvas
// // https://www.w3resource.com/javascript-exercises/javascript-drawing-exercise-2.php
// // function drawCircle() {
// if (drawCir=true){  
// var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
//     // (x,y,radius,0,2)
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#FF0000';
//     ctx.stroke();
//   }
// } else{
//   alert("nothing")
// }

// let player = prompt("rock, paper, or scissors");
// let cpu = "paper";

// function RPS(){
//   if (player=="scissors" && cpu=="paper"){
//     drawTri();
//   } else if (player=="rock" && cpu=="scissors"){
//     drawCir();
//   }
// }