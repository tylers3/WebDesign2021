//initializing GLOBAL variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let WIDTH = 768;
let HEIGHT = 768;
let GRAVITY = 9.8;
let SCORE = 0;
let paused = false;

//walls
let walls = [];

//array for mobs/enemies
let mobs1 = [];
let mobs2 = [];

// lets us know if game is initialized
let initialized = false;

// setup mouse position variables
let mouseX = 0;
let mouseY = 0;

// object setting mousePos
let mousePos = {
  x: 0,
  y: 0
};

let mouseClicks = {
  x: 0,
  y: 0
};

let mouseClickX = 0;
let mouseClickY = 0;

// Gametemplate
function mouseCollide(obj) {
  if (mouseClickX <= obj.x + obj.w &&
    obj.x <= mouseClickX &&
    mouseClickY <= obj.y + obj.h &&
    obj.y <= mouseClickY
  ) {
    return true;
  }
}

//**************** Initialize game function *****************

function init() {
  // create a new div element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // and give it some content
  canvas = document.createElement('canvas');
  // add the text node to the newly created div
  canvasDiv.appendChild(canvas);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.getElementById("chuck").style.width = canvas.width + 'px';
  document.getElementById("chuck").style.height = canvas.height + 'px';
  ctx = canvas.getContext('2d');
  initialized = true;
}

//************************ ALL GAME CLASSES *********
class Sprite {
  constructor(w, h, x, y, c) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.color = c;
    this.spliced = false;
  }
}

class Mob extends Sprite {
  constructor(w, h, x, y, c, vx, vy) {
    super(w, h, x, y, c);
    this.vx = vx;
    this.vy = vy;
    this.type = "normal";
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (!this.inbounds()) {
      if (this.x < 0 || this.x > WIDTH) {
        this.vx *= -1;
      }
      if (this.y < 0 || this.y > HEIGHT) {
        this.vy *= -1;
      }
    }
    // This: any object that is passed as a parameter. 
    if (mouseCollide(this)) {
      this.spliced = true
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}
class Wall extends Sprite {
  constructor(w, h, x, y, c) {
    super(w, h, x, y, c);
    this.type = "normal";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}

// adds two different sets of mobs to the mobs array
for (i = 0; i < 10; i++) {
  mobs1.push(new Mob(60, 60, 200, 100, 'pink', Math.random() * -2, Math.random() * -2));
}

// ####################### Callback #######################
// gets mouse position when clicked
addEventListener('mousemove', function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  mousePos = {
    x: mouseX,
    y: mouseY
  };
});

// gets mouse position when clicked
addEventListener('mousedown', function (e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseClickX = e.clientX;
  mouseClickY = e.clientY;
  mouseClicks = {
    x: mouseClickX,
    y: mouseClickY
  };
});

addEventListener('mouseup', e=> {
  mouseClickX = null;
  mouseClickY = null;
})

// draws text on canvas
function drawText(color, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// ############### updates all elements on canvas ################
function update() {
  //updates all mobs in a group
  for (let m of mobs1) {
    m.update();
    if (mouseClickX && mouseClickY == this.x && this.y) {
      SCORE++;
      m.spliced = true;
    }
  }
  for (let m of mobs2) {
    m.update();
    if (player.collide(m)) {
      m.spliced = true;
    }
  }
  for (let m in mobs1) {
    if (mobs1[m].spliced) {
      mobs1.splice(m, 1);
    }
  }
}

// draws all the stuff on the canvas that you want to draw
function draw() {
  // clears the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "Points: " + SCORE, 600, 0);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 400, 0);
  drawText('black', "24px Helvetica", "left", "top", "mousepos: " + mouseX + " " + mouseY, 0, 0);
  drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);

  for (let w of walls) {
    w.draw();
  }
  for (let m of mobs1) {
    m.draw();
  }
  for (let m of mobs2) {
    m.draw();
  }
}

// // Timer
// // https://www.w3schools.com/howto/howto_js_countdown.asp
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

// set variables necessary for game loop
let fps;
let now;
let delta;
let then = performance.now();

//main game loop
function main() {
  now = performance.now();
  delta = now - then;
  gDelta = (Math.min(delta, 17));
  fps = Math.ceil(1000 / gDelta);
  if (initialized) {
    // if (!paused) {
    //   update(gDelta);
    // }
    draw();
  }
  then = now;
  requestAnimationFrame(main);
}