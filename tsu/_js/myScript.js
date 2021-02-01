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

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
      
    }
  }